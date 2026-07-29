describe('Verify invalid login', () => {

  it('Login with invalid credentials', () => {

    cy.fixture('invalidLoginData').then((data) => {

      cy.visit('https://www.saucedemo.com/')

      cy.get('input[id="user-name"]').type(data.username2)

      cy.get('input[id="password"]').type(data.password2)

      cy.get('input[type="submit"]').click()

      cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')

    })

  })

})