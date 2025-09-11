"use client"
const menus = [
  {
    name: "Home",
    path: "hero",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "Contact",
    path: "contact",
  },
];
const Navbar = () => {
  const handleScrollDown = (path: string) => {
    document.getElementById(path)?.scrollIntoView();
  };
  return (
    <nav className="flex justify-end">
      <ul className="flex gap-5">
        {menus.map((menu) => {
          return (
            <li
              key={menu.name}
              className="text-sm capitalize text-default-400 hover:text-primary transition-all duration-300 cursor-pointer"
              onClick={() => handleScrollDown(menu?.path)}
            >
              {menu.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
