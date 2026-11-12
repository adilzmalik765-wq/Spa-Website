const fs = require('fs');
const filePath = 'node_modules/rollup/dist/native.js';

if (fs.existsSync(filePath)) {
  let s = fs.readFileSync(filePath, 'utf8');
  if (!s.includes('@rollup/wasm-node/dist/native.js')) {
    s = s.replace(
      'const requireWithFriendlyError = id => {',
      'const requireWithFriendlyError = id => {\n\ttry { return require("@rollup/wasm-node/dist/native.js"); } catch (e) {}'
    );
    fs.writeFileSync(filePath, s);
    console.log('Applied Rollup WASM compatibility patch.');
  }
}
