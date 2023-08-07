// producer.js
const { Queue } = require('bullmq');
const { redisConfig } = require('./config');

const queueName = 'additionQueue';
const queue = new Queue(queueName, { connection: redisConfig });

const addJob = async (a, b,delay) => {
  return await queue.add('addition', { a, b },{delay});

};

module.exports = addJob;
