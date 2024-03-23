export interface NavLink {
  id: string;
  name: string;
  path: string;
  external: boolean;
}

export const NavLinks = [
  {
    id: "shop",
    name: "SHOP",
    path: "/shop",
    external: false,
  },
  {
    id: "events",
    name: "EVENTS",
    path: "https://heds.space",
    external: true,
  },
  // {
  //   id: "about",
  //   name: "ABOUT",
  //   path: "/about",
  //   external: false,
  // },
];
