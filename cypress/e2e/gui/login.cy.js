describe('Login', () => {

  it('suscessfully', () => {

    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })


  it('logout', () => {

    cy.logout()

    
  })

})