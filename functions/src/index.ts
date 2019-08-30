import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const receiveMessage = functions.https.onRequest((request, response) => {
  console.log(request.headers);
  console.log(request.url);
  console.log(request.body);
  response.send("OK");
});
