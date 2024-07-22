https://www.youtube.com/watch?v=ZJJHm_bd9Zo&t=619s

https://gist.github.com/piyushgarg-dev/32cadf6420c452b66a9a6d977ade0b01

https://kafka.js.org/docs/getting-started

Start Zookeper Container and expose PORT 2181.
docker run -p 2181:2181 zookeeper
Start Kafka Container, expose PORT 9092 and setup ENV variables.
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka