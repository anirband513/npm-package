#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProject } from './generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

interface ProjectConfig {
  name: string;
  template: string;
  features: string[];
  packageManager: 'npm' | 'yarn' | 'pnpm';
  language: 'typescript' | 'javascript';
}

const templates = [
  { name: 'Basic React', value: 'react-basic' },
  { name: 'React with Router', value: 'react-router' },
  { name: 'React with Redux', value: 'react-redux' },
  { name: 'React Admin Dashboard', value: 'react-admin' },
  { name: 'React E-commerce', value: 'react-ecommerce' },
];

const features = [
  { name: 'SCSS/Sass', value: 'scss' },
  { name: 'Ant Design', value: 'antd' },
  { name: 'Tailwind CSS', value: 'tailwind' },
  { name: 'Redux Toolkit', value: 'redux' },
  { name: 'React Router', value: 'router' },
  { name: 'Axios', value: 'axios' },
  { name: 'React Hook Form', value: 'react-hook-form' },
  { name: 'React Query', value: 'react-query' },
  { name: 'Framer Motion', value: 'framer-motion' },
  { name: 'Day.js', value: 'dayjs' },
  { name: 'Lodash', value: 'lodash' },
  { name: 'ESLint + Prettier', value: 'linting' },
  { name: 'Husky + Lint-staged', value: 'git-hooks' },
  { name: 'Vitest', value: 'vitest' },
  { name: 'Storybook', value: 'storybook' },
];

async function promptUserForConfig(): Promise<ProjectConfig> {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
      default: 'my-vite-app',
      validate: (input) => {
        if (input.length === 0) {
          return 'Project name is required';
        }
        if (!/^[a-zA-Z0-9-_]+$/.test(input)) {
          return 'Project name can only contain letters, numbers, hyphens, and underscores';
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'language',
      message: 'Which language would you like to use?',
      choices: [
        { name: 'TypeScript', value: 'typescript' },
        { name: 'JavaScript', value: 'javascript' },
      ],
      default: 'typescript',
    },
    {
      type: 'list',
      name: 'template',
      message: 'Which template would you like to use?',
      choices: templates,
      default: 'react-basic',
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'Select additional features:',
      choices: features,
      default: ['scss', 'antd', 'axios', 'linting'],
    },
    {
      type: 'list',
      name: 'packageManager',
      message: 'Which package manager would you like to use?',
      choices: [
        { name: 'npm', value: 'npm' },
        { name: 'yarn', value: 'yarn' },
        { name: 'pnpm', value: 'pnpm' },
      ],
      default: 'npm',
    },
  ]);

  return answers;
}

program
  .name('create-vite-starter')
  .description('Generate a starter project with Vite, React, TypeScript, and various UI libraries')
  .version('1.0.0')
  .argument('[project-name]', 'name of the project')
  .option('-t, --template <template>', 'template to use')
  .option('-f, --features <features>', 'comma-separated list of features')
  .option('-p, --package-manager <pm>', 'package manager to use (npm, yarn, pnpm)', 'npm')
  .option('-l, --language <lang>', 'language to use (typescript, javascript)', 'typescript')
  .option('-y, --yes', 'skip prompts and use defaults')
  .action(async (projectName, options) => {
    console.log(chalk.cyan('🚀 Welcome to Vite Starter Generator!'));
    console.log();

    let config: ProjectConfig;

    if (options.yes && projectName) {
      config = {
        name: projectName,
        template: options.template || 'react-basic',
        features: options.features ? options.features.split(',') : ['scss', 'antd', 'axios', 'linting'],
        packageManager: options.packageManager || 'npm',
        language: options.language || 'typescript',
      };
    } else {
      config = await promptUserForConfig();
      if (projectName) {
        config.name = projectName;
      }
    }

    const projectPath = path.resolve(process.cwd(), config.name);

    if (fs.existsSync(projectPath)) {
      console.error(chalk.red(`Error: Directory ${config.name} already exists!`));
      process.exit(1);
    }

    const spinner = ora('Creating project...').start();

    try {
      await createProject(config, projectPath);
      spinner.succeed(chalk.green('Project created successfully!'));
      
      console.log();
      console.log(chalk.cyan('Next steps:'));
      console.log(chalk.white(`  cd ${config.name}`));
      console.log(chalk.white(`  ${config.packageManager} install`));
      console.log(chalk.white(`  ${config.packageManager} run dev`));
      console.log();
      console.log(chalk.green('Happy coding! 🎉'));
    } catch (error) {
      spinner.fail(chalk.red('Failed to create project'));
      console.error(error);
      process.exit(1);
    }
  });

program.parse();
