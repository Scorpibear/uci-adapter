# uci-adapter
[![Build Status](https://travis-ci.org/Scorpibear/uci-adapter.svg?branch=master)](https://travis-ci.org/Scorpibear/uci-adapter)
[![Coverage Status](https://codecov.io/gh/Scorpibear/uci-adapter/coverage.svg)](https://codecov.io/gh/Scorpibear/uci-adapter)
[![npm version](https://badge.fury.io/js/uci-adapter.svg)](https://www.npmjs.com/package/uci-adapter)

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
