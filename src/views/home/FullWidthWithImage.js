import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import tampaImg from "../../images/tampa-bay-4215809_1920.jpg"
import { DualLanguageStr } from "components/language";

import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "../../components/headers/light"
import {TogglerBtn} from "components/language/TogglerBtn";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;

const ToggleContainer= tw.div`mt-6`;

const RightColumn = styled.div`
  background-image: url(${tampaImg});
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="tel:805-765-1625">(805) 765-1625</NavLink>
      <NavLink href="mailto:edith@edithguzman.com">edith@edithguzman.com</NavLink>
    </NavLinks>
  ],
  heading = (
    <>
      <DualLanguageStr 
        english="Unlocking Your Real Estate Dreams"
        spanish="Liberando Sus Sueños Inmobiliarios"
      />
      {/* Unlocking Your Real Estate Dreams */}
      <br />
      <span tw="text-primary-500">
        <DualLanguageStr 
          english="One Property at a Time"
          spanish="Una Propiedad a la Vez"
        />
      </span>
    </>
  ),
  description = <DualLanguageStr 
    english="Discover why relocating to the Tampa Bay area was my best decision yet, where the sun shines year-round and outdoor adventures await! With my expert insight into market dynamics and unwavering dedication to your real estate success, let's turn your vision into reality together."
    spanish="Descubra por qué mudarme al área de la Bahía de Tampa fue mi mejor decisión hasta ahora, donde el sol brilla todo el año y me esperan aventuras al aire libre. Con mi conocimiento experto de la dinámica del mercado y mi dedicación inquebrantable a su éxito inmobiliario, hagamos realidad su visión juntos."
  />,
  primaryActionUrl = "#contact-me",
  primaryActionText = <DualLanguageStr 
    english="Contact Me"
    spanish="Contáctame"
  />,
  secondaryActionUrl = "#learn-more",
  secondaryActionText = <DualLanguageStr 
    english="Learn More"
    spanish="Aprende más"
  />,
}) => {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} logoLink="" collapseBreakpointClass="sm" />
          <div className="mt-8">
          <ToggleContainer>
            <TogglerBtn />
          </ToggleContainer>
          </div>
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
              <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
  );
};
