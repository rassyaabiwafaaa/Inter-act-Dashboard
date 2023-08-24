import { HomeIcon, LogoutIcon, NotificationsIcon, ReportsIcon, SettingsIcon } from "../assets/icons";
import { Eclipse, Trophy, Calendar, Revenue, Wallet } from "../assets/images";

export const sideBarMenu = [
  {
    icons: HomeIcon,
    text: "Home",
    path: "/",
  },
  {
    icons: ReportsIcon,
    text: "Reports",
    path: "/",
  },
  {
    icons: NotificationsIcon,
    text: "Notifications",
    path: "/",
  },
  {
    icons: SettingsIcon,
    text: "Settings",
    path: "/",
  },
  {
    icons: LogoutIcon,
    text: "Logout",
    path: "/",
  },
];

export const summaryItem = [
  {
    icons: Eclipse,
    text: "Total Cost",
    value: "$31.868",
  },
  {
    icons: Trophy,
    text: "Total Sales",
    value: "$66,053",
  },
  {
    icons: Calendar,
    text: "This Week",
    value: "$35,000,00",
  },
  {
    icons: Revenue,
    text: "Revenue",
    value: "$63,00k",
  },
  {
    icons: Wallet,
    text: "Last Payment",
    value: "$1250",
  },
];

export const footerItems = [
  {
    text: "Privacy Policy",
  },
  {
    text: "Terms of Use",
  },
];
