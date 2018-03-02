// supports analysis to specified depth

const UCIEngine = require('node-uci').Engine;

class Engine {
  constructor(pathToChessEngine) {
    this.path = pathToChessEngine;
    this.uciOptions = [];
  }

  async analyzeToDepth(fen, depth) {
    try{
      let uciEngine = new UCIEngine(this.path);
      await uciEngine.init();
      this.uciOptions.forEach(
        async function(option) {
          try{
            await uciEngine.setoption(option.name, option.value);
          } catch(err) {
            console.error(`could not set option '${option}'`, err);
          };
      });
      await uciEngine.isready();
      await uciEngine.position(fen);
      let result = await uciEngine.go({depth});
      await uciEngine.quit();
      return result;
    } catch(err) {
      console.error('uci-adapter, analyzeToDepth error: ', err);
      throw err;
    }
  }
  setUciOptions(options) {
    this.uciOptions = options;
  }

}

module.exports = Engine;
