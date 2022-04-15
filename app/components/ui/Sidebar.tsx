import { Link } from "@remix-run/react"

const sections = [
  { name: "Imagenes", link: "/images" },
  { name: "Colores", link: "/colors" },
  { name: "Iconos", link: "/icons" },
  { name: "Cursos", link: "/courses" },
  { name: "Fuentes", link: "/fonts" },
  { name: "Git", link: "/git" },
  { name: "Docs", link: "/" },
]

type Props = {}
const Sidebar = (props: Props) => {
  return (
    <>
      <figure className="flex items-center justify-center">
        <h2 className="text-[42px]">LOGO</h2>
      </figure>
      <ul className="flex flex-col items-center justify-center text-[22px]">
        {sections.map((section) => (
          <li className="w-full" key={section.name}>
            <Link
              to={section.link}
              className="hover:bg-[#f622] p-[24px] block text-center"
            >
              {section.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default Sidebar
