// app/api/login/route.js

export async function POST(req) {
    const { name, email, password } = await req.json();
  
    // Basic validation example
    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: 'Email and password are required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  
    return new Response(JSON.stringify({ message: 'Form submitted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  