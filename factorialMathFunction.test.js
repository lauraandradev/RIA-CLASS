const mathFactorial = require('./factorialMathFunction');

describe('Testa a função posicaoCircular', () => {
    test('Fatorial de 0', () => {
        const resultado = mathFactorial(5);
        expect(resultado).toEqual(120);
    });

    test('Fatorial de 0', () => {
        const resultado = mathFactorial(0);
        expect(resultado).toEqual(1);
    });

    test('Fatorial de 1', () => {
        const resultado = mathFactorial(1);
        expect(resultado).toEqual(1);
    });
});
