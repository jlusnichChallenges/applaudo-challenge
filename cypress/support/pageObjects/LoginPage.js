const SELECTORS = {
    USER_SELECT: '#userSelect',
    USER_SELECT_OPTIONS: '#userSelect option'
}

class LoginPage {

    expectLoginSectionIsDisplayed() {
        this.getCustomerLoginButton().should('be.visible');
        this.getBankManagerLoginButton().should('be.visible');
    }

    getCustomerLoginButton() {
        return cy.getElementByText('button', 'Customer Login');
    }

    getBankManagerLoginButton() {
        return cy.getElementByText('button', 'Bank Manager Login');
    }

    goToLoginAsCustomer() {
        this.getCustomerLoginButton().click();
    }

    selectUserToLogin(username) {
        this.getUserSelect().select(username);
    }

    getUserSelect() {
        return cy.get(SELECTORS.USER_SELECT);
    }

    confirmLogin() {
        this.getLoginButton().click();
    }

    getLoginButton() {
        return cy.getElementByText('button', 'Login');
    }

    goToLoginAsBankManager() {
        this.getBankManagerLoginButton().click();
    }

    expectUsernameIsNotDisplayed() {
        this.getUserSelectOptions().should('have.length', 1);
    }

    getUserSelectOptions() {
        return cy.get(SELECTORS.USER_SELECT_OPTIONS);
    }
}

export default LoginPage;
