Feature: Example Bing Search

  Scenario: Search for WebdriverIO
    Given I am on the RPA search page
    When I search for "WebdriverIO"
    Then I should see results related to "WebdriverIO"
