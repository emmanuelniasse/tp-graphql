import { MongoMemoryServer } from 'mongodb-memory-server';

async function startMongoDBServer() {
  const mongod = new MongoMemoryServer({instance: {dbPath: './db', storageEngine: 'wiredTiger'}});
  await mongod.start()
  const uri = await mongod.getUri();
  console.log(`Serveur MongoDB démarré avec l'URI : ${uri}`);
}

startMongoDBServer();