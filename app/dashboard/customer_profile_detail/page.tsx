import { AdminPage } from "../../components/admin";
import { adminCustomers, adminOrders } from "../../data/mock-store";

export default function Page() {
  return (
    <AdminPage
      eyebrow="Customer Profile"
      records={[...adminCustomers.slice(0, 1), ...adminOrders]}
      title="Sarah M."
    />
  );
}
