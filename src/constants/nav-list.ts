import { IconType } from "react-icons";
import { ImDatabase, ImHome } from "react-icons/im";
import { ROUTES } from "../routes/routes";


export const navbarDataMenu: INavbarData[] = [
    {
        icons: ImHome,
        path: ROUTES.HOME(),
        title : "Home",
    },
    {
        icons: ImDatabase,
        path: ROUTES.MASTER_DATA.BRAND(),
        title: "Master Data",

        children: [
            {
                title: "Brand",
                path : ROUTES.MASTER_DATA.BRAND()
            },
             {
                title: "Categories",
                path : ROUTES.MASTER_DATA.CATEGORIES()
            },
              {
                title: "Tag",
                path : ROUTES.MASTER_DATA.TAG()
            },
        ]
    }
]

export interface INavbarData {
  title: string;
  icons: IconType;
  path: string;
  children?: IChildrenNavbarData[];
}

interface IChildrenNavbarData {
  title: string;
  path: string;
}