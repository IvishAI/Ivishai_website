const MissionStatement = () => {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative px-5 md:px-16 lg:px-40 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="flex flex-col items-start gap-20 md:gap-[81px] w-full">
          {/* Section Heading */}
          <header className="w-full">
            <h1 className="w-full font-sora text-4xl md:text-[56px] font-normal leading-[1.1] md:leading-[110%] tracking-tight md:tracking-[-1.52px] bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
              Building the Infrastructure of Industry 6.0.
            </h1>
          </header>

          <div className="flex flex-col items-start gap-16 md:gap-[81px] w-full">
            {/* Paragraph 1 */}
            <article className="flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-0">
              <div className="w-full md:w-[320px] text-white text-2xl md:text-[28px] font-normal leading-[1.3] md:leading-[36.4px]">
                The Vision
              </div>
              <div className="flex flex-col items-start gap-6 md:gap-[30px] flex-1 md:pl-8">
                <p className="w-full text-gray-300 text-base md:text-lg font-normal leading-relaxed md:leading-[28.8px]">
                  Industry 6.0 is our long-term vision: intelligent operating systems that sit underneath
                  real-world industries. VerbX and Sera are the first two layers; more pillars will follow.
                </p>
              </div>
            </article>

            {/* Paragraph 2 */}
            <article className="flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-0">
              <div className="w-full md:w-[320px] text-white text-2xl md:text-[28px] font-normal leading-[1.3] md:leading-[36.4px]">
                What We Build
              </div>
              <div className="flex flex-col items-start gap-6 md:gap-[30px] flex-1 md:pl-8">
                <p className="w-full text-gray-300 text-base md:text-lg font-normal leading-relaxed md:leading-[28.8px]">
                  Operating systems beneath communication and commerce — built to sit underneath
                  industries, not on top of them. Two products live today, engineered offline-first
                  for Indian conditions and built to scale globally.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MissionStatement;