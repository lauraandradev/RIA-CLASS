const posicaoCircular = require('./factorialMathFunction');

describe('Testa a função posicaoCircular', () => {
    test('Ponto inicial (t = 0)', () => {
        const resultado = posicaoCircular(0);
        expect(resultado).toEqual([1, 0]);
    });

    test('Ponto no topo do círculo (t = π/2)', () => {
        const resultado = posicaoCircular(Math.PI / 2);
        expect(resultado[0]).toBeCloseTo(0);
        expect(resultado[1]).toBeCloseTo(1);
    });
});
