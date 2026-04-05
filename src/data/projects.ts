export interface Project {
  title: string;
  client: string;
  industry: string;
  description: string;
  problem: string;
  result: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  image: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Cinematic Restaurant Website",
    client: "Gourmet Garden",
    industry: "Food & Beverage",
    description:
      "A high-converting restaurant website designed to trigger hunger through cinematic visuals and a seamless reservation system.",
    problem:
      "The client was struggling with low online table bookings and an outdated digital menu.",
    result:
      "Direct table bookings increased by 140% within 45 days of launch.",
    metrics: [
      { label: "Bookings", value: "+140%" },
      { label: "Mobile Speed", value: "99" },
      { label: "User Retention", value: "85%" },
    ],
    tags: ["Next.js", "Framer Motion", "UI/UX"],
    image: "/restaurant.png",
    liveUrl: "https://restaurant-rose-nine.vercel.app/",
    featured: true,
  },
  {
    title: "Professional Dental Portal",
    client: "Agrawal Dental Care",
    industry: "Healthcare",
    description:
      "A trust-focused dental clinic website with automated appointment scheduling and patient education resources.",
    problem:
      "High patient churn due to a difficult booking process and lack of professional online authority.",
    result:
      "Achieved #1 local ranking for 'pediatric dentist' and doubled monthly enquiries.",
    metrics: [
      { label: "Enquiries", value: "2x" },
      { label: "Local SEO", value: "#1" },
      { label: "Load Time", value: "0.8s" },
    ],
    tags: ["React", "Local SEO", "High Performance"],
    image: "/dentist.png",
    liveUrl: "https://dentist09.onrender.com/",
    featured: true,
  },
  {
    title: "High-Energy Fitness Hub",
    client: "Iron Pulse Gym",
    industry: "Health & Fitness",
    description:
      "A dynamic, high-energy landing page for a premium gym, focused on membership conversions and class signups.",
    problem:
      "The gym had a high traffic bounce rate and low conversion on their membership forms.",
    result:
      "Membership signups grew by 80% with the new high-converting funnel design.",
    metrics: [
      { label: "Signups", value: "+80%" },
      { label: "Click Rate", value: "12%" },
      { label: "Bounce Rate", value: "-45%" },
    ],
    tags: ["Next.js", "Conversion Rate", "Animations"],
    image: "/gym.png",
    liveUrl: "https://gym-demowebsite-1.onrender.com/",
    featured: true,
  },
  {
    title: "Luxury Salon Experience",
    client: "Elite Glow Salon",
    industry: "Beauty & Wellness",
    description:
      "A sophisticated salon website with visual storytelling, service catalogs, and an integrated WhatsApp booking flow.",
    problem:
      "Reliance on phone calls was causing missed opportunities during busy hours.",
    result:
      "WhatsApp-based bookings now account for 65% of total appointments.",
    metrics: [
      { label: "WA Bookings", value: "65%" },
      { label: "Brand Presence", value: "High" },
      { label: "Engagement", value: "3x" },
    ],
    tags: ["UI/UX", "WhatsApp API", "Responsive"],
    image: "/salon.png",
    liveUrl: "https://salon-demo-umber.vercel.app/",
    featured: true,
  },
];
