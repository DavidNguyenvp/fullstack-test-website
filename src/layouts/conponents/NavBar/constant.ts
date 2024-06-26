import { Menu } from "@/types/app";

export const PAGE_MENU: Menu[] = [
  {
    id: "shop",
    name: "shop",
    link: "/shop",
    subMenu: [],
  },
  {
    id: "recipes",
    name: "recipes",
    link: "/recipes/bread/quick-bread",
    subMenu: [
      {
        id: "categories",
        name: "Categories",
        link: "/recipes/categories",
        subMenu: [],
      },
      {
        id: "collections",
        name: "Collections",
        link: "/recipes/collections",
        subMenu: [],
      },
      {
        id: "resources",
        name: "Resources",
        link: "/recipes/resources",
        subMenu: [],
      },
    ],
  },
  {
    id: "learn",
    name: "learn",
    link: "/learn",
    subMenu: [],
  },
  {
    id: "about",
    name: "about",
    link: "/about",
    subMenu: [],
  },
  {
    id: "blog",
    name: "blog",
    link: "/blog",
    subMenu: [],
  },
];
