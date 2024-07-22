const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  await admin.connect();
  console.log("Adming Connection Success...");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [rider-updates]");

  await admin.disconnect();
}

init();