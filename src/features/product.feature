Feature: Inventory Product functionality

Background: 
    Given I am loged in as a valid user

Scenario: Verify products are displayed on page
Then I should see at least 1 product on the page

Scenario: Add product to the cart
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show "1" item

Scenario: Sort the products by price low to high
    When I sort products by  "Price (low to high)"
    Then first product price should be lowest
