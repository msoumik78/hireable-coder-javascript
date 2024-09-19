# Functionality : Javascript based consumer of NATS 
This repo contains a javascript based nats consumer which is run in the Nodejs runtime


# Technical details and Pre-requisites
- Written using Javascript.
- Leverages the nats package for nodejs
- Ensure that you have downloaded NATS for your OS and started the NATS server locally. NATS can be downloaded from [here](https://github.com/nats-io/nats-server/releases/) corresponding to your OS.
- Also the java based nats [producer](https://github.com/msoumik78/hireable-coder-java/tree/nats-producer) should be running and should send a message to the subject.



# How to run locally
- Clone / checkout this branch (nats-consumer) to your laptop
- Ensure that latest version of node is available
- Now install all modules using the command:
  (`npm install`)
- Now run the app using the below command :
  (`node nats-consumer.js`)
- Verify in the console that it has received the message from the java based nats producer.
