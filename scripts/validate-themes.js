#!/usr/bin/env node
/**
 * Validates that all theme JSON files are well-formed.
 * Exits with code 0 on success, 1 on validation failure.
 */

const fs = require('fs');
const path = require('path');

const themeDir = path.join(__dirname, '../themes');
const themeFiles = fs
  .readdirSync(themeDir)
  .filter((file) => file.endsWith('.json'));

let hasErrors = false;

for (const file of themeFiles) {
  const filePath = path.join(themeDir, file);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    console.log(`✓ ${file}`);
  } catch (error) {
    console.error(`✗ ${file}: ${error.message}`);
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error('\n❌ Validation failed');
  process.exit(1);
}

console.log('\n✅ All theme files are valid');
process.exit(0);
