# Vue 3 + Typescript + Vite + Eslint 搭建组件库


## husky

[官网](https://typicode.github.io/husky/#/?id=features)

```shell
# 手动
npm install -D husky # 安装husky
npx husky install    # 初始化husky

# 自动 并生成 per-commit 文件
npx husky-init
npm install

# 新增commit msg钩子
npx husky add .husky/commit-msg "node scripts/verifyCommit.js" 
# npx 不行的话，可以使用 yarn
yarn husky add .husky/commit-msg "node scripts/verifyCommit.js" 
```

在 verifyCommit 文件里面添加：[见vue3源码配置](https://github.com/vuejs/vue-next/blob/master/scripts/verifyCommit.js)

feat 代表新功能，docs 代表文档，perf 代表性能等

确保提交日志符合 `type(scope): message` 格式：[vue3提交记录](https://github.com/vuejs/vue-next/commits/master)

```js
const msg = require('fs')
  .readFileSync('.git/COMMIT_EDITMSG', 'utf-8')
  .trim()
  
const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

const mergeRe = /^(Merge pull request|Merge branch)/

if (!commitRE.test(msg)) {
  if(!mergeRe.test(msg)){
    console.log('git commit信息校验不通过')

    console.error(`git commit的信息格式不对, 需要使用 title(scope): desc的格式
      比如 fix: xxbug
      feat(test): add new 
      具体校验逻辑看 scripts/verifyCommit.js
    `)
    process.exit(1)
  }

}else{
  console.log('git commit信息校验通过')
}
```

`commit-msg`: 代码执行提交的时候执行；

`pre-commit`: 代码执行之前的钩子； 可以执行 `ESLint` 代码格式；

这样在 git commit 的同时先进行 ESLint 校验，然后再执行 commit 的 log 信息格式检查

```shell
npx husky add .husky/pre-commit "npm run lint"
```

## eslint

```shell
npm install -D eslint typescript

npm install -D  eslint-plugin-vue @vue/eslint-config-typescript

npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

在 `package.json` 文件的 `scripts` 添加 `lint` 命令：
```json
"lint": "eslint --fix --ext .js,vue src/"
```

在根目录下添加 `.eslintrc.js` 文件
```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    // https://eslint.vuejs.org/user-guide/#faq
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
  }
}
```

## jest 单元测试

```shell
# 测试 Vue 组件必备的库 
npm install -D jest@26 vue-jest@next @vue/test-utils@next 
# 安装 babel 库
npm install -D babel-jest@26 @babel/core @babel/preset-env 
# 安装 Jest 适配 TypeScript 的库
npm install -D ts-jest@26 @babel/preset-typescript @types/jest
```

根目录下新建 `babel.config.js` 文件，添加如下配置，让 babel 解析到 Node 和 TypeScript 环境

```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
}
```

跟目录下新建 `jest.config.js` 文件，配置 jest 的测试行为，不同格式的文件需要使用不同命令来配置：

- .vue 文件：使用 vue-jest
- .js 或 .jsx 文件：使用 babel-jest
- .ts 文件：使用 ts-jest；匹配文件名是 xx.spec.js；注意：Jest 只会执行 .spec.js 结尾的文件

```js
module.exports = {
  transform: {
    // .vue文件用 vue-jest 处理
    '^.+\\.vue$': 'vue-jest',
    // .js或者.jsx用 babel-jest处理
    '^.+\\.jsx?$': 'babel-jest', 
    //.ts文件用ts-jest处理
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)']
}
```

在 `package.json` 中的 scripts 新增 test 命令

```json
"test": "jest",
```

## async-validator

目前主流的组件库校验使用的都是 async-validator 库：[github](https://github.com/yiminghe/async-validator)