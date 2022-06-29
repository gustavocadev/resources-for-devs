import Sidebar from './../ui/Sidebar';
import Navbar from '../ui/Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <section className="flex">
      <section className="bg-[#202020] p-2 gap-8 flex-col hidden sm:flex min-h-screen w-3/12">
        <Sidebar />
      </section>
      <section className="w-full">
        <Navbar />
        {children}
      </section>
    </section>
  );
};
export default Layout;
