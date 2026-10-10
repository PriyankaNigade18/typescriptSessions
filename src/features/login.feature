
Feature: Test for login functionality

#first show to student
Scenario: Test for valid credentials
    Given User on Login page
    When User enter username "standard_user"
    And User enter password "secret_sauce"
    And User click on Login button
    Then User should navigate to inventory page

#second cover this

Scenario: Test for invalid login
   Given User on Login page
    When User enter username "invalid_user"
    And User enter password "invalid_sauce"
    And User click on Login button
    Then User should see error message "Epic sadface: Username and password do not match any user in this service"

#Data driven approach
Scenario Outline: Login with different credentials
    Given User on Login page
    When User enter username "<username>"
    And User enter password "<password>"
    And User click on Login button
    Then User should see "<result>"

    Examples:
    | username      | password   | result       |
    |standard_user  |secret_sauce|inventory page|
    |locked_out_user|secret_sauce|Epic sadface: Sorry, this user has been locked out.|
    |invalid_user   |secret_sauce|Epic sadface: Username and password do not match any user in this service|
   

