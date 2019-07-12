let db = {
  screams: [
    {
      userHandle: "user",
      body: "scream body",
      createdAt: "2019-07-04T21:28:22.648Z",
      likeCount: 5,
      commentCount: 5
    }
  ],
  users: [
    {
      userId: "skjgdsft643hy34673489",
      email: "some@email.com",
      handle: "user",
      createdAt: "2019-07-04T21:28:22.648Z",
      imageUrl: "image/73576358.png",
      bio: "Hello my name is...",
      website: "https://user.com",
      location: "Destin, USA"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "uhsrgeu5785478yhtrgs",
      type: "like | comment",
      createdAt: "2019-07-04T21:28:22.648Z"
    }
  ],
  comments: [
    {
      userHandle: "user",
      scremId: "hakjshjsf3478454",
      body: "Awesome!",
      createdAt: "2019-07-04T21:28:22.648Z"
    }
  ]
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "skjgdsft643hy34673489",
    email: "some@email.com",
    handle: "user",
    createdAt: "2019-07-04T21:28:22.648Z",
    imageUrl: "image/73576358.png",
    bio: "Hello my name is...",
    website: "https://user.com",
    location: "Destin, USA"
  },
  likes: [
    {
      userHandle: "user",
      scremId: "745973uhjsfdbd"
    },
    {
      userHandle: "user2",
      scremId: "7afjhbsfhdbd"
    }
  ]
};
