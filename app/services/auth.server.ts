// app/utils/auth.server.ts
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "./session.server";

type User = {
  id: string;
  email: string;
};

export const authenticator = new Authenticator<User>(sessionStorage);

// Menyimpan strategi form-based untuk login email dan password
authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email");
    const password = form.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      throw new AuthorizationError("Invalid form data");
    }

    // Logika verifikasi login
    const user = await login(email, password);
    if (!user) {
      throw new AuthorizationError("Invalid email or password");
    }

    return user;
  })
);

// Fungsi login sederhana
async function login(email: string, password: string): Promise<User | null> {
  // Gantilah dengan logika login Anda sendiri
  if (email === "test@example.com" && password === "password") {
    return { id: "1", email };
  }
  return null;
}
