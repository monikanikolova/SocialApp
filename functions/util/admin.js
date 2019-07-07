const admin = require("firebase-admin");
const serviceAccount = require("../admin.json");
// Initialize admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialapp-861d8.firebaseio.com"
});
const db = admin.firestore();

module.exports = { admin, db };
