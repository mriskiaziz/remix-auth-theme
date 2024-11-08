// app/routes/logout.tsx
import { ActionFunction} from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/login" });
};

export default function Logout() {
  return null;
}
