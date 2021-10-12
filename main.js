import fn from "my-optimized-dep";

fn();

document.querySelector("#app").innerHTML = `
<div style="font-size: 24px">
  <div>Check the logs --- <code>import.meta</code> should not be an empty object.</div>
  <div>Open <code>node_modules/.vite/my-optimized-dep.js</code> to see the optimized result.</div>
  <div>Revert to Vite 2.5.x or comment out the optimizedDeps config to make it work.</div>
</div>
`;
