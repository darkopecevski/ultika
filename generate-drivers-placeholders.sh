#!/bin/bash

# Create placeholders directory if it doesn't exist
mkdir -p public/images/placeholders

# Generate driver placeholder images (300x400)
for i in {1..5}
do
  # Create an SVG placeholder with the driver number and dimensions
  cat > "public/images/placeholders/driver-$i.svg" << EOF
<svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="400" fill="#f5f5f5"/>
  <rect x="75" y="60" width="150" height="150" rx="75" fill="#e0e0e0"/>
  <path d="M150 130 Q150 160 125 180 Q100 200 150 200 Q200 200 175 180 Q150 160 150 130" fill="#d0d0d0"/>
  <circle cx="150" cy="100" r="40" fill="#d0d0d0"/>
  <text x="150" y="240" font-family="Arial" font-size="20" fill="#666" text-anchor="middle">Driver $i</text>
  <text x="150" y="270" font-family="Arial" font-size="16" fill="#888" text-anchor="middle">Profile Photo</text>
  <text x="150" y="300" font-family="Arial" font-size="16" fill="#888" text-anchor="middle">(300×400)</text>
</svg>
EOF

  echo "Created driver-$i.svg"
done

# Create a generic driver placeholder for fallback
cat > "public/images/placeholders/driver-placeholder.svg" << EOF
<svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="400" fill="#f5f5f5"/>
  <rect x="75" y="60" width="150" height="150" rx="75" fill="#e0e0e0"/>
  <path d="M150 130 Q150 160 125 180 Q100 200 150 200 Q200 200 175 180 Q150 160 150 130" fill="#d0d0d0"/>
  <circle cx="150" cy="100" r="40" fill="#d0d0d0"/>
  <text x="150" y="240" font-family="Arial" font-size="20" fill="#666" text-anchor="middle">Driver Profile</text>
  <text x="150" y="270" font-family="Arial" font-size="16" fill="#888" text-anchor="middle">Placeholder Photo</text>
  <text x="150" y="300" font-family="Arial" font-size="16" fill="#888" text-anchor="middle">(300×400)</text>
</svg>
EOF

echo "Created driver-placeholder.svg"

echo "All driver placeholder images have been created successfully!"