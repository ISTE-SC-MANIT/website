module.exports = {
    presets: [
        [
            "next/babel",
            {
                "preset-env": {},
                "transform-runtime": {},
                "styled-jsx": {},
                "class-properties": {}
            }
        ]
    ],
    plugins: [
        ['transform-import', {
          'libraryName': '@material-ui/core',
          'libraryDirectory': '',
          'camel2DashComponentName': false
      }, '@material-ui/core'],
      ['transform-import', {
          'libraryName': '@material-ui/styles',
          'libraryDirectory': '',
          'camel2DashComponentName': false
      }, '@material-ui/styles'],
      ['transform-import', {
          'libraryName': '@material-ui/icons',
          'libraryDirectory': '',
          'camel2DashComponentName': false
      }, '@material-ui/icons'],
    ["relay", {
        "artifactDirectory": "./components/megatreopuz/relay/__generated__"
    }],
        "@babel/plugin-transform-runtime"
    ]
};
