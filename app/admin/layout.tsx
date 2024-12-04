import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Groomzy Admin",
  description: "Groomzy Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
