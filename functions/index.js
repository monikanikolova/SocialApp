const functions = require("firebase-functions");
const firebase = require("firebase");
const app = require("express")();
const FBAuth = require("./util/FBAuth");

const {
  getAllScreams,
  postOneScream,
  getScream,addComment
} = require("./handlers/screams");
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
app.get("/scream/:screamId", getScream);
// TODO: delete scream
// TODO: like a scream
// TODO: unlike scream
app.post('/scream/:screamId/comment', FBAuth, addComment)
// User routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
