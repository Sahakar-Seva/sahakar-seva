declare const process: {
  env: {
    [key: string]: string | undefined;
  };
  exit: (code?: number) => never;
};

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { auth, db } from "./config";
import { UserProfile } from "./types";

async function createAdminUser() {
  const adminEmail = "admin@test.com";
  const adminPassword = "AdminSecurePassword123!";
  const adminName = "System Administrator";

  console.log(`Creating administrative user: ${adminEmail}...`);

  try {
    const credential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
    const uid = credential.user.uid;

    const adminProfile: UserProfile = {
      uid,
      name: adminName,
      email: adminEmail,
      role: "admin",
      createdAt: serverTimestamp() as Timestamp,
    };

    await setDoc(doc(db, "users", uid), adminProfile);

    console.log("Admin account successfully provisioned!");
    console.log(`UID: ${uid}`);
    console.log(`Role: ${adminProfile.role}`);
    process.exit(0);
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      console.log("Admin user already exists in Firebase Auth. Skipping creation.");
      process.exit(0);
    } else {
      console.error("Failed to create admin user:", error);
      process.exit(1);
    }
  }
}

createAdminUser();