const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Hello Guto', () => {
        const response = sayHelloWorld.sayHello('Guto');

        expect(response).toBe('Hello Guto!');
    });
});