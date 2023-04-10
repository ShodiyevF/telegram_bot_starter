require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const botModulesInitializer = require('./modules/bot/initializer.js');
const checkDatabase = require('./config/database.js');
const TelegramBot = require('node-telegram-bot-api');
const { stream } = require('./config/logger.js');
const CORS_OPTIONS = require('./config/cors.js');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

async function app(routes) {
    const app = express();
    const port = process.env.PORT || 3000;
    const action = process.env.NODE_ENV || 'development';

    function lister() {
        console.info('=================================');
        console.info(`======= ENV: ${action} ========`);
        console.info(`🚀 Bot succesfully running `);;

        app.listen(port, () => {
            console.info(`🚀 App listening on the port ${port}`);
            console.info('=================================');
        });
    }

    function initializeMiddlewares() {
        app.use(morgan(process.env.LOG_FORMAT, { stream }));
        app.use(cors(CORS_OPTIONS));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
    }

    function initializeTelegramBot() {
        const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
        botModulesInitializer(bot);
    }

    function initializeRoutes(routes) {
        routes.forEach(route => {
            app.use(route);
        });
    }

    async function runner() {
        await checkDatabase();
        await initializeMiddlewares();
        await initializeRoutes(routes);
        await initializeTelegramBot();
        await lister();
    }

    runner();
}

module.exports = app;
