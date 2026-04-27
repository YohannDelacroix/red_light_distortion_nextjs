/***************************************************************
 * @file route.js
 * @description
 * API route to handle newsletter subscriptions.
 *
 * This endpoint receives POST requests containing newsletter user data
 * (name, city, email), validates the input, and stores the
 * subscription in MongoDB.
 *
 * Features:
 * - Input validation (required fields)
 * - Email normalization
 * - Duplicate prevention based on email
 * - Error handling with appropriate HTTP status codes
 *
 * @route
 * POST /api/newsletter
 *
 * @dependencies
 * next/server
 * mongodb connection (lib/mongodb)
 * Newsletter model
 *
 * @usage
 * Called from frontend forms to register new newsletter subscribers.
 *
 * @author Yohann Delacroix
 ***************************************************************/

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";

export async function POST(req) {
    try {
        const { name, city, email } = await req.json();

        if (!name || !city || !email) {
            return NextResponse.json(
                { message: "Missing required fields." },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const existingSubscriber = await Newsletter.findOne({
            email: email.toLowerCase(),
        });

        if (existingSubscriber) {
            return NextResponse.json(
                { message: "This email is already subscribed." },
                { status: 409 }
            );
        }

        await Newsletter.create({
            name,
            city,
            email,
        });

        return NextResponse.json(
            { message: "Subscription successful." },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Server error." },
            { status: 500 }
        );
    }
}