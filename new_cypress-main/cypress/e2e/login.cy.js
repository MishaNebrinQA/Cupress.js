
describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');       // зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');     // ввели верный пароль
        cy.get('#loginButton').click();             // нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка, что после авторизации выводится текст
        cy.get('#messageHeader').should('be.visible');                   // проверка, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   // проверка, что отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click();                // проверка, что крестик нажимается
       
        })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        

        cy.get('#forgotEmailButton').click();                 // Нажал кнопку «Забыли пароль»
        cy.get('#mailForgot').type('misha.nebrin@gmail.com'); // Ввел имейл
        cy.get('#restoreEmailButton').click()                 // Нажал кнопку «Отправить код»

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка, что после авторизации выводится текст
        cy.get('#messageHeader').should('be.visible');                           // проверка, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');           // проверка, что отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click();                        // проверка, что крестик нажимается
        
        })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');       // зашли на сайт
     
        cy.get('#mail').type('german@dolnikov.ru'); // ввел верный логин
        cy.get('#pass').type('iloveqastudio');      // ввел неверный пароль
        cy.get('#loginButton').click();             // нажал кнопку войти
     
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка, что после авторизации выводится текст
        cy.get('#messageHeader').should('be.visible');                     // проверка, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');     // проверка, что отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click();                  // проверка, что крестик нажимается
            
        })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');        // зашли на сайт
         
        cy.get('#mail').type('geman@dolnikov.ru');   // ввел неверный логин
        cy.get('#pass').type('iLoveqastudio1');      // ввел верный пароль
        cy.get('#loginButton').click();              // нажал кнопку войти
         
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка, что после авторизации выводится текст
        cy.get('#messageHeader').should('be.visible');                     // проверка, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');     // проверка, что отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click();                  // проверка, что крестик нажимается
                
        })

    it('Невалидный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');        // зашли на сайт
             
        cy.get('#mail').type('gemandolnikov.ru');    // ввел неверный логин без «@»
        cy.get('#pass').type('iLoveqastudio1');      // ввел верный пароль
        cy.get('#loginButton').click();              // нажал кнопку войти
             
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка, что после авторизации выводится текст
        cy.get('#messageHeader').should('be.visible');                           // проверка, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');           // проверка, что отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click();                        // проверка, что крестик нажимается
                    
        })

       
    it('Приведение прописных букв к строчным в логине', function () {
        cy.visit('https://login.qa.studio/');        // зашли на сайт
                 
        cy.get('#mail').type('GerMan@Dolnikov.ru');  // ввел верный логин с прописными буквами
        cy.get('#pass').type('iLoveqastudio1');      // ввел верный пароль
        cy.get('#loginButton').click();              // нажал кнопку войти
                 
        cy.get('#messageHeader').contains('Авторизация прошла успешно');         // проверка, что после авторизации выводится текст
        cy.get('#messageHeader').should('be.visible');                           // проверка, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');           // проверка, что отображается крестик
        cy.get('#exitMessageButton > .exitIcon').click();                        // проверка, что крестик нажимается
                        
        })
})