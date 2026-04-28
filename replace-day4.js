const fs = require('fs');

// Read changes.md and convert to Day 4 format
const changesMd = fs.readFileSync('artifacts/changes.md', 'utf8');

// Extract Day 4 content (lines 3-322, skip header and first 2 lines)
const lines = changesMd.split('\n');

// Start from line 3 (Day 4 title)
let day4Content = [];
let skipLines = 2; // Skip "in day 4-" and blank line

for (let i = skipLines; i < lines.length; i++) {
  let line = lines[i];
  
  // Remove emoji prefixes from headers (lines starting with ##)
  if (line.startsWith('## ')) {
    line = line.replace(/## [🧠🔁💡🎯🧪➕🏏✏️🤔⚠️🔄🔍🛠️✅👀]+ /, '## ');
    // Also remove the day number emoji like # ⚡ Day 4
    line = line.replace(/^## [🧠🔁💡🎯🧪➕🏏✏️🤔⚠️🔄🔍🛠️✅👀]+ /, '## ');
  }
  
  // Convert ```python to '''python
  line = line.replace(/```python/g, "'''python");
  line = line.replace(/```/g, "'''");
  
  // Remove **bold** markers
  line = line.replace(/\*\*/g, '');
  
  // Remove > quotes (formatting)
  line = line.replace(/^> /g, '');
  
  // Process **text** - simple bold removal
  line = line.replace(/\*\*([^*]+)\*\*/g, '$1');
  
  // Keep the line
  day4Content.push(line);
}

let newDay4 = day4Content.join('\n');

// Prepend "# Day 4:" to the Day 4 heading
newDay4 = '# Day 4 — Making Numbers Actually Work\n\n' + newDay4;

// Now escape for JavaScript string
let escaped = newDay4
  .replace(/\\/g, '\\\\')
  .replace(/"/g, '\\"')
  .replace(/\n/g, '\\n');

// Replace '''python with escaped version  
escaped = escaped.replace(/'''python/g, "\\'\\'\\'python");
escaped = escaped.replace(/'''/g, "\\'\\'\\'");

const newEntry = `  "1-4": \"${escaped}\",`;

// Read current page.tsx and replace
let content = fs.readFileSync('src/app/kashvi/[course]/course/page.tsx', 'utf8');

// Find the "1-4" section
const day4Start = content.indexOf('"1-4":');
const day4End = content.indexOf('},', day4Start + 5) + 2;

const before = content.slice(0, day4Start);
const after = content.slice(day4End);

const newContent = before + newEntry + '\n' + after;

fs.writeFileSync('src/app/kashvi/[course]/course/page.tsx', newContent);
console.log('SUCCESS: Day 4 replaced with changes.md content');