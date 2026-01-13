#!/bin/bash
# Fetch celebrity images from Wikimedia Commons using proper API

cd "$(dirname "$0")/.."
DEST="public/images/celebrities"
mkdir -p "$DEST"

# Use Wikimedia API to get proper image URLs
USER_AGENT="ChopplegangerBot/1.0 (https://choppleganger.com; educational project)"

echo "Fetching celebrity images..."

# Function to download using Wikimedia API
download_wiki_image() {
    local title="$1"
    local output="$2"

    # Get the image URL from Wikimedia API
    local api_url="https://en.wikipedia.org/w/api.php?action=query&titles=File:${title}&prop=imageinfo&iiprop=url&format=json"

    local image_url=$(curl -s -A "$USER_AGENT" "$api_url" | grep -o '"url":"[^"]*"' | head -1 | cut -d'"' -f4)

    if [ -n "$image_url" ]; then
        curl -s -A "$USER_AGENT" -L "$image_url" -o "$output"
        echo "✓ Downloaded: $(basename $output)"
    else
        echo "✗ Failed: $title"
    fi
    sleep 1
}

# Download celebrity images
download_wiki_image "Nicolas_Cage_2011_CC.jpg" "$DEST/nicolas-cage.jpg"
download_wiki_image "Steve_Buscemi_2009_portrait.jpg" "$DEST/steve-buscemi.jpg"
download_wiki_image "Renée_Zellweger_(2016)_cropped.jpg" "$DEST/renee-zellweger.jpg"
download_wiki_image "Gary_Busey_2007.jpg" "$DEST/gary-busey.jpg"
download_wiki_image "Cher_in_2019_cropped.jpg" "$DEST/cher.jpg"
download_wiki_image "Adam_Driver_by_Gage_Skidmore.jpg" "$DEST/adam-driver.jpg"

echo "Done!"
