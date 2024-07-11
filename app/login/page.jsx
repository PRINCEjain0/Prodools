import Image from 'next/image';
import Navbar from '../../components/Navbar';;

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow  ">
        <div className="flex flex-col justify-center  w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
          <h2 className="mb-6 text-3xl font-semibold text-gray-800">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
  type="email"
  id="email"
  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-gray-700" // Added text color
  placeholder="Email"
/>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">Password</label>
              <input
  type="password"
  id="password"
  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-gray-700" // Added text color
  placeholder="Password"
/>

            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">Forgot Password?</a>
            <a href="#" className="hover:underline">Signup here</a>
          </div>
        </div>
        {/* <div className="hidden w-full bg-cover lg:block lg:w-2/3">
        <div className="ml-52 lg:mt-0 lg:w-1/2">
      <div style={{ height: "700px", position: "relative" }}>
  <Image
    src="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?w=500&auto-format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VsY29tZXxlbnwwfHwwfHx8MA%3D%3D"
    alt="Background Image"
    className="rounded-lg"
    objectFit="cover" // Or "contain" depending on your preference
    layout="fill"
  />
</div>



      </div>
      
        </div> */}
      </div>
     
    </div>
  );
}
