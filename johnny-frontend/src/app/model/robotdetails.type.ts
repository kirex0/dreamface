// Matches the database model for easy API calling
export type Robotdetails = {
    _id: string;
    name: string;
    status: string;
    lastUpdated: Date;
    firmwareVersion: string;
}

