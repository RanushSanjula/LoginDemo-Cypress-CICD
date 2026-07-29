describe('Verify invalid login', () => {

  it('Login with invalid credentials', () => {

    cy.fixture('loginData').then((data) => {

      cy.visit('https://www.saucedemo.com/')


      cy.get('input[id="user-name"]')
        .type(data[1].username2)


      cy.get('input[id="password"]')
        .type(data[1].password2)


      cy.get('input[type="submit"]')
        .click()


      cy.contains(
        'Epic sadface: Username and password do not match any user in this servide'
      )
      .should('be.visible')

    })

  })

})