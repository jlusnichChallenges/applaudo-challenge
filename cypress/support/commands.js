Cypress.Commands.add("getElementByText",(elementSelector, text) => {
    return cy.contains(elementSelector, text, {matchCase: false});
});

Cypress.Commands.add("assertThatContainsText", {prevSubject: 'element'}, (subject, text) => {
    cy.wrap(subject, {timeout:15000}).should(($elem) => {
        expect($elem.text().toLowerCase()).to.contain(text.toLowerCase());
    });
});
