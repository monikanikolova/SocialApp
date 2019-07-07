const functions = require("firebase-functions");
const firebase = require("firebase");
const app = require("express")();
const FBAuth = require("./util/FBAuth");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const {
  login,
  signup,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser 
} = require("./handlers/users");

//Scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

// User routes
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.https.onRequest(app);
