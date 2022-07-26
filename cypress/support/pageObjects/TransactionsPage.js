const SELECTORS = {
    TRANSACTIONS_TABLE: 'table tbody',
    ROW: 'tr',
    RESET_BUTTON: "button[ng-click='reset()']"
}

class TransactionsPage {

    goToReset() {
        cy.get('body').then(($body) => {
            if ($body.find(SELECTORS.RESET_BUTTON).length != 0) {
                this.getResetButton().click();
            }
        });
    }

    getResetButton() {
        return cy.getElementByText('button', 'Reset');
    }

    expectTransactionsTableIsEmpty() {
        this.getTransactionsTable().find(SELECTORS.ROW).should('have.length', 0);
    }

    getTransactionsTable() {
        return cy.get(SELECTORS.TRANSACTIONS_TABLE);
    }

    expectTransactionIsDisplayed(amount, type) {
        this.getTransactionsTable().find(SELECTORS.ROW).should(row => {
            expect(row).to.contain(amount);
            expect(row).to.contain(type);
        })
    }

    goBack() {
        this.getGoBackButton().click();
    }

    getGoBackButton() {
        return cy.getElementByText('button', 'Back');
    }
}

export default TransactionsPage;
