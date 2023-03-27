'use strict';

const winston = require('winston');

// Create a Logger object to save the logs
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'discord-bot' }, // Default info to add to each log
  transports: [ // Files where the logs will be saved
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// Save the logs in console
logger.add(new winston.transports.Console({
  format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  )
}));

module.exports = logger;
