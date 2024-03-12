import { Card } from "../Card"
import { Container } from "../Container"
import { useState } from "react"

import CreditOne from "../../assets/creditCardOne.png"
import CreditTwo from "../../assets/creditCardTwo.png"
import IconDark from "../../assets/dark.svg"
import IconLight from "../../assets/light.svg"
import { Check } from "lucide-react"

export const ListCredit = () => {

    const [creditOne, setCreditOne] = useState(false)
    const [creditTwo, setCreditTwo] = useState(false)

    return (
        <section className="bg-bg bg-bottom bg-no-repeat 2xl:bg-cover pb-20">
            <h2 className="font-roboto font-medium text-4xl text-center text-blue-660">
                An exceptional service
                <span className="text-pink-light">at right price</span>
            </h2>
            <p className="font-roboto text-xl text-center mt-2 mb-10 text-blue-dark">
                Start with our premium plan as switch to free plan later
            </p>

            <Container>
                <div className='text-center font-roboto  shadow-2xl rounded-3xl py-10 bg-white lg:mb-0 mb-5'  tabindex="0">
                    <span className='text-4xl'>Free</span>
                    <div className="space-y-5 mt-6">
                        <h3 className='text-4xl'>$0/m</h3>
                        <p className='text-blue-dark text-base'>
                            free plan on free plan and its free
                        </p>

                        <button className='bg-transparent rounded-2xl border-2 px-6 py-2 border-black '>
                            Get started
                        </button>
                    </div>

                    <figure>
                        {
                            creditOne ? (<img src={CreditOne} alt="cartão de credito personalizado" />) :
                                (<img src={CreditTwo} alt="cartão de credito personalizado" />)
                        }
                    </figure>
                    <div className="flex items-center justify-center gap-2">
                        <button 
                        onClick={() => setCreditOne(true)}
                        className= {`border-gray-400 rounded-full ${creditOne  && "border-4"}`}>
                            <img src={IconDark} alt="" />
                        </button>
                        <button 
                        onClick={() => setCreditOne(false)}
                        className= {`border-gray-400 rounded-full ${!creditOne && "border-4"}`}>
                            <img src={IconLight} alt="" />
                        </button>
                    </div>

                    <div className="max-w-[314px] mx-auto">
                        <ul className="text-start space-y-4"> 
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660"/>
                                10 free local transfers
                            </li>
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660 w-10"/>
                                Free ATM local transfers 10 free local transfers 10 free local
                            </li>
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660"/>
                                Free draft account for free on free
                            </li>
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660"/>
                                Virtual cards
                            </li>
                            <li className="flex gap-4 text-gray-400 line-through">
                                <Check className="text-gray-400"/>
                                24x7 pport
                            </li>
                            <li className="flex gap-4 text-gray-400 line-through">
                                <Check className="text-gray-400"/>
                                Multi-user support
                            </li>
                            <li className="flex gap-4 text-gray-400 line-through">
                                <Check className="text-gray-400"/>
                                Moderate withdraws
                            </li>
                        </ul>
                    </div>
                </div>
                {/* card 2 */}
                <div className='text-center font-roboto shadow-2xl rounded-3xl py-10 bg-white' tabindex="0">
                    <span className='text-4xl'>Premium</span>
                    <div className="space-y-5 mt-6">
                        <h3 className='text-4xl'>$10/m</h3>
                        <p className='text-blue-dark text-base'>
                            free plan on free plan and its free
                        </p>

                        <button className='bg-transparent rounded-2xl border-2 px-6 py-2 border-black '>
                            Get started
                        </button>
                    </div>

                    <figure>
                        {
                            creditTwo ? (<img src={CreditTwo} alt="cartão de credito personalizado" />) :
                                (<img src={CreditOne} alt="cartão de credito personalizado" />)
                        }
                    </figure>
                    <div className="flex items-center justify-center gap-2">
                        <button 
                        onClick={() => setCreditTwo(false)}
                        className= {`border-gray-400 rounded-full ${!creditTwo && "border-4"}`}>
                            <img src={IconDark} alt="button card" />
                        </button>
                        <button
                         onClick={() => setCreditTwo(true)}
                         className= {`border-gray-400 rounded-full ${creditTwo && "border-4"}`}>
                            <img src={IconLight} alt="button card" />
                        </button>
                    </div>

                    <div className="max-w-[314px] mx-auto">
                        <ul className="text-start space-y-4"> 
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660"/>
                                10 free local transfers
                            </li>
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660 w-10"/>
                                Free ATM local transfers 10 free local transfers 10 free local
                            </li>
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660"/>
                                Free draft account for free on free
                            </li>
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660"/>
                                Virtual cards
                            </li>
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660"/>
                                24x7 pport
                            </li>
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660"/>
                                Multi-user support
                            </li>
                            <li className="flex gap-4 text-blue-dark">
                                <Check className="text-blue-660"/>
                                Moderate withdraws
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}