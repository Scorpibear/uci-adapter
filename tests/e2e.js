describe('e2e tests', () => {
    const Engine = require('../main');
    it('works with stockfish9', () => {
        let path = './stockfish_9_x64.exe';
        engine = new Engine(path);

        expect(engine.analyzeToDepth("startpos", 1)).resolves.toHaveProperty("bestmove");
    });
});