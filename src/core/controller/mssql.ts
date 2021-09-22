import sql, { ConnectionPool } from "mssql/msnodesqlv8";
import config from "../config";

class MSSQL {
    connection: ConnectionPool

    constructor() {
        this.connection = new sql.ConnectionPool({
            database: config.db.name,
            server: config.db.server,
            driver: "msnodesqlv8",
            options: {
                trustedConnection: true
            }
        })
    }

    execute(executionString: string) {
        return this.connection.query(executionString);
    }
}