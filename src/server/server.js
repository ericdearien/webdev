const router =  require('./endpoints/router.js');
const config = require("../config/config.json");
const env = process.env.NODE_ENV;
const configuration = config[env]

router.listen(configuration.port, () => {
    console.log(`App running on port ${configuration.port}`);
});
