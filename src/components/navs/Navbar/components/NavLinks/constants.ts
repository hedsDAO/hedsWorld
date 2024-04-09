export const TARGET = '_blank'
export const LINK_ELEMENT = 'a'
export interface NavLink {
  id: string;
  name: string;
  path: string;
  external: boolean;
}


export const NavLinks = [
  {
    id: "shop",
    name: "shop",
    path: "/shop",
    external: false,
  },
  {
    id: "events",
    name: "events",
    path: "https://heds.space",
    external: true,
  },
];