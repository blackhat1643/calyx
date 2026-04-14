"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Users, Star, ArrowRight, Shield, Check } from "lucide-react";

export default function BookingPage() {
  // Second section scroll animations
  const sectionTwoRef = useRef(null);
  const sectionFiveRef = useRef(null);
  const { scrollYProgress: sectionTwoScroll } = useScroll({
    target: sectionTwoRef,
    offset: ["start start", "end end"]
  });
  const { scrollYProgress: sectionFiveScroll } = useScroll({
    target: sectionFiveRef,
    offset: ["start start", "end end"]
  });

  // Image animations (Starts immediately, ends at 0.5 progress)
  const imageX = useTransform(sectionTwoScroll, [0, 0.5], ["0%", "45%"]);
  const imageScale = useTransform(sectionTwoScroll, [0, 0.5], [1, 0.8]);
  const imageRadius = useTransform(sectionTwoScroll, [0, 0.5], ["0px", "40px"]);
  
  // Text animations
  const textOpacity = useTransform(sectionTwoScroll, [0.3, 0.5], [0, 1]);
  const textX = useTransform(sectionTwoScroll, [0.3, 0.5], [-40, 0]);

  // Section 5: Individual Title Scales
  const scaleTitle1 = useTransform(sectionFiveScroll, [0.1, 0.2], [1, 0.8]);
  const scaleTitle2 = useTransform(sectionFiveScroll, [0.3, 0.4], [1, 0.8]);
  const scaleTitle3 = useTransform(sectionFiveScroll, [0.5, 0.6], [1, 0.8]);
  const scaleTitle4 = useTransform(sectionFiveScroll, [0.7, 0.8], [1, 0.8]);

  const scales = [scaleTitle1, scaleTitle2, scaleTitle3, scaleTitle4];

  return (
    <main className="relative bg-black text-white">
      {/* Hero Section */}
      <div className="p-4 md:p-6 lg:p-10 lg:pb-0 min-h-screen">
        <section className="relative min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] w-full flex items-center justify-start px-6 md:px-16 lg:px-24 py-12 md:py-20 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
          {/* Video Overlay */}
          <div className="absolute inset-0 z-0 bg-gray-900">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-60"
            >
              <source
                src="/hairdresser-styling-a-young-woman-s-reddishbrown-h-2025-12-17-23-34-49-utc.mov"
                type="video/mp4"
              />
            </video>
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
            {/* Left Side: Content & Price Box */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-[10px] font-bold uppercase tracking-[0.2em]"
                >
                  <Star className="w-3 h-3 mr-2 fill-gold-400" />
                  Premium Experience
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] display-font">
                  Indulge in <br />
                  <span className="gold-text">Timeless Luxury</span>
                </h1>
                
                <p className="text-base md:text-lg text-gray-400 max-w-sm font-light leading-relaxed">
                  Experience the ultimate escape in our curated villas. Every detail is designed for your comfort and serenity.
                </p>
              </div>

              {/* Price Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6 md:p-7 rounded-[1.5rem] max-w-[380px] group hover:border-gold-500/40 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">Private Villa</p>
                    <h3 className="text-xl font-bold tracking-tight">Royal Azure Suite</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold gold-text">$1,299</p>
                    <p className="text-[9px] text-gray-500 tracking-widest font-bold">PER NIGHT</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-xs text-gray-400 font-light">
                    <div className="w-4 h-4 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 border border-gold-500/20">
                      <Check className="w-2.5 h-2.5 text-gold-400" />
                    </div>
                    <span>All-inclusive breakfast and spa</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400 font-light">
                    <div className="w-4 h-4 rounded-full bg-gold-500/10 flex items-center justify-center mr-3 border border-gold-500/20">
                      <Check className="w-2.5 h-2.5 text-gold-400" />
                    </div>
                    <span>Complimentary airport transfer</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="border border-white/5 rounded-xl p-3 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1.5 font-bold">Check In</p>
                    <div className="flex items-center text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-gold-400" />
                      <span>Select Date</span>
                    </div>
                  </div>
                  <div className="border border-white/5 rounded-xl p-3 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1.5 font-bold">Guests</p>
                    <div className="flex items-center text-xs font-medium">
                      <Users className="w-3.5 h-3.5 mr-2 text-gold-400" />
                      <span>2 Persons</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl gold-gradient text-black text-sm font-bold flex items-center justify-center group/btn relative overflow-hidden transition-all duration-300 active:scale-[0.98] shadow-lg shadow-gold-900/20">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center tracking-tight">
                    Book Reservation <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
                  <p className="text-6xl font-black text-white/[0.03] uppercase select-none leading-none mb-1">Paradise</p>
                  <p className="text-lg font-light text-gray-600 tracking-[0.3em] uppercase">Refined living</p>
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
              detail: "09:00 PM EST",
              color: "gold",
              icon: <div className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse" />
            },
            {
              num: "02",
              title: "YouTube",
              detail: "Global Live",
              color: "red",
              icon: <svg className="w-7 h-7 text-red-500 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
            },
            {
              num: "03",
              title: "Ceremony",
              detail: "April 25, 2026",
              color: "gold",
              icon: <Calendar className="w-6 h-6 text-gold-500/50" />
            },
            {
              num: "04",
              title: "Language",
              detail: "EN & ES",
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
      <section ref={sectionTwoRef} className="relative h-[200vh] bg-black">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Content (Title & Description) - Left Side */}
          <div className="absolute inset-0 flex items-center px-12 md:px-24">
            <motion.div 
              style={{ opacity: textOpacity, x: textX }}
              className="max-w-xl space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight display-font">
                Crafted for <br />
                <span className="gold-text">Soulful Moments</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Step into a world where architecture meets the horizon. Every villa is a masterpiece of design, offering an unparalleled connection to the natural wonders that surround you.
              </p>
              <div className="flex gap-8 items-center pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold gold-text">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Privacy</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold gold-text">24/7</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Concierge</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image - Animates from Middle to Right */}
          <motion.div 
            style={{ 
              x: imageX, 
              scale: imageScale,
              borderRadius: imageRadius
            }}
            className="relative z-10 w-[80%] md:w-[60%] lg:w-[45%] h-[60vh] md:h-[70vh] overflow-hidden shadow-2xl"
          >
            <img 
              src="/calyx.JPG" 
              alt="Calyx Luxury" 
              className="w-full h-full object-cover"
            />
            {/* Subtle Overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Fourth Section: Registration Form */}
      <section className="relative py-10 px-6 md:px-24 bg-[#050505] overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-500/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visual & Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group">
              <img 
                src="/luxury_membership_key_1776167189694.png" 
                alt="Membership Invite" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-gold-400 font-bold tracking-[0.4em] uppercase text-xs mb-2">Request Access</p>
                <h2 className="text-4xl font-bold display-font">Join the Calyx Legacy</h2>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold gold-text">An Exclusive Experience Awaits</h3>
              <p className="text-gray-400 font-light text-lg leading-relaxed max-w-md">
                Registration provides priority access to our private villa collections and personalized concierge services across the globe.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold-500/50 transition-colors text-white font-light placeholder:text-gray-700" 
                  />
                </div>
                {/* Last Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold-500/50 transition-colors text-white font-light placeholder:text-gray-700" 
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold-500/50 transition-colors text-white font-light placeholder:text-gray-700" 
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold-500/50 transition-colors text-white font-light placeholder:text-gray-700" 
                />
              </div>

              {/* Preferences */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Preferred Destination</label>
                <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold-500/50 transition-colors text-gray-400 font-light appearance-none">
                  <option>Select Destination</option>
                  <option>Maldives - Private Islands</option>
                  <option>Bali - Jungle Sanctuary</option>
                  <option>Swiss Alps - Luxury Chalet</option>
                  <option>Amalfi Coast - Villa Azure</option>
                </select>
              </div>

              <div className="pt-4">
                <button 
                  type="button"
                  className="w-full py-5 rounded-2xl gold-gradient text-black font-bold flex items-center justify-center group/submit relative overflow-hidden transition-all duration-300 active:scale-[0.98] shadow-lg shadow-gold-500/20"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/submit:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center tracking-tight">
                    Submit Registration <ArrowRight className="ml-2 w-5 h-5 group-hover/submit:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest font-bold">
                🔒 Secure SSL Encryption • Confidentiality Guaranteed
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Fifth Section: What You'll Learn (Sticky Stacking Edition) */}
      <section ref={sectionFiveRef} className="relative pt-32 pb-32 px-6 md:px-24 bg-[#030303] min-h-[150vh]">
        <div className="max-w-6xl mx-auto space-y-0">
          <div className="mb-20 text-center space-y-4">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-gold-500 font-bold uppercase tracking-[0.5em] text-[10px]"
             >
               Curriculum for the Elite
             </motion.span>
             <h2 className="text-5xl md:text-7xl font-bold display-font">What You&apos;ll Master</h2>
          </div>

          <div className="flex flex-col space-y-12">
            {[
              {
                num: "01",
                title: "Elite Networking Protocols",
                desc: "Master the unspoken language of the global high-net-worth elite. From private club etiquette to establishing high-trust cross-border alliances.",
                icon: <Users className="w-8 h-8 text-gold-500" />,
                bg: "bg-[#0a0a0a]",
                border: "border-gold-500/20"
              },
              {
                num: "02",
                title: "Luxury Market Mastering",
                desc: "Analyze the 2026 architectural and rental trends defining the premium villa landscape across Europe and Asia with specialized yield mechanics.",
                icon: <Star className="w-8 h-8 text-red-500" />,
                bg: "bg-[#0c0c0c]",
                border: "border-red-500/20"
              },
              {
                num: "03",
                title: "Portfolio Strategy",
                desc: "Discover how to diversify global assets through high-yield luxury real estate and exclusive property management for non-traditional wealth.",
                icon: <Shield className="w-8 h-8 text-gold-500" />,
                bg: "bg-[#0e0e0e]",
                border: "border-white/5"
              },
              {
                num: "04",
                title: "Cinematic Presence",
                desc: "Understand the art of visual storytelling used to market the world's most prestigious event destinations and ultra-luxe properties.",
                icon: <Calendar className="w-8 h-8 text-gold-500" />,
                bg: "bg-[#101010]",
                border: "border-white/5"
              }
            ].map((box, i) => (
              <div 
                key={i} 
                className="sticky h-auto flex flex-col justify-start"
                style={{ top: `${100 + (i * 80)}px`, zIndex: i + 10 }}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`group relative p-10 md:p-12 md:pt-0 md:pb-16 rounded-[3.5rem] ${box.bg} border ${box.border} shadow-2xl overflow-hidden min-h-[300px] flex items-start`}
                >
                  {/* Tempered Background Number */}
                  <div className="absolute top-0 left-0 w-full h-full flex items-start justify-start pointer-events-none p-10">
                    <span className="text-[180px] md:text-[250px] font-black text-white/[0.03] leading-none -translate-x-12 -translate-y-12 select-none uppercase">
                      {box.num}
                    </span>
                  </div>

                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
                    <div className="md:col-span-8 space-y-4">
                       <motion.h3 
                         style={{ scale: scales[i], originX: 0 }}
                         className="text-3xl md:text-5xl font-bold display-font tracking-tight text-white"
                       >
                         {box.title}
                       </motion.h3>
                       <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">{box.desc}</p>
                    </div>
                    <div className="md:col-span-4 flex justify-end">
                       <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:bg-gold-500/5 transition-all duration-700 shadow-inner">
                         {React.cloneElement(box.icon as React.ReactElement, { className: "w-16 h-16 md:w-24 md:h-24 " + (box.num === "02" ? "text-red-500" : "text-gold-500") })}
                       </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
            
            {/* Invisible spacer to 'close' the stack without a button */}
            <div className="h-[20vh]" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative py-20 px-6 md:px-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold display-font tracking-tighter">CALYX<span className="text-gold-500">.</span></h2>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed">
              Curating the world&apos;s most exclusive villa experiences for those who settle for nothing less than extraordinary.
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
