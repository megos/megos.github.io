describe('Top', () => {
  it('megos', () => {
    cy.visit('/')
    cy.contains('megos')
    cy.percySnapshot('top page')
  })

  it('click skills', () => {
    cy.visit('/')
    cy.contains('Skills').click()
    cy.url().should('include', 'Skills')
  })

  it('click works', () => {
    cy.visit('/')
    cy.contains('Works').click()
    cy.url().should('include', 'Works')
    // Wait for ripple
    cy.wait(500)
    cy.percySnapshot('works page')
  })
})
