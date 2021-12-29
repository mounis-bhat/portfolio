# Personal Portfolio

A minimal portfolio that showcases my work!

# Hi, I'm Mounis! 👋

## 🚀 About Me

I'm a full stack developer...

## Requirements

Install with npm or yarn

```bash
  Use Node version 16 or later
```

## To run this project locally on your machine please run the following commands

Clone the project

```bash
  git clone https://github.com/mounis-bhat/portfolio
```

Go to the project directory

```bash
  cd portfolio
```

Install dependencies

```bash
  npm install / yarn
```

Start the server

```bash
  npm run dev / yarn dev
```

## Screenshots

![App Screenshot](https://i.imgur.com/qkkLcZJ.png)

![App Screenshot](https://i.imgur.com/plf9eGn.png)

## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/mounis-bhat/portfolio/blob/main/LICENSE)

## Tech Stack

**Client:** Next JS, Chakra UI, Framer Motion

## FAQ

#### yarn dev / npm run dev is failing

This is a known issue with NextJS 12, it uses a rust compiler to load SWC binaries and it's failing, to avoid this create a .babelrc file in your root directory and use {
"presets": ["next/babel"]
}, this will set babel as your default compiler. To avoid using babel compiler in your prodcution build, git ignore .babelrc and let vercel deploy a prodcution build with rust compiler.

## Acknowledgements

- [Takuya Matsuyama](https://github.com/craftzdog)

## Feedback

If you have any feedback, please reach out to me at mounisbhat@gmail.com

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://mounis.vercel.app)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mounis-bhat/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/mounis_)
