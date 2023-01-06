import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private'
const client = new MongoClient(MONGO_URI)
await client.connect().catch(err => console.log(err)).then(console.log('Succesfully connected'))
export function start_mongo(){
    console.log('Starting Mongo...');
    return client.connect();
}
export default client.db('myne') 
const User = mongoose.model(
	"user",
	new mongoose.Schema(
		{
			_id: {
				type: String
			},
			provider_id: {
				type: String,
				unique: true,
				required: true
			},
			hashed_password: String
		},
		{ _id: false }
	)
);
const Session = mongoose.model(
	"session",
	new mongoose.Schema(
		{
			_id: {
				type: String
			},
			user_id: {
				type: String,
				required: true
			},
			expires: {
				type: Number,
				required: true
			},
			idle_expires: {
				type: Number,
				required: true
			}
		},
		{ _id: false }
	)
);
