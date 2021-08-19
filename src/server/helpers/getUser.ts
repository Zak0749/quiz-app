import { ObjectId } from 'mongodb';
import db from '../db/get';

async function getUser(id: string | ObjectId): Promise<usercol | undefined> {
  if (!id) return undefined;
  const users = await db.users;
  const user = await users.findOne({ _id: new ObjectId(id) }) as usercol;
  return user;
}

export default getUser;
