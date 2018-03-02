// supports analysis to specified depth

const UCIEngine = require('node-uci').Engine;

class Engine {
  constructor(pathToChessEngine) {
    this.path = pathToChessEngine;
    this.uciOptions = [];
  }

  async analyzeToDepth(fen, depth) {
    console.log('start to analyze ', fen, ' to ', depth, ' depth')
    try{
      let uciEngine = new UCIEngine(this.path);
      await uciEngine.init();
      console.log('engine initialized');
      this.uciOptions.forEach(
        async function(option) {
          try{
            await uciEngine.setoption(option.name, option.value);
            console.log(`option ${option} was set`);
          } catch(err) {
            console.error(`could not set option '${option}'`, err);
          };
      });
      await uciEngine.isready();
      console.log('engine is ready');
      await uciEngine.position(fen);
      console.log('position is set, ready to go with analysis');
      let result = await uciEngine.go({depth});
      console.log('analysis finished, quiting engine');
      await uciEngine.quit();
      console.log('engine quit');
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
