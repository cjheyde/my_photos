# Photos App 
This App is to allow private photos management
This project is to solve my own need, as I have 1Tb of Photos and cannot find any when I need them!
A Figma mockup was created on link https://www.figma.com/file/XjjLfCbj6FxxeWbZuclyaU/App-Photos?type=design&node-id=0-1&mode=design&t=KT7QZOndGJKGXmvf-0 where collor pallete was defined, and all screens
I used React + Vite + Typescript to create this project
I am using Context API and Hooks to manage global variableshttps://www.figma.com/file/XjjLfCbj6FxxeWbZuclyaU/App-Photos?type=design&node-id=0-1&mode=design&t=KT7QZOndGJKGXmvf-0
My dear friend Paulo Bruno Machado Dias (https://github.com/DevPBDias) challenged me to deliver this project as a Christmas Gift, so I am really hurring up =)
He will deliver a project to help him automatize his current work on Christmas as well =)
I love healthy competitions!!!

### As extentions I have used here
gitHub pages
react-router-dom
styled-components
@fortawesome/fontawesome-free





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
