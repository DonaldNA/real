import React, { useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { DualLanguageStr, DualLanguage, English, Spanish } from "components/language"
import { useInEnglish } from "helpers/languageHooks.js";
import Hero from "./FullWidthWithImage.js";
import Features from "../../components/features/ThreeColSimple.js";
import AboutMe from "../../components/features/TwoColWithButton.js";
import ContactMe from "../../components/cta/DownloadApp.js";
import Footer from "../../components/footers/MiniCenteredFooter.js";
import emailIcon from '../../images/email-icon.svg'
import phoneIcon from '../../images/phone-icon.svg'
import formalPhoto from '../../images/formal-head-shot.jpg'
import tampaHouse from '../../images/tampa-house-water-cr.jpg'
import mapLocation from '../../images/map-location.svg'
import houseSun from '../../images/house-sun.svg'
import houseWater from '../../images/house-water.svg'


const featureCards = [
  {
    imageSrc: houseWater,
    title: "Find a home",
    description: "Connect with me to find the home of your dreams",
  },
  {
    imageSrc: houseSun,
    title: "Sell your home",
    description: "Find the right buyer for your home",
  },
  {
    imageSrc: mapLocation,
    title: "Relocate",
    description: "Let me help you relocate to Tampa Bay",
  }
]

const featureCardsSpanish = [
  {
    imageSrc: houseWater,
    title: "Encontrar un hogar",
    description: "Conéctate conmigo para encontrar la casa de tus sueños.",
  },
  {
    imageSrc: houseSun,
    title: "Vende tu casa",
    description: "Encuentre el comprador adecuado para su casa",
  },
  {
    imageSrc: mapLocation,
    title: "Trasladarse",
    description: "Déjame ayudarte a mudarte a Tampa Bay",
  }
]

export default () =>{
  const inEnglish = useInEnglish()
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "G-K0K9VZTF9L");
  }, [])
  
  return(
  <AnimationRevealPage>
    <Hero />
    <Features cards={inEnglish ? featureCards : featureCardsSpanish}/> 
    <div id="learn-more">
      <AboutMe
        // subheading={<Subheading>Our Vision</Subheading>}
        // subheading={"Our Vision"}
        heading={<DualLanguageStr 
          english="Discover Tampa Bay: Your Key to Real Estate Success Starts Here"
          spanish="Descubra Tampa Bay: La Clave Para El Éxito Inmobiliario Comienza Aquí"
        />}
        description={
          <DualLanguage>
            <English>
              Relocating to the Tampa Bay area was one of the best decisions I've made, allowing me to indulge in the region's stunning weather and plethora of year-round outdoor activities. Having traversed the country, I confidently assert that Tampa Bay boasts the most enviable climate.
              <br /><br />
              My expertise lies in meticulously analyzing market dynamics and identifying emerging trends. Whether you're seeking your dream home, scouting for an investment property, or aiming to sell, I am dedicated to facilitating a seamless real estate experience for you. With a keen eye for opportunities and a commitment to client satisfaction, I pledge to guide you through every step of your next real estate endeavor.
              <br /><br />
              Let's connect and explore how I can assist you in achieving your real estate goals. Your vision is my priority, and together, we can make it a reality. Reach out, and let's begin this exciting journey!
            </English>
            <Spanish>
              Mudarme al área de la Bahía de Tampa fue una de las mejores decisiones que tomé, ya que me permitió disfrutar del impresionante clima de la región y de la gran cantidad de actividades al aire libre durante todo el año. Habiendo atravesado el país, afirmo con confianza que la Bahía de Tampa cuenta con el clima más envidiable.
              <br /><br />
              Mi experiencia radica en analizar meticulosamente la dinámica del mercado e identificar tendencias emergentes. Ya sea que esté buscando la casa de sus sueños, buscando una propiedad de inversión o intentando venderla, estoy dedicado a facilitarle una experiencia inmobiliaria perfecta. Con un buen ojo para las oportunidades y un compromiso con la satisfacción del cliente, me comprometo a guiarlo en cada paso de su próximo proyecto inmobiliario.
              <br /><br />
              Conectemos y exploremos cómo puedo ayudarlo a lograr sus objetivos inmobiliarios. Su visión es mi prioridad y juntos podemos hacerla realidad. ¡Extiende la mano y comencemos este emocionante viaje!
            </Spanish>
          </DualLanguage>
        }
        buttonRounded={false} 
        primaryButtonText={<DualLanguageStr 
          english="Contact me"
          spanish="Contáctame"
        />}
        imageSrc={formalPhoto}
        textOnLeft={false}
        primaryButtonUrl="#contact-me"
      />
    </div>
    {/* <SliderCard />
    <TrendingCard />
    <MainFeature />
    <Blog />
    <Testimonial textOnLeft={true}/>
    <FAQ />
    <SubscribeNewsLetterForm /> */}
    <div id="contact-me">
      <ContactMe 
        text={<DualLanguage>
          <English>
            Let's connect and explore how I can assist you in achieving your real estate goals. Your vision is my priority, and together, we can make it a reality.
            <br /><br />
            Reach out, and let's begin this exciting journey!
          </English>
          <Spanish>
            Conectemos y exploremos cómo puedo ayudarlo a lograr sus objetivos inmobiliarios. Su visión es mi prioridad y juntos podemos hacerla realidad.
            <br /><br />
            ¡Extiende la mano y comencemos este emocionante viaje!
          </Spanish>
        </DualLanguage>}

        link1Text = "(805) 765-1625"
        link1Url = "tel:805-765-1625"
        link1IconSrc={phoneIcon}
        link2Text = "edith@edithguzman.com"
        link2Url = "mailto:edith@edithguzman.com"
        link2IconSrc={emailIcon}
        imageSrc={tampaHouse}
      />
    </div>
    <Footer /> 
  </AnimationRevealPage>
)
  };
