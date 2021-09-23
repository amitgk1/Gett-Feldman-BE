import sql, { ConnectionPool } from "mssql";
import config from "../../config";

class MSSQL {
    pool: ConnectionPool
    poolConnection: Promise<ConnectionPool>


    constructor() {
        this.pool = new sql.ConnectionPool({
            database: config.db.name,
            server: config.db.server,
            user: config.db.user,
            password: config.db.password,
            options: {
                trustServerCertificate: true
            }
        })
        this.poolConnection = this.pool.connect();
    }

    async execute<T>(executionString: string) {
        await this.poolConnection;
        try {
            const request = this.pool.request();
            return request.query<T>(executionString);
        } catch (err) {
            console.error(err);
        }
    }
}

export default new MSSQL();