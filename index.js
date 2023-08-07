// index.js
const addJob = require("./producer");

// Add jobs to the queue
const add = async () => {
  const ans = await addJob(0, 2, 5000);
  const ans1 = await addJob(0, 1, 4000);
  const ans2 = await addJob(0, 3, 6000);
  const ans3 = await addJob(0, 0, 1000);
};

add();
