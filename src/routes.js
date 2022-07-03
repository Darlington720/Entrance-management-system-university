import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import Reports from "views/Report.js"
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import Tables from "views/Tables";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/students",
    name: "Students",
    icon: "nc-icon nc-diamond",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/visitors",
    name: "Visitors",
    icon: "nc-icon nc-pin-3",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/teaching-staff",
    name: "Teaching Staff",
    icon: "nc-icon nc-bell-55",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/support-staff",
    name: "Support Staff",
    icon: "nc-icon nc-single-02",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "nc-icon nc-tile-56",
    component: Reports,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin",
  },
];
export default routes;
