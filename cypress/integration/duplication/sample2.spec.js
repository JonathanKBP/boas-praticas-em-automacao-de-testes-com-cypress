describe('Code duplication bad practice - Sample 2', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  const terms = ['react.js', 'vuejs', 'angular']

  terms.forEach(term => {
    it(`searches for "${term}"`, () => {
      cy.search(term)
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  })
})
