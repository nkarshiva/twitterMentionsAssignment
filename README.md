# Frontend Assignment Solution 🚀

Project: Mentions component
Time provided: 2 hours
Tech stack: React + Typescript
Link to design: [Design](https://www.figma.com/file/EEmRktq44VPR3u8Lx7otOJ/Frontend-Assignment---Dropdown?type=design&t=YyUdu9qHBb3sS66T-6)

Description
This is similar to the @-mentions in X/Twitter. The user can type any text in the input element but when user types `@` then a select box should appear from which they can select an option and it should be displayed in input element. For example `Hi @Luke Skywalker may the force be with you.`. An `onChange` handler should be triggered with the input and the options selected, in a format of your choice.
 
*** How to run the solution ***
- Fork the repo in the sytem in your desired loaction
- After going inside the main folder run npm install/ yarn install it     will download the required libraries
- Hit npm run dev command to start the app
- The app will by default start on "http://127.0.0.1:5173/"
- In your browser open the above url to test the functionality

*** Test Cases ***
- On typing the text in textbox the required text should appear
- When the text contains "@" symbol it should display a list of mentions from a list below the textbox
- On selecting a mention from the list the mention should appear in the text box after replacing the text after "@" entered by user
- Further typing can be done unless encountered another "@" symbol which will open the mentions dropdown again
- The mentions should show only those items in list which is after "@"

*** Edge Cases ***
- If user wants to enter more than one mention there should be provision for it and it is handled.
- The already mentioned user can come up in the mentions dropdown even if the user types any other text, it is handled in the code.
- The textbox should be on foucs after a mnetion is selected
 
