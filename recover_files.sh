#!/bin/bash

# Commit ID where files were deleted
COMMIT_ID=bf1edd39ad456e4d80e1dcc0e8a06eb6cf8628e3

# List of files to restore
FILES=(
    "pages/about.html"
    "pages/contact.html"
    "pages/events.html"
    "pages/get-involved.html"
    "pages/news.html"
    "pages/platform.html"
)

# Restore each file
for FILE in "${FILES[@]}"
do
    git checkout ${COMMIT_ID}^ -- "$FILE"
done

# Add and commit the restored files
git add "${FILES[@]}"
git commit -m "Recovered deleted files from commit ${COMMIT_ID}"
git push origin main
