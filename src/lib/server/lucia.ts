import lucia from "lucia-auth"
import mongoose from "mongoose"
import { dev } from "$app/environment"
import adapter from "@lucia-auth/adapter-mongoose";


export const auth = lucia({
    adapter: adapter(mongoose),
    env: dev ? "DEV" : "PROD"
})
export type Auth = typeof auth;