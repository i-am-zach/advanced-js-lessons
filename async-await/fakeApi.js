const { resolve } = require("bluebird");

function getPosts(options) {
  const { verbose } = options || {};
  if (verbose) console.log("Getting posts from database");
  const duration = Math.random() * 5000;
  const data = {
    downtime: duration,
    posts: [
      {
        _id: 1,
        title: "My first post",
      },
      {
        _id: 2,
        title: "My second post",
      },
    ],
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      if (verbose) console.log("Successfully posts from database!");
      resolve(data);
    }, duration);
  });
}

function getJWT(options) {
  const { verbose } = options || {};
  const duration = Math.random() * 5000;
  if (verbose) console.log("Getting JavaScript Web Token");
  return new Promise((resolve) => {
    setTimeout(() => {
      if (verbose) console.log("Successfully recieved JavaScript Web Token");
      resolve({
        downtime: duration,
        kty: "RSA",
        n: "0vx7agoebGc...KnqDKgw",
        e: "AQAB",
        alg: "RS256",
        use: "sig",
      });
    }, duration);
  });
}

function checkServers({ verbose }) {
  const duration = Math.random() * 5000;
  if (verbose) console.log("Checking servers...");
  return new Promise((resolve) => {
    setTimeout(() => {
      const servers = 12;
      const down = Math.ceil(Math.random() * 5);
      console.log("Checked servers!");
      resolve({
        total: servers,
        up: servers - down,
        down: down,
      });
    }, duration);
  });
}

module.exports = {
  getPosts,
  getJWT,
  checkServers,
};
