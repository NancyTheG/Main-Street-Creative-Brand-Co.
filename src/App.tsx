/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Utensils, 
  Printer, 
  Palette, 
  Search, 
  Lightbulb, 
  Rocket,
  Quote,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const StreetSign = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center select-none ${className}`}>
    <div className="w-1.5 h-full bg-brand-gold absolute left-1/2 -translate-x-1/2 rounded-full opacity-40" />
    <div className="flex flex-col gap-4 relative py-4">
      {/* Main Street */}
      <div className="bg-brand-green border-2 border-brand-gold px-6 py-2 shadow-[4px_4px_0px_#C5A059] transform rotate-[-2deg] relative z-40 min-w-[180px] text-center">
        <span className="text-white font-display font-bold text-sm tracking-[0.2em] block leading-tight uppercase">MAIN STREET</span>
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-gold rounded-full" />
      </div>
      {/* Taste Street */}
      <div className="bg-brand-green border-2 border-brand-gold px-6 py-2 shadow-[4px_4px_0px_#C5A059] transform rotate-[1deg] translate-x-4 relative z-30 min-w-[160px] text-center">
        <span className="text-white font-display font-bold text-xs tracking-[0.2em] block leading-tight uppercase">TASTE STREET</span>
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-gold rounded-full" />
      </div>
      {/* Print Street */}
      <div className="bg-brand-green border-2 border-brand-gold px-6 py-2 shadow-[4px_4px_0px_#C5A059] transform rotate-[-1deg] -translate-x-4 relative z-20 min-w-[160px] text-center">
        <span className="text-white font-display font-bold text-xs tracking-[0.2em] block leading-tight uppercase">PRINT STREET</span>
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-gold rounded-full" />
      </div>
      {/* Stitch Street */}
      <div className="bg-brand-green border-2 border-brand-gold px-6 py-2 shadow-[4px_4px_0px_#C5A059] transform rotate-[2deg] translate-x-2 relative z-10 min-w-[160px] text-center">
        <span className="text-white/80 font-display font-bold text-xs tracking-[0.2em] block leading-tight uppercase">STITCH STREET</span>
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-gold rounded-full" />
      </div>
      {/* Consulting Street */}
      <div className="bg-brand-green/80 border-2 border-brand-gold/50 px-6 py-2 shadow-[4px_4px_0px_#C5A059]/50 transform rotate-[-1deg] -translate-y-1 relative z-5 min-w-[160px] text-center">
        <span className="text-white/50 font-display font-bold text-xs tracking-[0.2em] block leading-tight uppercase">CONSULTING STREET</span>
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-gold/50 rounded-full" />
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Streets', href: '#streets' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Packages', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-green shadow-xl py-3 border-b-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex flex-col border-l-4 border-brand-gold pl-2 leading-none">
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-brand-gold/70">Main Street</span>
            <span className="font-serif italic text-xl text-brand-gold">Creative Brand Co.</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brand-gold hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-green overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 border-t border-brand-gold/10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-brand-gold text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, light = false, center = true }: { children: React.ReactNode, subtitle?: string, light?: boolean, center?: boolean }) => (
  <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
    {subtitle && (
      <span className="block text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 text-brand-gold">
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight ${light ? 'text-white' : 'text-brand-green'}`}>
      {children}
    </h2>
    <div className={`h-1 w-20 mt-6 ${center ? 'mx-auto' : ''} bg-brand-gold`} />
  </div>
);

const StreetCard = ({ title, status, description, icon: Icon, badge, cta = "Secure This Street", onVisit }: { title: string, status: string, description: string, icon: any, badge?: string, cta?: string, onVisit?: () => void }) => (
  <motion.div 
    whileHover={{ y: -10, x: -4 }}
    className="bg-white p-8 rounded-sm shadow-[10px_10px_0px_#0B3D2E] border-2 border-brand-green flex flex-col h-full relative overflow-hidden"
  >
    {badge && (
      <div className="absolute top-4 right-4 bg-brand-gold text-white text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-wider">
        {badge}
      </div>
    )}
    <div className="w-14 h-14 bg-brand-gold/10 rounded-sm flex items-center justify-center mb-6 text-brand-gold">
      <Icon size={32} />
    </div>
    <div className="mb-4">
      <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase block mb-1">Status: {status}</span>
      <h4 className="font-serif italic text-2xl text-brand-green">{title}</h4>
    </div>
    <p className="text-slate-700 text-sm leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <button 
      onClick={onVisit}
      className="w-full bg-brand-green text-white text-center text-[10px] font-black uppercase py-4 tracking-[0.2em] hover:bg-black transition-colors cursor-pointer"
    >
      {cta}
    </button>
  </motion.div>
);

const PriceCard = ({ title, price, items, cta, featured = false }: { title: string, price?: string, items: string[], cta: string, featured?: boolean }) => (
  <div className={`p-10 rounded-sm border-2 flex flex-col h-full transition-all ${featured ? 'bg-brand-gold border-brand-green text-brand-green shadow-[10px_10px_0px_#0B3D2E] xl:scale-105 xl:z-10 xl:shadow-[15px_15px_0px_#0B3D2E]' : 'bg-white border-brand-green shadow-[8px_8px_0px_#0B3D2E] text-slate-800'}`}>
    <h3 className="text-xs uppercase font-black tracking-widest mb-4 opacity-80">{title}</h3>
    {price && (
      <div className="mb-8 flex justify-between items-end border-b-2 border-brand-green pb-4">
        <span className="text-6xl font-black">{price}</span>
      </div>
    )}
    {!price && <div className="text-4xl font-black mb-8 border-b-2 border-brand-green pb-4">On Request</div>}
    
    <div className="flex-grow space-y-3 mb-10">
      {items.map((item, i) => (
        <div key={i} className="flex gap-3 items-start">
          <span className="text-xs font-bold uppercase tracking-wide">• {item}</span>
        </div>
      ))}
    </div>
    
    <a href="#contact" className={`w-full py-4 text-center rounded-sm font-black uppercase tracking-widest transition-all ${featured ? 'bg-brand-green text-white hover:bg-black' : 'bg-brand-green text-white hover:bg-black'}`}>
      {cta}
    </a>
  </div>
);

const ProcessStep = ({ number, title, description, icon: Icon }: { number: string, title: string, description: string, icon: any }) => (
  <div className="flex flex-col items-center text-center px-4 relative">
    <div className="mb-6 relative">
      <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white shadow-lg relative z-10">
        <Icon size={20} />
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold text-white font-display font-bold rounded-full flex items-center justify-center z-20 text-[10px] border-2 border-cream">
        {number}
      </div>
    </div>
    <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-green mb-2">{title}</h4>
    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tight max-w-[150px]">{description}</p>
  </div>
);

const TestimonialCard = ({ name, company, quote }: { name: string, company: string, quote: string }) => (
    <div className="bg-brand-cream p-8 rounded-sm border-2 border-brand-green shadow-[6px_6px_0px_#C5A059] relative italic flex flex-col h-full min-h-[300px]">
      <Quote className="absolute top-4 right-4 text-brand-gold/10" size={48} />
      <p className="text-brand-text relative z-10 mb-6 text-sm font-bold tracking-tight leading-relaxed flex-grow">
        "{quote}"
      </p>
      <div className="not-italic border-t border-brand-green/20 pt-4 shrink-0">
        <p className="font-serif italic text-lg text-brand-green leading-none">{name}</p>
        <p className="text-[10px] uppercase font-black tracking-widest text-brand-gold mt-1">{company}</p>
      </div>
    </div>
);

const SERVICE_DETAILS: Record<string, { street: string, heading: string, img: string, content: string, specialized: { name: string, desc: string, icon: any }[] }> = {
  'Taste Street': {
    street: 'Taste Street',
    heading: 'Taste Street — Tasting & Sampling Co.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200',
    content: 'Taste Street is a specialized food and beverage tasting and sampling promotion company. We work directly with brands, retailers and distributors to bring products to consumers through experiential in-store and event activations.',
    specialized: [
      { name: 'In-store Sampling', desc: 'Putting your product directly into the hands and palates of shoppers.', icon: Search },
      { name: 'Event Activations', desc: 'High-energy brand presence at festivals, street fairs, and private events.', icon: Rocket },
      { name: 'Brand Ambassadors', desc: 'Professional staff trained to deliver your brand message with passion.', icon: CheckCircle2 },
      { name: 'Retailer Relations', desc: 'We handle the logistics and approvals with major neighborhood retailers.', icon: MapPin }
    ]
  },
  'Print Street': {
    street: 'Print Street',
    heading: 'Print Street — Custom Apparel & Merchandise',
    img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=1200',
    content: 'Print Street is your destination for premium custom apparel and branded merchandise. We work with businesses and organizations who need quality branded products that actually look good and last long.',
    specialized: [
      { name: 'Screen Printing', desc: 'Traditional and high-density ink techniques for durable, bold designs.', icon: Printer },
      { name: 'DTG & DTF', desc: 'Modern digital printing for detailed, full-color graphic reproduction.', icon: Palette },
      { name: 'Promo Merch', desc: 'Everything from custom totes and bags to branded technical gear.', icon: Rocket },
      { name: '3D Creation', desc: 'Industrial prototyping and custom structural branding solutions.', icon: Lightbulb }
    ]
  },
  'Stitch Street': {
    street: 'Stitch Street',
    heading: 'Stitch Street — Premium Embroidery',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    content: 'Stitch Street brings high end embroidery and custom stitching to businesses, teams and brands who want their identity worn with pride.',
    specialized: [
      { name: 'Flat Embroidery', desc: 'Classic, crisp stitching for polos, shirts, and corporate uniforms.', icon: CheckCircle2 },
      { name: '3D Puff Stitch', desc: 'Elevated, dimensional embroidery for premium headwear and bags.', icon: Palette },
      { name: 'Custom Patches', desc: 'Removables and sew-on patches with intricate branded detail.', icon: MapPin },
      { name: 'Luxury Finishing', desc: 'Precision detail work for high-end retail apparel and gifts.', icon: CheckCircle2 }
    ]
  },
  'Consulting Street': {
    street: 'Consulting Street',
    heading: 'Consulting Street — Restaurant & Bar Consulting',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    content: 'Consulting Street is a specialized business consulting service built specifically for restaurants and bars. We help you navigate the complexities of running a successful neighborhood destination.',
    specialized: [
      { name: 'Menu Engineering', desc: 'Strategic pricing and design to maximize your profitability.', icon: Lightbulb },
      { name: 'Staff Training', desc: 'Hospitality-focused training to elevate your guest experience.', icon: Search },
      { name: 'Ops Audits', desc: 'Comprehensive analysis of your back-of-house and floor flow.', icon: CheckCircle2 },
      { name: 'Concept Design', desc: 'Developing the soul and identity of your brand environment.', icon: Palette }
    ]
  },
  // Individual Services (Redirecting to Street Data or specific variants)
  'Sampling': {
    street: 'Taste Street',
    heading: 'Experiential Product Sampling',
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200',
    content: 'Our sampling activations put your product directly into the hands of your target audience. We handle logistics, staffing, and high-impact presentation to ensure every touchpoint creates a lasting impression.',
    specialized: [
      { name: 'Neighborhood Tours', desc: 'Coordinated sampling routes through your target ZIP codes.', icon: MapPin },
      { name: 'Shop-in-Shop', desc: 'Managed pop-up presence inside high-traffic retail blocks.', icon: Search },
      { name: 'Consumer Data', desc: 'Collecting real-world feedback from every taster on the street.', icon: CheckCircle2 },
      { name: 'Staffing', desc: 'Passionate brand ambassadors who represent your brand daily.', icon: Rocket }
    ]
  },
  'Apparel': {
    street: 'Print Street',
    heading: 'Custom Apparel & Performance Wear',
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1200',
    content: 'Physical merchandise is the wearable billboard for your brand. From premium heavyweight tees to custom totes, we design and produce high-quality apparel that your customers actually want to wear.',
    specialized: [
      { name: 'Premium Fabrics', desc: 'Sourcing the best weights and textures for your brand level.', icon: Search },
      { name: 'Custom Design', desc: 'Our creative team can build your apparel graphics from scratch.', icon: Palette },
      { name: 'Small Runs', desc: 'Flexible production volumes for limited edition neighborhood drops.', icon: Rocket },
      { name: 'Supply Chain', desc: 'Managed production and delivery schedules you can trust.', icon: CheckCircle2 }
    ]
  },
  'Promotions': {
    street: 'Print Street',
    heading: 'Street-Level Brand Promotions',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    content: 'High-energy street team promotions and neighborhood activations designed to spark conversation and create local buzz around your newest brand launch.',
    specialized: [
      { name: 'Guerilla Marketing', desc: 'Unconventional, high-impact tactics to disrupt the street.', icon: Rocket },
      { name: 'Event Support', desc: 'Providing the structural and promotional backbone for events.', icon: MapPin },
      { name: 'Social Integration', desc: 'Bridging the gap between the physical street and your feed.', icon: Search },
      { name: 'Local Partnerships', desc: 'Connecting you with the right neighborhood business allies.', icon: CheckCircle2 }
    ]
  },
  'Tasting': {
    street: 'Taste Street',
    heading: 'Curated Food & Beverage Tastings',
    img: 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&q=80&w=1200',
    content: 'Specialized tasting experiences curated for F&B brands. We manage sensory activations that allow consumers to experience the flavor profile and quality of your product in authentic settings.',
    specialized: [
      { name: 'Sensory Design', desc: 'Curating the environment, music, and vibe to match your flavor.', icon: Palette },
      { name: 'Safe Handling', desc: 'Certified and sanitary food and beverage service on the street.', icon: CheckCircle2 },
      { name: 'Niche Targeting', desc: 'Finding the specific audience who will love your product profile.', icon: Search },
      { name: 'Brand Story', desc: 'Turning every sip or bite into a moment of brand education.', icon: Lightbulb }
    ]
  },
  '3D Creation': {
    street: 'Print Street',
    heading: 'Industrial 3D Printing & Prototyping',
    img: 'https://images.unsplash.com/photo-1631557849880-5e5d5d4d24b2?w=1200&fit=crop',
    content: 'The next block in physical branding. Our industrial 3D printing services allow for rapid prototyping of unique promotional items and custom hardware branding.',
    specialized: [
      { name: 'Rapid Prototyping', desc: 'Go from digital design to physical object in record time.', icon: Lightbulb },
      { name: 'Custom Hardware', desc: 'Unique branded elements for your office or physical retail location.', icon: Printer },
      { name: 'Small Batch Mfg', desc: 'Limited production of physical items you cannot find in any catalog.', icon: Rocket },
      { name: 'Design Support', desc: 'Turning your rough sketches into 3D-printable masterpieces.', icon: Palette }
    ]
  },
  'Embroidery': {
    street: 'Stitch Street',
    heading: 'Luxury Branded Embroidery',
    img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1200',
    content: 'Elevate your brand with premium tactile finishes. Our expert embroidery services provide high-end stitching for corporate wear, limited edition drops, and professional uniforms.',
    specialized: [
      { name: 'High-Stitch Count', desc: 'Dense, durable embroidery that remains crisp after every wash.', icon: CheckCircle2 },
      { name: 'Custom Thread', desc: 'Exact Pantone matching to keep your brand colors consistent.', icon: Palette },
      { name: 'Technical Gear', desc: 'Embroidering on anything from leather to high-performance tech.', icon: Rocket },
      { name: 'Design Digitzing', desc: 'Converting your logo into a perfect paths for the needle.', icon: Lightbulb }
    ]
  },
  'Stitching': {
    street: 'Stitch Street',
    heading: 'Precision Custom Stitching',
    img: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=1200&fit=crop',
    content: 'Custom tailoring and high-end stitching solutions for unique brand experiences. We focus on the structural details of your physical products, ensuring every seam reflects quality.',
    specialized: [
      { name: 'Tailoring', desc: 'Ensuring your team uniforms fit perfectly and look professional.', icon: Search },
      { name: 'Repair & Refine', desc: 'Extending the life of your brand apparel through master repair.', icon: CheckCircle2 },
      { name: 'Custom Details', desc: 'Adding those small, high-end stitching touches that get noticed.', icon: Palette },
      { name: 'Fabric Selection', desc: 'Expert advice on which materials will hold up on the street.', icon: Rocket }
    ]
  },
  'Consulting': {
    street: 'Consulting Street',
    heading: 'Hospitality & Strategy Consulting',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&fit=crop',
    content: 'Expert strategic consulting specifically for the restaurant and bar industry. We analyze your operations and menu to help you navigate the complexities of running a successful destination.',
    specialized: [
      { name: 'Efficiency Audits', desc: 'Finding the bottlenecks in your service and clearing them.', icon: CheckCircle2 },
      { name: 'Marketing Plans', desc: 'Strategic neighborhood targeting to drive new foot traffic.', icon: Search },
      { name: 'Financial Planning', desc: 'Helping you manage food costs and seasonal variations.', icon: MapPin },
      { name: 'Brand Soul', desc: 'Defining exactly why customers choose your table over the next.', icon: Lightbulb }
    ]
  }
};

const ServiceModal = ({ service, onClose }: { service: string | null, onClose: () => void }) => {
  if (!service) return null;
  const details = SERVICE_DETAILS[service];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-6" 
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white w-full max-w-[900px] max-h-[85vh] rounded-3xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button - Pinned to card */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[120] bg-white/90 backdrop-blur-md text-brand-green w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 border border-brand-green/5"
        >
          <X size={24} />
        </button>

        {/* Left Side (Desktop) / Top Side (Mobile) - Visual Column */}
        <div className="w-full md:w-[45%] h-[250px] md:h-auto relative shrink-0">
          <img 
            src={details.img} 
            alt={details.heading} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-green/90 via-brand-green/20 to-transparent flex flex-col justify-end md:justify-center items-center md:items-start p-6 md:p-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-brand-gold font-script text-4xl md:text-6xl lg:text-7xl mb-2 leading-tight drop-shadow-xl text-center md:text-left"
            >
              {service}
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-1 bg-brand-gold hidden md:block"
            />
          </div>
        </div>

        {/* Right Side - Content Column (Scrollable) */}
        <div className="w-full md:w-[55%] flex flex-col overflow-y-auto bg-white">
          <div className="p-6 md:p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-brand-gold/10 text-brand-gold text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full">
                {details.street}
              </span>
              <div className="h-px flex-grow bg-brand-gold/10" />
            </div>
            
            <h3 className="text-2xl md:text-4xl font-display font-bold text-brand-green leading-tight mb-6">
              {details.heading}
            </h3>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 border-l-4 border-brand-green/10 pl-6 font-medium">
              {details.content}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-px bg-brand-gold/50" />
                <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Services</h4>
                <div className="h-px flex-grow bg-brand-gold/10" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {details.specialized.map((s, i) => (
                  <div 
                    key={i}
                    className="p-5 border border-brand-green/5 rounded-2xl bg-slate-50/50 hover:bg-brand-green/[0.02] transition-colors"
                  >
                    <div className="text-brand-gold mb-3">
                      <s.icon size={18} strokeWidth={2} />
                    </div>
                    <span className="block font-bold text-brand-green mb-1 text-[11px] uppercase tracking-tight">{s.name}</span>
                    <p className="text-slate-500 text-[10px] leading-relaxed line-clamp-2">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <button 
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full bg-brand-green text-white py-4 md:py-6 rounded-xl font-black uppercase tracking-[0.2em] transition-all hover:bg-black shadow-xl flex items-center justify-center gap-4 text-xs"
              >
                Start Project
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

import AIAssistant from './components/AIAssistant';

export default function App() {
  const [formState, setFormState] = useState({ name: '', email: '', street: 'Main Street', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200', alt: 'Main Street Creative Brand Co. Team' },
    { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80', alt: 'Taste Street Sampling' },
    { url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80', alt: 'Print Street Apparel' },
    { url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80', alt: 'Stitch Street Detail' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-slate-800 font-sans selection:bg-brand-gold selection:text-brand-green overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 md:pt-40 pb-10 overflow-hidden bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:space-y-10"
          >
            <div className="relative">
              <StreetSign className="origin-center md:origin-left scale-75 md:scale-90 mb-6" />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight text-brand-green">
                Where Every Brand Finds Its <span className="text-brand-gold italic font-serif">Street.</span>
              </h1>
              <p className="text-base md:text-xl max-w-xl text-slate-700 leading-relaxed font-sans">
                Main Street Creative Brand Co. is an aggregate house for specialized boutique businesses. We build community-themed brands that resonate from the pavement up.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 w-full">
                <a href="#contact" className="w-full sm:w-auto bg-brand-green hover:bg-black text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest transition-all shadow-xl text-center">
                  Explore Our Streets
                </a>
                <a href="#contact" className="w-full sm:w-auto border-2 border-brand-green hover:bg-brand-green hover:text-white text-brand-green px-10 py-5 rounded-sm font-bold uppercase tracking-widest transition-all shadow-xl text-center">
                  Let's Build Your Brand
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Sliding Slideshow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] sm:h-[500px] md:h-[700px] rounded-sm overflow-hidden border-2 border-brand-green shadow-[10px_10px_0px_#C5A059] md:shadow-[20px_20px_0px_#C5A059]"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={heroSlides[currentSlide].url} 
                  alt={heroSlides[currentSlide].alt} 
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-white/10" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <div className="bg-brand-green border-y border-brand-gold py-3 md:py-4 overflow-hidden relative mt-10">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-brand-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4">
                Taste Street — Tasting & Sampling Co. <span className="text-brand-gold text-lg">✦</span>
              </span>
              <span className="text-brand-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4">
                Print Street — Custom Apparel & Merch <span className="text-brand-gold text-lg">✦</span>
              </span>
              <span className="text-brand-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4">
                Stitch Street — Premium Embroidery <span className="text-brand-gold text-lg">✦</span>
              </span>
              <span className="text-brand-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4">
                Consulting Street — Restaurant & Bar Consulting <span className="text-brand-gold text-lg">✦</span>
              </span>
              <span className="text-brand-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4">
                3D Printing Coming Soon <span className="text-brand-gold text-lg">✦</span>
              </span>
              <span className="text-brand-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4">
                Custom T-Shirts & Hats <span className="text-brand-gold text-lg">✦</span>
              </span>
              <span className="text-brand-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4">
                Brand Activations <span className="text-brand-gold text-lg">✦</span>
              </span>
              <span className="text-brand-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4">
                In-Store Sampling Events <span className="text-brand-gold text-lg">✦</span>
              </span>
              <span className="text-brand-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4">
                Corporate Embroidery <span className="text-brand-gold text-lg">✦</span>
              </span>
              <span className="text-brand-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4">
                Menu Engineering <span className="text-brand-gold text-lg">✦</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Welcome / About Section */}
      <section id="about" className="py-24 md:py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-brand-green p-4 rounded-sm shadow-[12px_12px_0px_#0B3D2E] order-2 md:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                alt="Main Street Creative Brand Co. Team" 
                className="w-full h-full object-cover rounded-sm border border-slate-200 aspect-video md:aspect-auto" 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 px-4"
            >
              <SectionHeading subtitle="ABOUT US" center={false}>
                Where Every Service <br />Has Its Own Street
              </SectionHeading>
              
              <div className="space-y-6 text-brand-text">
                <p className="text-lg leading-relaxed font-medium">
                  Main Street Creative Brand Co. is the mother brand housing a community of specialized boutique services. From food and beverage sampling events to custom printed apparel and premium embroidery, every street under our roof does one thing exceptionally well.
                </p>
                <p className="pl-6 border-l-4 border-brand-gold italic font-serif text-xl text-slate-700 bg-brand-gold/5 py-4 pr-4">
                  "Every brand deserves its own street — and we make sure yours stands out on the block."
                </p>
              </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 border-t-2 border-brand-green pt-8">
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <span className="text-4xl font-black text-brand-green uppercase tracking-tighter">3</span>
                      <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] leading-tight">Active Streets</span>
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <span className="text-4xl font-black text-brand-green uppercase tracking-tighter">100%</span>
                      <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] leading-tight">Custom Work</span>
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <span className="text-4xl font-black text-brand-green uppercase tracking-tighter">NEW</span>
                      <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] leading-tight">Consulting Street</span>
                    </div>
                  </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Streets Section */}
      <section id="streets" className="py-24 bg-brand-green/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The Marketplace">Explore Our Streets</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <StreetCard 
              icon={Utensils}
              title="Taste Street"
              status="Currently Active"
              cta="Visit Taste"
              onVisit={() => setSelectedService("Taste Street")}
              description="A specialized food and beverage tasting and sampling promotion company. We bring brands directly to consumers' palates through experiential neighborhood activations."
            />
            <StreetCard 
              icon={Printer}
              title="Print Street"
              status="Launching Now"
              cta="Visit Print"
              onVisit={() => setSelectedService("Print Street")}
              description="Your block for custom apparel. Premium t-shirts, bags, hats, and promotional merchandise. Industrial blocks coming soon with advanced 3D printing."
              badge="3D Printing Soon"
            />
            <StreetCard 
              icon={Palette}
              title="Stitch Street"
              status="Coming Soon"
              cta="Visit Stitch"
              onVisit={() => setSelectedService("Stitch Street")}
              description="Premium embroidery and custom stitching. We're currently building our workshop to bring tactile, high-end finishing to your brand's physical presence."
            />
            <StreetCard 
              icon={Lightbulb}
              title="Consulting Street"
              status="Coming Soon"
              cta="Visit Consulting"
              onVisit={() => setSelectedService("Consulting Street")}
              description="Strategic restaurant and bar business consulting. From menu engineering to operations, we help your business thrive on the competitive main street."
            />
          </div>
        </div>
      </section>

      {/* Process Section - Street Map Journey */}
      <section id="process" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden scroll-mt-24">
        {/* Map Grid Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(#0B3D2E 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeading subtitle="The Destination">How It All Works</SectionHeading>
          
          <div className="relative mt-12 md:mt-20">
            {/* Winding Road Path (Dotted) */}
            <svg className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 hidden lg:block overflow-visible pointer-events-none opacity-20" viewBox="0 0 1200 100" fill="none">
              <path 
                d="M0,50 Q150,0 300,50 T600,50 T900,50 T1200,50" 
                stroke="#0B3D2E" 
                strokeWidth="4" 
                strokeDasharray="8 12" 
                className="animate-pulse"
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative z-10">
              {[
                {
                  id: "step-1",
                  number: "01",
                  title: "DISCOVERY",
                  icon: Search,
                  description: "We start by learning everything about your brand, your audience and your goals. This is where your street address gets established.",
                  offset: "lg:-translate-y-12"
                },
                {
                  id: "step-2",
                  number: "02",
                  title: "STRATEGY & DESIGN",
                  icon: Palette,
                  description: "Our team builds the blueprint for your brand presence across whichever streets you need — print, taste, stitch or consulting.",
                  offset: "lg:translate-y-12"
                },
                {
                  id: "step-3",
                  number: "03",
                  title: "REVIEW & REFINE",
                  icon: CheckCircle2,
                  description: "You walk through every detail with us. We polish, adjust and perfect until everything reflects exactly who you are.",
                  offset: "lg:-translate-y-12"
                },
                {
                  id: "step-4",
                  number: "04",
                  title: "LAUNCH & GROW",
                  icon: Rocket,
                  description: "Your brand hits the street. We make sure the launch is strong and your presence on Main Street cannot be ignored.",
                  offset: "lg:translate-y-12"
                }
              ].map((step, idx) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.2 }}
                  className={`flex flex-col items-center text-center px-4 ${step.offset}`}
                >
                  {/* Street Sign Icon */}
                  <div className="relative mb-8 group">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.1, 1],
                        boxShadow: ["0 0 0 0px rgba(197, 160, 89, 0)", "0 0 0 15px rgba(197, 160, 89, 0.1)", "0 0 0 0px rgba(197, 160, 89, 0)"]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 md:w-20 md:h-20 bg-brand-green border-4 border-brand-gold rounded-sm flex items-center justify-center text-brand-gold shadow-2xl relative z-20 group-hover:bg-brand-gold group-hover:text-brand-green transition-colors duration-500"
                    >
                      <step.icon size={28} className="md:w-9 md:h-9" />
                    </motion.div>
                    
                    {/* Sign Post Shadow */}
                    <div className="w-1 h-12 bg-brand-green/20 mx-auto mt-[-4px] hidden lg:block" />
                    
                    {/* Oversized Number */}
                    <div className="absolute -top-6 -right-6 text-6xl md:text-7xl font-black text-brand-green/10 select-none group-hover:text-brand-gold/20 transition-colors">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Label */}
                  <div className="bg-brand-green text-brand-gold px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-md rotate-[-2deg]">
                    STOP {step.number}
                  </div>
                  
                  <h4 className="font-serif italic text-xl md:text-2xl text-brand-green mb-3 leading-tight">
                    {step.title}
                  </h4>
                  
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-[240px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Service Section - Interactive Creative Block */}
      <section className="bg-brand-green py-20 md:py-32 text-white overflow-hidden relative">
        {/* Animated Grid Texture Background */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)`, 
            backgroundSize: '60px 60px' 
          }} 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(circle, #C5A059 2px, transparent 2px)`, 
            backgroundSize: '100px 100px' 
          }} 
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 inline-block"
            >
              Everything Your Brand Needs — <span className="relative">
                On One Block
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-1 bg-brand-gold"
                />
              </span>
            </motion.h2>
            <p className="text-brand-gold italic font-serif text-xl md:text-2xl mt-4">One neighborhood. Every service.</p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Sampling', teaser: 'Bringing your product directly to the consumer', icon: Search, street: 'Taste Street' },
              { name: 'Apparel', teaser: 'Custom t-shirts, bags and branded merchandise', icon: Printer, street: 'Print Street' },
              { name: 'Promotions', teaser: 'Campaigns that drive attention and action', icon: Rocket, street: 'Print Street' },
              { name: 'Tasting', teaser: 'Experiential food and beverage activations', icon: Utensils, street: 'Taste Street' },
              { name: '3D Creation', teaser: 'Prototyping and custom product printing coming soon', icon: Printer, street: 'Print Street' },
              { name: 'Embroidery', teaser: 'High end stitched branding for apparel and uniforms', icon: Palette, street: 'Stitch Street' },
              { name: 'Stitching', teaser: 'Precision custom stitching for premium wear', icon: CheckCircle2, street: 'Stitch Street' },
              { name: 'Consulting', teaser: 'Restaurant and bar business strategy and operations', icon: Lightbulb, street: 'Consulting Street' }
            ].map((service, idx) => (
              <motion.button 
                key={service.name} 
                onClick={() => setSelectedService(service.name)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: -5,
                }}
                className="group relative bg-[#092b21] border border-white/10 p-5 md:p-8 rounded-2xl text-left transition-all duration-500 overflow-hidden shadow-2xl h-full flex flex-col perspective-1000 min-h-[44px]"
              >
                {/* Hover Background Reveal */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 md:mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-500">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 tracking-tight group-hover:text-brand-gold transition-colors text-white">
                    {service.name}
                  </h3>
                  
                  <p className="text-white/40 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-8 flex-grow">
                    {service.teaser}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                    Click to Explore <ChevronRight size={12} />
                  </div>
                </div>
                
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-brand-gold/5 rounded-full -translate-x-12 -translate-y-12 blur-2xl group-hover:bg-brand-gold/10 transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Lookbook / Collage Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-brand-green mb-4"
            >
              Our Streets. Our Stories.
            </motion.h2>
            <p className="text-brand-gold italic font-serif text-xl md:text-2xl">A glimpse into the neighborhood.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[250px]">
            {[
              {
                title: "Taste Street Story",
                desc: "A sommelier's pour. The art of curated flavor discovery.",
                img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&fit=crop",
                span: "md:col-span-2 md:row-span-2 col-span-2 row-span-2"
              },
              {
                title: "Print Street Story",
                desc: "Precision in every press. Where ink meets craft.",
                img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&fit=crop",
                span: "md:col-span-1 md:row-span-1 col-span-1 row-span-1"
              },
              {
                title: "Stitch Street Story",
                desc: "Hands that speak in thread. The detail of the needle.",
                img: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=800&fit=crop",
                span: "md:col-span-1 md:row-span-2 col-span-1 row-span-2"
              },
              {
                title: "Consulting Story",
                desc: "Strategy over the menu. Engineering the future of hospitality.",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&fit=crop",
                span: "md:col-span-1 md:row-span-1 col-span-1 row-span-1"
              },
              {
                title: "Main Street Story",
                desc: "Neighborhood pulse. The energy of the local market.",
                img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&fit=crop",
                span: "md:col-span-2 md:row-span-1 col-span-2 row-span-1"
              },
              {
                title: "Community Story",
                desc: "Where ideas collide. The intersection of neighborhood makers.",
                img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&fit=crop",
                span: "md:col-span-2 md:row-span-1 col-span-2 row-span-1"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer bg-brand-green ${item.span}`}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-brand-green/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 md:p-8 text-center backdrop-blur-sm">
                  <motion.span 
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-brand-gold font-display font-bold text-sm md:text-xl mb-1 md:mb-2 uppercase tracking-tight"
                  >
                    {item.title}
                  </motion.span>
                  <motion.p 
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/80 text-[10px] md:text-sm italic font-serif"
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-brand-green/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Investment">Packages & Pricing</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:max-w-[1100px] xl:mx-auto">
            <PriceCard 
              title="Taste Street Package"
              items={[
                "Single Event Activation",
                "Promotional Staffing",
                "Product Presentation Design",
                "Neighborhood Targeting",
                "Data & Feedback Collection"
              ]}
              cta="Book Event"
            />
            <PriceCard 
              featured
              title="Print Street Collective"
              price="$Varies"
              items={[
                "Custom Apparel Printing",
                "Minimums as low as 24",
                "Screen & Digital Transfers",
                "Rush Neighborhood Delivery",
                "Bulk Merchandise Pricing"
              ]}
              cta="Store Inquiry"
            />
            <PriceCard 
              title="Consulting Block"
              items={[
                "Operational Audit",
                "Menu Concepting",
                "Staff Efficiency Training",
                "F&B Market Positioning",
                "Ongoing Block Support"
              ]}
              cta="Expert Access"
            />
          </div>
        </div>
      </section>

      {/* Why Main Street */}
      <section className="py-24 bg-white border-y-2 border-brand-green">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div>
              <SectionHeading subtitle="The Specialization" center={false}>
                Why Your Brand Belongs <br />On Main Street
              </SectionHeading>
              
              <div className="space-y-6 md:space-y-8 mt-12">
                {[
                  { title: "Mother House System", desc: "One unified vision across all touchpoints, from digital to physical merch." },
                  { title: "Dedicated Street Experts", desc: "Specialists for every block: Tastemakers, Printers, and Brand Architects." },
                  { title: "Community First", desc: "Designs and events created to live and breathe in local communal spaces." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 border-b border-brand-green/10 pb-6">
                    <div className="w-10 h-10 bg-brand-green text-white rounded-sm flex items-center justify-center shrink-0 text-xs font-black">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-black tracking-widest text-brand-green mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-[11px] uppercase font-bold tracking-tighter">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-brand-gold p-1 rounded-sm shadow-[10px_10px_0px_#0B3D2E] md:shadow-[15px_15px_0px_#0B3D2E]">
                <div className="bg-brand-green p-8 md:p-12 text-white">
                  <StreetSign className="mb-12 scale-90" />
                  <h3 className="font-serif italic text-2xl md:text-3xl mb-6">"Our goal is simple: To build the street everyone wants to walk down."</h3>
                  <p className="text-brand-gold font-script text-2xl md:text-3xl">- The Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section (Moved) */}
      <section id="work" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Success Stories">Recent Work from the Neighborhood</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Premium Wine Tasting Activation", street: "Taste Street", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&fit=crop" },
              { title: "Custom Hoodie Collection", street: "Print Street", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&fit=crop" },
              { title: "Corporate Logo Embroidery", street: "Stitch Street", img: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=800&fit=crop" },
              { title: "Restaurant Menu Redesign", street: "Consulting Street", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&fit=crop" },
              { title: "Brand Merch Package", street: "Print Street", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&fit=crop" },
              { title: "In-Store Sampling Campaign", street: "Taste Street", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&fit=crop" }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 sm:h-96 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl bg-brand-green"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-brand-green/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 sm:p-8 text-center backdrop-blur-sm">
                  <span className="text-brand-gold text-xs font-black uppercase tracking-[0.3em] mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.street}</span>
                  <h4 className="text-white text-xl sm:text-2xl font-display font-bold mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h4>
                  
                  <button 
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-brand-gold text-brand-green text-[10px] font-black uppercase tracking-widest rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 hover:bg-white min-h-[44px] flex items-center justify-center"
                  >
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-green/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Voices of the Neighborhood">Client Testimonials</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Jenkins"
              company="Brew & Bloom"
              quote="Taste Street transformed our beverage launch. The sampling event was organized to perfection and directly resulted in a 40% sales lift."
            />
            <TestimonialCard 
              name="Mark Thompson"
              company="Urban Gear"
              quote="The quality from Print Street is unmatched. Our custom totes and hats for the team look premium and the colors stay vibrant after many washes."
            />
            <TestimonialCard 
              name="Jennifer Lu"
              company="TechHub Co."
              quote="Working with the Main Street Creative Brand Co. team on our complete promotional launch was seamless. One contact point for tasting events, custom apparel, and industrial printing."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden bg-white scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Info */}
          <div className="relative p-10 md:p-16 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-brand-green/10">
            {/* Street Map Watermark */}
            <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none" 
              style={{ 
                backgroundImage: `radial-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(to right, #0B3D2E 1px, transparent 1px), linear-gradient(to bottom, #0B3D2E 1px, transparent 1px)`, 
                backgroundSize: '40px 40px, 80px 80px, 80px 80px' 
              }} 
            />
            
            <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display font-bold text-brand-green mb-8 leading-tight text-center lg:text-left"
              >
                Ready to Find <br /><span className="relative">
                  Your Street?
                  <div className="absolute -bottom-2 left-0 h-1.5 w-full bg-brand-gold" />
                </span>
              </motion.h2>
              
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-12 md:mb-16 font-medium text-center lg:text-left">
                Whether you need custom apparel, a tasting event, embroidery work or restaurant consulting — Main Street has a street for you. Fill out the form and we will get back to you within 24 hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 md:mb-16">
                {[
                  { icon: MapPin, title: "Location", val: "Main Street Creative Brand Co." },
                  { icon: Phone, title: "Phone", val: "+1 (555) 123-4567" },
                  { icon: Mail, title: "Email", val: "findyour@mainstreet.agency" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center lg:items-start gap-3 group">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                      <item.icon size={20} />
                    </div>
                    <div className="text-center lg:text-left">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.title}</span>
                      <span className="text-xs font-bold text-brand-green leading-tight">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start gap-4">
                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 border border-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all active:scale-90">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-brand-green p-10 md:p-16 lg:p-24 relative overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-xl mx-auto"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    key="success"
                    className="bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-white/10 text-center min-h-[400px] flex flex-col justify-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-gold text-brand-green rounded-full flex items-center justify-center mb-6 md:mb-8 mx-auto shadow-2xl">
                      <CheckCircle2 size={32} md:size={40} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Street Claimed!</h3>
                    <p className="text-white/60 mb-8 italic text-sm md:text-base">We've received your vision. One of our street architects will reach out in less than 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-brand-gold font-bold uppercase tracking-widest text-[10px] md:text-xs underline underline-offset-8"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-white/5 border-2 border-white/10 p-4 md:p-5 rounded-xl text-white focus:border-brand-gold outline-none transition-all placeholder:text-[10px] placeholder:uppercase font-bold text-sm"
                          placeholder="Your Name"
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Business Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-white/5 border-2 border-white/10 p-4 md:p-5 rounded-xl text-white focus:border-brand-gold outline-none transition-all placeholder:text-[10px] placeholder:uppercase font-bold text-sm"
                          placeholder="Brand Name"
                          value={formState.business}
                          onChange={e => setFormState({...formState, business: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-white/5 border-2 border-white/10 p-4 md:p-5 rounded-xl text-white focus:border-brand-gold outline-none transition-all placeholder:text-[10px] placeholder:uppercase font-bold text-sm"
                          placeholder="hello@example.com"
                          value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          className="w-full bg-white/5 border-2 border-white/10 p-4 md:p-5 rounded-xl text-white focus:border-brand-gold outline-none transition-all placeholder:text-[10px] placeholder:uppercase font-bold text-sm"
                          placeholder="+1 (555) 000-0000"
                          value={formState.phone}
                          onChange={e => setFormState({...formState, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Which Street Are You Looking For?</label>
                      <select 
                        className="w-full bg-white/5 border-2 border-white/10 p-4 md:p-5 rounded-xl text-white focus:border-brand-gold outline-none transition-all font-bold text-xs uppercase appearance-none"
                        value={formState.street}
                        onChange={e => setFormState({...formState, street: e.target.value})}
                      >
                        <option value="Taste Street" className="bg-brand-green">Taste Street (Sampling & Tasting)</option>
                        <option value="Print Street" className="bg-brand-green">Print Street (Custom Apparel)</option>
                        <option value="Stitch Street" className="bg-brand-green">Stitch Street (Embroidery)</option>
                        <option value="Consulting Street" className="bg-brand-green">Consulting Street (Strategy)</option>
                        <option value="All Streets" className="bg-brand-green">The Full Neighborhood Experience</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Tell us about your vision</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-white/5 border-2 border-white/10 p-4 md:p-5 rounded-xl text-white focus:border-brand-gold outline-none transition-all resize-none placeholder:text-[10px] font-bold text-sm"
                        placeholder="SHAPE YOUR ADDRESS..."
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full bg-brand-gold text-brand-green py-5 md:py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center justify-center gap-3 group text-xs md:text-sm min-h-[56px]">
                      Claim Your Street
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-green text-white pt-20 md:pt-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-24">
            {/* Col 1 */}
            <div className="text-center md:text-left">
              <div className="flex flex-col border-l-4 border-brand-gold pl-4 leading-none mb-8 inline-flex items-start">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-brand-gold/70">Main Street</span>
                <span className="font-serif italic text-2xl md:text-3xl text-brand-gold">Creative Brand Co.</span>
              </div>
              <p className="text-white/60 mb-8 leading-relaxed italic text-sm">
                Every Brand Has a Street — Find Yours on Main Street Creative Brand Co. We specialize in physical branding, tactical sampling, and hospitality strategy.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-gold hover:border-brand-gold transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold mb-8 md:mb-10">Our Streets</h4>
              <ul className="space-y-4">
                {['Taste Street', 'Print Street', 'Stitch Street', 'Consulting Street'].map(link => (
                  <li key={link}>
                    <button 
                      onClick={() => setSelectedService(link)}
                      className="text-white/60 hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start gap-2 group mx-auto md:mx-0"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold mb-8 md:mb-10">Quick Links</h4>
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-0 md:space-y-4">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Our Work', href: '#work' },
                  { name: 'Process', href: '#process' },
                  { name: 'Packages', href: '#pricing' },
                  { name: 'Contact', href: '#contact' }
                ].map(item => (
                  <li key={item.name}>
                    <a href={item.href} className="text-white/60 hover:text-brand-gold transition-colors text-sm">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold mb-8 md:mb-10">Contact Us</h4>
              <ul className="space-y-6">
                <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <MapPin size={18} className="text-brand-gold shrink-0" />
                  <span className="text-white/60 text-sm">Main Street Creative Brand Co.<br />Building 4, Suite 100<br />Miami, FL 33130</span>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <Phone size={18} className="text-brand-gold shrink-0" />
                  <span className="text-white/60 text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <Mail size={18} className="text-brand-gold shrink-0" />
                  <span className="text-white/60 text-sm">findyour@mainstreet.agency</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 py-10 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              © {new Date().getFullYear()} Main Street Creative Brand Co.
            </p>
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              Built with pride on Main Street.
            </p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
      <AIAssistant />
    </div>
  );
}
