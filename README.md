# create-vite-starter

A powerful CLI tool to generate modern React starter projects with Vite, TypeScript, and various popular libraries.

## Features

- 🚀 **Vite** - Lightning fast development server and build tool
- ⚛️ **React 18** - Latest React with modern hooks
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **SCSS/Sass** - Enhanced CSS with variables, mixins, and modern compiler API
- 🎨 **UI Libraries** - Choose from Ant Design, Tailwind CSS, or both
- 🔄 **State Management** - Redux Toolkit integration
- 🧭 **Routing** - React Router setup
- 🌐 **HTTP Client** - Axios integration
- 🌍 **Environment Configuration** - Development and production env files
- 🏗️ **Build Configuration** - Configurable build output directory
- 📏 **Code Quality** - ESLint, Prettier, and Husky setup
- 🧪 **Testing** - Vitest and React Testing Library
- 📚 **Documentation** - Storybook integration
- 🎭 **Animation** - Framer Motion support

## Quick Start

```bash
# Using npm
npx create-vite-starter my-app

# Using yarn
yarn create vite-starter my-app

# Using pnpm
pnpm create vite-starter my-app
```

## Interactive Setup

The CLI will guide you through the setup process:

1. **Project Name** - Choose your project name
2. **Language** - TypeScript or JavaScript
3. **Template** - Select from pre-built templates
4. **Features** - Pick additional libraries and tools
5. **Package Manager** - Choose npm, yarn, or pnpm

## Available Templates

- **Basic React** - Simple React app with essential setup
- **React with Router** - React app with routing configured
- **React with Redux** - React app with Redux Toolkit
- **React Admin Dashboard** - Admin dashboard with Ant Design
- **React E-commerce** - E-commerce template with product management

## Available Features

- **SCSS/Sass** - Enhanced CSS with variables, mixins, and nesting
- **Ant Design** - Enterprise-class UI design language
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - Predictable state container
- **React Router** - Declarative routing
- **Axios** - Promise-based HTTP client
- **React Hook Form** - Performant, flexible forms
- **React Query** - Data fetching and caching
- **Framer Motion** - Motion library for React
- **Day.js** - Date library alternative to Moment.js
- **Lodash** - Utility library
- **ESLint + Prettier** - Code formatting and linting
- **Husky + Lint-staged** - Git hooks
- **Vitest** - Testing framework
- **Storybook** - Component documentation

## Command Line Options

```bash
# Skip interactive prompts
npx create-vite-starter my-app --yes

# Specify template
npx create-vite-starter my-app --template react-admin

# Add specific features
npx create-vite-starter my-app --features scss,antd,redux,router

# Choose package manager
npx create-vite-starter my-app --package-manager yarn

# Use JavaScript instead of TypeScript
npx create-vite-starter my-app --language javascript
```

## Generated Project Structure

```
my-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── store/         # Redux store (if selected)
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── package.json
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
├── eslint.config.js   # ESLint configuration
└── README.md
```

## After Generation

1. Navigate to your project directory
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Start building your amazing app! 🚀

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

## License

MIT © [anirband513](https://github.com/anirband513)
