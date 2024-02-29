# PWA with React + TypeScript + Vite
## Installation from the project source code 
1. Install dependencies
```
npm install
```
2. Build app 
```
npm run build
npm run preview
```
or run app in dev mode 
```
npm run dev
```

## For project installation & configuration from scratch ([Reference](https://www.saurabhmisra.dev/setup-react-pwa-using-vite/))
1. Install Vite + React starter project
```
  npm create vite@latest
```
  Enter the `project name` => Select `React` as the framework and `TypeScript` as the variant
2. Install Vite PWA plugin
```
npm i vite-plugin-pwa
```
3. Install PWA Assets Generator plugin
   This step is optional but pratical for automatically generate neccessary assets for PWA
```
npm i @vite-pwa/assets-generator
```
4. Configure the Vite PWA plugin
  - import VitePWA to vite.config.ts
    ```
      import { VitePWA } from 'vite-plugin-pwa';
    ```
  - append the PWA plugin configuration to the plugins list (see vite.config.ts file)
5. Add an NPM script in package.json for generating PWA assets
  ```
  {
    "scripts": {
      "generate-pwa-assets": "pwa-assets-generator --preset minimal public/logo.svg"
    }
  }
  ```
6. Add logo.svg file to `/public`
7. Create PWA assets
  ```
  npm run generate-pwa-assets
  ```
8. Add <link> and <meta> tags for PWA assets in index.html
  ```
  <head>
    <!-- other tags -->
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" sizes="180x180" />
    <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF">
    <meta name="theme-color" content="#ffffff">
  </head>
  ```
9. Build app 
```
npm run build
npm run preview
```
or run app in dev mode 
```
npm run dev
```
