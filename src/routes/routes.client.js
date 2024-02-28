import {ClientLayout} from "../layouts";
import {SWScript,NWAScript, BGP, Home} from "../pages/Client";
const routesClient = [
    {
        path: "/home",
        layout: ClientLayout,
        component: Home,
    },
    {
        path: "/bgp",
        layout: ClientLayout,
        component: BGP,
    },
    {
        path: "/nwa-scripts",
        layout: ClientLayout,
        component: NWAScript,
    },
    {
        path: "/sw-scripts",
        layout: ClientLayout,
        component: SWScript,
    },
];

export default routesClient;