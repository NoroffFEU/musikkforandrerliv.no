export async function mockContactFormSubmit(formData) {
  console.log('Mock contact form submission:', formData);

  await new Promise((r) => setTimeout(r, 700));

  if (!formData.consent) {
    throw new Error('You must consent to data collection (GDPR).');
  }

  if (!formData.email || !formData.email.includes('@')) {
    throw new Error('Invalid email address.');
  }

  return {
    success: true,
    message: 'Your message has been sent successfully.',
  };
}
