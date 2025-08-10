import Link from "next/link"

const menus = [
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Projects",
    path: "/projects"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]
const Navbar = () => {
  return (
    <nav className="flex justify-end">
      <ul className="flex gap-5">
        {menus.map((menu) => {
          return (
            <li key={menu.name}>
              <Link href={menu.path} className="text-base text-gray-200 hover:text-primary transition-all duration-300 ">{menu.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar