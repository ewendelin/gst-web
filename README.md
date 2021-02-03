##### version branchs
  - branch names are v1, v2 ...
  - v1 is the production version online
  - if a feature branch has bug, can rollback to v1, just redeploy v1 branch

#### branches and deploy

- merge a-working-branch to master in github, then merge master to production

- always deploy production to production server

# components-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
