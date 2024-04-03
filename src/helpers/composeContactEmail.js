export const composeContactEmail = (fields) => {
  if (!fields) {
    throw new Error('Fields cannot be undefined')
  }

  const now = new Date()

  const email = {}

  email.subject = `New inquiry from ${fields.name}`

  email.body = `New message sent at ${now.toDateString()} ${now.toLocaleTimeString()}\n\n`

  email.body += `Name: ${fields.name}\n`
  email.body +=`Email: ${fields.email}\n` 
  email.body +=`Phone: ${fields.phone ? fields.phone : 'none'}\n`
  email.body +=`Best form of contact: ${!fields.checkbox.length
    ? 'none specified' 
    : fields.checkbox.join(", ")}\n\n`
  
  email.body += `Message: ${fields.message}`;

  return email
}