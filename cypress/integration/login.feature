Feature: Login to Conduit Application

Background:Pre-requisite
   Given Sravani is a writer and has access to the Application

  Scenario: verify Login to the Application
    
    When Sravani login with correct credentials
    Then Sravani get access to the application

  Scenario: verify Login to the Application with credentilas
    
    When Sravani uses his credentials as "testuser@test.com" and "testpassword"
    Then Sravani get access to the application

  Scenario: verify Login to the Application with credentilas as list
    
    When Sravani uses his credentials as list
      | testuser@test.com |
      | testpassword      |
    Then Sravani get access to the application

    Scenario: verify Login to the Application with credentilas as map
    
    When Sravani uses his credentials as map
      | useremail | userpassword|
      | testuser@test.com | testpassword |
    Then Sravani get access to the application

    Scenario Outline: verify Login to the Application with credentilas as map
    
    When Sravani uses his credentials as map
      | useremail | userpassword| username |
      | <useremail> | <userpassword> | <username> |
    Then Sravani get access to the application 2

    Examples:

    | useremail | userpassword| username |
    | testuser@test.com | testpassword| testuser |
    | testuser2@test.com | testpassword| testuser2 |




