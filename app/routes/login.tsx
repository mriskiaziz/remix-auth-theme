// app/routes/login.tsx
import { ActionFunction, LoaderFunction} from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

type ActionData = {
    error?: string;
  };

export const action: ActionFunction = async ({ request }) => {
  return authenticator.authenticate("form", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, { successRedirect: "/dashboard" });
  return null;
};

export default function LoginPage() {
  const actionData = useActionData<ActionData>();

  return (
    <div>
      <h1>Login</h1>
      <Form method="post">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password" >Password</label>
          <input type="password" name="password" required />
        </div>
        {actionData?.error ? <p>{actionData.error}</p> : null}
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}
