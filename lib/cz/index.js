const chalk = require('chalk')
const engine = require('./engine')

module.exports = engine({
  types: {
    feat: {
      description: chalk.green(`🌟  一个新功能 ${chalk.magenta('(feat)')}`),
      title: '🌟 新功能',
    },
    fix: {
      description: chalk.green(`🐛  一个 bug 修复 ${chalk.magenta('(fix)')}`),
      title: '🐛 Bug 修复',
    },
    perf: {
      description: chalk.green(`🚀  提升性能的代码更改 ${chalk.magenta('(perf)')}`),
      title: '🚀 性能优化',
    },
    style: {
      description: chalk.green(
        `🎨  对代码含义无影响的改动（空格，格式化，等，非 UI 变动）${chalk.magenta('(style)')}`
      ),
      title: '🎨 代码样式',
    },
    docs: {
      description: chalk.green(`📝  只有文档发生改变 ${chalk.magenta('(docs)')}`),
      title: '📝 文档',
    },
    test: {
      description: chalk.green(
        `🔧  添加一些缺失的测试或者修正已存在的测试 ${chalk.magenta('(test)')}`
      ),
      title: '🔧 测试',
    },
    refactor: {
      description: chalk.green(
        `🔨  既不是修复 bug 也不是添加新功能的代码更改 ${chalk.magenta('(refactor)')}`
      ),
      title: '🔨 代码重构',
    },
    chore: {
      description: chalk.green(
        `🏠  影响构建系统或外部依赖的更改（例如：gulp，npm，webpack）${chalk.magenta('(chore)')}`
      ),
      title: '🏠 构建',
    },
    ci: {
      description: chalk.green(
        `📦  持续集成的配置文件和脚本的改变（例如: Travis, Circle）${chalk.magenta('(ci)')}`
      ),
      title: '📦 持续集成',
    },
    revert: {
      description: chalk.green(`🔙  撤销上一次的提交 ${chalk.magenta('(revert)')}`),
      title: '🔙 撤销',
    },
  },
  scopes: {
    none: {
      description: '无影响',
      title: 'none',
    },
    global: {
      description: '影响整个项目',
      title: 'global',
    },
    ui: {
      description: 'UI 界面',
      title: 'ui',
    },
    data: {
      description: '数据变化',
      title: 'data',
    },
    component: {
      description: '影响公共组件使用',
      title: 'component',
    },
    unknown: {
      description: '不知道影响范围',
      title: 'unknown',
    },
  },
})
