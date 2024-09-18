const { connect, StringCodec } = require("nats");

(async () => {
    const nc = await connect({ servers: "localhost:4222" });
    const sc = StringCodec();
    const sub = nc.subscribe("test-subject");    
  for await (const m of sub) {
    console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
  }
  console.log("subscription closed");
})();