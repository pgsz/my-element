const chalk = require('chalk')

const msgPath = '.git/COMMIT_EDITMSG'

const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()

// https://github.com/vuejs/vue-next/blob/master/scripts/verifyCommit.js

const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

const mergeRe = /^(Merge pull request|Merge branch)/

if (!commitRE.test(msg)) {
  if (!mergeRe.test(msg)) {

    console.error(
      `${chalk.bgRed.white(' ERROR ')} ${chalk.red(`git commit信息校验不通过`)}\n\n` +
        chalk.red( `git commit的信息格式不对, 需要使用 title(scope): desc的格式\n\n`) +
        `${chalk.green(`fix: xxbug`)}\n` +
        `${chalk.green(`feat(test): add new xx`)}\n\n` +
        chalk.red(`具体校验逻辑看 scripts/verifyCommit.js.\n`)
    )

    // console.log('git commit信息校验不通过')

    // console.error(`git commit的信息格式不对, 需要使用 title(scope): desc的格式
    //   比如 fix: xxbug
    //   feat(test): add new 
    //   具体校验逻辑看 scripts/verifyCommit.js
    // `)

    process.exit(1)
  }

} else {
  console.log(chalk.green('git commit信息校验通过'))
}