import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link href={"/admin"} className="listItem">
          <Image src="img/admin/home.svg" alt="" width={20} height={20} />
          <span className="listItemTitle">Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
