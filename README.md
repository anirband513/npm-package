# create-modern-vite-app

A powerful CLI tool to generate modern React starter projects with Vite, TypeScript, and various popular libraries. Features professional UI integration with Ant Design, advanced SCSS support, and comprehensive template system.

## Features

- 🚀 **Vite** - Lightning fast development server and build tool
- ⚛️ **React 18** - Latest React with modern hooks
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **Modern SCSS** - Enhanced CSS with variables, mixins, and modern compiler API
- 🎨 **Ant Design** - Enterprise-class UI design with professional theming
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔄 **Redux Toolkit** - Predictable state management
- 🧭 **React Router** - Declarative routing
- 🌐 **Axios** - Promise-based HTTP client
- 🌍 **Environment Configuration** - Development and production env files
- 🏗️ **Build Configuration** - Configurable build output directory
- 📏 **Code Quality** - ESLint, Prettier, and Husky setup
- 🧪 **Testing** - Vitest and React Testing Library
- 📚 **Documentation** - Storybook integration
- 🎭 **Animation** - Framer Motion support
- 🎯 **Template System** - Advanced Mustache templating with conditional rendering
- 🔧 **Professional Layout** - Custom CSS classes and styling that complement UI frameworks

## Quick Start

```bash
# Using npm
npx create-modern-vite-app@latest my-app

# Using yarn
yarn create modern-vite-app my-app

# Using pnpm
pnpm create modern-vite-app my-app
```

## Example Usage

Create a modern React app with all features:

```bash
# Interactive setup
npx create-modern-vite-app@latest my-modern-app

# Quick setup with all features
npx create-modern-vite-app@latest my-app --template "Basic React" --features "scss,antd,redux,router,axios,linting" --yes
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
npx create-modern-vite-app@latest my-app --yes

# Specify template
npx create-modern-vite-app@latest my-app --template "React Admin Dashboard"

# Add specific features
npx create-modern-vite-app@latest my-app --features scss,antd,redux,router

# Choose package manager
npx create-modern-vite-app@latest my-app --package-manager yarn

# Use JavaScript instead of TypeScript
npx create-modern-vite-app@latest my-app --language javascript
```

## Generated Project Structure

```
my-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components (Home, About)
│   ├── store/         # Redux store (if selected)
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main App component with Layout
│   ├── main.tsx       # Application entry point with providers
│   └── index.scss     # Global styles with custom variables
├── package.json
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
├── eslint.config.js   # ESLint configuration (if selected)
└── README.md
```

## What's New in v1.0.7

- ✅ **Fixed Template Rendering** - Resolved Mustache template parsing conflicts with JSX
- ✅ **Improved Ant Design Integration** - Proper ConfigProvider theme configuration
- ✅ **Professional Layout** - Custom CSS classes that complement UI frameworks
- ✅ **Modern SCSS Support** - Conditional compilation based on selected features
- ✅ **Enhanced Styling** - Gradient headers, custom animations, and responsive design
- ✅ **Template Variables** - Advanced template system with unescaped content rendering

## After Generation

1. Navigate to your project directory
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open your browser at `http://localhost:5173`
5. Start building your amazing app! 🚀

## Version Information

- **Current Version**: 1.0.9
- **Latest Stable**: Available on npm registry
- **Node.js**: Requires Node.js 18.x or higher
- **Package Manager**: Supports npm, yarn, and pnpm

## Recent Updates (v1.0.9)

🎨 **Beautiful UI Showcase**: Complete redesign with stunning feature demonstrations  
🔥 **Interactive Demos**: Live Redux counter, API integration, and progress indicators  
📊 **Feature Cards**: Beautiful cards showcasing each selected technology  
🎯 **Technology Stack Display**: Visual representation of all included technologies  
📱 **Responsive Design**: Mobile-first design with professional layouts  
🎭 **Animations**: Smooth fade-in animations and hover effects  
🌟 **Hero Sections**: Eye-catching gradient hero sections on both pages  
📈 **Progress Bars**: Dynamic progress indicators and status badges  
🔗 **Enhanced Navigation**: Professional navigation with icons and active states  
📝 **Sample Data**: Real API integration with JSONPlaceholder for demonstrations  

## What You Get

When you create a project with `create-modern-vite-app`, you don't just get a basic template - you get a **comprehensive showcase** of modern web development:

### 🎨 **Beautiful Demo Pages**
- **Home Page**: Hero section, interactive feature demos, technology stack showcase
- **About Page**: Project information, setup timeline, feature descriptions
- **Professional Navigation**: Menu with icons, active states, and smooth transitions

### 🔥 **Interactive Features**
- **Redux Counter**: Live state management demonstration with increment/decrement/reset
- **API Integration**: Real-time data fetching from external APIs with loading states
- **Progress Indicators**: Dynamic progress bars and status badges
- **Responsive Cards**: Beautiful feature cards with hover effects and animations

### 🎯 **Smart Template System**
- **Conditional Rendering**: Only shows features you've selected
- **Framework-Specific Styling**: Ant Design, Tailwind CSS, or plain CSS styling
- **50+ Style Variables**: Consistent theming across all components
- **Professional Layouts**: Enterprise-grade UI patterns and designs  

## Troubleshooting

### Common Issues

**Template rendering errors**: 
```bash
# Always use the latest version
npx create-modern-vite-app@latest my-app
```

**Style conflicts**: 
The package now includes professional styling that complements UI frameworks rather than conflicting with them.

**Build issues**: 
All templates are pre-tested and verified to work with the latest dependencies.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

## License

MIT © [anirband513](https://github.com/anirband513)
