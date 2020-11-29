const { getPosts, getJWT, checkServers } = require("./fakeApi");

getPosts({verbose: true }).then(posts => console.log(posts));
getJWT({ verbose: true }).then(jwt => console.log(jwt));
checkServers({verbose: true}).then(serverStatus => console.log(serverStatus))