import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { auth, db } from "./config";
import { UserProfile, UserRole } from "./types";

// Register a new user with Email/Password and store profile in Firestore
export async function registerUser(
  email: string,
  pass: string,
  name: string,
  role: UserRole = "customer"
): Promise<UserProfile> {
  const cred = await createUserWithEmailAndPassword(auth, email, pass);
  const uid = cred.user.uid;

  const profile: UserProfile = {
    uid,
    name,
    email,
    role,
    createdAt: serverTimestamp() as Timestamp,
  };

  // Save the profile inside the 'users' collection using UID as document ID
  await setDoc(doc(db, "users", uid), profile);
  return profile;
}

// Log in an existing user
export async function loginUser(email: string, pass: string): Promise<FirebaseUser> {
  const cred = await signInWithEmailAndPassword(auth, email, pass);
  return cred.user;
}

// Log out the current user
export async function logoutUser(): Promise<void> {
  await signOut(auth);
}

// Fetch a user profile from Firestore by UID
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const snapshot = await getDoc(doc(db, "users", uid));
  if (snapshot.exists()) {
    return snapshot.data() as UserProfile;
  }
  return null;
}