/// <reference types="cypress" />

describe('Searchbox Test', () => { 
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('Online {enter}')
    });

    it('Should type into searchbox and submit', () => {
        cy.get('h2').should('contain.text', 'Search Results')
    });

    it('Should type into searchbox and submit', () => {
        cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
    });

    it('Should type into searchbox and submit', () => {
        cy.get('a').should('contain.text', 'Zero - Online Statements')
    });

 })