import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-[#f3efe5] p-8 lg:p-16">
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Website!</h1>
        <p className="text-lg text-gray-700">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
        <hr className="my-6 border-gray-300" />
        <p className="text-gray-700">
          It uses utility classes for typography and spacing to space content out within the larger container.
        </p>
        <button className="px-6 py-3 text-lg font-semibold text-white bg-[#fbbf24] rounded-lg hover:bg-[#f59e0b]">
          Learn more
        </button>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2">
      <div style={{ height: "600px", position: "relative" }}>
  <Image
    src="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?w=500&auto-format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VsY29tZXxlbnwwfHwwfHx8MA%3D%3D"
    alt="Background Image"
    className="rounded-lg"
    objectFit="cover" // Or "contain" depending on your preference
    layout="fill"
  />
</div>



      </div>
    </div>
  );
}
