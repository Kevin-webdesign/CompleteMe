import { AdminPage } from "../../components/admin";
import { adminOrders, adminStats } from "../../data/mock-store";

export default function Page() {
  return (
    <AdminPage
      eyebrow="Store Overview"
      records={adminOrders}
      stats={adminStats}
      title="Dashboard Overview"
    />
  );
}
