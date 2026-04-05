export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Navneet Agrawal",
    role: "Founder",
    company: "Agrawal Dental Care",
    content:
      "Devphicx completely transformed our online presence. We went from zero web presence to getting 15+ patient enquiries every week. The website looks premium and loads incredibly fast. Best investment we made for our clinic.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop",
  },
  {
    name: "Rahul Mehta",
    role: "Owner",
    company: "Fine Dine Co.",
    content:
      "Our online orders went from nothing to 40% of our total revenue. The website they built is stunning — customers literally tell us it made them hungry. The booking system alone saved us hours every day.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
  },
  {
    name: "Sneha Kapoor",
    role: "Creative Director",
    company: "LuxeSpace Studios",
    content:
      "As a designer, I'm very particular about aesthetics. Devphicx nailed it — the portfolio they built for me is exactly the premium look I wanted. My high-ticket clients now approach me instead of the other way around.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
  },
  {
    name: "Amit Verma",
    role: "CEO",
    company: "TrendVault",
    content:
      "Moving from Instagram-only to a full e-commerce store was the best decision. Revenue grew 5x in just 3 months. The team was professional, responsive, and delivered exactly what they promised.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head",
    company: "PropFinder",
    content:
      "The real estate platform Devphicx built for us generates 300% more leads than our old system. The map integration and virtual tours are game-changers. Our agents love using it.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
  },
];
