## @hyrious/rimraf

> Just a tiny wrapper of `fs.promises.rm` and `fs.rmSync`.

Requires Node.js >= 14.14.

### Usage

```bash
npx @hyrious/rimraf node_modules
```

```js
import rimraf from '@hyrious/rimraf'

await rimraf('node_modules')
rimraf.sync('node_modules')
```

### Alters

- [@zkochan/rimraf](https://github.com/zkochan/packages/blob/main/rimraf)\
  this repo is almost the same code as zkochan's, except that it is in pure esm.

## License

MIT @ [hyrious](https://github.com/hyrious)
