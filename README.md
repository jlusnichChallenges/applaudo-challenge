# bank-challenge

* Instructions

`npm install` to install dependencies

`npm run test` or `npm run test-headless` to run the suite

* Features

- CreateCustomer.feature -> It logins as bank manager, creates a new customer and checks it is displayed in customers table.
- DeleteCustomers.feature -> It logins as bank manager, deletes all the displayed customers and checks there is no customer to login.
- DepositAmount.feature -> It logins with an user, deposits 1000 and checks the transactions table contains that deposit.
- WithdrawWithNoBalance.feature -> It logins with an user, deletes any previous transaction, makes a 1000 withdraw and expect the withdraw to fail.
