/// <reference types="cypress" />

describe('saucedemo login test', () => { 
    before(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Should try to login with invalid data', () => {
        cy.get('form').should('be.visible')
        cy.get('#user-name').type('user ngasal')
        cy.get('#password').type('pass ngasal')
        cy.get('input[name="login-button"]').click()
    });

    it('Should display error message', () => {
        cy.get('.error-message-container').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Should login to application with valid data/login with standard_user', () => {
        cy.fixture("pass").then(pass => {

            const password = pass.password

            cy.login_standard_user(password)

            cy.get('span').should('contain.text', 'Products')
        })
    });

    it('Should logout from the application', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.contains('Logout').click()
        cy.get('h4').should('contain.text', 'Accepted usernames are:')
        cy.get('h4').should('contain.text', 'Password for all users:')
    });


    it('Should login to application with valid data/login with locked_out_user', () => {
        cy.fixture("pass").then(pass => {

            const password = pass.password

            cy.login_locked_out_user(password)
            cy.get('.error-message-container').should('be.visible').and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')

        })
    });

    it('Should login to application with valid data/login with problem_user', () => {
        cy.fixture("pass").then(pass => {

            const password = pass.password

            cy.login_problem_user(password)

            cy.get('span').should('contain.text', 'Products')

            cy.get('#react-burger-menu-btn').click()
            cy.contains('Logout').click()
        })
    });

    it('Should login to application with valid data/login with performance_glitch_user', () => {
        cy.fixture("pass").then(pass => {

            const password = pass.password

            cy.login_performance_glitch_user(password)

            cy.get('span').should('contain.text', 'Products')

            cy.get('#react-burger-menu-btn').click()
            cy.contains('Logout').click()
        })
    });
 })



 describe('saucedemo navbar test with login standard_user', () => { 
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture("pass").then(pass => {

            const password = pass.password

            cy.login_standard_user(password)

            cy.get('span').should('contain.text', 'Products')
        })
    })
    it('Should display products', () => {
        cy.url().should('include', 'inventory.html')
        cy.get('span').should('be.visible').and('contain.text', 'Products')
    });

    it('Should display menu bar', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('a').should('be.visible').and('contain.text', 'All Items')
        cy.get('a').should('be.visible').and('contain.text', 'About')
        cy.get('a').should('be.visible').and('contain.text', 'Logout')
        cy.get('a').should('be.visible').and('contain.text', 'Reset App State')
    })
    it('Should display logout/homepage', () => {
        cy.contains('Logout').click()
        cy.get('form').should('be.visible')
    });

  })