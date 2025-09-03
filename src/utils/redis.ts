import Redis from "ioredis";
import * as process from "node:process";

let redis: Redis;
declare global {
    var __redis__: Redis | undefined;
}

if(!global.__redis__) {
    global.__redis__ = new Redis(process.env.REDIS_URL!, {
        maxRetriesPerRequest: 2,
    });
}
redis = global.__redis__;

export default redis;
