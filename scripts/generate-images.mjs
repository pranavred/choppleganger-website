#!/usr/bin/env node
/**
 * Image Generation Script for Choppleganger Website
 *
 * This script:
 * 1. Fetches celebrity images from Wikimedia Commons
 * 2. Generates "lookalike" images using OpenAI's image generation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

// Configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const PUBLIC_DIR = path.join(ROOT_DIR, 'public', 'images');

// Celebrity data with Wikimedia image URLs
const celebrities = [
  {
    name: 'nicolas-cage',
    displayName: 'Nicolas Cage',
    wikimediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/440px-Nicolas_Cage_2011_CC.jpg',
    lookalikePrompt: 'Portrait photo of a middle-aged man with receding hairline, intense eyes, angular face, slightly disheveled look, dramatic lighting, candid expression, looking tired or confused, casual attire, photorealistic'
  },
  {
    name: 'steve-buscemi',
    displayName: 'Steve Buscemi',
    wikimediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Steve_Buscemi_2009_portrait.jpg/440px-Steve_Buscemi_2009_portrait.jpg',
    lookalikePrompt: 'Portrait photo of a middle-aged man with distinctive large eyes, thin face, slightly crooked features, kind expression, casual look, everyday person, photorealistic, natural lighting'
  },
  {
    name: 'renee-zellweger',
    displayName: 'Renée Zellweger',
    wikimediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Ren%C3%A9e_Zellweger_%282016%29_cropped.jpg/440px-Ren%C3%A9e_Zellweger_%282016%29_cropped.jpg',
    lookalikePrompt: 'Portrait photo of a woman in her 40s with squinty eyes, round face, blonde hair, slightly awkward smile, candid moment, natural makeup, casual setting, photorealistic'
  },
  {
    name: 'gary-busey',
    displayName: 'Gary Busey',
    wikimediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gary_Busey_2007.jpg/440px-Gary_Busey_2007.jpg',
    lookalikePrompt: 'Portrait photo of an older man with wild gray hair, big toothy smile, expressive face, energetic expression, casual clothes, candid moment, photorealistic, slightly chaotic energy'
  },
  {
    name: 'cher',
    displayName: 'Cher',
    wikimediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Cher_in_2019_cropped.jpg/440px-Cher_in_2019_cropped.jpg',
    lookalikePrompt: 'Portrait photo of a woman with long dark hair, high cheekbones, dramatic features, confident expression, elegant but candid moment, photorealistic, striking appearance'
  },
  {
    name: 'adam-driver',
    displayName: 'Adam Driver',
    wikimediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Adam_Driver_by_Gage_Skidmore.jpg/440px-Adam_Driver_by_Gage_Skidmore.jpg',
    lookalikePrompt: 'Portrait photo of a tall man with long face, prominent nose, dark wavy hair, intense brooding expression, casual attire, candid moment, photorealistic, unique distinctive features'
  }
];

// Avatar prompts for testimonials
const avatarPrompts = [
  { name: 'jessica', prompt: 'Portrait photo of a young woman in her 20s, creative artsy vibe, colorful background, friendly smile, social media influencer aesthetic, photorealistic' },
  { name: 'sarah', prompt: 'Portrait photo of a woman in her 30s, professional but approachable, warm smile, natural lighting, everyday person, photorealistic' },
  { name: 'dan', prompt: 'Portrait photo of a young man in his 20s, casual hoodie, slightly nerdy, friendly expression, content creator vibe, photorealistic' },
  { name: 'marcus', prompt: 'Portrait photo of a man in his 30s, confident smile, casual professional attire, friendly and approachable, photorealistic' }
];

// Utility functions
async function ensureDirectories() {
  const dirs = ['celebrities', 'lookalikes', 'avatars'];
  for (const dir of dirs) {
    const fullPath = path.join(PUBLIC_DIR, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  }
  console.log('✓ Directories created');
}

async function downloadImage(url, filepath) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'ChopplegangerBot/1.0 (https://choppleganger.com; contact@choppleganger.com)'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    console.log(`✓ Downloaded: ${path.basename(filepath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to download ${url}: ${error.message}`);
    return false;
  }
}

async function generateImageWithOpenAI(prompt, filepath) {
  if (!OPENAI_API_KEY) {
    console.error('✗ OPENAI_API_KEY not set');
    return false;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: '1024x1024',
        quality: 'standard',
        response_format: 'b64_json'
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    const imageData = data.data[0].b64_json;
    const buffer = Buffer.from(imageData, 'base64');
    fs.writeFileSync(filepath, buffer);
    console.log(`✓ Generated: ${path.basename(filepath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to generate image: ${error.message}`);
    return false;
  }
}

async function fetchCelebrityImages() {
  console.log('\n📸 Fetching celebrity images from Wikimedia...\n');

  for (const celeb of celebrities) {
    const filepath = path.join(PUBLIC_DIR, 'celebrities', `${celeb.name}.jpg`);
    await downloadImage(celeb.wikimediaUrl, filepath);
    // Small delay to be respectful to Wikimedia
    await new Promise(r => setTimeout(r, 500));
  }
}

async function generateLookalikeImages() {
  console.log('\n🎨 Generating lookalike images with OpenAI...\n');

  for (const celeb of celebrities) {
    const filepath = path.join(PUBLIC_DIR, 'lookalikes', `${celeb.name}-lookalike.png`);
    await generateImageWithOpenAI(celeb.lookalikePrompt, filepath);
    // Delay between API calls
    await new Promise(r => setTimeout(r, 1000));
  }
}

async function generateAvatarImages() {
  console.log('\n👤 Generating avatar images with OpenAI...\n');

  for (const avatar of avatarPrompts) {
    const filepath = path.join(PUBLIC_DIR, 'avatars', `${avatar.name}.png`);
    await generateImageWithOpenAI(avatar.prompt, filepath);
    // Delay between API calls
    await new Promise(r => setTimeout(r, 1000));
  }
}

// Main execution
async function main() {
  console.log('🚀 Choppleganger Image Generation Script\n');
  console.log('='.repeat(50));

  if (!OPENAI_API_KEY) {
    console.error('\n⚠️  Warning: OPENAI_API_KEY environment variable not set.');
    console.error('   Lookalike and avatar generation will be skipped.\n');
  }

  await ensureDirectories();
  await fetchCelebrityImages();

  if (OPENAI_API_KEY) {
    await generateLookalikeImages();
    await generateAvatarImages();
  }

  console.log('\n' + '='.repeat(50));
  console.log('✨ Image generation complete!\n');
}

main().catch(console.error);
