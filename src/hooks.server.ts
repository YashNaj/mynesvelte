//import mongo start command 
import { start_mongo } from '$db/mongo';
//auth imports 
import { auth } from "$lib/server/lucia"
import { handleHooks } from '@lucia-auth/sveltekit'

export const handle = handleHooks(auth);
start_mongo().catch(err=> {console.log(err)}).then(console.log('Mongo Started'))