Feature: Withdraw with no balance as customer

  Scenario: Withdraw with no balance as customer

    When  I open the Banking project website
    Then  Login page is displayed

    When  I want to login as customer
    And   I select "Harry Potter" as username
    And   I confirm the login
    Then  Welcome page for "Harry Potter" is displayed

    When  I want to see the my transactions
    And   I reset the transactions table
    Then  Transactions table is empty

    When  I go back to welcome page
    And   I want to withdraw an amount of "1000"
    Then  "Transaction Failed. You can not withdraw amount more than the balance." message is displayed
