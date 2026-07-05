import { AdminPage } from "../../components/admin";
import { adminProducts, adminStats } from "../../data/mock-store";

export default function Page() {
  return (
    <AdminPage
      eyebrow="Catalog"
      records={adminProducts}
      stats={adminStats}
      title="Manage Products"
    />
  );
}
