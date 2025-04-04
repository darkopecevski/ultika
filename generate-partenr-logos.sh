#!/bin/bash

# Create placeholders directory if it doesn't exist
mkdir -p public/images/placeholders

# Generate partner logo placeholders
partner_logos=(
  "partner-marriott"
  "partner-aleksandar"
  "partner-arka"
  "partner-telekom"
  "partner-banka"
  "partner-evn"
  "partner-balkan"
  "partner-macedonia"
  "partner-adriatic"
)

for logo in "${partner_logos[@]}"
do
  # Create an SVG placeholder with the partner name
  partner_name=$(echo "$logo" | sed 's/partner-//' | tr '[:lower:]' '[:upper:]')
  
  cat > "public/images/placeholders/${logo}.svg" << EOF
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" fill="#f0f0f0"/>
  <rect x="5" y="5" width="190" height="90" rx="3" fill="#fff" stroke="#ddd"/>
  <text x="100" y="45" font-family="Arial" font-weight="bold" font-size="16" fill="#333" text-anchor="middle">LOGO</text>
  <text x="100" y="65" font-family="Arial" font-size="14" fill="#666" text-anchor="middle">${partner_name}</text>
</svg>
EOF

  echo "Created ${logo}.svg"
done

echo "All partner logo placeholders have been created successfully!"