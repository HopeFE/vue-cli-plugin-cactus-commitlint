module.exports = (api) => {
  api.render('./template')

  api.extendPackage({
    devDependencies: {
      commitizen: '^4.0.3',
      commitlint: '^8.2.0',
      husky: '^3.0.9',
    },
    scripts: {
      cz: 'git add . && git cz',
    },
    husky: {
      hooks: {
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
      },
    },
    config: {
      commitizen: {
        path: './node_modules/@ycmfe/vue-cli-plugin-cactus-commitlint/lib/cz',
      },
    },
  })
}
