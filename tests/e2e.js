describe('e2e tests', () => {
    const Engine = require('../main');
    const fenSample = 'r1bqkb1r/pp1p1ppp/2n1pn2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq - 1 6';
    it('works with stockfish9', () => {
        let path = './stockfish_9_x64.exe';
        engine = new Engine(path);

        expect(engine.analyzeToDepth("startpos", 7)).resolves.toHaveProperty("bestmove");
        expect(engine.analyzeToDepth(fenSample, 8)).resolves.toHaveProperty("bestmove");
    });
});