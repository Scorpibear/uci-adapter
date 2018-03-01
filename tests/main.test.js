describe('engine', function() {
  const Engine = require('../main');
  describe('analyzeToDepth', () => {
    const engine = new Engine('');
    it('calls init', done => {
      let UCI = require('node-uci').Engine;
      spyOn(UCI.prototype, 'init').and.returnValue(Promise.resolve(0));
      spyOn(UCI.prototype, 'isready').and.returnValue(Promise.resolve(0));
      spyOn(UCI.prototype, 'position').and.returnValue(Promise.resolve(0));
      spyOn(UCI.prototype, 'go').and.returnValue(Promise.resolve(0));
      spyOn(UCI.prototype, 'quit').and.returnValue(Promise.resolve(0));

      engine.analyzeToDepth("", 5).then(() => {
        expect(UCI.prototype.init).toHaveBeenCalled();
        done();
      }).catch(err => {
        console.error(err);
        done();
      });
    });
    it('catches rejected promises and throws an error', () => {
      let UCI = require('node-uci').Engine;
      spyOn(UCI.prototype, 'init').and.returnValue(Promise.reject("not good path"));
      expect(engine.analyzeToDepth("", 5)).rejects.toBe("not good path");
    })
  });
  describe('setUciOptions', () => {
    const engine = new Engine('');
    it('sets the options for the next run', done => {
      let UCI = require('node-uci').Engine;
      spyOn(UCI.prototype, 'init').and.returnValue(Promise.resolve(0));
      spyOn(UCI.prototype, 'isready').and.returnValue(Promise.resolve(0));
      spyOn(UCI.prototype, 'setoption');
      spyOn(UCI.prototype, 'position').and.returnValue(Promise.resolve(0));
      spyOn(UCI.prototype, 'go').and.returnValue(Promise.resolve(0));
      spyOn(UCI.prototype, 'quit').and.returnValue(Promise.resolve(0));
      engine.setUciOptions([{name: "threads", value: 3}]);

      engine.analyzeToDepth("", 1).then(() => {
        expect(UCI.prototype.setoption).toHaveBeenCalledWith("threads", 3);
        done();
      }).catch(err => {
        console.error(err);
        done()
      });
    });
  });
});
