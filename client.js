const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: 'test-kafka-app',
    brokers: ['192.168.29.177:9092'],
  })