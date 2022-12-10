Here is the source code of the [Mati coding test](https://mati.kevin-nguyen.tk) project bootstrapped with [`Vite Generation Frontend Tooling`](https://vitejs.dev/).

## Running devloper

Flow step by step to running application on local enviroment.

##### this project use [Yarn package manager](https://yarnpkg.com/getting-started/install)

**Required:**

- node >= [v16.18.1](https://nodejs.org/es/blog/release/v16.18.1/)
- yarn >= [v1.22.2](https://yarnpkg.com/getting-started/install)

### 1. `Install dependency.`

##### Running

```bash
yarn
# or
yarn install
```

### 2. `Running dev enviroment.`

##### Running locally

If your had running **Back end** application let run

```bash
yarn dev
```

or
```bash
sh scripts/run.fe.sh
```
(if you using unix or linux system)

Or run without **Back end** running

```bash
yarn dev:staging
```

### 3. `Run build`

```bash
yarn build
```

Builds the app for production to the `dist` folder.\
It correctly bundles application in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/build.html#public-base-path) for more information.

### 4. `Run test`

```bash
yarn test
```

to watch test on the UI 
```bash
yarn test:ui
```
## Technical

Tecnical core on project using:

CSS Framework:

- [Tailwindcss](https://tailwindcss.com) (style component)
- [AntDesign](https://ant.design/) (Layout and basic component)
- [Postcss](https://postcss.org/)


## Structure

```
project
│   README.md
|   package.json
└───src
│   │─── assets
│   │─── common
│   │─── components
│   │─── constants
│   │─── containers
│   │─── hooks
│   │─── layouts
│   │─── locales
│   │─── store
│   │─── styles
│   │─── theme
│   │─── utils
│   └───validate
│
└───public
```
