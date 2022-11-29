// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)

    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('login_standard_user', (password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('input[name="user-name"]').clear()
    cy.get('input[name="user-name"]').type('standard_user')

    cy.get('input[name="password"]').clear()
    cy.get('input[name="password"]').type(password)

    cy.get('input[name="login-button"]').click()

    cy.url().should('include', '/inventory')

})

Cypress.Commands.add('login_locked_out_user', (password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('input[name="user-name"]').clear()
    cy.get('input[name="user-name"]').type('locked_out_user')

    cy.get('input[name="password"]').clear()
    cy.get('input[name="password"]').type(password)

    cy.get('input[name="login-button"]').click()

})

Cypress.Commands.add('login_problem_user', (password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('input[name="user-name"]').clear()
    cy.get('input[name="user-name"]').type('problem_user')

    cy.get('input[name="password"]').clear()
    cy.get('input[name="password"]').type(password)

    cy.get('input[name="login-button"]').click()

    cy.url().should('include', '/inventory')

})

Cypress.Commands.add('login_performance_glitch_user', (password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('input[name="user-name"]').clear()
    cy.get('input[name="user-name"]').type('performance_glitch_user')

    cy.get('input[name="password"]').clear()
    cy.get('input[name="password"]').type(password)

    cy.get('input[name="login-button"]').click()

    cy.url().should('include', '/inventory')

})