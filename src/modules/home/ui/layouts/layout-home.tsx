interface HomeLayoutProps {
    children: React.ReactNode;
};

export const Homelayout = ({children}: HomeLayoutProps ) => {
  return (
    <div>
        <div className="p-4 bg-blue-500">
            <p>Home Navbar</p>
        </div>
      {children}
    </div>
  )
}
