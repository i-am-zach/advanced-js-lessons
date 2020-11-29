function getPosts(options) {
  /* Simulates an API call that recieves posts from a database 
     This function takes between 0 and 5000ms to complete

    PARAMS
    ------
    options: object
        verbose: boolean
            Determines whether to print reminders when the function begins and ends 
            
    RETURNS
    -------
    promise<object>
        Returns a promise that contains a mock post json result */

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

function getJWT(options) {
  /* Simulates an API call that recieves a JWT from a webserver 
    This function takes between 0 and 5000ms to complete

    PARAMS
    ------
    options: object
        verbose: boolean
            Determines whether to print reminders when the function begins and ends 
            
    RETURNS
    -------
    promise<object>
        Returns a promise that contains a mock JWT object */

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

function checkServers(options) {
  /* Simulates checking how many servers are up and down on a system
    This function takes between 0 and 5000ms to complete

    PARAMS
    ------
    options: object
        verbose: boolean
            Determines whether to print reminders when the function begins and ends 
            
    RETURNS
    -------
    promise<object>
        Returns a promise when contains an object with mock information on how many servers are up and down */
        
  const { verbose } = options || {};
  const duration = Math.random() * 5000;
  if (verbose) console.log("Checking servers...");
  return new Promise((resolve) => {
    setTimeout(() => {
      const servers = 12;
      const down = Math.ceil(Math.random() * 5);
      if (verbose) console.log("Checked servers!");
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
