# Minimal example for reproducing issue with dd-trace and cookie-parser

```shell
npm install && npm run build && npm run start
```

```
up to date, audited 175 packages in 703ms

18 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

> build
> rm -rf dist && tsc --build --force -v

[9:15:47 AM] Projects in this build: 
    * tsconfig.json

[9:15:47 AM] Project 'tsconfig.json' is being forcibly rebuilt

[9:15:47 AM] Building project '/test/dd-trace-cookie-parser/tsconfig.json'...


> start
> node --loader dd-trace/loader-hook.mjs dist/app.js

(node:16636) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("dd-trace/loader-hook.mjs", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
/test/dd-trace-cookie-parser/node_modules/dd-trace/packages/datadog-instrumentations/src/cookie-parser.js:29
    const cookieMiddleware = cookieParser.apply(this, arguments)
                                          ^

TypeError: cookieParser.apply is not a function
    at /test/dd-trace-cookie-parser/node_modules/dd-trace/packages/datadog-instrumentations/src/cookie-parser.js:29:43
    at file:///test/dd-trace-cookie-parser/dist/app.js:6:9
    at ModuleJob.run (node:internal/modules/esm/module_job:263:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:540:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)

```