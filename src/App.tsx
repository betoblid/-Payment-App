import { Container } from './Components/Container'
import { Banner } from './Components/Banner/Banner'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header/Header'
import CardCredit from "./assets/card-credit.svg"
import { Grafic } from './Components/Grafic'
import { Card } from './Components/Card'
import Message from "./assets/icon-message.svg"
import elipse from "./assets/icon-elipse.svg";
import dps from "./assets/dps.svg"
import { ListCredit } from './Components/ListCredit/ListCredit'

function App() {

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Container>
          <div className='max-w-[358px]'>
            <h2 className='text-blue-660 text-5xl font-medium font-roboto'>
              One card for all your payments
            </h2>
            <p className='text-blue-330 md:mt-5 my-10 xl:text-xl text-base '>
              One card for all your payments.One card for all your payments.One card for all your payments.
            </p>
          </div>
          <figure>
            <img src={CardCredit} alt="cartão de credito personalizado" title="cartão de credito personalizado" />
          </figure>
        </Container>

        <Container>
          <div className='max-w-[358px]'>
            <h2 className='text-blue-660 text-5xl font-medium font-roboto'>
              Manage your business like a pro in no-time
            </h2>
            <p className='text-blue-330 md:mt-5 my-10 xl:text-xl text-base '>
              One card for all your payments.One card for all your payments.One card for all your payments.One card for all your payments. One card for all your payments.
            </p>
          </div>
          <div>
            <div className='flex items-center justify-center gap-3 mb-5'>
              <div className="w-1/2 text-center">
                <Card>
                  <h4 className='text-base font-roboto font-normal text-start'>
                    Balance
                  </h4>
                  <span className='text-blue-330 font-medium text-2xl'>
                    $4600
                  </span>
                </Card>
              </div>
              <div className="w-1/2 text-center">
                <Card>
                  <h4 className='text-base font-roboto font-normal text-start'>
                    Last transaction
                  </h4>
                  <span className='text-blue-330 font-medium text-2xl'>
                    $230
                  </span>
                </Card>
              </div>
            </div>
            <Card>
              <Grafic />
            </Card>
          </div>
        </Container>
        <Container>
          <div className="max-w-[370px] relative mb-10">
            <h2 className='text-blue-660 text-5xl font-medium font-roboto relative z-10'>
              Available in 5 different languages
            </h2>
            <p className='text-blue-330 md:mt-5 my-10 xl:text-xl text-base '>
              One card for all your payments.One card for all your payments.One card for all your payments.
              Eng, Pol, Hin, Heb, Ger.
            </p>
            <figure className='flex items-center gap-4'>
              <img src={dps} alt="depoimentos" title='depoimentos' />
              <figcaption className='font-medium text-xl'>11+</figcaption>
              <img src={elipse} alt="icon elipse" className='absolute -top-4 -left-4 size-20' title='icon elipse' />
            </figure>

          </div>
          <figure className='relative'>
            <img src={Message} alt="icon message" title='Message' className='z-10 relative' />

            <img src={elipse} alt="icon elipse" className='absolute lg:-right-4 right-0 bottom-0 size-20' title='icon elipse' />
          </figure>

        </Container>
        <ListCredit />
      </main>
      <Footer />
    </>
  )
}

export default App
