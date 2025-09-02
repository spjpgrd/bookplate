![Bookplate - A timeless way to build websites](/assets/spjpgrd-bookplate.jpg)

# Bookplate
A timeless way to build websites. For the thoughtful artist.

## Setup Guide

1. **Clone the repository**

   ```zsh
   git clone https://github.com/spjpgrd/bookplate.git
   cd bookplate
   ```

2. **Install dependencies**

   ```zsh
   npm install
   ```

3. **Start the development server**

   ```zsh
   npm run dev
   ```

4. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000) to view your site.

## TypeScript

This project is configured with TypeScript for better type safety and developer experience.

### TypeScript Commands

- **Type Check**: `npm run type-check` - Check types without emitting files
- **Type Check (Watch)**: `npm run type-check:watch` - Watch mode for type checking
- **Build**: `npm run build` - Compile TypeScript to JavaScript
- **Build (Watch)**: `npm run build:watch` - Watch mode for building

### Converting Files to TypeScript

To convert existing JavaScript files to TypeScript:
1. Rename the file from `.js` to `.ts`
2. Add proper type annotations
3. Update imports to use `.ts` extensions where needed

## Storybook

This project includes Storybook for component development and documentation.

### Start Storybook

```zsh
npm run storybook
```

This will start Storybook on port 2025. Visit [http://localhost:2025](http://localhost:2025) to view your component library.

### Build Storybook

```zsh
npm run build-storybook
```

This creates a static build of Storybook for deployment.

## Chromatic

This project is configured with Chromatic for automated visual testing and component deployment. Chromatic automatically captures visual snapshots of your components and detects visual regressions on every push.

### How It Works

- **Automated Testing**: Chromatic runs automatically via GitHub Actions on every push
- **Visual Snapshots**: Captures screenshots of your Storybook components
- **Regression Detection**: Alerts you to unexpected visual changes
- **Change Review**: Provides a visual diff interface for reviewing changes

### Running Chromatic Locally

You can run Chromatic locally to test changes before pushing:

```zsh
npm run chromatic
```

This will capture snapshots and upload them to your Chromatic dashboard.

### Viewing Results

After each push, visit your Chromatic dashboard to:
- Review visual changes
- Approve or reject visual updates
- Track component history
- Collaborate with your team

The GitHub Actions workflow automatically handles the CI/CD integration, so visual testing happens seamlessly in your development workflow.

***

For more details, see the documentation or open an issue if you need help.
