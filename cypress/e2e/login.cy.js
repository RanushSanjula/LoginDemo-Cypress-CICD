describe('Login Test', () => {

  it('Login with valid credentials', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('input[id="user-name"]').type('standard_user')

    cy.get('input[id="password"]').type('secret_sauce')

    cy.get('input[type="submit"]').click()

    cy.contains('Products').should('be.visible')

  })

})