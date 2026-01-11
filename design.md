# Tavus Replica Design System

This document outlines the design tokens, typography, and effects used in this project. Use these specifications to maintain consistency across platforms (e.g., mobile app).

## Colors

### Brand Colors
- **MNT Pink**: `#FF7EB6` (Primary accent, buttons, badges)
- **MNT Pink Hover**: `#FF5CA0` (Button hover state)
- **MNT Beige**: `#F3F1E6` (Main background)
- **MNT Dark**: `#1A1A1A` (Primary text, borders)
- **MNT Muted**: `#555555` (Secondary text)

### Code / Tech Colors
- **Code Background**: `#1E1E1E` (Terminal windows)
- **Code Text**: `#00FF00` (Terminal output)

### Utility Colors
- **White**: `#FFFFFF` (Window backgrounds, cards)
- **Black**: `#000000` (Borders, shadows)

## Typography

### Font Families
1.  **Logo / Headings (Wide)**
    *   **Font**: `Archivo` (Google Font)
    *   **Weight**: ExtraBold (800) or Black (900)
    *   **Width**: 125% (Variable font axis `wdth`)
    *   **Usage**: Main "MNT" logo, heavy impact headers.

2.  **Headings (Serif)**
    *   **Font**: `Playfair Display` (Google Font)
    *   **Weight**: Regular (400)
    *   **Style**: Italic used for emphasis words.
    *   **Usage**: Section titles, hero headlines (e.g., "You've never met AI like this").

3.  **UI / Navigation / Buttons (Tech Sans)**
    *   **Font**: `Inter` (Google Font)
    *   **Weight**: Medium (500) or Bold (700)
    *   **Tracking**: Tight (`-0.02em` or `tracking-tight`)
    *   **Usage**: Navigation links, buttons, body text requiring high legibility.

4.  **Code / Data (Monospace)**
    *   **Font**: `Space Mono` (Google Font)
    *   **Weight**: Regular (400)
    *   **Usage**: Terminal text, badges, technical specs.

## Effects

### Shadows
The design uses "hard" shadows to create a brutalist, paper-cutout look. Do not use blur.

- **Default Shadow**: `4px 4px 0px 0px #000000`
- **Hover Shadow**: `2px 2px 0px 0px #000000` (Used for button press effect)

### Borders
- **Standard Border**: `1px solid #000000` (Windows, buttons, cards)

### Textures
- **Noise Overlay**: A subtle SVG noise filter is applied to the background to give it a paper-like texture.
    *   **Opacity**: 0.4
    *   **Blend Mode**: Overlay

### Dithering
- **Pixelated Images**: Images use `image-rendering: pixelated` combined with CSS filters (grayscale, contrast) to achieve a retro, dithered look.

## Layout
- **Container**: Max-width centered containers.
- **Spacing**: Generous padding (e.g., `py-24`, `px-6`).
- **Grid**: 12-column grid system for larger layouts.
