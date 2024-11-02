// app/services/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
import dotenv from 'dotenv';

dotenv.config();

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets : [process.env.SESSION_SECRET || 'default_secret'], 
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;
