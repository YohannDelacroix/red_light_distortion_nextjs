/***************************************************************
 * @file Newsletter.js
 * @description
 * Defines the Mongoose schema and model for newsletter subscribers.
 *
 * This model represents a newsletter subscription entry stored
 * in MongoDB. It includes user identity fields and ensures:
 * - required field validation
 * - email normalization (lowercase)
 * - uniqueness of email to prevent duplicates
 * - automatic timestamps (createdAt, updatedAt)
 *
 * @dependencies
 * mongoose
 *
 * @usage
 * Used by API routes to create and query newsletter subscribers
 * in the MongoDB database.
 *
 * @author Yohann Delacroix
 ***************************************************************/

import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Newsletter ||
    mongoose.model("Newsletter", NewsletterSchema);