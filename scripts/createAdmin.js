#!/usr/bin/env node

/**
 * Create Admin User Script
 *
 * Usage: node scripts/createAdmin.js
 *
 * This script creates a super admin user in the database.
 */

const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function createAdmin() {
  console.log("\n🔐 Create Super Admin User\n");

  // Try to load .env.local manually
  const fs = require("fs");
  const path = require("path");

  try {
    const envPath = path.join(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      console.log("📄 Loading environment from .env.local");
      const envConfig = fs.readFileSync(envPath, "utf8");
      envConfig.split("\n").forEach((line) => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
          const key = match[1].trim();
          const value = match[2].trim().replace(/^["']|["']$/g, ""); // Remove quotes
          if (!process.env[key]) {
            process.env[key] = value;
          }
        }
      });
    }
  } catch (e) {
    console.log("⚠️ Could not load .env.local:", e.message);
  }

  // Get MongoDB connection details
  const mongoUri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || "portfolio";

  if (!mongoUri) {
    console.error("❌ Error: MONGODB_URI not found in environment variables");
    console.log("Please ensure .env.local exists or set MONGODB_URI manually.");
    process.exit(1);
  }

  try {
    // Get admin details
    const name = await question("Enter admin name: ");
    const email = await question("Enter admin email: ");
    const password = await question("Enter admin password: ");
    const confirmPassword = await question("Confirm password: ");

    if (password !== confirmPassword) {
      console.error("\n❌ Passwords do not match!");
      rl.close();
      process.exit(1);
    }

    if (password.length < 8) {
      console.error("\n❌ Password must be at least 8 characters long!");
      rl.close();
      process.exit(1);
    }

    console.log("\n⏳ Connecting to database...");

    // Connect to MongoDB
    const client = new MongoClient(mongoUri);
    await client.connect();
    const db = client.db(dbName);

    // Check if admin already exists
    const existingAdmin = await db.collection("admin_users").findOne({ email });
    if (existingAdmin) {
      console.error(`\n❌ Admin with email ${email} already exists!`);
      await client.close();
      rl.close();
      process.exit(1);
    }

    // Hash password
    console.log("🔒 Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin user
    console.log("💾 Creating admin user...");
    const result = await db.collection("admin_users").insertOne({
      name,
      email,
      password: hashedPassword,
      role: "admin",
      createdAt: new Date(),
      lastLogin: null,
    });

    console.log("\n✅ Super admin created successfully!");
    console.log("\nAdmin Details:");
    console.log(`  Name: ${name}`);
    console.log(`  Email: ${email}`);
    console.log(`  ID: ${result.insertedId}`);
    console.log("\n🎉 You can now login to the admin panel!");

    await client.close();
    rl.close();
  } catch (error) {
    console.error("\n❌ Error creating admin:", error.message);
    rl.close();
    process.exit(1);
  }
}

createAdmin();
