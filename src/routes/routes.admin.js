import {HomeAdmin} from '../pages/Admin/HomeAdmin';
import {AdminLayout} from "../layouts";

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
    },
];

export default routesAdmin;