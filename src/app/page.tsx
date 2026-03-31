"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { BarChart2, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="PulseSocial"
      button={{
        text: "Get Started",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Scaling Impact Through Premium Social Strategy"
      description="We craft sophisticated digital identities that drive authentic engagement and measurable growth for modern brands."
      testimonials={[
        {
          name: "Alexandra Reed",
          handle: "@lexireed",
          testimonial: "PulseSocial transformed our brand identity completely. Absolutely incredible results.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-mature-businessman-with-cup-coffee_23-2147955276.jpg?_wi=1",
        },
        {
          name: "Marcus Thorne",
          handle: "@mthorne",
          testimonial: "The level of strategy and execution is unmatched in the agency space today.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smart-business-executive-forlmalwear-standing-outside-office-building-have-his-takeaway-coffee_1098-19265.jpg?_wi=1",
        },
        {
          name: "Jordan Smith",
          handle: "@jsmith",
          testimonial: "Consistently exceeds performance targets and builds real authority.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/group-people-with-laptops_23-2147993383.jpg?_wi=1",
        },
        {
          name: "Elena Vance",
          handle: "@evance",
          testimonial: "An extension of our team that truly understands modern digital culture.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-beautiful-brunette-female-wearing-working-clothes-apron-standing-workshop_613910-5811.jpg?_wi=1",
        },
        {
          name: "Liam Chen",
          handle: "@lchen",
          testimonial: "Strategic depth that other agencies just lack entirely.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-mature-businessman-with-cup-coffee_23-2147955276.jpg?_wi=2",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-vector/modern-abstract-background-with-paper-style_23-2147999243.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-happy-mature-businessman-with-cup-coffee_23-2147955276.jpg",
          alt: "Alexandra Reed",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smart-business-executive-forlmalwear-standing-outside-office-building-have-his-takeaway-coffee_1098-19265.jpg",
          alt: "Marcus Thorne",
        },
        {
          src: "http://img.b2bpic.net/free-photo/group-people-with-laptops_23-2147993383.jpg",
          alt: "Jordan Smith",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-beautiful-brunette-female-wearing-working-clothes-apron-standing-workshop_613910-5811.jpg",
          alt: "Elena Vance",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-happy-mature-businessman-with-cup-coffee_23-2147955276.jpg",
          alt: "Liam Chen",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Exponential Growth",
        },
        {
          type: "text-icon",
          text: "Data-Driven",
          icon: BarChart2,
        },
        {
          type: "text",
          text: "Premium Content",
        },
        {
          type: "text-icon",
          text: "Community",
          icon: Users,
        },
        {
          type: "text",
          text: "Strategic Impact",
        },
      ]}
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Nexus",
        "Vanguard",
        "Omnia",
        "Apex",
        "Flux",
        "Zenta",
        "Quant",
      ]}
      title="Trusted by Market Leaders"
      description="Partnering with brands that define their industries."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Elevated Agency Intelligence"
      description="We believe social media is the most powerful tool for brand storytelling. Our agency combines deep creative artistry with data-backed precision to ensure every campaign resonates with your target audience."
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-women-working-together_23-2149871306.jpg"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: BarChart2,
          title: "Data-Driven Strategy",
          description: "Rigorous analysis to optimize engagement patterns.",
        },
        {
          icon: Sparkles,
          title: "Brand Creative Content",
          description: "High-fidelity assets tailored to audience psychology.",
        },
        {
          icon: Users,
          title: "Community Orchestration",
          description: "Deep-level interaction and network amplification.",
        },
      ]}
      title="Core Agency Competencies"
      description="High-impact services tailored to modern growth."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Growth",
          price: "$3,500/mo",
          subtitle: "Perfect for emerging brands",
          buttons: [
            {
              text: "Inquire",
              href: "#contact",
            },
          ],
          features: [
            "Monthly Content Strategy",
            "Community Management",
            "Bi-weekly Analytics",
          ],
        },
        {
          id: "p2",
          badge: "Premium",
          price: "$7,500/mo",
          subtitle: "Scaling authority brands",
          buttons: [
            {
              text: "Partner With Us",
              href: "#contact",
            },
          ],
          features: [
            "Daily Creative Output",
            "Performance Ad Management",
            "Executive Reporting",
          ],
        },
        {
          id: "p3",
          badge: "Enterprise",
          price: "Custom",
          subtitle: "For established leaders",
          buttons: [
            {
              text: "Consult",
              href: "#contact",
            },
          ],
          features: [
            "Full Studio Support",
            "Influencer Campaigning",
            "Custom API Integration",
          ],
        },
      ]}
      title="Agency Partnership Tiers"
      description="Scalable social solutions for every stage of your growth."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alexandra Reed",
          role: "CEO, Nexus",
          testimonial: "Absolute perfection in creative delivery.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-mature-businessman-with-cup-coffee_23-2147955276.jpg?_wi=3",
        },
        {
          id: "t2",
          name: "Marcus Thorne",
          role: "CMO, Vanguard",
          testimonial: "Strategic depth that other agencies lack.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smart-business-executive-forlmalwear-standing-outside-office-building-have-his-takeaway-coffee_1098-19265.jpg?_wi=2",
        },
        {
          id: "t3",
          name: "Jordan Smith",
          role: "Founder, Apex",
          testimonial: "Consistently exceeds performance targets.",
          imageSrc: "http://img.b2bpic.net/free-photo/group-people-with-laptops_23-2147993383.jpg?_wi=2",
        },
        {
          id: "t4",
          name: "Elena Vance",
          role: "Creative Lead, Omnia",
          testimonial: "An extension of our in-house creative team.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-beautiful-brunette-female-wearing-working-clothes-apron-standing-workshop_613910-5811.jpg?_wi=2",
        },
        {
          id: "t5",
          name: "Liam Chen",
          role: "Founder, Flux",
          testimonial: "The best partner we have found for growth.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-mature-businessman-with-cup-coffee_23-2147955276.jpg?_wi=4",
        },
      ]}
      title="Client Perspectives"
      description="Genuine stories from the partners we help scale."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to redefine your digital presence? Start the conversation today."
      buttons={[
        {
          text: "Email Agency",
          href: "mailto:hello@pulsesocial.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/abstract-background-with-little-foam_23-2148292493.jpg"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Social",
              href: "#services",
            },
            {
              label: "Creative",
              href: "#services",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 | PulseSocial Agency"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
