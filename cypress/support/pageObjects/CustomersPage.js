const SELECTORS = {
    DELETE_BUTTON: 'tr button[ng-click="deleteCust(cust)"]',
    TABLE: 'table tbody',
    ROW: 'tr',
}

class CustomersPage {
    deleteCustomers() {
        cy.get(SELECTORS.DELETE_BUTTON).each(button => {
            cy.wrap(button).click();
        });
    }

    expectTableIsEmpty() {
        this.getCustomersTable().find(SELECTORS.ROW).should('have.length', 0);
    }

    getCustomersTable() {
        return cy.get(SELECTORS.TABLE);
    }

    expectCustomerIsDisplayed(data) {
        const {name, lastname, zipcode} = data;
        this.getCustomersTable().find(SELECTORS.ROW).last().should(row => {
            expect(row).to.contain(name);
            expect(row).to.contain(lastname);
            expect(row).to.contain(zipcode);
        })
    }
}

export default CustomersPage;
