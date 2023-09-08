import { parse } from "dotenv";
import { readFileSync } from "fs";

export interface Environment {
  MONGO_DB_URL: string;
  JWT_SECRET_PASSWORD: string;
}

export const environment: Environment = parse(readFileSync(`.env`)) as any;
