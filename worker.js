// worker.js
const { Worker } = require("bullmq");
const { redisConfig } = require("./config");

const queueName = "additionQueue";

const worker = new Worker(
  queueName,
  async (job) => {
    const { a, b } = job.data;
    const addNumbers = require("./add");
    const result = addNumbers(a, b);
    console.log("result : ", result);
    return result;
  },
  { connection: redisConfig }
);
