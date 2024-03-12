import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Menu, X } from "lucide-react";

export const Header = () => {

    const [close, setClose] = useState<boolean>(false)

    return (
        <header className="absolute w-full max-w-[1440px] mx-auto -translate-x-1/2 left-1/2">
            <div className="flex items-center justify-around py-4">
                <figure>
                    <img src={Logo} alt="Logo da empresa" title="Nossa logo" />
                </figure>

                <nav className={`fixed top-0 left-0 w-3/4 bg-white h-screen md:bg-transparent md:h-auto md:relative md:w-auto ${!close && "hidden md:block"}`}>
                    <ul className="font-roboto flex md:gap-5 flex-col md:flex-row font-medium">
                        <li className=" p-4 md:hidden">
                            <button onClick={() => setClose(((close) => !close))}>
                                 <X />
                            </button>
                        </li>
                        <li>
                            <a href="#" className="md:hover:text-gray-800 hover:bg-gray-800 hover:text-white md:hover:bg-transparent block md:inline text-center py-3 md:py-0 ">Home</a>
                        </li>
                        <li>
                            <a href="#" className="md:hover:text-gray-800 hover:bg-gray-800 hover:text-white md:hover:bg-transparent block md:inline text-center py-3 md:py-0 ">features</a>
                        </li>
                        <li>
                            <a href="#" className="md:hover:text-gray-800 hover:bg-gray-800 hover:text-white md:hover:bg-transparent block md:inline text-center py-3 md:py-0 ">pricing</a>
                        </li>
                    </ul>
                </nav>
                <button 
                className="md:hidden "
                onClick={() => setClose(((close) => !close))}>
                    <Menu  className="size-10"/>
                </button>

                <div className="hidden md:inline">
                    <a
                        href=""
                        className="bg-[#F44E77] py-3 px-6 rounded-3xl text-white">
                        sign up
                    </a>
                </div>
            </div>

        </header>
    )
}