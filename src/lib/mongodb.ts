import { MongoClient, Db } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const uri: string = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Helper function to get database
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  // Use MONGODB_DB env variable, or extract from URI, or use default 'portfolio'
  const dbName =
    process.env.MONGODB_DB || extractDbNameFromUri(uri) || "portfolio";
  return client.db(dbName);
}

// Extract database name from MongoDB URI if present
function extractDbNameFromUri(uri: string): string | null {
  try {
    // MongoDB URI format: mongodb://[username:password@]host[:port]/[database][?options]
    // or mongodb+srv://[username:password@]host/[database][?options]
    const match = uri.match(/\/([^/?]+)(\?|$)/);
    return match && match[1] ? match[1] : null;
  } catch {
    return null;
  }
}
