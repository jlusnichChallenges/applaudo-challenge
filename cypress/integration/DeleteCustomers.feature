Feature: Delete customer

  Scenario: Delete customer

    When  I open the Banking project website
    Then  Login page is displayed

    When  I want to login as bank manager
    And   Go to "Customers" option in the menu
    And   I delete all the displayed customers
    Then  Customers table is empty

    When  I go to Home
    Then  Login page is displayed
    When  I want to login as customer
    Then  Username list to login is empty
