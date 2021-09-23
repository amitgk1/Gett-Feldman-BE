import myDB from "../core/controller/mssql";

export class Create {
	constractor() {

	}

	static async CreateUser(firstName: string, lastName: string, identityCard: string, userType: string, password: string, course?: string) {
		if (isValidId(identityCard)) {
			await myDB.execute(`INSERT INTO Users ([User Id],[FirstName],[LastName],[IdentityCard],[UserType],[CourseName],[Password]) VALUES (NEWID(), '${firstName}', '${lastName}', '${identityCard}', '${userType}', '${course}','${password}')`);
		}
	}

	static CreateRide(numberOfSeats: number, numberOfTakenSeats: number, driverName: string, driverPhone: string, routeId?: string) {
		myDB.execute(`INSERT INTO Rides (routeId, numberOfSeats, numberOfTakenSeats, driverName, driverPhone) VALUES ('${routeId}', '${numberOfSeats}', '${numberOfTakenSeats}', '${driverName}', '${driverPhone}')`);
	}

	static async CreatePassenger(transportationID: number, userID: number) {
		let transportationPassengers = await myDB.execute<string>(`SELECT AllPassengers FROM Rides WHERE TransportationID = '${transportationID}'`);
		let passengers = JSON.parse(transportationPassengers!.recordset[0]) as number[];
		passengers.push(userID);
		await myDB.execute(`UPDATE SET AllPassengers=${JSON.stringify(passengers)} FROM Rides WHERE TransportationID='${transportationID}'`)
	}

}

function isValidId(id: string) {
	return /^\d{9}$/.test(id);
}