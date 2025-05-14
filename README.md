# Sports Designer Portfolio

A modern, responsive portfolio website for a sports web designer, built with React, Vite, and Tailwind CSS.

## Features

- Modern single-page application design
- Responsive layout for all devices
- Sports-themed design targeting athletes, teams, and sports brands
- Sections for Hero, About, Portfolio, Services, Projects, and Contact
- Optimized for performance with Tailwind CSS
- Smooth animations with Framer Motion
- Fully accessible design

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS v3.4.17
- Framer Motion
- React Icons
- React Scroll

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sports-designer-portfolio.git
cd sports-designer-portfolio
```

2. Install the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

This will generate a `dist` folder with all the static files needed for deployment.

## Deployment to Hostinger

1. Build the project as mentioned above
2. Log in to your Hostinger account
3. Navigate to the File Manager or use FTP
4. Upload the contents of the `dist` folder to your public_html directory or desired subfolder
5. Ensure your domain or subdomain is properly configured to point to the uploaded files

## Project Structure

```
sports-designer-portfolio/
├── public/
│   ├── images/       # Static image assets
│   └── favicon.ico
├── src/
│   ├── assets/       # Imported image assets
│   ├── components/
│   │   ├── layout/   # Layout components (Navbar, Footer)
│   │   ├── sections/ # Main page sections
│   │   └── ui/       # Reusable UI components
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
└── package.json
```

## License

This project is licensed under the MIT License.

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
