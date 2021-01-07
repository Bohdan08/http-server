import { Categories, Devices, HomePage, Product, Types } from "../views";

const routes = [
  {
    path: "/",
    label: "Home",
    component: HomePage,
    routes: [
      {
        path: "/devices",
        label: "Devices",
        component: Devices,
        routes: [
          {
            path: "/:categories",
            label: "Categories",
            component: Categories,
            routes: [
              {
                path: "/:types",
                label: "Types",
                component: Types,
                routes: [
                  {
                    path: "/:product",
                    label: "Product",
                    component: Product,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
