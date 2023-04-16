const fs = require('node:fs');
const path = require("node:path");

module.exports = (client, Discord) => {
    const eventsPath = path.join(process.cwd(), "events");
    const eventsFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));
    for (const eventsFile of eventsFiles) {
        const eventsFilePath = path.join(eventsPath, eventsFile);
        const event = require(eventsFilePath);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client, Discord));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client, Discord));
        }
    }

    const LoggerPath = path.join(process.cwd(), "events/Logger");
    const LoggerFiles = fs.readdirSync(LoggerPath).filter(file => file.endsWith(".js"));
    for (const LoggerFile of LoggerFiles) {
        const LoggerFilePath = path.join(LoggerPath, LoggerFile);
        const Logger = require(LoggerFilePath);
        if(Logger.once) {
            client.once(Logger.name, (...args) => Logger.execute(...args, client, Discord));
        } else {
            client.on(Logger.name, (...args) => Logger.execute(...args, client, Discord));
        }
    }
}