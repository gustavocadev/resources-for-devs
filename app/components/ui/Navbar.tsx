import { Link } from "@remix-run/react"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-end h-[94px] mx-12 bg-[#202020] rounded-xl">
      <ul className="flex items-center gap-4 px-[34px]">
        <li>
          <Link to="/">Twitter</Link>
        </li>
        <li>
          <Link to="/">Twitter</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
