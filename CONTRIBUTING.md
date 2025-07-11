# Contributing to create-vite-starter

Thank you for considering contributing to create-vite-starter! This document outlines the process for contributing to this project.

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the CLI: `npm run build:cli`
4. Test locally: `node ./dist/index.js test-project --yes`

## Project Structure

```
src/
├── index.ts        # Main CLI entry point
├── generator.ts    # Project generation logic
templates/
├── base/          # Base template files
└── [template]/    # Template-specific files
bin/
└── cli.js         # CLI binary
```

## Adding New Templates

1. Create a new directory in `templates/` with your template name
2. Add template files with `.mustache` extension for dynamic content
3. Update the templates array in `src/index.ts`
4. Update the dependencies in `src/generator.ts`

## Adding New Features

1. Add the feature to the features array in `src/index.ts`
2. Add corresponding dependencies in `src/generator.ts`
3. Update template files to conditionally include feature code
4. Test the feature with a generated project

## Testing

Test your changes by:
1. Building the CLI: `npm run build:cli`
2. Creating test projects with different configurations
3. Verifying the generated projects work correctly

## Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request with a clear description

## Code Style

- Use TypeScript
- Follow existing code patterns
- Add type annotations
- Use descriptive variable names
- Add comments for complex logic
