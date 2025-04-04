#!/bin/bash

# Create placeholder directory if it doesn't exist
mkdir -p public/images/placeholders

# Generate gallery thumbnails (600x400)
for i in {1..12}
do
  # Create an SVG placeholder with the image number and dimensions
  cat > "public/images/placeholders/gallery-thumb-$i.svg" << EOF
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#f5f5f5"/>
  <text x="300" y="200" font-family="Arial" font-size="24" fill="#666" text-anchor="middle" dominant-baseline="middle">Gallery Image $i (600×400)</text>
</svg>
EOF

  echo "Created gallery-thumb-$i.svg"
done

# Generate gallery full images (1200x800)
for i in {1..12}
do
  # Create an SVG placeholder with the image number and dimensions
  cat > "public/images/placeholders/gallery-full-$i.svg" << EOF
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="800" fill="#f0f0f0"/>
  <text x="600" y="400" font-family="Arial" font-size="36" fill="#666" text-anchor="middle" dominant-baseline="middle">Gallery Image $i (1200×800)</text>
</svg>
EOF

  echo "Created gallery-full-$i.svg"
done

# Create hero image placeholder
cat > "public/images/placeholders/hero-bg.svg" << EOF
<svg width="1920" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#333333;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1920" height="800" fill="url(#grad)"/>
  <text x="960" y="400" font-family="Arial" font-size="48" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">Hero Background (1920×800)</text>
</svg>
EOF

echo "Created hero-bg.svg"

# Create about image placeholder
cat > "public/images/placeholders/about-image.svg" << EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f5f5f5"/>
  <text x="400" y="300" font-family="Arial" font-size="36" fill="#666" text-anchor="middle" dominant-baseline="middle">About Image (800×600)</text>
</svg>
EOF

echo "Created about-image.svg"

# Create OG image placeholder
cat > "public/images/placeholders/ultika-og-image.svg" << EOF
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <text x="600" y="315" font-family="Arial" font-size="48" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">Ultika OG Image (1200×630)</text>
</svg>
EOF

echo "Created ultika-og-image.svg"

echo "All placeholder images have been created successfully!"