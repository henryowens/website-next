import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div id="Layout">
    <header>
      <h2>HENRY OWENS</h2>
      <button>Contact</button>
    </header>
    {children}
  </div>
);

export default Layout;
