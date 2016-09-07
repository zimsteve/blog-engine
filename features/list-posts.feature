Feature: List posts

  @watch
  Scenario: I want to see all the posts
    Given I am viewing the page at "/"
    Then I can see the list item "first-post"
