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

***

For more details, see the documentation or open an issue if you need help.
