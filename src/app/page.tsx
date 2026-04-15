"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Calendar, Users, Star, ArrowRight, Shield, Check, ChevronDown } from "lucide-react";

export default function BookingPage() {
  // Second section scroll animations
  const sectionTwoRef = useRef(null);
  const sectionFiveRef = useRef(null);
  const { scrollYProgress: sectionTwoScroll } = useScroll({
    target: sectionTwoRef,
    offset: ["start start", "end end"]
  });

  // Image animations (Starts immediately, ends at 0.5 progress)
  const imageX = useTransform(sectionTwoScroll, [0, 0.5], ["0%", "45%"]);
  const imageScale = useTransform(sectionTwoScroll, [0, 0.5], [1, 0.8]);
  const imageRadius = useTransform(sectionTwoScroll, [0, 0.5], ["0px", "40px"]);
  const imageRotateY = useTransform(sectionTwoScroll, [0, 0.5], [0, -15]);
  const imageZ = useTransform(sectionTwoScroll, [0, 0.5], [0, 100]);
  const imageGrayscale = useTransform(sectionTwoScroll, [0, 0.3], ["100%", "0%"]);
  
  // Text animations
  const textOpacity = useTransform(sectionTwoScroll, [0.2, 0.4], [0, 1]);
  const textX = useTransform(sectionTwoScroll, [0.2, 0.4], [-60, 0]);
  const bgTextY = useTransform(sectionTwoScroll, [0, 1], ["0%", "-20%"]);
  const bgTextOpacity = useTransform(sectionTwoScroll, [0.1, 0.3, 0.7, 0.9], [0, 0.05, 0.05, 0]);

  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I attend if I am not in Mumbai?",
      a: "Yes! You can join the exclusive Global Webinar from anywhere."
    },
    {
      q: "What is the event about?",
      a: "A high-impact masterclass where international artist Kostya decodes the Architecture of Volume. You’ll learn 3 exclusive Volume techniques to master silhouettes and elevate your Skills."
    },
    {
      q: "Who should attend the event?",
      a: "Professional hairstylists and salon owners looking to master international standards. It’s for those who want to move beyond basic styling to high-end technical artistry."
    },
    {
      q: "What will I learn?",
      a: "You’ll master 3 signature volume techniques, advanced sectioning, and tool handling. The focus is on creating gravity-defying, long-lasting silhouettes for Indian hair."
    },
    {
      q: "Where is the event?",
      a: "The live seminar is in Mumbai (Venue TBA), or you can join via the Global Webinar. It’s designed to be accessible whether you are in the city or tuning in remotely."
    },
    {
      q: "What is the duration?",
      a: "A high-intensity 4-hour session from 3:00 PM to 7:00 PM. It includes a live demo, technical breakdown, and a networking session."
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, all participants receive an official e-certificate signed by Kostya. It’s a prestigious credential to showcase your international training to clients."
    }
  ];

  return (
    <main className="relative bg-black text-white">
      {/* Hero Section */}
      <div className="p-4 md:p-6 lg:p-10 lg:pb-0 min-h-screen">
        <section className="relative min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] w-full flex items-center justify-start px-6 md:px-16 lg:px-24 py-12 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
          {/* Triple Portrait Video Background */}
          <div className="absolute inset-0 z-0 bg-gray-900 flex">
            {[
              { id: 1, src: "/Когда детские пушистые волосы превращаются в идеальную укладку — это всегда маленькое вау ✨Покаж.mp4" },
              { id: 2, src: "/MasterOfVolume_OfficialTeaser_18May.mp4" },
              { id: 3, src: "/SaveVid.Net_AQPv23M0qx_2oXwVm0sRn_SQxvuehOUfyLmTfPyDbztkCk1F3tmhGk4BOcvSLqEMm-W4TAC-qCVStfRZxgGhBaRGz0E_nSJ9Erz5_Og.mp4" }
            ].map((video, idx) => (
              <div key={video.id} className={`flex-1 h-full relative overflow-hidden ${idx !== 2 ? 'border-r border-white/5' : ''}`}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`h-full w-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ${idx === 1 ? 'scale-110' : ''}`}
                >
                  <source
                    src={video.src}
                    type="video/mp4"
                  />
                </video>
              </div>
            ))}
            {/* Unified Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
            {/* Left Side: Content & Price Box */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-[10px] font-bold uppercase tracking-[0.2em]"
                >
                  <Star className="w-3 h-3 mr-2 fill-gold-400" />
                  Exclusive Masterclass
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] display-font">
                  Learn the <br />
                  <span className="gold-text">Architecture of Volume</span>
                </h1>
                
                <p className="text-sm md:text-base text-gray-400 max-w-lg font-light leading-relaxed">
                  Join International Hair Artist Konstantin Borchininov (Kostya) for a live, high-impact hairstyling experience designed for professionals who want to elevate their skills. Master the technique that creates hair silhouettes specifically for Indian hair textures.
                </p>
              </div>

              {/* Price Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-5 md:p-6 rounded-[1.5rem] max-w-[420px] group hover:border-gold-500/40 transition-all duration-700 w-full"
              >
                {/* Event 1: Exclusive Seminar */}
                <div className="mb-4 pb-4 border-b border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">Physical Event</p>
                      <h3 className="text-xl font-bold tracking-tight text-white">Exclusive Seminar</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center text-xs text-gray-400 font-light">
                      <div className="w-3.5 h-3.5 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 border border-gold-500/20">
                        <Calendar className="w-2 h-2 text-gold-400" />
                      </div>
                      <span>Location: Mumbai</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-400 font-light">
                      <div className="w-3.5 h-3.5 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 border border-gold-500/20">
                        <Users className="w-2 h-2 text-gold-400" />
                      </div>
                      <span>Venue: TBA</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-400 font-light">
                      <div className="w-3.5 h-3.5 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 border border-gold-500/20">
                        <Star className="w-2 h-2 text-gold-400" />
                      </div>
                      <span>Inclusions: High-Tea & Dinner</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-1">
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1.5">Price Tiers</p>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="border border-white/5 rounded-lg p-2 bg-white/[0.02]">
                        <p className="text-gray-400 mb-1">Platinum</p>
                        <p className="font-bold gold-text text-sm">₹9,999</p>
                      </div>
                      <div className="border border-white/5 rounded-lg p-2 bg-white/[0.02]">
                        <p className="text-gray-400 mb-1">Gold</p>
                        <p className="font-bold text-white text-sm">₹7,499</p>
                      </div>
                      <div className="border border-white/5 rounded-lg p-2 bg-white/[0.02]">
                        <p className="text-gray-400 mb-1">Silver</p>
                        <p className="font-bold text-gray-300 text-sm">₹4,999</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 2: Global Webinar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] mb-0.5 font-bold">Online Masterclass</p>
                      <h3 className="text-base font-bold tracking-tight text-white">Global Webinar</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-500 line-through">₹2999</p>
                      <p className="text-lg font-bold gold-text">₹999</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl gold-gradient text-black text-sm font-bold flex items-center justify-center group/btn relative overflow-hidden transition-all duration-300 active:scale-[0.98] shadow-lg shadow-gold-900/20">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center tracking-tight">
                    Reserve Your Spot <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <div className="mt-4 flex items-center justify-center text-[9px] text-gray-600 tracking-[0.2em] font-bold uppercase">
                  <Shield className="w-3 h-3 mr-2" /> Best Price Guaranteed
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Tropical Accent */}
            <div className="hidden lg:flex flex-col justify-end pb-12 items-end space-y-8">
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1 }}
                 className="text-right"
               >
                  <div className="h-0.5 w-10 bg-gold-500 ml-auto mb-4" />
                  <p className="text-6xl font-black text-white/[0.03] uppercase select-none leading-none mb-1">Artistry</p>
                  <p className="text-lg font-light text-gray-600 tracking-[0.3em] uppercase">Master the craft</p>
               </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Second Section: Minimal Event Details (Horizontal with Tempered Background) */}
      <section className="relative py-2 px-0 bg-black border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0">
          {[
            {
              num: "01",
              title: "Start Time",
              detail: "03:00 PM IST",
              color: "gold",
              icon: <div className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse" />
            },
            {
              num: "02",
              title: "Duration",
              detail: "4 Hours Live",
              color: "gold",
              icon: <Star className="w-6 h-6 text-gold-500/50" />
            },
            {
              num: "03",
              title: "Location",
              detail: "Mumbai, India",
              color: "gold",
              icon: <Calendar className="w-6 h-6 text-gold-500/50" />
            },
            {
              num: "04",
              title: "Date",
              detail: "18 May, 2026",
              color: "gold",
              icon: <Users className="w-6 h-6 text-gold-500/50" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group relative px-8 py-8 md:py-6 flex flex-col items-center text-center space-y-2 ${i !== 3 ? 'md:border-r border-white/10' : ''}`}
            >
              {/* Tempered Background Number */}
              <div className="absolute inset-0 flex items-start justify-start pointer-events-none select-none overflow-hidden">
                <span className="text-[120px] font-black text-white/5 transition-colors group-hover:text-white/[0.08] duration-700 leading-none -translate-x-6 -translate-y-4">
                  {item.num}
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center space-y-3">
                <div className="p-2">
                   {item.icon}
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className={`text-base md:text-lg font-bold ${item.color === 'red' ? 'text-red-500' : 'gold-text'}`}>
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Third Section: Scroll-driven Transition (Moved) */}
      <section ref={sectionTwoRef} className="relative h-[200vh] bg-black" style={{ perspective: "1000px" }}>
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Parallax Background Text */}
          <motion.div 
            style={{ y: bgTextY, opacity: bgTextOpacity }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <h2 className="text-[20vw] font-black uppercase leading-none text-white whitespace-nowrap">
              Master Artist
            </h2>
          </motion.div>

          {/* Content (Title & Description) - Left Side */}
          <div className="absolute inset-0 flex items-center px-12 md:px-24">
            <motion.div 
              style={{ opacity: textOpacity, x: textX }}
              className="max-w-xl space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight display-font">
                The Master of <br />
                <span className="gold-text">Silhouettes</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Konstantin Borchininov is a globally recognized artist celebrated for his iconic volume curls, open hair styling, and glamorous setting techniques. Known for his Precision, Technique, and Transformation. Kostya is partnering with Calyx Professional to decode the geometry behind elite, long-lasting volume for the Indian professional community.
              </p>
              <div className="flex gap-8 items-center pt-4">
                {[
                  { label: "Precision", val: "100%" },
                  { label: "Artistry", val: "Global" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex flex-col"
                  >
                    <span className="text-3xl font-bold gold-text">{stat.val}</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image - Animates from Middle to Right */}
          <motion.div 
            style={{ 
              x: imageX, 
              scale: imageScale,
              borderRadius: imageRadius,
              rotateY: imageRotateY,
              z: imageZ,
              filter: `grayscale(${imageGrayscale})`
            }}
            className="relative z-10 w-[80%] md:w-[60%] lg:w-[45%] h-[60vh] md:h-[70vh] overflow-hidden shadow-2xl"
          >
            <img 
              src="/IMG_0217.JPG" 
              alt="Calyx Luxury" 
              className="w-full h-full object-cover"
            />
            {/* Subtle Overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </section>


      {/* Fifth Section: Why You Should Not Miss It (Standard Vertical Layout) */}
      <section ref={sectionFiveRef} className="relative pt-24 pb-24 px-6 md:px-24 bg-[#030303]">
        <div className="max-w-6xl mx-auto space-y-0">
          <div className="mb-20 text-center space-y-4">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-gold-500 font-bold uppercase tracking-[0.5em] text-[10px]"
             >
               The Ultimate Experience
             </motion.span>
             <h2 className="text-5xl md:text-7xl font-bold display-font">Why You Should Not Miss It</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Live Demonstration",
                desc: "Witness the creation of 3 exclusive hair silhouette techniques live on stage. Kostya reveals the signature volume mastering.",
                icon: <Star className="w-8 h-8 text-gold-500" />,
                accent: "gold",
                isGold: true
              },
              {
                num: "02",
                title: "Technique Breakdown",
                desc: "An intensive step-by-step breakdown of professional setting and styling geometry. Decode elite volume science.",
                icon: <Shield className="w-8 h-8 text-red-500" />,
                accent: "red"
              },
              {
                num: "03",
                title: "Interactive Q&A",
                desc: "Engage directly with Kostya in an open dialogue. Get technical questions answered by a world-renowned hair artist.",
                icon: <Users className="w-8 h-8 text-gold-500" />,
                accent: "gold",
                isGold: true
              },
              {
                num: "04",
                title: "Elite Networking",
                desc: "Connect with top industry professionals and leaders. Expand your circle within the niche Indian artistry community.",
                icon: <Calendar className="w-8 h-8 text-gold-500" />,
                accent: "gold"
              },
              {
                num: "05",
                title: "Official Certificate",
                desc: "Receive an official completion certificate signed by Kostya. Validate your expertise in Volume techniques.",
                icon: <Check className="w-8 h-8 text-gold-500" />,
                accent: "gold",
                isGold: true
              },
              {
                num: "CTA",
                title: "Join the Elite",
                desc: "Secure your place in the most anticipated hair masterclass of 2026. Limited physical seats available in Mumbai.",
                icon: <ArrowRight className="w-8 h-8 text-white" />,
                accent: "gold"
              }
            ].map((box, i) => (
              <div key={i} className="relative group h-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative p-7 md:p-9 rounded-[2.2rem] overflow-hidden transition-all duration-700 shadow-2xl h-full flex flex-col ${
                    box.isGold
                    ? 'gold-gradient text-black border-none'
                    : 'bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-3xl border border-white/10 text-white hover:border-white/20'
                  }`}
                >
                  {/* Background Accents */}
                  {box.isGold ? (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-[40px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                  ) : (
                    <>
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-${box.accent}-500/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-gold-500/40 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
                    </>
                  )}

                  <div className="relative z-10 flex flex-col gap-6 items-start h-full">
                    {/* Number & Accent Column */}
                    <div className="flex flex-col items-start space-y-2">
                       <span className={`text-3xl md:text-4xl font-display font-light ${box.isGold ? 'text-black/20' : 'text-white/10 group-hover:text-gold-500/40'} transition-colors duration-700`}>
                         {box.num}
                       </span>
                       <div className={`w-8 h-px ${box.isGold ? 'bg-black/20' : 'bg-white/10 group-hover:w-16 group-hover:bg-gold-500'} transition-all duration-700`} />
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 space-y-3">
                       <div className="flex items-center space-y-0 gap-3">
                          {!box.isGold && <div className={`w-1.5 h-1.5 rounded-full bg-${box.accent === 'red' ? 'red-500' : 'gold-500'} animate-pulse`} />}
                          <h3 className={`text-xl md:text-2xl font-bold display-font tracking-tight transition-all ${box.isGold ? 'text-black' : 'text-white group-hover:gold-text'}`}>
                             {box.title}
                          </h3>
                       </div>
                       <p className={`text-sm md:text-base font-medium leading-relaxed transition-colors duration-500 ${box.isGold ? 'text-black/70' : 'text-gray-400 group-hover:text-gray-200'}`}>
                         {box.desc}
                       </p>
                    </div>

                    {/* Decorative Geometric Element */}
                    <div className="mt-auto pt-4 flex justify-between items-center w-full">
                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${box.isGold ? 'bg-black/5 text-black' : 'bg-white/5 text-white/40'}`}>
                          {box.num === 'CTA' ? 'Enroll Now' : 'Technique'}
                        </span>
                        <div className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 group-hover:scale-110 ${
                          box.isGold ? 'bg-black text-gold-500 ring-4 ring-black/5' : 'bg-white/5 text-white/20 border border-white/5 group-hover:border-gold-500/40'
                        }`}>
                           {box.icon && React.cloneElement(box.icon as React.ReactElement<any>, { 
                             className: `w-4 h-4 transition-all duration-700 group-hover:translate-x-1 ${box.isGold ? 'text-gold-400' : 'text-white/40 group-hover:text-gold-500'}` 
                           })}
                        </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
            
            {/* Minimal footer spacer */}
            <div className="h-0" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6 md:px-24 bg-black border-t border-white/5 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5 blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-gold-500 font-bold uppercase tracking-[0.5em] text-[10px]"
             >
               Need to know
             </motion.span>
             <h2 className="text-4xl md:text-6xl font-bold display-font">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`border rounded-2xl transition-colors duration-500 overflow-hidden ${openFaqIndex === idx ? 'bg-white/[0.04] border-gold-500/30' : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/10'}`}
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full text-left px-6 py-6 md:px-8 flex justify-between items-center group focus:outline-none"
                >
                  <span className={`text-sm md:text-base font-bold pr-8 transition-colors ${openFaqIndex === idx ? 'gold-text' : 'text-gray-300 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex flex-shrink-0 items-center justify-center transition-all ${openFaqIndex === idx ? 'border-gold-500/50 bg-gold-500/10' : 'border-white/10 bg-black/50 group-hover:border-white/20'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${openFaqIndex === idx ? 'text-gold-400 rotate-180' : 'text-gray-500 group-hover:text-white'}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 text-gray-400 font-light text-sm leading-relaxed max-w-3xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative py-20 px-6 md:px-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold display-font tracking-tighter">CALYX<span className="text-gold-500">.</span></h2>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed">
              Empowering the next generation of hair professionals through elite technique and global artistry.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                <a key={social} href="#" className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-gold-500 transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white">Navigation</h4>
            <ul className="space-y-4 text-gray-500 font-light">
              {['The Collection', 'Services', 'Events', 'Membership'].map(link => (
                <li key={link} className="hover:text-gold-500 transition-colors cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white">Contact</h4>
            <ul className="space-y-4 text-gray-500 font-light text-sm">
              <li>concierge@calyx.luxury</li>
              <li>+1 (888) 555-0812</li>
              <li>Mayfair, London, UK</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-700 uppercase tracking-[0.2em] font-bold">
          <p>© 2026 Calyx Luxury Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Subtle Bottom Glow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-gold-500/5 blur-[120px] pointer-events-none" />
    </main>
  );
}
