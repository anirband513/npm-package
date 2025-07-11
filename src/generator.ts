import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import Mustache from 'mustache';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface ProjectConfig {
  name: string;
  template: string;
  features: string[];
  packageManager: 'npm' | 'yarn' | 'pnpm';
  language: 'typescript' | 'javascript';
}

export interface TemplateData {
  projectName: string;
  hasScss: boolean;
  hasAntd: boolean;
  hasTailwind: boolean;
  hasRedux: boolean;
  hasRouter: boolean;
  hasAxios: boolean;
  hasReactHookForm: boolean;
  hasReactQuery: boolean;
  hasFramerMotion: boolean;
  hasDayjs: boolean;
  hasLodash: boolean;
  hasLinting: boolean;
  hasGitHooks: boolean;
  hasVitest: boolean;
  hasStorybook: boolean;
  isTypeScript: boolean;
  packageManager: string;
  // Style objects for JSX - Home page
  headerTitleStyle: string;
  headerStyle: string;
  headerContentStyle: string;
  menuStyle: string;
  contentStyle: string;
  footerStyle: string;
  containerStyle: string;
  cardStyle: string;
  cardExampleStyle: string;
  heroCardStyle: string;
  heroContentStyle: string;
  heroTitleStyle: string;
  heroParagraphStyle: string;
  sectionStyle: string;
  sectionTitleStyle: string;
  statisticValueStyle: string;
  fullWidthStyle: string;
  tagContainerStyle: string;
  techItemStyle: string;
  // Progress styles for Tailwind
  progressStyle75: string;
  progressStyle100: string;
  // Plain styles for non-framework designs
  plainContainerStyle: string;
  plainHeroStyle: string;
  plainH1Style: string;
  plainPStyle: string;
  plainButtonContainerStyle: string;
  plainButtonStyle: string;
  plainLinkStyle: string;
  plainGridStyle: string;
  plainCardStyle: string;
  plainCounterStyle: string;
  plainUserStyle: string;
  // About page styles
  aboutHeroStyle: string;
  aboutHeroContentStyle: string;
  aboutTitleStyle: string;
  aboutParagraphStyle: string;
  featureIconStyle: string;
  featureTitleStyle: string;
  featureDescStyle: string;
  // Form styles
  formStyle: string;
  formGroupStyle: string;
  inputStyle: string;
  textareaStyle: string;
  errorStyle: string;
  // Plain About styles
  plainAboutContainerStyle: string;
  plainAboutHeroStyle: string;
  plainAboutH1Style: string;
  plainAboutPStyle: string;
  plainAboutButtonContainerStyle: string;
  plainAboutButtonStyle: string;
  plainAboutButton2Style: string;
  plainAboutGridStyle: string;
  plainAboutCardStyle: string;
  plainAboutIconStyle: string;
  // Ant Design theme config
  antdThemeConfig: string;
}

const dependencies = {
  base: {
    react: '^18.3.1',
    'react-dom': '^18.3.1',
  },
  scss: {
    sass: '^1.89.2',
  },
  antd: {
    antd: '^5.26.2',
    '@ant-design/icons': '^6.0.0',
  },
  tailwind: {
    tailwindcss: '^3.4.0',
    autoprefixer: '^10.4.16',
    postcss: '^8.4.32',
  },
  redux: {
    '@reduxjs/toolkit': '^2.2.0',
    'react-redux': '^9.1.0',
  },
  router: {
    'react-router-dom': '^7.6.2',
  },
  axios: {
    axios: '^1.10.0',
  },
  'react-hook-form': {
    'react-hook-form': '^7.49.0',
  },
  'react-query': {
    '@tanstack/react-query': '^5.17.0',
    '@tanstack/react-query-devtools': '^5.17.0',
  },
  'framer-motion': {
    'framer-motion': '^11.0.0',
  },
  dayjs: {
    dayjs: '^1.11.10',
  },
  lodash: {
    lodash: '^4.17.21',
  },
};

const devDependencies = {
  base: {
    vite: '^5.4.19',
    '@vitejs/plugin-react': '^4.3.2',
  },
  typescript: {
    typescript: '^5.6.3',
    '@types/react': '^19.1.8',
    '@types/react-dom': '^19.1.6',
  },
  tailwind: {
    '@tailwindcss/typography': '^0.5.10',
    '@tailwindcss/forms': '^0.5.7',
  },
  lodash: {
    '@types/lodash': '^4.14.202',
  },
  linting: {
    eslint: '^9.29.0',
    '@eslint/js': '^9.29.0',
    'typescript-eslint': '^8.34.1',
    'eslint-plugin-react-hooks': '^5.2.0',
    'eslint-plugin-react-refresh': '^0.4.20',
    prettier: '^3.1.1',
    'eslint-config-prettier': '^9.1.0',
    'eslint-plugin-prettier': '^5.1.2',
  },
  'git-hooks': {
    husky: '^9.0.0',
    'lint-staged': '^15.2.0',
  },
  vitest: {
    vitest: '^1.2.0',
    '@testing-library/react': '^14.1.2',
    '@testing-library/jest-dom': '^6.2.0',
    '@testing-library/user-event': '^14.5.2',
    jsdom: '^24.0.0',
  },
  storybook: {
    '@storybook/react': '^7.6.7',
    '@storybook/react-vite': '^7.6.7',
    '@storybook/addon-essentials': '^7.6.7',
    '@storybook/addon-interactions': '^7.6.7',
    '@storybook/addon-links': '^7.6.7',
    '@storybook/blocks': '^7.6.7',
    '@storybook/testing-library': '^0.2.2',
  },
};

export function generateTemplateData(config: ProjectConfig): TemplateData {
  return {
    projectName: config.name,
    hasScss: config.features.includes('scss'),
    hasAntd: config.features.includes('antd'),
    hasTailwind: config.features.includes('tailwind'),
    hasRedux: config.features.includes('redux'),
    hasRouter: config.features.includes('router'),
    hasAxios: config.features.includes('axios'),
    hasReactHookForm: config.features.includes('react-hook-form'),
    hasReactQuery: config.features.includes('react-query'),
    hasFramerMotion: config.features.includes('framer-motion'),
    hasDayjs: config.features.includes('dayjs'),
    hasLodash: config.features.includes('lodash'),
    hasLinting: config.features.includes('linting'),
    hasGitHooks: config.features.includes('git-hooks'),
    hasVitest: config.features.includes('vitest'),
    hasStorybook: config.features.includes('storybook'),
    isTypeScript: config.language === 'typescript',
    packageManager: config.packageManager,
    // Style objects for JSX - Home page
    headerTitleStyle: "{{ color: 'white', margin: 0 }}",
    headerStyle: "{{ background: 'linear-gradient(135deg, #1677ff, #69c0ff)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}",
    headerContentStyle: "{{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}",
    menuStyle: "{{ backgroundColor: 'transparent', border: 'none', flex: 1, justifyContent: 'flex-end' }}",
    contentStyle: "{{ padding: '50px' }}",
    footerStyle: "{{ textAlign: 'center' }}",
    containerStyle: "{{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}",
    cardStyle: "{{ marginBottom: 24 }}",
    cardExampleStyle: "{{ marginBottom: 24 }}",
    heroCardStyle: "{{ marginBottom: 32, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none' }}",
    heroContentStyle: "{{ textAlign: 'center', padding: '40px 20px' }}",
    heroTitleStyle: "{{ color: 'white', margin: '0 0 16px 0' }}",
    heroParagraphStyle: "{{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '18px', marginBottom: '32px' }}",
    sectionStyle: "{{ marginTop: 32 }}",
    sectionTitleStyle: "{{ marginBottom: 24, textAlign: 'center' }}",
    statisticValueStyle: "{{ color: '#1677ff' }}",
    fullWidthStyle: "{{ width: '100%' }}",
    tagContainerStyle: "{{ marginTop: 8 }}",
    techItemStyle: "{{ textAlign: 'center', padding: '16px' }}",
    // Progress styles for Tailwind
    progressStyle75: "{{ width: '75%' }}",
    progressStyle100: "{{ width: '100%' }}",
    // Plain styles for non-framework designs
    plainContainerStyle: "{{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}",
    plainHeroStyle: "{{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '40px', borderRadius: '8px', marginBottom: '32px', textAlign: 'center' }}",
    plainH1Style: "{{ fontSize: '2.5rem', marginBottom: '16px' }}",
    plainPStyle: "{{ fontSize: '1.2rem', marginBottom: '24px' }}",
    plainButtonContainerStyle: "{{ display: 'flex', gap: '16px', justifyContent: 'center' }}",
    plainButtonStyle: "{{ padding: '12px 24px', backgroundColor: '#1677ff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}",
    plainLinkStyle: "{{ padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', textDecoration: 'none', borderRadius: '6px' }}",
    plainGridStyle: "{{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '32px' }}",
    plainCardStyle: "{{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}",
    plainCounterStyle: "{{ fontSize: '2rem', fontWeight: 'bold', color: '#1677ff', margin: '16px 0' }}",
    plainUserStyle: "{{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '4px', marginBottom: '8px' }}",
    // About page styles
    aboutHeroStyle: "{{ marginBottom: 32, background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)', border: 'none' }}",
    aboutHeroContentStyle: "{{ textAlign: 'center', padding: '40px 20px' }}",
    aboutTitleStyle: "{{ color: 'white', margin: '0 0 16px 0' }}",
    aboutParagraphStyle: "{{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '18px', marginBottom: '32px' }}",
    featureIconStyle: "{{ fontSize: '32px', textAlign: 'center', marginBottom: '12px' }}",
    featureTitleStyle: "{{ marginBottom: '8px', textAlign: 'center' }}",
    featureDescStyle: "{{ marginBottom: 0, textAlign: 'center', fontSize: '14px' }}",
    // Form styles
    formStyle: "{{ width: '100%' }}",
    formGroupStyle: "{{ marginBottom: '16px' }}",
    inputStyle: "{{ width: '100%', padding: '8px 12px', border: '1px solid #d9d9d9', borderRadius: '4px' }}",
    textareaStyle: "{{ width: '100%', padding: '8px 12px', border: '1px solid #d9d9d9', borderRadius: '4px', minHeight: '100px' }}",
    errorStyle: "{{ color: '#ff4d4f', fontSize: '12px' }}",
    // Plain About styles
    plainAboutContainerStyle: "{{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}",
    plainAboutHeroStyle: "{{ background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)', color: 'white', padding: '40px', borderRadius: '8px', marginBottom: '32px', textAlign: 'center' }}",
    plainAboutH1Style: "{{ fontSize: '2.5rem', marginBottom: '16px' }}",
    plainAboutPStyle: "{{ fontSize: '1.2rem', marginBottom: '24px' }}",
    plainAboutButtonContainerStyle: "{{ display: 'flex', gap: '16px', justifyContent: 'center' }}",
    plainAboutButtonStyle: "{{ padding: '12px 24px', backgroundColor: '#1677ff', color: 'white', textDecoration: 'none', borderRadius: '6px' }}",
    plainAboutButton2Style: "{{ padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}",
    plainAboutGridStyle: "{{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '32px' }}",
    plainAboutCardStyle: "{{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}",
    plainAboutIconStyle: "{{ fontSize: '2rem', marginBottom: '16px' }}",
    // Ant Design theme config
    antdThemeConfig: `{{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
          colorInfo: '#1677ff',
          borderRadius: 6,
        },
      }}`,
  };
}

export function generatePackageJson(config: ProjectConfig): object {
  const templateData = generateTemplateData(config);
  
  const pkg: any = {
    name: config.name,
    private: true,
    version: '0.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: templateData.isTypeScript ? 'tsc -b && vite build' : 'vite build',
      preview: 'vite preview',
    },
    dependencies: {
      ...dependencies.base,
    },
    devDependencies: {
      ...devDependencies.base,
    },
  };

  // Add TypeScript dependencies
  if (templateData.isTypeScript) {
    Object.assign(pkg.devDependencies, devDependencies.typescript);
  }

  // Add feature dependencies
  config.features.forEach((feature) => {
    if (dependencies[feature as keyof typeof dependencies]) {
      Object.assign(pkg.dependencies, dependencies[feature as keyof typeof dependencies]);
    }
    if (devDependencies[feature as keyof typeof devDependencies]) {
      Object.assign(pkg.devDependencies, devDependencies[feature as keyof typeof devDependencies]);
    }
  });

  // Add feature-specific scripts
  if (templateData.hasLinting) {
    Object.assign(pkg.scripts, {
      lint: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
      'lint:fix': 'eslint . --ext ts,tsx --fix',
      format: 'prettier --write "src/**/*.{ts,tsx,js,jsx,json,css,md}"',
    });
  }

  if (templateData.hasVitest) {
    Object.assign(pkg.scripts, {
      test: 'vitest',
      'test:ui': 'vitest --ui',
      'test:coverage': 'vitest --coverage',
    });
  }

  if (templateData.hasStorybook) {
    Object.assign(pkg.scripts, {
      storybook: 'storybook dev -p 6006',
      'build-storybook': 'storybook build',
    });
  }

  return pkg;
}

export async function createProject(config: ProjectConfig, projectPath: string): Promise<void> {
  const templateData = generateTemplateData(config);
  const templatesDir = path.resolve(__dirname, '..', 'templates');
  
  // Create project directory
  await fs.ensureDir(projectPath);
  
  // Generate package.json
  const packageJson = generatePackageJson(config);
  await fs.writeJson(path.join(projectPath, 'package.json'), packageJson, { spaces: 2 });
  
  // Copy and process template files
  await copyTemplateFiles(templatesDir, projectPath, templateData, config);
  
  // Generate configuration files
  await generateConfigFiles(projectPath, templateData);
}

async function copyTemplateFiles(
  templatesDir: string,
  projectPath: string,
  templateData: TemplateData,
  config: ProjectConfig
): Promise<void> {
  const baseTemplateDir = path.join(templatesDir, 'base');
  const templateSpecificDir = path.join(templatesDir, config.template);
  
  // Copy base template files
  if (await fs.pathExists(baseTemplateDir)) {
    await copyAndProcessTemplate(baseTemplateDir, projectPath, templateData);
  }
  
  // Copy template-specific files
  if (await fs.pathExists(templateSpecificDir)) {
    await copyAndProcessTemplate(templateSpecificDir, projectPath, templateData);
  }
}

async function copyAndProcessTemplate(
  sourceDir: string,
  targetDir: string,
  templateData: TemplateData
): Promise<void> {
  const files = await fs.readdir(sourceDir, { withFileTypes: true });
  
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file.name);
    const targetPath = path.join(targetDir, file.name);
    
    if (file.isDirectory()) {
      await fs.ensureDir(targetPath);
      await copyAndProcessTemplate(sourcePath, targetPath, templateData);
    } else {
      if (file.name.endsWith('.mustache')) {
        // Process mustache template
        const template = await fs.readFile(sourcePath, 'utf-8');
        const rendered = Mustache.render(template, templateData);
        const finalPath = targetPath.replace('.mustache', '');
        await fs.writeFile(finalPath, rendered);
      } else {
        // Copy file as-is
        await fs.copy(sourcePath, targetPath);
      }
    }
  }
}

async function generateConfigFiles(projectPath: string, templateData: TemplateData): Promise<void> {
  // Generate Vite config
  await generateViteConfig(projectPath, templateData);
  
  // Generate TypeScript configs
  if (templateData.isTypeScript) {
    await generateTsConfig(projectPath, templateData);
  }
  
  // Generate ESLint config
  if (templateData.hasLinting) {
    await generateEslintConfig(projectPath, templateData);
    await generatePrettierConfig(projectPath);
  }
  
  // Generate Tailwind config
  if (templateData.hasTailwind) {
    await generateTailwindConfig(projectPath);
  }
  
  // Generate other configs
  await generateGitignore(projectPath);
  await generateReadme(projectPath, templateData);
  await generateEnvFiles(projectPath, templateData);
}

async function generateViteConfig(projectPath: string, templateData: TemplateData): Promise<void> {
  const ext = templateData.isTypeScript ? 'ts' : 'js';
  const imports = [
    'import { defineConfig, loadEnv } from \'vite\'',
    'import react from \'@vitejs/plugin-react\'',
    'import path from \'path\''
  ];
  
  const plugins = ['react()'];
  
  const config = `${imports.join('\n')}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const vite_env = loadEnv(mode, process.cwd());
  return {
    base: vite_env.VITE_APP_LINK_TO_PATH || './',
    plugins: [${plugins.join(', ')}],${templateData.hasScss || templateData.hasTailwind ? `
    css: {
      preprocessorOptions: {${templateData.hasScss ? `
        scss: {
          api: 'modern-compiler' // Use modern Sass API instead of legacy
        }${templateData.hasTailwind ? ',' : ''}` : ''}
      }${templateData.hasTailwind ? `,
      postcss: './postcss.config.js'` : ''}
    },` : ''}
    build: {
      outDir: path.resolve(__dirname, \`dist/\${vite_env.VITE_APP_BUILD_DIR || 'build'}\`),
    },
  };
});`;

  await fs.writeFile(path.join(projectPath, `vite.config.${ext}`), config);
}

async function generateTsConfig(projectPath: string, templateData: TemplateData): Promise<void> {
  const tsconfig = {
    compilerOptions: {
      target: 'ES2022',
      useDefineForClassFields: true,
      lib: ['ES2022', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      moduleResolution: 'bundler',
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'react-jsx',
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true,
    },
    include: ['src'],
    references: [{ path: './tsconfig.node.json' }],
  };

  const tsconfigNode = {
    compilerOptions: {
      composite: true,
      skipLibCheck: true,
      module: 'ESNext',
      moduleResolution: 'bundler',
      allowSyntheticDefaultImports: true,
    },
    include: ['vite.config.ts'],
  };

  await fs.writeJson(path.join(projectPath, 'tsconfig.json'), tsconfig, { spaces: 2 });
  await fs.writeJson(path.join(projectPath, 'tsconfig.node.json'), tsconfigNode, { spaces: 2 });
}

async function generateEslintConfig(projectPath: string, templateData: TemplateData): Promise<void> {
  const config = `import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ${templateData.isTypeScript ? '...tseslint.configs.recommended,' : ''}
      prettier,
    ],
    files: ['**/*.{${templateData.isTypeScript ? 'ts,tsx' : 'js,jsx'}}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)`;

  await fs.writeFile(path.join(projectPath, 'eslint.config.js'), config);
}

async function generatePrettierConfig(projectPath: string): Promise<void> {
  const config = {
    semi: true,
    trailingComma: 'es5',
    singleQuote: true,
    printWidth: 80,
    tabWidth: 2,
  };

  await fs.writeJson(path.join(projectPath, '.prettierrc'), config, { spaces: 2 });
}

async function generateTailwindConfig(projectPath: string): Promise<void> {
  const config = `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

  const postcss = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

  await fs.writeFile(path.join(projectPath, 'tailwind.config.js'), config);
  await fs.writeFile(path.join(projectPath, 'postcss.config.js'), postcss);
}

async function generateGitignore(projectPath: string): Promise<void> {
  const gitignore = `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?`;

  await fs.writeFile(path.join(projectPath, '.gitignore'), gitignore);
}

async function generateReadme(projectPath: string, templateData: TemplateData): Promise<void> {
  const readme = `# ${templateData.projectName}

A modern React application built with Vite, ${templateData.isTypeScript ? 'TypeScript' : 'JavaScript'}${templateData.hasAntd ? ', and Ant Design' : ''}${templateData.hasTailwind ? ', and Tailwind CSS' : ''}.

## Features

- ⚡️ Vite for fast development and building
- ⚛️ React 18 with modern hooks
${templateData.isTypeScript ? '- 🔷 TypeScript for better developer experience' : ''}
${templateData.hasAntd ? '- 🎨 Ant Design for beautiful UI components' : ''}
${templateData.hasTailwind ? '- 🎨 Tailwind CSS for utility-first styling' : ''}
${templateData.hasRedux ? '- 🔄 Redux Toolkit for state management' : ''}
${templateData.hasRouter ? '- 🧭 React Router for navigation' : ''}
${templateData.hasAxios ? '- 🌐 Axios for HTTP requests' : ''}
${templateData.hasLinting ? '- 📏 ESLint + Prettier for code quality' : ''}
${templateData.hasVitest ? '- 🧪 Vitest for testing' : ''}

## Getting Started

\`\`\`bash
# Install dependencies
${templateData.packageManager} install

# Start development server
${templateData.packageManager} run dev

# Build for production
${templateData.packageManager} run build
\`\`\`

## Available Scripts

- \`dev\` - Start development server
- \`build\` - Build for production
- \`preview\` - Preview production build
${templateData.hasLinting ? '- `lint` - Run ESLint\n- `format` - Format code with Prettier' : ''}
${templateData.hasVitest ? '- `test` - Run tests\n- `test:coverage` - Run tests with coverage' : ''}

## Project Structure

\`\`\`
src/
├── components/     # Reusable components
├── pages/         # Page components
├── hooks/         # Custom hooks
├── utils/         # Utility functions
${templateData.hasRedux ? '├── store/         # Redux store and slices' : ''}
└── types/         # TypeScript type definitions
\`\`\`

Happy coding! 🚀`;

  await fs.writeFile(path.join(projectPath, 'README.md'), readme);
}

async function generateEnvFiles(projectPath: string, templateData: TemplateData): Promise<void> {
  const envDevelopment = `# Development Environment Variables
VITE_API_BASE_URL=http://localhost:3001/api
VITE_APP_TITLE=${templateData.projectName}
VITE_APP_LINK_TO_PATH=/
VITE_APP_BUILD_DIR=build
# Add your development environment variables here
`;

  const envProduction = `# Production Environment Variables
VITE_API_BASE_URL=https://your-api-domain.com/api
VITE_APP_TITLE=${templateData.projectName}
VITE_APP_LINK_TO_PATH=/
VITE_APP_BUILD_DIR=build
# Add your production environment variables here
`;

  const envExample = `# Environment Variables Template
# Copy this file to .env.development or .env.production and fill in your values

VITE_API_BASE_URL=your_api_url_here
VITE_APP_TITLE=${templateData.projectName}
VITE_APP_LINK_TO_PATH=/
VITE_APP_BUILD_DIR=build

# Add your environment variables here
`;

  await fs.writeFile(path.join(projectPath, '.env.development'), envDevelopment);
  await fs.writeFile(path.join(projectPath, '.env.production'), envProduction);
  await fs.writeFile(path.join(projectPath, '.env.example'), envExample);
}
