import './WelcomePage.scss'
import HeroSection from '../../../widgets/landing/heroSection/HeroSection'
import SupportSection from '../../../widgets/landing/suportSection/SuportSection'
import PricingSection from '../../../widgets/landing/pricingSection/PricingSection'

export default function WelcomePage() {
  return (
    <div className='home-page'>
      <div className="home-page__content">
          <HeroSection/>
          <SupportSection/>
          {/* <PricingSection/> */}
      </div>
    </div>
  )
}
