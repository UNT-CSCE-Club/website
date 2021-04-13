describe('The App', () => {
  it('renders the home page', () => {
    cy.visit('/');

    cy.get('nav');
    cy.get('h1');
    cy.get('footer');
  });
});

export {};
