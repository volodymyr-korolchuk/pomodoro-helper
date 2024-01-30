# Pomodoro Helper App
Your companion for efficient study sessions using the Pomodoro Technique. This app allows users to set their study and break durations, choose from four colorful themes: Candy, Tomato, Nature, and Stars and make studying at least a bit more fun.

## Features

- **Pomodoro Technique:** Utilize the Pomodoro Technique for effective time management during study sessions.

- **Customizable Settings:**
  - Set the length of each study interval.
  - Define the duration of breaks between study sessions.
  - Specify the quantity of study sessions.

- **Colorful Themes:**
  - Choose from four visually appealing themes to enhance your study environment:
    - Candy 🍭
    - Tomato 🍅
    - Nature 🌿
    - Stars 🌌

## Screenshots

![image](https://github.com/volodymyr-korolchuk/pomodoro-helper/assets/122407662/ff29e75a-c244-4e7a-8768-1b1aecc986f5)

![image](https://github.com/volodymyr-korolchuk/pomodoro-helper/assets/122407662/fda3fffb-7a17-4720-bf98-af73e9997a94)

![image](https://github.com/volodymyr-korolchuk/pomodoro-helper/assets/122407662/9de19325-79a3-49cc-a807-c213458e80fb)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
