import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { DB_NAME, DB_HOST_URL } from '../config.ts';

class DB {
  public client: MongoClient;
  constructor(public dbName: string, public url: string) {
    this.dbName = dbName;
    this.url = url;
    this.client = {} as MongoClient;
  }
  connect() {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }
  get getDatabase() {
    return this.client.database(this.dbName);
  }
}

const db = new DB(DB_NAME, DB_HOST_URL);
db.connect();

export default db;