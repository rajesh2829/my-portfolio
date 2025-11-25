import Image from "next/image";

export default function Header() {
  return (
    <section className="w-full bg-[#dff0ff] py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <p className="text-xl font-semibold text-gray-700">
            Hey, I’m <span className="font-bold">Rajesh</span> 👋
          </p>

          <h1 className="text-5xl font-bold mt-2 leading-snug">
            <span className="text-purple-600">Full</span> stack Developer
          </h1>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-md">
            I'm a full stack developer based in India. I help you build beautiful
            and scalable web applications that your users will love.
          </p>

          <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md shadow-lg">
            Get In Touch
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-12 md:mt-0 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#c7e5ff] shadow-lg">
            <Image
              src="/profile1.png"
              alt="Rajesh"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
