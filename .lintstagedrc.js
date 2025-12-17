module.exports = {
  // Type check TypeScript files
  '**/*.{ts,tsx}': () => 'npx tsc --noEmit',

  // Lint & Prettify TypeScript and JavaScript files
  '**/*.{js,jsx,ts,tsx}': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify CSS and JSON files
  '**/*.{css,json,md}': (filenames) => `npx prettier --write ${filenames.join(' ')}`,
};
