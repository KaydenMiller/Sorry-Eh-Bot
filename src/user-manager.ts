import { MongoClient } from "mongodb";

export default class UserManager {
    public static addPoints(points: number, userId: string): void {
        console.log(`Add ${points} point(s) from ${userId}`);
    }

    public static removePoints(points: number, userId: string): void {
        console.log(`Remove ${points} point(s) from ${userId}`);
    }

    public static getPoints(): number {
        return 0;
    }
}
