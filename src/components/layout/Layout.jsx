import Navbar from "../navbar/Navbar"
import Homepage from "../../pages/homepage/homepage"

const Layout = () => {
    return (
        <>
            <div className="flex flex-col h-full w-full font-inter">
                <Navbar/>
                <Homepage/>
            </div>
        </>
    )
  }

export default Layout