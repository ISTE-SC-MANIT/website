const path = require('path');
const webpack = require('webpack');
require("dotenv").config();

const {MEGATREOPUZ_SERVER} = process.env

module.exports = {
    webpack: config => {
        config.resolve.alias["./__generated__"] = path.resolve(__dirname, "components", "megatreopuz", "relay", "__generated__")
        return config;
    },
    env: {
        MEGATREOPUZ_SERVER 
    }
}