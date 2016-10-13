import HomeController from './home.controller';

describe('Correct work of HomeController', () => {
    const ctrl = new HomeController();

    it('There is `Home Page` in header',
        () => {
            expect(ctrl.title).toBe('Home Page');
        });

    it('There is `Hello world` after calling function `greet`',
        () => {
            ctrl.greet();
            expect(ctrl.hello).toBe('Hello world!');
        });
});
