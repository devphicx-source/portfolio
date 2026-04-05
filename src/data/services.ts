export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Custom websites that load fast, look stunning, and turn visitors into paying customers.",
    icon: "globe",
    features: [
      "Mobile-responsive design",
      "SEO optimized from day one",
      "Fast loading — under 2 seconds",
      "Easy content management",
    ],
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Online stores that make buying effortless. Integrated payments, inventory, and order management.",
    icon: "shopping-bag",
    features: [
      "Secure payment gateway",
      "Product catalog & filters",
      "Order tracking system",
      "Analytics dashboard",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Designs that guide your users to take action. Beautiful interfaces backed by psychology.",
    icon: "palette",
    features: [
      "User research & wireframing",
      "Interactive prototypes",
      "Brand-consistent visuals",
      "Conversion-focused layouts",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Get found online. We drive traffic, leads, and revenue through proven digital strategies.",
    icon: "trending-up",
    features: [
      "Google & social media ads",
      "Search engine optimization",
      "Content strategy",
      "Performance tracking",
    ],
  },
];
