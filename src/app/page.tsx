import About from "@/components/About";
import Navigation from "@/components/Navigation";

export default function Page() {
  return (
    <div className="w-full">
      <Navigation />
      {/* Hero Section */}

      <div className="relative h-[90vh]">
        {/* Headline Text */}
        <div className="absolute bottom-20 left-15 flex flex-col gap-10 z-10">
          <p className="lg:text-5xl font-bold text-amber-50">
            Building the Future of Web3 and AI
          </p>
          <p className="lg:text-5xl font-bold text-white">
            One Product at a Time
          </p>
        </div>

        {/* Background Gradient Blobs */}
        <div className="absolute left-40 bottom-[-40vh] -rotate-45 z-0 pointer-events-none">
          <div className="w-[400px] h-[400px] rounded-full blur-3xl opacity-70 bg-gradient-to-r from-transparent via-[#451943] to-transparent mb-[-100px]" />
          <div className="w-[320px] h-[440px] rounded-full blur-2xl opacity-90 bg-gradient-to-r from-transparent via-[#08092b] to-transparent" />
        </div>

        <div className="absolute right-[40vw] bottom-[-10vh] -rotate-45 z-0 pointer-events-none">
          {/* <div className="w-[200px] h-[240px] rounded-full blur-3xl opacity-70 bg-gradient-to-r from-transparent via-[#451943] to-transparent mb-[-100px]" /> */}
          <div className="w-[600px] h-[400px] rounded-full blur-2xl opacity-90 bg-gradient-to-r from-transparent via-[#08092b] to-transparent" />
        </div>
      </div>

      {/* About Us */}
      <About />
    </div>
  );
}
