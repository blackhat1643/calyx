"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Users, Star, ArrowRight, Shield, Check } from "lucide-react";

export default function BookingPage() {
  // Second section scroll animations
  const sectionTwoRef = useRef(null);
  const { scrollYProgress: sectionTwoScroll } = useScroll({
    target: sectionTwoRef,
    offset: ["start start", "end end"]
  });

  // Image animations (Starts immediately, ends at 0.5 progress)
  const imageX = useTransform(sectionTwoScroll, [0, 0.5], ["0%", "45%"]);
  const imageScale = useTransform(sectionTwoScroll, [0, 0.5], [1, 0.8]);
  const imageRadius = useTransform(sectionTwoScroll, [0, 0.5], ["0px", "40px"]);
  
  // Text animations
  const textOpacity = useTransform(sectionTwoScroll, [0.3, 0.5], [0, 1]);
  const textX = useTransform(sectionTwoScroll, [0.3, 0.5], [-40, 0]);

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

      {/* Second Section: Minimal Event Details (Horizontal) */}
      <section className="relative py-2 px-0 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0">
          {[
            {
              num: "01",
              title: "Start Time",
              detail: "09:00 PM EST",
              color: "gold"
            },
            {
              num: "02",
              title: "YouTube",
              detail: "Global Live",
              color: "red"
            },
            {
              num: "03",
              title: "Ceremony",
              detail: "April 25, 2026",
              color: "gold"
            },
            {
              num: "04",
              title: "Language",
              detail: "EN & ES",
              color: "gold"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group px-8 py-8 md:py-4 flex flex-col items-center text-center space-y-3 ${i !== 3 ? 'md:border-r border-white/10' : ''}`}
            >
              <span className="text-gray-700 font-mono text-[10px] tracking-[0.3em] font-bold">{item.num}</span>
              <div className="space-y-0.5">
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className={`text-base md:text-lg font-bold ${item.color === 'red' ? 'text-red-500' : 'gold-text'}`}>
                  {item.detail}
                </p>
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

      {/* Fifth Section: What You'll Learn (Aesthetic Upgrade) */}
      <section className="relative py-32 px-6 md:px-24 bg-[#030303] overflow-hidden">
        {/* Cinematic Background Mesh */}
        <div className="absolute top-0 inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-[1px] bg-gold-500/50" />
                <span className="text-gold-500 font-bold uppercase tracking-[0.5em] text-[10px]">Excellence Defined</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold display-font leading-[0.9] tracking-tighter"
              >
                What You&apos;ll <br/><span className="italic text-gray-500">Master</span>
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-500 max-w-xs font-light text-lg leading-relaxed"
            >
              Four pillars of specialized knowledge curated for the next generation of global leaders.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:grid-rows-2 h-auto lg:h-[700px]">
            {/* Box 1: Large Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative md:col-span-4 md:row-span-1 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 overflow-hidden flex flex-col justify-between hover:border-gold-500/30 transition-all duration-700 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-10 border border-gold-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all">
                  <Users className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold display-font mb-4">Elite Networking Protocols</h3>
                <p className="text-gray-400 font-light text-xl max-w-lg leading-relaxed">
                  Master the unspoken language of the global high-net-worth elite. From private club etiquette to establishing high-trust cross-border alliances.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-gold-500 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
                Dive Deep <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Box 2: Tall/Thin */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative md:col-span-2 md:row-span-2 rounded-[3rem] bg-[#0c0c0c] border border-white/5 p-10 overflow-hidden flex flex-col justify-between hover:border-red-500/30 transition-all duration-700"
            >
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-red-500/5 blur-[60px] group-hover:bg-red-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-10 border border-red-500/20 group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-3xl font-bold display-font mb-6 leading-tight">Luxury Market Mastering</h3>
                <p className="text-gray-500 font-light text-lg space-y-4">
                  <span>• 2026 Architectural Forecast</span><br/>
                  <span>• Premium Rental Yield Mechanics</span><br/>
                  <span>• Emerging Luxury Districts</span>
                </p>
              </div>
              <div className="mt-12 text-gray-800 text-7xl font-bold display-font select-none group-hover:text-red-500/10 transition-colors">02</div>
            </motion.div>

            {/* Box 3: Small Square */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative md:col-span-2 md:row-span-1 rounded-[3rem] bg-white/[0.02] border border-white/5 p-10 hover:bg-white/[0.04] transition-all duration-700"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-gold-500/20 transition-colors">
                <Shield className="w-6 h-6 text-gray-400 group-hover:text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold display-font mb-2">Portfolio Strategy</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">Diversify non-traditional assets via ultra-premium real estate.</p>
            </motion.div>

            {/* Box 4: Small Square (Horizontal Mix) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative md:col-span-2 md:row-span-1 rounded-[3rem] bg-gradient-to-tr from-gold-500/5 to-transparent border border-white/5 p-10 hover:border-gold-500/20 transition-all duration-700 flex flex-col justify-center"
            >
              <div className="space-y-4">
                <div className="flex gap-2">
                   {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-gold-500/30 group-hover:bg-gold-500 transition-colors" style={{ transitionDelay: `${i*100}ms` }} />)}
                </div>
                <h3 className="text-2xl font-bold display-font">Cinematic Presence</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Visual storytelling for high-end destinations.</p>
              </div>
              <ArrowRight className="absolute bottom-10 right-10 w-6 h-6 text-white/5 group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
            </motion.div>
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
