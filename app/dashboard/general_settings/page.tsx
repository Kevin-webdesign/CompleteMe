import { AdminPage } from "../../components/admin";

const settings = [
  {
    name: "Store Identity",
    detail: "CompleteMe, modern fashion and lifestyle essentials.",
    status: "Active",
    value: "Live",
  },
  {
    name: "Payments",
    detail: "Checkout actions and tax display are configured for mock storefront previews.",
    status: "Mock",
    value: "Ready",
  },
  {
    name: "Notifications",
    detail: "Customer order updates, artisan chat prompts, and newsletter confirmations.",
    status: "Enabled",
    value: "3 flows",
  },
];

export default function Page() {
  return <AdminPage eyebrow="Settings" records={settings} title="General Settings" />;
}
