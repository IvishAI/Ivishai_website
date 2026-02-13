import React from "react";
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

const LinguaFlowPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    alert("Form submitted!");
    console.log(data);
    reset();
  };

  return (
    <>
      <Header />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="px-5 md:px-10 lg:px-[196px] py-14">
          <div className="flex flex-col items-center">
            <h1 className="text-[200px] font-sora font-normal text-center text-white opacity-80 mb-0">
              Verbex AI
            </h1>
            {/* Image directly below the text */}
            <div
              className="w-[1161.101px] h-[633.124px] flex-shrink-0 rounded-[12px] mt-0"
              style={{
                background: "url('/verbex.png') lightgray -183.975px -76.74px / 131.407% 114.093% no-repeat",
                aspectRatio: "1161.10/633.12"
              }}
              role="img"
              aria-label="Verbex AI Product Visualization"
            />
          </div>
          
          <div className="flex flex-col items-center mt-8">
            <div className="rounded-full border border-[#13D8F6] flex items-center gap-2 px-2 py-0.5 mb-4">
              <img src="/Ellipse 1.svg" alt="" className="w-3 h-3" />
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

        {/* Rest of the sections remain unchanged */}
        {/* Breaking language barriers Section */}
        <section className="bg-black text-white mt-32">
          <div className="mx-auto px-5 py-10" style={{ maxWidth: "1249px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-[526px_1fr] gap-10">
              <h2
                className="text-5xl font-normal leading-tight mb-0 lg:mb-4 lg:col-start-1 lg:col-end-2"
                style={{
                  background: "var(--Grad-Blue-Text, linear-gradient(90deg, #FFF 0%, #63FFF5 100%))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Breaking language barriers
              </h2>
              <div className="hidden lg:block" />
              <div
                className="bg-zinc-300"
                style={{ width: "526px", height: "506px" }}
                role="img"
                aria-label="Feature visualization"
              />
              <div className="flex flex-col">
                <div className="flex space-x-8 mb-12 text-base">
                  <p className="flex-1">
                    Personalized job matches, skill recommendations
                  </p>
                  <p className="flex-1 text-opacity-80">
                    Personalized job matches, skill recommendations, and expert
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                  {Array(4)
                    .fill(0)
                    .map((_, idx) => (
                      <article
                        key={idx}
                        className="flex flex-col justify-start h-[233px]"
                      >
                        <h3 className="text-6xl leading-tight mb-2">01</h3>
                        <h4 className="text-2xl font-semibold mb-1">
                          100+ Language Translations
                        </h4>
                        <p className="text-sm font-light">
                          AI-driven real-time multilingual support.
                        </p>
                      </article>
                    ))}
                </div>
              </div>
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
              Want an{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FFF 0%, #E26426 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Interactive
              </span>{" "}
              Demo?
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
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
            <input
              {...register("email")}
              placeholder="Your Email"
              className="h-11 px-3 bg-[#232323] border border-gray-700 text-white placeholder-gray-400 rounded-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
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
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
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

export default LinguaFlowPage;