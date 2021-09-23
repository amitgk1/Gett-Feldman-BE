import { DBOption } from "../core/controller";

export interface Config {
    port: number;
    db: DBOption
}

const mssqlConfig: DBOption = {
    name: "Gett-Feldman",
    server: "RONNIE_YOGA",
    user: "jarvis",
    password: "Aa123456"
}

enum ENVIRONMENTS {
    prod = "prod",
    dev = "dev"
}

const env = process.env.NODE_ENV || ENVIRONMENTS.dev;

const configOptions: Record<ENVIRONMENTS, Config> = {
    dev: {
        port: 5000,
        db: mssqlConfig
    },
    prod: {
        port: 80,
        db: mssqlConfig
    }
}

export default configOptions[env as ENVIRONMENTS];