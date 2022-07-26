import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pageObjects/LoginPage";
import HomePage from "../pageObjects/HomePage";
import TransactionsPage from "../pageObjects/TransactionsPage";
import CustomersPage from "../pageObjects/CustomersPage";
import NavBarPage from "../pageObjects/NavbarPage";
import NewCustomerPage from "../pageObjects/NewCustomerPage";

When(/^I open the Banking project website$/, function () {
    cy.visit('/');
});

Then(/^Login page is displayed$/, function () {
    new LoginPage().expectLoginSectionIsDisplayed();
});

When(/^I want to login as customer$/, function () {
    new LoginPage().goToLoginAsCustomer();
});

When(/^I select "([^"]*)" as username$/, function (username) {
    new LoginPage().selectUserToLogin(username);
});

When(/^I confirm the login$/, function () {
    new LoginPage().confirmLogin();
});

Then(/^Welcome page for "([^"]*)" is displayed$/, function (username) {
    new HomePage().expectWelcomeSectionForUserIsDisplayed(username);
});

When(/^I want to see the my transactions$/, function () {
    new HomePage().goToTransactions();
});

When(/^I reset the transactions table$/, function () {
    new TransactionsPage().goToReset();
});

Then(/^Transactions table is empty$/, function () {
    new TransactionsPage().expectTransactionsTableIsEmpty();
});

When(/^I want to do a deposit of "([^"]*)"$/, function (number) {
    new HomePage().goToDepositAndDeposit(number);
});

Then(/^"([^"]*)" message is displayed$/, function (notif) {
    new HomePage().expectNotificationIsDisplayed(notif);
    cy.wait(1000);
});

Then(/^Transaction with "([^"]*)" amount and "([^"]*)" type is displayed$/, function (amount, type) {
    new TransactionsPage().expectTransactionIsDisplayed(amount, type);
});

When(/^I go back to welcome page$/, function () {
    new TransactionsPage().goBack();
});

When(/^I want to withdraw an amount of "([^"]*)"$/, function (amount) {
    new HomePage().withdrawAmount(amount);
});

When(/^I want to login as bank manager$/, function () {
    new LoginPage().goToLoginAsBankManager()
});

When(/^Go to "([^"]*)" option in the menu$/, function (option) {
    new HomePage().goToOptionInMenu(option);
});

When(/^I delete all the displayed customers$/, function () {
    new CustomersPage().deleteCustomers();
});

Then(/^Customers table is empty$/, function () {
    new CustomersPage().expectTableIsEmpty();
});

When(/^I go to Home$/, function () {
    new NavBarPage().goToHome();
});

Then(/^Username list to login is empty$/, function () {
    new LoginPage().expectUsernameIsNotDisplayed();
});

When(/^I create a new customer with "([^"]*)"$/, function (jsonName) {
    cy.fixture(jsonName).then(data => {
       new NewCustomerPage().createCustomer(data);
    });
});

Then(/^Created customer from "([^"]*)" is displayed$/, function (jsonName) {
    cy.fixture(jsonName).then(data => {
        new CustomersPage().expectCustomerIsDisplayed(data);
    });
});
