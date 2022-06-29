type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-end h-[94px] mx-4 sm:mx-12 bg-[#202020] rounded-xl">
      <ul className="flex items-center gap-4 px-[34px]">
        <li>
          <a
            href="https://twitter.com/gustavocadev"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
