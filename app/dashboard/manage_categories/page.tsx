import { AdminPage } from "../../components/admin";
import { adminCategories } from "../../data/mock-store";

export default function Page() {
  return <AdminPage eyebrow="Catalog" records={adminCategories} title="Manage Categories" />;
}
