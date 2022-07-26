const SELECTORS = {
    WELCOME_SECTION: 'div.borderM.box.padT20 div',
    BUTTON_MENU: 'button.btn-lg',
    AMOUNT_INPUT: 'input[placeholder=amount]',
    BUTTON_CONFIRM: 'button[type=submit]'
}

class HomePage {
    expectWelcomeSectionForUserIsDisplayed(username) {
        this.getWelcomeSection().assertThatContainsText(username);
    }

    getWelcomeSection() {
        return cy.get(SELECTORS.WELCOME_SECTION);
    }

    goToTransactions() {
        this.getTransactionsButton().click();
    }

    getTransactionsButton() {
        return cy.getElementByText(SELECTORS.BUTTON_MENU, 'Transactions');
    }

    goToDepositAndDeposit(number) {
        this.getDepositButton().click();
        this.getAmountInput().type(number);
        this.getConfirmDepositButton().click();
    }

    getDepositButton() {
        return cy.getElementByText(SELECTORS.BUTTON_MENU, 'Deposit');
    }

    getAmountInput() {
        return cy.get(SELECTORS.AMOUNT_INPUT);
    }

    getConfirmDepositButton() {
        return cy.getElementByText(SELECTORS.BUTTON_CONFIRM, 'Deposit');
    }

    expectNotificationIsDisplayed(notif) {
        cy.contains(notif).should('be.visible');
    }

    withdrawAmount(amount) {
        this.getWithdrawButton().click();
        this.getAmountInput().type(amount);
        this.getConfirmWithdrawButton().click();
    }

    getWithdrawButton() {
        return cy.getElementByText(SELECTORS.BUTTON_MENU, 'Withdraw');
    }

    getConfirmWithdrawButton() {
        return cy.getElementByText(SELECTORS.BUTTON_CONFIRM, 'Withdraw');
    }

    goToOptionInMenu(option) {
        cy.getElementByText('button', option).click();
    }
}

export default HomePage;
