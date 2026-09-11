import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { auth, db } from "./config";
import { UserProfile, UserRole } from "./types";

/**
 * Internal helper to create the user profile document in Firestore: users/{uid}
 */
async function createUserProfileDocument(
  user: User,
  name: string,
  role: UserRole,
  phone?: string
): Promise<UserProfile> {
  const userRef = doc(db, "users", user.uid);

  const profileData: UserProfile = {
    uid: user.uid,
    name,
    email: user.email || "",
    phone: phone || "",
    role,
    createdAt: serverTimestamp() as Timestamp,
  };

  await setDoc(userRef, profileData);
  return profileData;
}

/**
 * 1. Customer Signup
 */
export async function registerCustomer(
  email: string,
  password: string,
  name: string,
  phone?: string
): Promise<{ user: User; profile: UserProfile }> {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  const profile = await createUserProfileDocument(credential.user, name, "customer", phone);
  return { user: credential.user, profile };
}

/**
 * 2. Worker Signup
 */
export async function registerWorker(
  email: string,
  password: string,
  name: string,
  phone?: string
): Promise<{ user: User; profile: UserProfile }> {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  const profile = await createUserProfileDocument(credential.user, name, "worker", phone);
  return { user: credential.user, profile };
}

/**
 * 3. User Login
 */
export async function loginUser(email: string, password: string): Promise<User> {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

/**
 * 4. User Logout
 */
export async function logoutUser(): Promise<void> {
  await signOut(auth);
}

/**
 * 5. Retrieve Current User Profile & Role from Firestore
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return docSnap.data() as UserProfile;
}

/**
 * 6. Auth State Listener
 * Provides a subscription pattern for frontend auth guards/context.
 */
export function subscribeToAuthState(
  callback: (user: User | null, role: UserRole | null) => void
): () => void {
  return onAuthStateChanged(auth, async (user) => {
    if (!user) {
      callback(null, null);
      return;
    }

    const profile = await getUserProfile(user.uid);
    callback(user, profile ? profile.role : null);
  });
}