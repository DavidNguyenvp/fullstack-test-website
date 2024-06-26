export type Menu = {
  id: string;
  name: string;
  link: string;
  subMenu: Menu[];
};

export type Time = {
  prep: string;
  bake: string;
  total: string;
}

export type Product = {
  id: string;
  title: string;
  content: string;
  time: Time;
  yield: string;
  image: string;
}