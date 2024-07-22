// app/api/create/route.js

export async function POST(request) {
    try {
      const formData = await request.formData();
      
      const file = formData.get('file');
      const announcement = JSON.parse(formData.get('announcement'));
      const address = formData.get('address');
      const latitude = formData.get('latitude');
      const longitude = formData.get('longitude');
      const dropboxes = JSON.parse(formData.get('dropboxes'));
      const persons = JSON.parse(formData.get('persons'));
  
      // Process the form data here (e.g., save to database, send email, etc.)
      console.log('Form data received:', { file, announcement, address, latitude, longitude, dropboxes, persons });
  
      return new Response(JSON.stringify({ message: 'Form submitted successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error processing form data:', error);
      return new Response(JSON.stringify({ message: 'Error submitting form' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
  