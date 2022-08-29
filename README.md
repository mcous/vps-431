# Reproduction for brillout/vite-plugin-ssr#431

```shell
pnpm i

# run vanilla vite app
pnpm dev-vanilla

# run vite app with only `vite-plugin-glob` included
pnpm dev-glob

# run vite app with `vite-plugin-ssr` included
pnpm dev-vps
```

# Observed results

Pulling in the `vite-plugin-glob` plugin at all is enough to cause a server-side error.

## Vanilla

```shell
pnpm dev-vanilla
```

1. Dev server launches
2. Glob result is printed to console
3. Browser displays "hello world"

## vite-plugin-glob

```shell
pnpm dev-glob
```

1. Dev server launches
2. Browser and terminal display stacktrace

```
[plugin:vite-plugin-glob] Invalid glob import syntax: Unknown options import

/Users/mc/sandbox/vps-431/src/pages/index.page.client.ts:4:16

1  |  export function Page() {
2  |    const posts = import.meta.glob("../posts/*.ts", {
   |                  ^
3  |      import: "title",
4  |      eager: true

    at err (/Users/mc/sandbox/vps-431/node_modules/.pnpm/vite-plugin-glob@0.2.8/node_modules/vite-plugin-glob/dist/index.cjs:91:17)
    at /Users/mc/sandbox/vps-431/node_modules/.pnpm/vite-plugin-glob@0.2.8/node_modules/vite-plugin-glob/dist/index.cjs:159:17
    at Array.map (<anonymous>)
    at parseImportGlob (/Users/mc/sandbox/vps-431/node_modules/.pnpm/vite-plugin-glob@0.2.8/node_modules/vite-plugin-glob/dist/index.cjs:87:24)
    at transform (/Users/mc/sandbox/vps-431/node_modules/.pnpm/vite-plugin-glob@0.2.8/node_modules/vite-plugin-glob/dist/index.cjs:202:23)
    at TransformContext.transform (/Users/mc/sandbox/vps-431/node_modules/.pnpm/vite-plugin-glob@0.2.8/node_modules/vite-plugin-glob/dist/index.cjs:66:28)
    at Object.transform (file:///Users/mc/sandbox/vps-431/node_modules/.pnpm/vite@3.0.9/node_modules/vite/dist/node/chunks/dep-0fc8e132.js:35579:53)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async loadAndTransform (file:///Users/mc/sandbox/vps-431/node_modules/.pnpm/vite@3.0.9/node_modules/vite/dist/node/chunks/dep-0fc8e132.js:39888:29
```

## vite-plugin-ssr

```shell
pnpm dev-vps
```

1. Dev server launches
2. Dev server crashes as soon as browser is opened
3. Terminal displays stacktrace

```
Error: Invalid glob import syntax: Unknown options import
    at err (/Users/mc/sandbox/vps-431/node_modules/.pnpm/vite-plugin-glob@0.2.8/node_modules/vite-plugin-glob/dist/index.cjs:91:17)
    at /Users/mc/sandbox/vps-431/node_modules/.pnpm/vite-plugin-glob@0.2.8/node_modules/vite-plugin-glob/dist/index.cjs:159:17
    at Array.map (<anonymous>)
    at parseImportGlob (/Users/mc/sandbox/vps-431/node_modules/.pnpm/vite-plugin-glob@0.2.8/node_modules/vite-plugin-glob/dist/index.cjs:87:24)
    at transform (/Users/mc/sandbox/vps-431/node_modules/.pnpm/vite-plugin-glob@0.2.8/node_modules/vite-plugin-glob/dist/index.cjs:202:23)
    at TransformContext.transform (/Users/mc/sandbox/vps-431/node_modules/.pnpm/vite-plugin-glob@0.2.8/node_modules/vite-plugin-glob/dist/index.cjs:66:28)
    at Object.transform (file:///Users/mc/sandbox/vps-431/node_modules/.pnpm/vite@3.0.9/node_modules/vite/dist/node/chunks/dep-0fc8e132.js:35579:53)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async loadAndTransform (file:///Users/mc/sandbox/vps-431/node_modules/.pnpm/vite@3.0.9/node_modules/vite/dist/node/chunks/dep-0fc8e132.js:39888:29)
[vite-plugin-ssr@0.4.28][Warning] No `_error.page.js` found. We recommend creating a `_error.page.js` file. (This warning is not shown in production.)
```
