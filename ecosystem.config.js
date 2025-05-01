module.exports = {
    apps: [
        {
            name: "OmoCommnuityOfficialWebsite",
            script: "./server.js",
            exec_mode: "fork",
            instances: "1",
            env: {
                NODE_ENV: "production",
                PORT: 4000,
            },
        },
    ],
};
