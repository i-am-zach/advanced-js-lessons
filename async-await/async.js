const { getPosts, getJWT, checkServers } = require("./fakeApi");

async function oneAfterAnother() {
  const posts = await getPosts({ verbose: true });
  console.log(posts);
  const jwt = await getJWT({ verbose: true });
  console.log(jwt);
  const serverStatus = await checkServers({ verbose: true });
  console.log(serverStatus);
}

function allAtOnce() {
    getPosts().then(posts => console.log(posts));
    getJWT().then(jwt => console.log(jwt));
    checkServers().then(serverStatus => console.log(serverStatus));
}

// Uncomment to run the code syncronously
// oneAfterAnother();

// Uncomment to run the code asyncronously
// allAtOnce();