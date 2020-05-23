const env = Deno.env;

export const APP_HOST = env.get('APP_HOST') || "127.0.0.1";
export const APP_PORT = env.get('APP_PORT') || 4000;

export const DB_NAME = env.get("DB_NAME") || "test";
export const DB_HOST_URL = env.get("DB_HOST_URL") || "mongodb+srv://iravitejakumar:teju1616@cluster0-okuhj.mongodb.net/test?retryWrites=true&w=majority";