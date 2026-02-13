import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Zod validation schema
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const features = [
  {
    name: "AI Vision",
    image: "https://images.unsplash.com/photo-1696517170961-661e9dca962e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjB2aXNpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Augmented Reality",
    image: "https://images.unsplash.com/photo-1626387346567-68d0b1ee4f58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFyJTIwdnJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Brain-Computer Interface",
    image: "https://plus.unsplash.com/premium_photo-1682689551593-cb1b5a8c978a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJyYWluJTIwY29tcHV0ZXIlMjBpbnRlcmZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Speech-to-Text",
    image: "https://images.unsplash.com/photo-1570913901232-e440173c0eaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwZWVjaCUyMHRvJTIwdGV4dHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Sign Language",
    image: "https://plus.unsplash.com/premium_photo-1715474789563-eb9998914786?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpZ24lMjBsYW5ndWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const UnitySensePage = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images and handle resize
  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const promises = features.map(({ image }) => 
        new Promise((resolve) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = resolve;
        })
      );
      await Promise.all(promises);
      setImagesLoaded(true);
    };

    // Handle resize
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    
    window.addEventListener("resize", handleResize);
    loadImages();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    alert("Form submitted!");
    console.log(data);
    reset();
  };

  return (
    <>
      <Header />
      <div className="bg-black text-white min-h-screen">
        {/* Header Section */}
        <section className="px-5 md:px-10 lg:px-[196px] py-14">
          <h1 className="text-[200px] font-sora font-normal text-center text-white opacity-80 mb-12">
            NeuraVision
          </h1>
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-[#13D8F6] flex items-center gap-2 px-2 py-0.5 mb-4">
              <img 
                src="/Ellipse 1.svg" 
                alt=""
                className="w-3 h-3"
              />
              <span className="text-white font-sora text-[18px] leading-[28.8px] text-center">
                See, Hear & Communicate with AI
              </span>
            </div>
            <p className="w-full text-center font-poppins text-[40px] font-normal leading-[52px] bg-gradient-to-r from-white to-[#63FFF5] bg-clip-text text-transparent">
              AI-powered smart glasses enhancing accessibility with real-time vision,
              speech, and navigation assistance.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-5 md:px-10 lg:px-0 flex flex-col lg:flex-row mt-20 w-full">
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-4 pl-[196px]">
            {features.map((f) => (
              <div
                key={f.name}
                className={`w-full cursor-pointer transition-all duration-300 text-left font-poppins text-[40px] font-normal leading-[52px] ${
                  activeFeature === f.name
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#13D8F6] to-[#0F616D]"
                    : "text-transparent bg-gradient-to-r from-[#D0D0D0] to-[#5F5F5F] bg-clip-text hover:bg-gradient-to-r hover:from-[#FFFFFF80] hover:to-[#63FFF580]"
                }`}
                onMouseEnter={() => !isMobile && setActiveFeature(f.name)}
                onClick={() => isMobile && setActiveFeature(f.name)}
              >
                {f.name.split(" ").map((word, i) => (
                  <div key={i} className="whitespace-nowrap">{word}</div>
                ))}
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="w-[720px] h-[600px] flex-shrink-0 bg-neutral-800 flex items-center justify-center overflow-hidden relative">
              {!imagesLoaded ? (
                <div className="text-neutral-600">Loading features...</div>
              ) : (
                features.map((feature) => (
                  <img
                    key={feature.name}
                    src={feature.image}
                    alt={feature.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      activeFeature === feature.name ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-5 md:px-10 lg:px-[196px] py-20 mt-32 flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <div className="text-white text-base mb-4 inline-flex py-[2px] px-[8px] items-center gap-[8px] rounded-full bg-[rgba(255,255,255,0.08)]">
              <img src="/Ellipse 1.svg" alt="" className="w-3 h-3" />
              <span>Contact Us</span>
            </div>
            <h2 className="font-sora text-[76px] font-normal leading-[91.2px] tracking-[-1.52px] mb-6">
              Want an <span style={{
                background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Interactive</span> Demo?
            </h2>
            <p className="text-[#CACACA] text-base leading-6 mb-10">
              Whether you're an individual or a business, let's create inclusive AI
              solutions together. Reach out now and take the first step!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-1/2 flex flex-col gap-4 mt-10"
          >
            <input
              {...register("name")}
              placeholder="Your Name"
              className="h-11 px-3 bg-[#232323] border border-gray-700 text-white placeholder-gray-400 rounded-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              {...register("email")}
              placeholder="Your Email"
              className="h-11 px-3 bg-[#232323] border border-gray-700 text-white placeholder-gray-400 rounded-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input
              {...register("company")}
              placeholder="Company (Optional)"
              className="h-11 px-3 bg-[#232323] border border-gray-700 text-white placeholder-gray-400 rounded-none"
            />

            <textarea
              {...register("message")}
              placeholder="Your Message"
              className="min-h-[100px] px-3 py-2 bg-[#232323] border border-gray-700 text-white placeholder-gray-400 rounded-none"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            <button
              type="submit"
              className="h-11 bg-white text-black hover:bg-gray-200 transition-colors duration-200 font-medium rounded-none"
            >
              Submit Request
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default UnitySensePage;