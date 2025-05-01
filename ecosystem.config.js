module.exports = {
    apps: [
        {
            name: "OmoCommnuityOfficialWebsite",
            script: "bun",
            args: "start",
            cwd: "./",
            env: {
                NODE_ENV: "production",
                PORT: 4000,
            },
        },
    ],
};
