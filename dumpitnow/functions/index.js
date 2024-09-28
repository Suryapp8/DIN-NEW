const functions = require("firebase-functions");
const admin = require("firebase-admin");
const twilio = require("twilio");

// Initialize Firebase admin SDK
admin.initializeApp();

// Twilio credentials
const accountSid = "your_twilio_account_sid";
const authToken = "your_twilio_auth_token";
const client = twilio(accountSid, authToken);

// Specify the phone number to send updates to
const notificationPhoneNumber = "+917060975127"; // Your phone number

// Firestore trigger for new orders
exports.sendOrderNotification = functions.firestore
  .document("Order-Details/{orderId}")
  .onCreate((snapshot, context) => {
    const orderData = snapshot.data();
    const messageBody = `New Order Received from ${orderData.user}. Pickup Time: ${orderData.pickUpTime}`;

    // Send SMS via Twilio
    return client.messages
      .create({
        body: messageBody,
        from: "your_twilio_phone_number", // Replace with your Twilio number
        to: notificationPhoneNumber,
      })
      .then((message) => {
        console.log(`SMS sent with SID: ${message.sid}`);
      })
      .catch((error) => {
        console.error("Error sending SMS:", error);
      });
  });
