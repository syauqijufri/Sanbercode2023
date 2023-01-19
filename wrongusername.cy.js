describe('username tidak ada', () => {
    it('passes', () => {
        cy.visit('https://the-internet.herokuapp.com/login') 
        cy.get('#username').type(' ')
        cy.get('#password').type('pass123')
        cy.get('.fa').click()
    })
})