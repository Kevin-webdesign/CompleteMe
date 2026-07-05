import { AdminPage } from "../../components/admin";
import { adminReviews } from "../../data/mock-store";

export default function Page() {
  return <AdminPage eyebrow="Community" records={adminReviews} title="Manage Reviews" />;
}
