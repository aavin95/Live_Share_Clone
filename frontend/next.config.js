const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    webpack: (config, { isServer }) => {
        // Fix for monaco-editor
        if (!isServer) {
            config.plugins.push(
                new MonacoWebpackPlugin({
                    languages: ['javascript', 'typescript', 'go'],
                })
            );
        }
        return config;
    },
};
