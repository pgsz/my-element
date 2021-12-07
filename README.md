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