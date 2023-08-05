interface Props {
  children: React.ReactNode;
}

const Nav = ({ children }: Props) => {
  return (
    <div className="w-screen h-12 px-4 flex justify-between items-center text-text italic font-semibold">
      {children}
    </div>
  );
};

export default Nav;
