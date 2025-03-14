import { ReactNode } from "react";
import Header from "../components/Header";

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout