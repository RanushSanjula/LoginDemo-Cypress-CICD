describe('Verify whether successful login', () => {

  it('Login with valid credentials', () => {

    cy.fixture('loginData').then((data) => {

      cy.visit('https://www.saucedemo.com/')

      cy.get('input[id="user-name"]').type(data.username)

      cy.get('input[id="password"]').type(data.password)

      cy.get('input[type="submit"]').click()

      cy.contains('Products').should('be.visible')

    })

  })

})