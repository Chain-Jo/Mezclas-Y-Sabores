import Navbar from "@/components/admin/navbar";
import Footer from "@/components/admin/footer";
import Menu from "@/components/admin/menu";

export default async function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="admin">
      <div className="main">
        <Navbar />
        <div className="adminContainer">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
          {children}
          </div>
        </div>
        <Footer />
      </div>
    </section>
    
  );
}
