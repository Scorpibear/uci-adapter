# uci-adapter
UCI (universal chess interface) adapter with user-friendly interface, encapsulating low-level uci commands call

## Install

Add as a npm dependency

<code>
npm install --save uci-adapter
</code>

## Usage


<code>
const uciAdapter = require('uci-adapter');

uciAdapter.analyzeToDepth(fen, depth).then((data) => {
    console.log(data);
})
</code>
