const functions = require("firebase-functions");
const admin = require("firebase-admin");
const twilio = require("twilio");

// Initialize Firebase admin SDK
admin.initializeApp();

// Get Twilio credentials from environment variables
const accountSid = functions.config().twilio.sid;
const authToken = functions.config().twilio.token;
const client = twilio(accountSid, authToken);

// Specify the phone number to send updates to
const notificationPhoneNumber = "+917060975127"; // Your phone number


exports.sendOrderNotification = functions.firestore
  .document("Order-Details/{orderId}")
  .onCreate((snapshot, context) => {
    const orderData = snapshot.data();
    const messageBody = `New Order Received from ${orderData.user}. Pickup Time: ${orderData.pickUpTime}`;

    
    return client.messages
      .create({
        body: messageBody,
        from: functions.config().twilio.phone, 
        to: notificationPhoneNumber,
      })
      .then((message) => {
        console.log(`SMS sent with SID: ${message.sid}`);
      })
      .catch((error) => {
        console.error("Error sending SMS:", error);
      });
  });
