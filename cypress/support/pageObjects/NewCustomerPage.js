const SELECTORS = {
    NAME_INPUT: 'input[placeholder="First Name"]',
    LAST_NAME_INPUT: 'input[placeholder="Last Name"]',
    ZIPCODE_INPUT: 'input[placeholder="Post Code"]',
    ADD_CUSTOMER_BUTTON: 'button[type="submit"]'
}

class NewCustomerPage {

    createCustomer(data) {
        const {name, lastname, zipcode} = data;
        this.getNameInput().type(name);
        this.getLastNameInput().type(lastname);
        this.getZipCodeInput().type(zipcode);
        this.addCustomer();
    }

    getNameInput() {
        return cy.get(SELECTORS.NAME_INPUT);
    }

    getLastNameInput() {
        return cy.get(SELECTORS.LAST_NAME_INPUT);
    }

    getZipCodeInput() {
        return cy.get(SELECTORS.ZIPCODE_INPUT);
    }

    addCustomer() {
        this.getAddCustomerButton().click();
    }

    getAddCustomerButton() {
        return cy.getElementByText(SELECTORS.ADD_CUSTOMER_BUTTON, 'Add Customer');
    }
}

export default NewCustomerPage;
