# typescript-starter

This is a starter repo for TypeScript, containing everything needed to write, test, and build TypeScript for a Node.js runtime. It's intended as a simple command-line playground for TypeScript.

## How to use

1. `npm install`
2. To run tests: `npm run test`
3. To build and bundle: `npm run build`
4. To run the bundled

## What happens when you run `npm run build`?

The `npm run build` script does two things:

1. Run `tsc`, transpiling all non-excluded files into JS and outputting them into the `build` folder
2. Run `esbuild` using `build/index.js` as the entry point and `node` as the target platform, bundling the result into `./out.js`.

## Why use esbuild?

I prefer using [ES modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules) over [CommonJS modules](https://nodejs.org/api/modules.html#modules-commonjs-modules):

```ts
import addNumbers from "./addNumbers";
```

However, if I do this, any script using such an `import` statement will fail after transpilation. Quoting from the TypeScript docs on [module resolution and extensionless relative paths](https://www.typescriptlang.org/docs/handbook/modules/reference.html#extensionless-relative-paths)

> Extensionless relative paths are not supported in import paths in Node.js...

There are [no plans](https://github.com/nodejs/node/issues/46006) to support extensionless relative paths in Node.js. So, in order for the `import` statement to work as intended after transpilation, I'd need to write:

```ts
import addNumbers from "./addNumbers.js";
```

This makes very little sense to me. It's a huge [leak in the TypeScript abstraction](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/). I prefer to labor under the illusion that I am not actually writing JavaScript, and I prefer not to think at all about how TypeScript gets transformed into something that will execute in the Node runtime.

To work around this, I use TypeScript with the `bundler` module resolution configuration, which is the only module resolution configuration that supports extensionless relative paths. Naturally, this produces a `tsc` build that will not run on Node without bundling. So, I picked the fastest bundler that would solve this problem.

tl;dr: the sole reason for using `esbuild` in this repo is to allow me to use ESM instead of CJS.

## To-do list

- [x] Add TypeScript
- [x] Add `jest`
- [x] Add `esbuild`
- [x] Add `eslint`
- [x] Add `prettier`
