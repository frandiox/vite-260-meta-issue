# Vite 2.6.x issue with optimized deps and import.meta

`import.meta` is optimized to empty object since Vite `2.6.0-beta.0` (tested up to `2.6.7`).
APIs like `import.meta.hot` or `import.meta.env.SSR` break due to this change.

```sh
yarn
yarn dev
# See logs in browser
# Open `node_modules/.vite/my-optimized-dep.js`
```

To fix the issue, comment out `optimizedDeps` in `vite.config.js` or install Vite `2.5.x`.
