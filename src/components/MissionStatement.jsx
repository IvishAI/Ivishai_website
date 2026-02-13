const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative px-5 md:px-16 lg:px-40 pt-16 md:pt-24">
        <div className="flex flex-col items-start gap-20 md:gap-[81px] w-full">
          {/* About Hero Section */}
          <header className="w-full">
            <h1 className="w-full font-sora text-5xl md:text-[76px] font-normal leading-[1.1] md:leading-[100%] tracking-tight md:tracking-[-1.52px] bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
              About Us
            </h1>
          </header>

          <div className="flex flex-col items-start gap-16 md:gap-[81px] w-full">
            {/* Who We Are Section */}
            <article className="flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-0">
              <div className="w-full md:w-[320px] text-white text-2xl md:text-[28px] font-normal leading-[1.3] md:leading-[36.4px]">
                Who We Are
              </div>
              <div className="flex flex-col items-start gap-6 md:gap-[30px] flex-1 md:pl-8">
                <h2 className="w-full text-3xl md:text-[40px] font-normal leading-[1.3] bg-gradient-to-r from-white to-[#63FFF5] bg-clip-text text-transparent">
                Redefining Human-Technology Interaction
                </h2>
                <p className="w-full text-gray-300 text-base md:text-lg font-normal leading-relaxed md:leading-[28.8px]">
                Ivish AI is a deep-tech venture architecting the future of AI, neurotech, robotics, wearables, drones, 
and quantum-powered ecosystems.
 We believe the next leap in progress won’t be built by machines alone, but by humans and intelligent 
systems working together.
                </p>
              </div>
            </article>

            {/* Our Mission Section */}
            <article className="flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-0">
              <div className="w-full md:w-[320px] text-white text-2xl md:text-[28px] font-normal leading-[1.3] md:leading-[36.4px]">
                Our Mission
              </div>
              <div className="flex flex-col items-start gap-6 md:gap-[30px] flex-1 md:pl-8">
                <h2 className="w-full text-3xl md:text-[40px] font-normal leading-[1.3] bg-gradient-to-r from-white to-[#FFBE63] bg-clip-text text-transparent">
                Engineering the Future of Interaction.
                </h2>
                <div className="w-full text-gray-300 text-base md:text-lg font-normal leading-relaxed md:leading-[28.8px]">
                  <p>• Make AI invisible and effortless.</p>
                  <p>• Build human-first ecosystems that adapt, not just react.</p>
                  <p>• Create technology that dissolves barriers of language, vision, access, and ability.</p>
                  <p>From India to the world, we’re laying the foundations of Industry 6.0.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;