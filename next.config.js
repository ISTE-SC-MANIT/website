const path = require('path');
const webpack = require('webpack');
require("dotenv").config();

const {MEGATREOPUZ_SERVER} = process.env

module.exports = {
    env: {
        MEGATREOPUZ_SERVER 
    }
}