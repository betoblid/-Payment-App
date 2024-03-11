import Logo from "../../assets/Logo.png"

export const Footer = () => {

    return (
        <footer className="bg-[#CAD6F1] py-20">
            <div className="flex items-center justify-evenly  max-w-[1440px] mx-auto">
                <figure className="w-[250px]">
                    <img src={Logo} alt="" />
                    <figcaption className="font-roboto text-[#6A6D9E] text-base mt-4">
                        Copyright ©️ 2023 Draft LLC.
                        All rights reserved.
                    </figcaption>
                </figure>
                <div className="flex items-start justify-around gap-5">
                    <ul className="font-roboto text-[#16194F] text-base">
                        <li className="py-2">
                            <a href="#" >Team</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Press</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Fees</a>
                        </li>
                    </ul>
                    <ul className="font-roboto text-[#16194F] text-base">
                        <li className="py-2">
                            <a href="#">Services</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Projects</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Affiliate</a>
                        </li>
                    </ul>
                    <ul className="font-roboto text-[#16194F] text-base">
                        <li className="py-2">
                            <a href="#">Terms of use</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Privacy policy</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}