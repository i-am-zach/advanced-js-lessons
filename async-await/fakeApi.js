/**
 * Simulates an API call that recieves posts from a database. This function takes between 0 and 5000ms to complete
 *
 * @param {{verbose: boolean }} options - Key-pair values that determine functionallity of the function
 * @param {boolean} options.verbose - Determines whether to log at the beginning and end of the function call
 * @returns {Promise<{downtime: number, posts: Array}>} - A promise that contains a mock api get method
 */
function getPosts(options) {
  const { verbose } = options || {};
  if (verbose) console.log("Getting posts from database");
  // Take anywhere from 0 to 5000 milliseconds to get posts
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

/**
 * Simulates an API call that generates a JWT (JavaScript Web Token). This function takes between 0 and 5000ms to complete
 *
 * @param {{verbose: boolean }} options - Key-pair values that determine functionallity of the function
 * @param {boolean} options.verbose - Determines whether to log at the beginning and end of the function call
 * @returns {Promise<{downtime: number, posts: Array}>} - A promise that contains a mock JWT
 */
function getJWT(options) {
  const { verbose } = options || {};
  const duration = Math.random() * 5000;
  if (verbose) console.log("Getting JavaScript Web Token...");
  return new Promise((resolve) => {
    setTimeout(() => {
      if (verbose) console.log("Successfully recieved JavaScript Web Token!");
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

/**
 * Simulates checking on 12 servers that are running on an organized system
 *
 * @param {{verbose: boolean }} options - Key-pair values that determine functionallity of the function
 * @param {boolean} options.verbose - Determines whether to log at the beginning and end of the function call
 * @returns {Promise<{downtime: number, serverStatus: {total: number, up: number, down: number }}>} - A promise that contains a mock system update
 */
function checkServers(options) {
  const { verbose } = options || {};
  const duration = Math.random() * 5000;
  if (verbose) console.log("Checking servers...");
  return new Promise((resolve) => {
    setTimeout(() => {
      const servers = 12;
      const down = Math.ceil(Math.random() * 5);
      if (verbose) console.log("Checked servers!");
      resolve({
        downtime: duration,
        serverStatus: {
          total: servers,
          up: servers - down,
          down: down,
        },
      });
    }, duration);
  });
}

module.exports = {
  getPosts,
  getJWT,
  checkServers,
};
