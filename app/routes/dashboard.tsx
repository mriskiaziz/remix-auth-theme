// app/routes/dashboard.tsx
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

// Definisikan tipe untuk loader data
type LoaderData = {
    user: {
      email: string;
      id: string;
    };
  };
  

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return { user };
};

export default function DashboardPage() {
  const { user } = useLoaderData<LoaderData>(); 
  
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <form action="/logout" method="post">
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
