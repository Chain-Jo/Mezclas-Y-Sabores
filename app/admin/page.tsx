import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { isAdmin } from "@/lib/admin";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = async () => {
  const adminIds = isAdmin();

  const user = await currentUser();
  if (user != null) {
    if (!adminIds.includes(user.id)) {
      redirect("/");
    } else {
      return <App />;
    }
  } else {
    redirect("/");
  }
};

export default AdminPage;
