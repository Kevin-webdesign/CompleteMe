import { AdminPage } from "../../components/admin";
import { adminOrders } from "../../data/mock-store";

export default function Page() {
  return <AdminPage eyebrow="Fulfillment" records={adminOrders} title="Manage Orders" />;
}
