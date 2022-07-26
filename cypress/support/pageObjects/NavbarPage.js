const SELECTORS = {
}

class NavBarPage {

    goToHome() {
        this.getHomeButton().click();
    }

    getHomeButton() {
        return cy.getElementByText('button', 'Home');
    }
}

export default NavBarPage;
