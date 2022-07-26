Feature: Deposit as customer

  Scenario: Deposit as customer

    When  I open the Banking project website
    Then  Login page is displayed

    When  I want to login as customer
    And   I select "Harry Potter" as username
    And   I confirm the login
    Then  Welcome page for "Harry Potter" is displayed

    When  I want to do a deposit of "1000"
    Then  "Deposit Successful" message is displayed
    When  I want to see the my transactions
    Then  Transaction with "1000" amount and "Credit" type is displayed
