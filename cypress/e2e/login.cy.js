describe('Тестирование формы логина', function () {
   it('верный логин верный пароль', function () {
        cy.visit('login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon');
    })

   it('Проверка логики восстановления пароля', function () {
     	cy.visit('login.qa.studio');
     	cy.get('#forgotEmailButton').click();
     	cy.get('#mailForgot').type('22Denis96@gmail.com');
     	cy.get('#restoreEmailButton').click();
     	cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
    })
    it('Негативный кейс авторизации (верный логин НЕ верный пароль)', function () {
        cy.visit('login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('i1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Такого логина или пароля нет').should('be.visible');
    })
    it('Верный логин верный пароль (НЕ верный логин верный пароль)', function () {
        cy.visit('login.qa.studio');
        cy.get('#mail').type('g@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Такого логина или пароля нет').should('be.visible');
    })
    it('Негативный кейс валидации', function () {
        cy.visit('login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
    })
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('login.qa.studio');
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon');
    })
        
})