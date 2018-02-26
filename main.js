// supports analysis to specified depth

const UCIEngine = require('node-uci').Engine;

let uciEngine;

let uciOptions = [];

class Engine {
  constructor(pathToChessEngine) {
    uciEngine = new UCIEngine(pathToChessEngine);
  }

  async analyzeToDepth(fen, depth) {
    await uciEngine.init();
    uciOptions.forEach(
      async function(option) {
      await uciEngine.setoption(option.name, option.value);
    });
    await uciEngine.isready();
    await uciEngine.position(fen);
    return uciEngine.go({depth});
  }
  setUciOptions(options) {
    uciOptions = options;
  }

}

module.exports = Engine;
