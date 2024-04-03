import React, {useEffect, useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useForm } from "react-hook-form"
import { css } from "styled-components/macro"; //eslint-disable-line
import { composeContactEmail } from "helpers/composeContactEmail";
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import { sendEmail } from "service/email";
import { AlertMessage } from "components/alerts/AlertMessage";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div` 
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input, textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const ContactContainer = styled.div`
  ${tw`flex mt-3`}
  label {
    ${tw`font-medium tracking-wide text-sm`}
  }
  h3 {
    ${tw`absolute top-0 left-0 tracking-wide font-semibold text-sm mt-6`}
  }
  // Label and checkbox spacing
  > div {
    ${tw`flex gap-x-2 mr-8`}
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col relative`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const TextArea = tw.textarea`h-24 sm:h-full`;
const Input = tw.input``;
const ContactH3 = tw.h3`absolute top-0 left-0 tracking-wide font-semibold text-sm mt-6`;
const RequiredLabel = tw.span`text-red-500`

const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {
  // success | fail | null
  const [emailResult, setEmailResult] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  const onSubmit = async (data) => {
    const message = composeContactEmail(data)
    
    try {
      await sendEmail(message)
      setEmailResult('success')
      reset()
    } catch (error) {
      setEmailResult('fail')
      console.error('There was an error sending email')
    }
  }

  const DisplayFormErrors = () => {
    const Spacing = tw.div`mb-2`
    
    if(!errors || Object.keys(errors).length === 0) return <></>
    
    return Object.keys(errors).map((e, i) => (
      <Spacing key={i}>
        <AlertMessage  message={errors[e]['message']} success={false} />
      </Spacing>
      ))
  }

  const DisplayEmailStatus = ({emailResult}) => {

    if (emailResult === 'success') {
      return <AlertMessage message="Your message has been received, we'll contact you shortly :)"/>
    } 
  
    if (emailResult === 'fail') {
      return <AlertMessage message="There was an issue sending your message. Please contact me at edith@edithguzman.com or (805) 765-1625" success={false}/>
    }
    
    return <></>
  }

  return (
    <Container>
      <Content>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div tw="mx-auto max-w-4xl">
            <h2>Get in touch</h2>
            <form noValidate action="#">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Name <RequiredLabel>*</RequiredLabel></Label>
                    <Input 
                      {...register("name", {
                        required: "Please enter your name.",
                      })} 
                      id="name-input" 
                      type="text" 
                      placeholder="E.g. Jane Smith" 
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer>
                      <Label htmlFor="email-input">Email Address <RequiredLabel>*</RequiredLabel></Label>
                      <Input
                        {...register("email", {
                          required: "Please enter your email address.",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please enter a valid email address.",
                          }
                        })} 
                        id="email-input"
                        type="email"
                        placeholder="E.g. jane@mail.com"
                      />
                  </InputContainer>
                </Column>
              </TwoColumn>

              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="phone-input">Phone Number</Label>
                    <Input
                      {...register("phone")} 
                      id="phone-input"
                      type="text"
                      placeholder="E.g. (813) 656-1622"
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <ContactH3>Preferred Contact Method</ContactH3>
                  <InputContainer tw="flex-1">
                    <ContactContainer>
                      <div>
                        <label htmlFor="best-contact-phone">Phone:</label>
                        <Input
                          {...register("checkbox")} 
                          id="best-contact-phone"
                          type="checkbox"
                          value="phone"
                        />
                      </div>
                      <div>
                        <label htmlFor="best-contact-text">Text:</label>
                        <Input 
                          {...register("checkbox")}
                          id="best-contact-text"
                          type="checkbox"
                          value="text"
                        />
                      </div>
                      <div>
                        <label htmlFor="best-contact-email">Email:</label>
                        <Input
                          {...register("checkbox")}
                          id="best-contact-email"
                          type="checkbox"
                          value="email"
                        />
                      </div>
                    </ContactContainer>
                  </InputContainer>
                </Column>
              </TwoColumn>

              <InputContainer tw="flex-1">
                <Label htmlFor="name-input">Your Message</Label>
                <TextArea
                  {...register("message")}
                  id="message-input" 
                  name="message"
                  placeholder="How can I help you achieve your housing goals?"
                />
              </InputContainer>
              <DisplayFormErrors errors={errors} />
              <DisplayEmailStatus emailResult={emailResult} />
              <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
