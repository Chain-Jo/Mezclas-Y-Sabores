import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const admin = await currentUser();
  if (admin != null) {
    return (
      <div className="navbar">
        <div className="logo">
          <Image src="img/admin/logo.svg" alt="logo" width={20} height={20} />
          <span>Admin</span>
        </div>
        <div className="icons">
          <Image src="img/admin/search.svg" alt="logo" width={20} height={20} />
          <Image src="img/admin/app.svg" alt="logo" width={20} height={20} />
          <Image src="img/admin/expand.svg" alt="logo" width={20} height={20} />
          <div className="user">
            <Image src={admin.imageUrl} alt="logo" width={20} height={20} />
            <span>{admin.fullName}</span>
          </div>
          <Image src="img/admin/search.svg" alt="logo" width={20} height={20} />
        </div>
      </div>
    );
  }
};

export default Navbar;
