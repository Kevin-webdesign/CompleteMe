import { AdminPage } from "../../components/admin";
import { adminCustomers } from "../../data/mock-store";

export default function Page() {
  return <AdminPage eyebrow="Customers" records={adminCustomers} title="Manage Customers" />;
}
