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
        // TODO: Set up transform
        // ["transform-imports",
        // {
        //     "@material-ui\/(core|icons|styles)": {
        //         transform: "@material-ui/${1}/${member}",
        //         preventFullImport: false
        //     }
        // }],
    ["relay", {
        "artifactDirectory": "./components/megatreopuz/relay/__generated__"
    }],
        "@babel/plugin-transform-runtime"
    ]
};
