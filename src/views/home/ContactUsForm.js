import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useForm, SubmitHandler } from "react-hook-form"
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"

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


const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <Container>
      <Content>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div tw="mx-auto max-w-4xl">
            <h2>Get in touch</h2>
            <form action="#">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Name</Label>
                    <Input 
                      {...register("name", {required: true})} 
                      id="name-input" 
                      type="text" 
                      placeholder="E.g. Jane Smith" 
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer>
                      <Label htmlFor="email-input">Email Address</Label>
                      <Input
                        {...register("email", {required: true})} 
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

              <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
