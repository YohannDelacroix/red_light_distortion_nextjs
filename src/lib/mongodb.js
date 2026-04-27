/***************************************************************
 * @file mongodb.js
 * @description
 * Handles MongoDB connection using Mongoose with caching.
 *
 * This module ensures a single MongoDB connection instance is reused
 * across requests, preventing multiple connections in development
 * and serverless environments.
 *
 * @dependencies
 * mongoose
 *
 * @environment
 * Requires MONGODB_URI to be defined in environment variables.
 *
 * @usage
 * Import and call connectToDatabase() before performing any
 * database operation.
 *
 * @author Yohann Delacroix
 ***************************************************************/

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
            return mongoose;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}