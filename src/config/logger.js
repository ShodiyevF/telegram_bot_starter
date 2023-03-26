const winstonDaily = require('winston-daily-rotate-file');
const winston = require('winston');
const path = require('path');
const fs = require('fs');

const logDir = path.join(process.cwd(), process.env.LOG_DIR);

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logFormat = winston.format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`);

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        logFormat,
    ),
    transports: [
        new winstonDaily({
            level: 'debug',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir + '/debug',
            filename: '%DATE%.log',
            maxFiles: 30,
            json: false,
            zippedArchive: true,
        }),

        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir + '/error',
            filename: '%DATE%.log',
            maxFiles: 30,
            handleExceptions: true,
            json: false,
            zippedArchive: true,
        }),
    ],
});

logger.add(
    new winston.transports.Console({
        format: winston.format.combine(winston.format.splat(), winston.format.colorize()),
    }),
);

const stream = {
    write: message => {
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    },
};

module.exports = { logger, stream };
