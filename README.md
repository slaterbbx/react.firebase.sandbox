### A few points 

You need a firebase account and firebase credentials + firebase CLI to get the login working locally.<br>

## setup your firebase

create a credentials-fire.js file in the ./src/ folder that exports a default object like so.<br>
`
export default {
    apiKey: 'YOUR_API_KEY_HERE',
    authDomain: 'vegiburgerco.firebaseapp.com',
    databaseURL: 'https://vegiburgerco.firebaseio.com',
    projectId: 'vegiburgerco',
    storageBucket: 'vegiburgerco.appspot.com',
    messagingSenderId: "28328392"
}
`
<br>

run 'firebase init' once you have the firebase cli installed globally <br>
https://firebase.google.com/docs/cli/ <br>

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
