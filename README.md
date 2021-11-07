<h1>Sending email from Google account by nodemailer with OAuth2.0 credentials</h1>

---------------------------------------------------------------------------------

<h3>How to create OAuth2.0 credentials for Gmail management</h3>

1. In browser open page with URI: https://console.developers.google.com

2. If it is the very first time, you will see the popup window on the page, where you have to select a country and confirm the terms of service

3. Then on the dashboard you have to click the "Create project" button

4. And in the new page, you need to input the project name and click on the "Create" button

5. After that you will be returned to the "Dashboard" page  and  then select "Credentials" from the left side navigation menu

6. On the "Credentials" page you have to click on the "Create credentials" button in the top side menu and in the drop-down list have to select "OAuth client ID"

7. After that you will be located on the "Create OAuth client ID" page you can see the "Configure consent screen" button

8. Click on  the "Configure consent screen" button

9. After that you will be located on the "OAuth consent page" where you should select the "External" radio button and then click the "Create" button

10. You will be relocated to the new page where you have to type the application name in the "Application name " field.  You shouldn't input the “Application logo” because in that case your application will be verified by Google in the next several weeks.  Also, you have to type default email in "User support email" field and type email in "Developer contact information" field end then click on "Save and continue" button

11. In part 2 of "OAuth consent screen" with the name "Scopes" click on the button "Add or remove scopes"

12. In the popup window you need to select scopes in the list of enabled APIs  or type a scope API needs for you  in the field with the name "Manually add scopes" and click on  the "Add to table" button and then "Update" button

13. Then the popup window will be closed and you can click on  the "Save and continue" button

14. And you will be relocated to the 3rd part with the name "Test users"

15. In the 3rd part you can add test users(for example your default email) by clicking on the "Add users" button and typing it in the popup window. And then click on the "Save and continue" button.

16. In the next 4th part named "Summary" you can see summary information of "OAuth consent screen" and click on the "Back to dashboard" button

17. After that we can create credentials. Click on "Credentials" in the left side menu and click on "Create credentials" in the top side menu and select "OAuth client ID" in the drop-down list.

18. On the next page "create OAuth client ID"  you have to select application type from the drop-down list.

19. Select "Web application" and then you will see another field and buttons. You can type your preferred name of a client or leave "Web client" in the  "Name field". Then in the "Authorized redirect URIs" place click the "Add URI" button and type in the field next URI: “https://developers.google.com/oauthplayground” without "/" at the end of the string. Then click on the "Create" button.

20. The next page and popup will show created credentials such as client ID and client secret. You can download a JSON file with credentials.

21.  Then open a new page in a browser and go to your authorized redirect URI (https://developers.google.com/oauthplayground)

22. On the "Step 1" screen select on the left side of the page your scope API (https://mail.google.com) or type it in the field under the list. Then click on the “gear” symbol at the right-top corner. In the "OAuth 2.0 configuration" popup select "Use your own OAuth credentials" and type your credentials in "OAuth Client ID" and "OAuth Client secret" fields. Then click on the "Close". Popup will be closed. 	And then click on the "Authorize APIs" button.

23. In the browser will be opened page "Sign in with Google" and you need to choose an account to continue to your application. you need to select an account with your default email and then in the authorized window click on "continue" and allow access to your account.

24. After that you will be returned to the "OAuth 2.0 Playground" page on "Step 2". You can see the “Authorizes code” and after clicking on "Exchange authorization code for token"  you will get "Refresh token" and "Access token"

25. This time you have all credentials
	  
