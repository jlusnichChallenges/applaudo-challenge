Feature: Create customer

  Scenario: Create customer

    When  I open the Banking project website
    Then  Login page is displayed

    When  I want to login as bank manager
    And   Go to "Add Customer" option in the menu
    And   I create a new customer with "customerData"
    And   Go to "Customers" option in the menu
    Then  Created customer from "customerData" is displayed
