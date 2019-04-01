describe('App initialization', () => {
    it('Loads todos on page load', () => {
    const textSearch = "Tomb Raider";
    cy.seedAndVisit();

    cy.get('#search')
        .type(textSearch)
        .should('have.value', textSearch);
    });
});
