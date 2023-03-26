const CORS_OPTIONS = {
    origin: function (origin, callback) {
        console.info('CORS origin:', origin);
        if (callback) {
            console.info(`CORS origin: ${origin} -> ${process.env.ORIGIN}`);
            callback(null, process.env.ORIGIN);
        } else {
            console.info('CORS callback: undefined');
        }
    },
    methods: ['GET', 'HEAD', 'POST', 'PATCH', 'DELETE', 'PUT'],
    credentials: process.env.CREDENTIALS === 'true',
    preflightContinue: true,
    optionsSuccessStatus: 200,
};

module.exports = CORS_OPTIONS;
