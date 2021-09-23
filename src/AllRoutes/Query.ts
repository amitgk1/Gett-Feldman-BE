import myDB from "../core/controller/mssql";

export class Query {
    constractor() {

    }

    static async QueryRide(TransportationID: string) {
        return await myDB.execute(`SELECT AllPassengers FROM Rides WHERE TransportationID = '${TransportationID}'`);
    }

    static async QueryUser(identityCard: string) {
        const currentUserID = await myDB.execute(`SELECT UserID FROM Users WHERE IdentityCard = '${identityCard}'`);
        return await myDB.execute(`SELECT * FROM Rides WHERE AllPassengers LIKE "%'${currentUserID}'%"`);
    }
}

function isValidId(id: string) {
    return /$\d{10}^/.test(id);
}

