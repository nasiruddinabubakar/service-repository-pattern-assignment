import Database, { IUser, UserRequestDto } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {

    public readonly _db = Database;

   public async createUser(username:UserRequestDto) {

        return this._db.create(username);
    }
}


