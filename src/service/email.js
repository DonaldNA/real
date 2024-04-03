import { testLambdaURL } from "config";

// Body = {subject, body}
export const sendEmail = async (body) => {
  const result = await fetch(testLambdaURL, {
    method: 'POST',
    body: JSON.stringify(body)
  })

  if (!result.ok) {
    throw new Error("Could not send email")
  }

  return await result.json()
}