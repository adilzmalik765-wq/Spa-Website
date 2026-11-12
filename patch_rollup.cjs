const fs = require('fs');
let s = fs.readFileSync('node_modules/rollup/dist/native.js', 'utf8');
s = s.replace('const requireWithFriendlyError = id => {\n\ttry { return require("@rollup/wasm-node"); } catch (e) {}', 'const requireWithFriendlyError = id => {\n\ttry { return require("@rollup/wasm-node/dist/native.js"); } catch (e) {}');
fs.writeFileSync('node_modules/rollup/dist/native.js', s);
console.log('Updated rollup patch to @rollup/wasm-node/dist/native.js');
