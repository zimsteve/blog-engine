Feature: New Post

  @watch
  Scenario: I want to add a new post
    Given I am viewing the page at "/posts/new"
    When I enter "second-post" into the "name" input
    And I enter "blog-content" into the "content" input
    And I click on the input with value "Create Post"
    Then I am redirected to the "/posts" page
    And I can see the list item "second-post"
