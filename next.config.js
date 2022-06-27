const path = require('path');
const withTM = require('next-transpile-modules')([
    '@esotericsoftware/spine-player',
    '@esotericsoftware/spine-core',
    '@esotericsoftware/spine-webgl',
]);

module.exports = withTM({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
});
