import Dashboard from "../views/Dashboard/Dashboard.jsx";
import Notifications from "../views/Notifications/Notifications.jsx";
import Icons from "../views/PatientInfo/Patients.jsx";
import Typography from "../views/Typography/Typography.jsx";
import TableList from "../views/TableList/TableList.jsx";
import Upgrade from "../views/Upgrade/Upgrade.jsx";
import UserPage from "../views/UserPage/UserPage.jsx";
import PatientInfo from "../views/PatientInfo/PatientInfo.jsx";

var dashRoutes = [
    {path: "/patients", name: "Patients", icon: "design_image", component: Icons},
    {
        path: "/user-info",
        name: "Patient Info",
        icon: "users_single-02",
        component: PatientInfo
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "design_app",
        component: Dashboard
    },

    {
        path: "/notifications",
        name: "Notifications",
        icon: "ui-1_bell-53",
        component: Notifications
    },
    {
        path: "/user-page",
        name: "User Profile",
        icon: "users_single-02",
        component: UserPage
    },
    /*{
        path: "/extended-tables",
        name: "Table List",
        icon: "files_paper",
        component: TableList
    },*/
    /*{
        path: "/typography",
        name: "Typography",
        icon: "design-2_ruler-pencil",
        component: Typography
    },*/

    // {
    //     pro: true,
    //     path: "/upgrade",
    //     name: "Upgrade to PRO",
    //     icon: "objects_spaceship",
    //     component: Upgrade
    // },
    {redirect: true, path: "/", pathTo: "/patients", name: "Patients"}
];
export default dashRoutes;
