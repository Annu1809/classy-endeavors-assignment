import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './sections/HeaderSection'
import WhyChooseUs from './sections/WhyChooseUsSection'
import FeatureSection from './sections/FeatureSection'
import TestimonialCarousel from './components/TestimonialCarousel/TestimonialCarousel'
import PricingSection from './sections/PricingSection'
import FAQSection from './sections/FAQSection'
import FooterSection from './sections/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
  
     <div className='bg-gradient-to-b from-white to-gray-200'>
      <Header/>
      <FeatureSection/>      
      <WhyChooseUs/>
      <PricingSection/>
      <FAQSection />
      <FooterSection/>
     </div>
    
  )
}

export default App
