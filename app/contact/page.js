// app/contact/page.js

import MyForm from '@/components/MyForm';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <MyForm />
    </div>
  );
};

export default ContactPage;
