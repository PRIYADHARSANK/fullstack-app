// Mock data for Peacock Promotors Real Estate Website

export const companyInfo = {
  name: "Peacock Promotors",
  logo: "/logo.png",
  founder: {
    name: "Rtn.PHF.K. Shanmugam",
    degrees: "M.com, MBA, M.Phil",
    photo: "/founder.png"
  },
  contact: {
    whatsapp: "+91-9786203009",
    email: "k.shanmugaa@gmail.com",
    address: "No.19, Veer Tower, IInd Floor TT Nagar 1st Street, Karaikudi - 630001"
  }
};

export const properties = [
  {
    id: 1,
    title: "Kodaikanal",
    location: "Hill station in Tamil Nadu",
    image: "/project1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Mathagupatti",
    type: "Residential",
    price: "₹85 Lakhs",
    location: "Sivagangai Road, Tamil Nadu",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq.ft",
    image: "/project2.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Aravayal",
    type: "Commercial",
    price: "₹1.2 Cr",
    location: "Devakottai Road, Tamil Nadu",
    area: "2500 sq.ft",
    image: "/project3.jpg",
    featured: false
  },

];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Home Owner",
    content: "Peacock Promotors helped us find our dream home. Their professionalism and attention to detail is unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner",
    content: "Excellent service for commercial properties. They understood our requirements perfectly and delivered beyond expectations.",
    rating: 5
  },
  {
    id: 3,
    name: "Arun Vishwanathan",
    role: "Investor",
    content: "The best real estate consultants in Chennai. Their market knowledge and guidance made my investment decision easy.",
    rating: 5
  }
];

export const features = [
  {
    id: 1,
    title: "Premium Properties",
    description: "Curated selection of luxury homes and commercial spaces",
    icon: "Building2"
  },
  {
    id: 2,
    title: "Expert Guidance",
    description: "Professional consultation for all your real estate needs",
    icon: "Users"
  },
  {
    id: 3,
    title: "Trusted Service",
    description: "Decades of experience in real estate excellence",
    icon: "Award"
  },
  {
    id: 4,
    title: "Investment Support",
    description: "Strategic advice for profitable property investments",
    icon: "TrendingUp"
  }
];
