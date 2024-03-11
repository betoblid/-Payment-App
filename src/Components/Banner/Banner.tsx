
import Bann from "../../assets/pic.png"
import ArrowRight from "../../assets/Arrow-right.svg"
export const Banner = () => {

    return (
        <div className="bg-banner 2xl:h-auto 2xl:items-start bg-no-repeat max-w-[1440px] mx-auto flex items-center justify-around pt-40  lg:flex-row flex-col">

            <div className="sm:w-[500px]  text-white">
                <h1 className="font-roboto sm:text-6xl font-medium text-4xl">
                    Smart banking for freelancers
                </h1>
                <p className="font-roboto sm:text-xl my-10 text-base">
                    Draft is an app aiming mart banking for freelancers.Draft is an app aiming mart banking for freelancers.
                </p>
                <button className="bg-blue-660 py-4 px-10 rounded-3xl font-roboto flex items-center justify-center">
                    Register now
                    <img src={ArrowRight} alt="Arrow Right" />
                    </button>
            </div>

            <figure>
                <img src={Bann} alt="" />
            </figure>
        </div>
    )
}