# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.7] - 2025-01-11

### Fixed
- **Template Rendering**: Fixed Mustache template parsing conflicts with JSX style objects
- **ConfigProvider Integration**: Resolved theme configuration syntax errors in Ant Design setup
- **Template Variables**: Implemented proper unescaped content rendering with triple-brace syntax `{{{ }}}`
- **JavaScript Object Syntax**: Fixed theme configuration to render as proper JavaScript objects
- **Layout Issues**: Completely resolved "messed up UI" problems with professional styling

### Improved
- **Layout System**: Enhanced professional layout with custom CSS classes
- **Ant Design Integration**: Improved ConfigProvider theme configuration with proper object syntax
- **Error Handling**: Better error messages and debugging for template generation
- **User Experience**: Clean, modern UI with gradient headers and responsive design

## [1.0.6] - 2025-01-11

### Fixed
- **SCSS Integration**: Resolved conflicts between custom SCSS and Ant Design base styles
- **Template Compilation**: Fixed conditional SCSS compilation based on selected features
- **Style Rendering**: Improved style attribute rendering in templates

### Added
- **Custom CSS Classes**: Added professional custom classes (`.custom-app`, `.custom-header`, etc.)
- **Responsive Design**: Enhanced mobile-first responsive design patterns
- **Animation Support**: Added fade-in animations and hover effects

## [1.0.5] - 2025-01-11

### Fixed
- **Template Syntax**: Resolved Mustache template parsing issues with JSX expressions
- **Build Configuration**: Fixed Vite configuration for proper SCSS compilation
- **Dependency Management**: Corrected package installation and version management

### Improved
- **Template Engine**: Enhanced Mustache template system with better conditional logic
- **Code Generation**: Improved generated code quality and structure

## [1.0.4] - 2025-01-11

### Fixed
- **Package Import**: Fixed CLI import path from `./index.js` to `../dist/index.js`
- **Build Process**: Resolved TypeScript compilation issues
- **Module Resolution**: Fixed module resolution for Node.js environments

### Added
- **Error Handling**: Improved error handling in CLI operations
- **Logging**: Enhanced logging and user feedback during project generation

## [1.0.3] - 2025-01-11

### Fixed
- **Template Generation**: Fixed template file generation and processing
- **Feature Selection**: Resolved issues with feature-based dependency injection
- **Package Configuration**: Fixed package.json template generation

### Improved
- **User Experience**: Enhanced CLI prompts and user interaction
- **Template System**: Better template organization and management

## [1.0.2] - 2025-01-11

### Fixed
- **Repository URLs**: Corrected repository URLs in package.json
- **Package Metadata**: Fixed package description and keywords
- **CLI Configuration**: Resolved CLI binary configuration issues

### Added
- **Documentation**: Enhanced README with better examples and usage instructions
- **Package Information**: Added comprehensive package metadata

## [1.0.1] - 2025-01-11

### Fixed
- **Initial Release Issues**: Resolved initial package publication problems
- **Dependency Management**: Fixed dependency versions and compatibility
- **Template Structure**: Corrected template file organization

### Added
- **Core Features**: Basic CLI functionality with interactive prompts
- **Template System**: Initial Mustache template system implementation

## [1.0.0] - 2025-01-11

### Added
- **Initial Release**: First version of create-modern-vite-app (renamed from create-vite-starter)
- **CLI Tool**: Interactive command-line interface for project generation
- **Template System**: Mustache-based template engine with conditional rendering
- **Feature Selection**: Modular feature selection system
- **UI Framework Support**: Ant Design and Tailwind CSS integration
- **State Management**: Redux Toolkit integration
- **Routing**: React Router DOM support
- **HTTP Client**: Axios integration
- **Styling**: SCSS/Sass support with modern compiler API
- **Code Quality**: ESLint, Prettier, and Husky setup
- **Testing**: Vitest and React Testing Library integration
- **Documentation**: Storybook support
- **Animation**: Framer Motion integration
- **Package Managers**: Support for npm, yarn, and pnpm
- **TypeScript**: Full TypeScript support with proper configuration
- **Environment Configuration**: Development and production environment files
- **Build Configuration**: Configurable build output directory

### Project Templates
- **Basic React**: Simple React app with essential setup
- **React with Router**: React app with routing configured
- **React with Redux**: React app with Redux Toolkit
- **React Admin Dashboard**: Admin dashboard with Ant Design
- **React E-commerce**: E-commerce template with product management

### Available Features
- **SCSS/Sass**: Enhanced CSS with variables, mixins, and nesting
- **Ant Design**: Enterprise-class UI design language with theming
- **Tailwind CSS**: Utility-first CSS framework
- **Redux Toolkit**: Predictable state container
- **React Router**: Declarative routing
- **Axios**: Promise-based HTTP client
- **React Hook Form**: Performant, flexible forms
- **React Query**: Data fetching and caching
- **Framer Motion**: Motion library for React
- **Day.js**: Date library alternative to Moment.js
- **Lodash**: Utility library
- **ESLint + Prettier**: Code formatting and linting
- **Husky + Lint-staged**: Git hooks
- **Vitest**: Testing framework
- **Storybook**: Component documentation

### Command Line Options
- `--yes` - Skip interactive prompts
- `--template` - Specify template (e.g., "Basic React")
- `--features` - Comma-separated features (e.g., "scss,antd,redux,router")
- `--package-manager` - Choose package manager (npm, yarn, pnpm)
- `--language` - TypeScript or JavaScript

### Technical Details
- **Node.js**: Minimum version 18.x
- **React**: Version 18.x with modern hooks
- **Vite**: Version 5.x for lightning-fast development
- **TypeScript**: Version 5.x with strict mode
- **Template Engine**: Mustache 4.x with conditional rendering
- **CLI Framework**: Commander.js 12.x with Inquirer.js 10.x

## Migration Guide

### From create-vite-starter to create-modern-vite-app

If you were using the previous package name, please update your commands:

```bash
# Old
npx create-vite-starter my-app

# New
npx create-modern-vite-app@latest my-app
```

### Breaking Changes

#### v1.0.7
- Template syntax changes may require regeneration of existing projects
- ConfigProvider theme configuration now uses proper JavaScript object syntax
- Custom CSS classes have been updated for better UI framework integration

#### v1.0.0
- Package renamed from `create-vite-starter` to `create-modern-vite-app`
- Enhanced template system with better conditional rendering
- Improved Ant Design integration with professional theming

## Upgrade Instructions

### To v1.0.7
```bash
# Use the latest version
npx create-modern-vite-app@latest my-new-project

# Or specify the exact version
npx create-modern-vite-app@1.0.7 my-new-project
```

### Version Compatibility
- **Node.js**: >=18.0.0
- **npm**: >=8.0.0
- **React**: 18.x
- **TypeScript**: 5.x
- **Vite**: 5.x

## Support

For issues, bugs, or feature requests, please visit our [GitHub Issues](https://github.com/anirband513/npm-package/issues).

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.
