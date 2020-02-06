module.exports = {
    src: "./",
    schema: "megatreopuz.graphql",
    exclude: ["**/node_modules/**"],
    extentions: ["ts", "tsx"],
    language: "typescript", 
    artifactDirectory:  "./components/megatreopuz/relay/__generated__",
    customScalars: {
        Timestamp: "String"
    }
}