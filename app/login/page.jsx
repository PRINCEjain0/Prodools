import Image from 'next/image';
import Navbar from '../../components/Navbar';;

export default function LoginPage() {
  return (
    <>
    <div className="flex flex-col ">
    <Navbar />
    <section className="flex flex-grow h-screen bg-cream-1 ">
        <div className="flex flex-col w-full max-w-md p-8 ml-60   md:w-1/2 lg:w-1/3">
          <h2 className="libre-baskerville-regular mb-5 mt-28 text-black text-5xl">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email"></label>
              <input
  type="email"
  id="email"
  className="w-80 h-12 px-3 py-2 border  shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-gray-700" // Added text color
  placeholder="Email"
/>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password"></label>
              <input
  type="password"
  id="password"
  className="w-80  h-12 px-3 py-2 border  shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-gray-700" // Added text color
  placeholder="Password"
/>

            </div>
            <button
              type="submit"
              className="w-28 h-14 px-4 py-2 text-white bg-black text-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Login
            </button>
            <a href="#" className="underline text-gray-600 ml-32">Password?</a>
          </form>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            
            <p href="#" className="hover:underline">Need an account? <a className='underline'>Signup here</a></p>
          </div>
        </div>
        <div className="hidden bg-cover ml-28 lg:block lg:w-2/3">
        
      <div style={{ height: "700px", position: "relative" }}>
  <Image
    src="https://images.unsplash.com/photo-1433574466251-fe1be0d9b3d2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Background Image"
    
    objectFit="cover" // Or "contain" depending on your preference
    layout="fill"
  />
</div>



      
      
        </div>
      </section>

      <section className="flex flex-grow h-screen bg-cream-1 ">
        <div className="flex flex-col w-full max-w-md p-8 ml-60   md:w-1/2 lg:w-1/3">
          <h2 className="libre-baskerville-regular mb-5 mt-28 text-black text-5xl">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email"></label>
              <input
  type="email"
  id="email"
  className="w-80 h-12 px-3 py-2 border  shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-gray-700" // Added text color
  placeholder="Email"
/>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password"></label>
              <input
  type="password"
  id="password"
  className="w-80  h-12 px-3 py-2 border  shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-gray-700" // Added text color
  placeholder="Password"
/>

            </div>
            <button
              type="submit"
              className="w-28 h-14 px-4 py-2 text-white bg-black text-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Login
            </button>
            <a href="#" className="underline text-gray-600 ml-32">Password?</a>
          </form>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            
            <p href="#" className="hover:underline">Need an account? <a className='underline'>Signup here</a></p>
          </div>
        </div>
        <div className="hidden bg-cover ml-28 lg:block lg:w-2/3">
        
      <div style={{ height: "700px", position: "relative" }}>
  <Image
    src="https://images.unsplash.com/photo-1433574466251-fe1be0d9b3d2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Background Image"
    
    objectFit="cover" // Or "contain" depending on your preference
    layout="fill"
  />
</div>



      
      
        </div>
      </section>
     
    </div>

    </>

    
  );
}
