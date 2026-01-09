import p1 from "../assets/portfolio-demo/p-1.avif";
import p2 from "../assets/portfolio-demo/p-2-bp.png";
import p3 from "../assets/portfolio-demo/p-3-bp.png";
import p4 from "../assets/portfolio-demo/p-4-bp.png";
import p5 from "../assets/portfolio-demo/p-5-bp.png";
import p6 from "../assets/portfolio-demo/p-6-bp.png";
import p7 from "../assets/portfolio-demo/p-6bp.png";

export const projects = [
    {
        id: 1,
        title: "Bloom Beauty Co.",
        subtitle: "Complete Brand Identity",
        category: "branding",
        year: "2024",
        client: "Bloom Beauty",
        duration: "3 months",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
        heroImage: p1,
        tags: ["Brand Strategy", "Visual Identity", "Packaging"],
        description: "A fresh, modern beauty brand targeting Gen-Z consumers",
        challenge: "Bloom Beauty needed to stand out in a saturated market while maintaining a premium feel. The brand required a complete visual identity from scratch, including logo design, color palette, typography, and packaging design that would resonate with eco-conscious millennials and Gen-Z consumers.",
        solution: "We developed a bold, nature-inspired brand identity featuring organic shapes, a vibrant color palette, and sustainable packaging solutions. The design system is flexible enough to grow with the brand while maintaining a strong, recognizable presence.",
        result: "200% increase in brand recognition",
        color: "from-pink-300 via-rose-300 to-pink-400",
        stats: { reach: "2.5M", engagement: "+180%", sales: "+200%" },
        images: [p1, p2, p3, p4, p5, p6, p7],
        keyFeatures: [
            { title: "Brand Identity System", description: "Complete logo suite with primary, secondary, and icon variations." },
            { title: "Sustainable Packaging", description: "Eco-friendly packaging design using recyclable materials." },
            { title: "Visual Language", description: "Cohesive color palette and typography system." },
            { title: "Digital Templates", description: "Social media and email assets for brand consistency." }
        ],
        results: [
            { metric: "200%", label: "Increase in Brand Recognition" },
            { metric: "150%", label: "Social Media Growth" },
            { metric: "85%", label: "Customer Satisfaction" },
            { metric: "3x", label: "Sales Performance" },
        ],
        testimonial: {
            quote: "The team transformed our vision into a stunning reality. The brand identity they created perfectly captures our values.",
            author: "Sarah Mitchell",
            position: "Founder & CEO, Bloom Beauty"
        },
        faqs: [
            {
                number: "001",
                question: "How did you ensure the brand appeals to Gen-Z?",
                answer: "We conducted extensive market research on Gen-Z aesthetic preferences, focusing on 'maximalist' yet clean design, vibrant color palettes, and authentic storytelling that highlights sustainability."
            },
            {
                number: "002",
                question: "What makes the packaging sustainable?",
                answer: "We used 100% post-consumer recycled paper and soy-based inks. The structural design was optimized to minimize material waste without compromising the unboxing experience."
            }
        ],
        partnershipReasons: [
            "Innovative brand approach for Bloom Beauty with 3 months of dedication",
            "Deep understanding of Gen-Z consumer psychology and aesthetic trends",
            "Commitment to sustainable design practices that didn't sacrifice luxury"
        ]
    },
    {
        id: 2,
        title: "TechVenture Platform",
        subtitle: "SaaS Product Design",
        category: "web",
        year: "2024",
        client: "TechVenture",
        duration: "6 months",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        tags: ["UI/UX Design", "Web App", "Design System"],
        description: "Enterprise platform for startup accelerators",
        challenge: "TechVenture needed a robust yet intuitive platform to manage complex accelerator workflows and facilitate investor-founder connections globally.",
        solution: "We designed a comprehensive dashboard system with real-time analytics, automated reporting, and a seamless networking interface for all stakeholders.",
        result: "3x user engagement & 95% satisfaction",
        color: "from-blue-300 via-indigo-300 to-purple-400",
        stats: { users: "50K+", satisfaction: "95%", retention: "+65%" },
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        ],
        keyFeatures: [
            { title: "Real-time Analytics", description: "Dynamic data visualization for portfolio performance tracking." },
            { title: "Automated Workflows", description: "Streamlined application and vetting processes for startups." }
        ],
        results: [
            { metric: "3x", label: "User Engagement" },
            { metric: "95%", label: "User Satisfaction" },
            { metric: "65%", label: "Retention Increase" },
        ],
        testimonial: {
            quote: "The design system has scaled perfectly with our rapid growth. The user experience is second to none.",
            author: "James Chen",
            position: "CTO, TechVenture"
        },
        faqs: [
            {
                number: "001",
                question: "How do you handle complex data visualization?",
                answer: "We use high-performance charting libraries and custom SVG layouts to ensure that large datasets are both beautiful and readable, maintaining 60fps interactions."
            },
            {
                number: "002",
                question: "Is the platform mobile-responsive?",
                answer: "Absolutely. We designed the experience 'mobile-first' to ensure that investors and founders can manage their workflows seamlessly on any device."
            }
        ],
        partnershipReasons: [
            "Strategic product design for TechVenture with 6 months of dedication",
            "Robust design system that scales across multiple enterprise modules",
            "User-centric workflows that significantly reduced platform churn"
        ]
    },
    {
        id: 3,
        title: "Green Eats Kitchen",
        subtitle: "Social Media Campaign",
        category: "social",
        year: "2024",
        client: "Green Eats",
        duration: "2 months",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=800&fit=crop",
        tags: ["Content Strategy", "Instagram", "TikTok"],
        description: "Plant-based meal delivery service marketing",
        challenge: "Green Eats wanted to expand their reach among young professionals who value health but lack time for meal prep.",
        solution: "We launched a high-energy content series showcasing the ease and taste of plant-based living through short-form video and influencer partnerships.",
        result: "50K new followers in 3 months",
        color: "from-green-300 via-emerald-300 to-teal-400",
        stats: { followers: "+50K", reach: "3.2M", engagement: "+240%" },
        images: [
            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1464454709131-df6925f3bbcc?w=800&h=600&fit=crop",
        ],
        keyFeatures: [
            { title: "Influencer Marketing", description: "Strategic partnerships with health and wellness creators." },
            { title: "Video Production", description: "High-quality short-form content for social platforms." }
        ],
        results: [
            { metric: "50K", label: "New Followers" },
            { metric: "3.2M", label: "Monthly Reach" },
            { metric: "+240%", label: "Engagement Rate" },
        ],
        testimonial: {
            quote: "Our brand voice has never been clearer. The engagement numbers speak for themselves.",
            author: "Elena Rodriguez",
            position: "Marketing Director, Green Eats"
        },
        faqs: [
            {
                number: "001",
                question: "How do you select influencers for the campaign?",
                answer: "We use a data-driven approach, looking for creators whose audience demographics align with our target persona and who have high engagement rates and authentic brand affinity."
            },
            {
                number: "002",
                question: "What was the most successful content type?",
                answer: "Short-form recipe videos and 'day-in-the-life' reels featuring our meal prep containers performed best, driving both high engagement and direct website traffic."
            }
        ],
        partnershipReasons: [
            "Data-driven influencer strategy for Green Eats with 2 months of dedication",
            "High-energy content production that resonated with health-conscious professionals",
            "Significant growth in social following and community engagement"
        ]
    },
    {
        id: 4,
        title: "Artisan Coffee Roasters",
        subtitle: "Premium Packaging Design",
        category: "packaging",
        year: "2023",
        client: "Artisan Coffee",
        duration: "4 months",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop",
        tags: ["Package Design", "Print", "Illustration"],
        description: "Luxury coffee packaging for boutique roasters",
        challenge: "Standing out in a competitive luxury coffee market while conveying the origin story of each bean variety.",
        solution: "A minimalist design language using premium textured papers and custom illustrations that narrate the heritage of each coffee region.",
        result: "Featured in 5 design publications",
        color: "from-amber-300 via-orange-300 to-amber-400",
        stats: { awards: "3", sales: "+150%", retailers: "100+" },
        images: [
            "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
        ],
        keyFeatures: [
            { title: "Custom Illustration", description: "Unique artwork for each origin story." },
            { title: "Sustainable Materials", description: "Compostable bags with luxury finish." }
        ],
        results: [
            { metric: "3", label: "International Design Awards" },
            { metric: "+150%", label: "Sales Increase" },
            { metric: "100+", label: "New Retail Partners" },
        ],
        testimonial: {
            quote: "The packaging is as exquisite as our coffee. It's been a game-changer for our retail presence.",
            author: "Marcus Thorne",
            position: "Founder, Artisan Roasters"
        },
        faqs: [
            {
                number: "001",
                question: "How did you translate the bean's origin into the design?",
                answer: "We worked with local illustrators to create patterns inspired by the topography and flora of each region, using tactile papers that evoke the natural feel of coffee sacks."
            },
            {
                number: "002",
                question: "Are the materials used truly sustainable?",
                answer: "Yes, we utilized certified compostable films and recycled paper stocks, ensuring the entire packaging cycle reflects the client's commitment to the environment."
            }
        ],
        partnershipReasons: [
            "Innovative packaging design for Artisan Coffee with 4 months of dedication",
            "Successful brand storytelling through custom illustrations and premium materials",
            "Recognition in top-tier design publications for aesthetic and functional excellence"
        ]
    },
    {
        id: 5,
        title: "FitLife Wellness App",
        subtitle: "Mobile App Redesign",
        category: "branding",
        year: "2024",
        client: "FitLife",
        duration: "5 months",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
        tags: ["App Design", "Branding", "Motion"],
        description: "Complete redesign of fitness tracking platform",
        challenge: "FitLife had high churn rates due to a cluttered interface and lack of clear progression tracking.",
        solution: "We reimagined the entire user journey, focusing on habit formation and gamified achievements with a sleek, motivating aesthetic.",
        result: "1M downloads in first month",
        color: "from-purple-300 via-violet-300 to-purple-400",
        stats: { downloads: "1M+", rating: "4.8", retention: "+75%" },
        images: [
            "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1517838276548-23d211c40331?w=800&h=600&fit=crop",
        ],
        keyFeatures: [
            { title: "Gamified Progress", description: "Intuitive milestone tracking and social sharing." },
            { title: "Adaptive UI", description: "Interface that evolves with the user's fitness level." }
        ],
        results: [
            { metric: "1M+", label: "App Store Downloads" },
            { metric: "4.8", label: "Average User Rating" },
            { metric: "+75%", label: "User Retention" },
        ],
        testimonial: {
            quote: "The redesign has completely turned our metrics around. Our users love the new experience.",
            author: "David Miller",
            position: "CEO, FitLife Wellness"
        },
        faqs: [
            {
                number: "001",
                question: "How did you address the high churn rate?",
                answer: "We simplified the core user journey to reduce friction and introduced a gamified progression system that rewards consistency, keeping users motivated and engaged."
            },
            {
                number: "002",
                question: "What role did motion design play in the app?",
                answer: "Motion was used to provide delightful feedback for completed workouts and to make the transition between different app states feel fluid and instinctive."
            }
        ],
        partnershipReasons: [
            "Strategic UI/UX redesign for FitLife Wellness with 5 months of dedication",
            "Implementation of gamification strategies that significantly increased user retention",
            "Creation of a scalable design system that accommodates future feature expansions"
        ]
    },
    {
        id: 6,
        title: "Urban Style Collective",
        subtitle: "Fashion Brand Launch",
        category: "social",
        year: "2023",
        client: "Urban Style",
        duration: "3 months",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=800&fit=crop",
        tags: ["Campaign", "Influencer", "Content"],
        description: "Launch campaign for sustainable streetwear",
        challenge: "Launching a new fashion brand in a crowded digital space with a focus on ethical production.",
        solution: "A community-first launch strategy highlighting transparency through behind-the-scenes storytelling and diverse influencer advocacy.",
        result: "Viral campaign: 10M views",
        color: "from-red-300 via-pink-300 to-rose-400",
        stats: { views: "10M+", engagement: "+320%", coverage: "50+" },
        images: [
            "https://images.unsplash.com/photo-1523381294911-8d3ecad09002?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1529139513075-131bbbb64ef1?w=800&h=600&fit=crop",
        ],
        keyFeatures: [
            { title: "Viral Content Strategy", description: "Trend-driven social media assets and challenges." },
            { title: "Impact Reporting", description: "Clear visualization of sustainability metrics." }
        ],
        results: [
            { metric: "10M+", label: "Campaign Views" },
            { metric: "+320%", label: "Engagement Spike" },
            { metric: "50+", label: "Press Features" },
        ],
        testimonial: {
            quote: "We didn't just launch a brand; we built a community. The results exceeded all our expectations.",
            author: "Sophie vance",
            position: "Creative Director, Urban Style"
        },
        faqs: [
            {
                number: "001",
                question: "How did you maintain brand authenticity?",
                answer: "By creating a transparent brand story that shared the actual production process and highlighted the artisans behind the clothes, fostering deep trust with the audience."
            },
            {
                number: "002",
                question: "What was the key to the campaign's virality?",
                answer: "A combination of timely trend participation on TikTok and a compelling 'mission-first' narrative that gave people a reason to share and participate in the brand's launch."
            }
        ],
        partnershipReasons: [
            "Community-first launch strategy for Urban Style with 3 months of dedication",
            "Viral content production that reached millions of potential customers organically",
            "Successful positioning of a sustainable brand in a highly competitive market"
        ]
    },
    {
        id: 7,
        title: "Ocean Breeze Resorts",
        subtitle: "Luxury Hotel Branding",
        category: "branding",
        year: "2023",
        client: "Ocean Breeze",
        duration: "8 months",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
        tags: ["Brand Identity", "Collateral", "Print"],
        description: "Sophisticated branding for boutique resort chain",
        challenge: "Repositioning a heritage resort group for a new generation of luxury travelers seeking authentic experiences.",
        solution: "A modular branding system that blends classic elegance with modern digital integration for a seamless guest experience.",
        result: "40% increase in bookings",
        color: "from-cyan-300 via-blue-300 to-indigo-400",
        stats: { bookings: "+40%", revenue: "+60%", reviews: "4.9" },
        images: [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
        ],
        keyFeatures: [
            { title: "Digital Guest Concierge", description: "Integrated brand experience across mobile and in-resort tablets." },
            { title: "Custom Scent & Sound", description: "Multi-sensory brand assets for immersive environments." }
        ],
        results: [
            { metric: "+40%", label: "Direct Bookings" },
            { metric: "+60%", label: "Revenue per Room" },
            { metric: "4.9", label: "Guest Experience Rating" },
        ],
        testimonial: {
            quote: "The new identity has brought a fresh energy to our resorts. Our guests feel the difference immediately.",
            author: "Robert Sterling",
            position: "V.P. Operations, Ocean Breeze"
        },
        faqs: [
            {
                number: "001",
                question: "How did you modernize the heritage brand?",
                answer: "We carefully preserved the core iconic elements of the original logo while introducing a more refined, minimalist typography and a color palette inspired by the coastal surroundings."
            },
            {
                number: "002",
                question: "How does the digital concierge work?",
                answer: "It's an integrated app that allows guests to browse resort amenities, book spa treatments, and order room service directly from their devices, all wrapped in the new brand aesthetic."
            }
        ],
        partnershipReasons: [
            "Sophisticated brand evolution for Ocean Breeze with 8 months of dedication",
            "Seamless integration of digital tools with premium physical guest experiences",
            "High impact results with a 40% increase in direct bookings"
        ]
    },
    {
        id: 8,
        title: "Startup Hub Website",
        subtitle: "Community Platform",
        category: "web",
        year: "2024",
        client: "Startup Hub",
        duration: "4 months",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
        tags: ["Web Design", "Development", "CMS"],
        description: "Interactive community platform for entrepreneurs",
        challenge: "Creating a digital home for founders that encourages collaboration rather than just static information sharing.",
        solution: "A vibrant, modular community portal with personlized feeds, mentor matching algorithms, and integrated event management.",
        result: "25K active community members",
        color: "from-orange-300 via-amber-300 to-yellow-400",
        stats: { members: "25K+", engagement: "Daily", events: "200+" },
        images: [
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        ],
        keyFeatures: [
            { title: "Mentor Matching", description: "AI-driven connections based on skill gaps and expertise." },
            { title: "Resource Library", description: "Curated content and tools for every stage of the startup journey." }
        ],
        results: [
            { metric: "25K+", label: "Active Members" },
            { metric: "Daily", label: "User Interaction" },
            { metric: "200+", label: "Annual Events" },
        ],
        testimonial: {
            quote: "This platform has become the heartbeat of our startup ecosystem. It's truly transformative.",
            author: "Liam Walker",
            position: "Founder, Startup Hub"
        },
        faqs: [
            {
                number: "001",
                question: "How does the mentor matching algorithm work?",
                answer: "It uses a multi-faceted approach, matching founders based on their specific challenges (e.g., fundraising, hiring) with mentors who have proven expertise and success in those exact areas."
            },
            {
                number: "002",
                question: "How do you ensure high community engagement?",
                answer: "We implemented interactive features like real-time Q&A sessions, exclusive founder circles, and a reward system for active contributors, making the platform indispensable for daily growth."
            }
        ],
        partnershipReasons: [
            "Comprehensive platform development for Startup Hub with 4 months of dedication",
            "Successful integration of advanced features that fostered genuine community growth",
            "User-centric design that made complex networking and resource management intuitive"
        ]
    },
    {
        id: 9,
        title: "Sweet Treats Bakery",
        subtitle: "Product Photography & Packaging",
        category: "packaging",
        year: "2023",
        client: "Sweet Treats",
        duration: "3 months",
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&h=800&fit=crop",
        tags: ["Photography", "Packaging", "Brand"],
        description: "Complete visual identity for artisan bakery",
        challenge: "Conveying the handmade quality and whimsical spirit of the bakery's products through digital and physical touchpoints.",
        solution: "A warm, nostalgia-infused brand identity paired with vibrant photography and eco-friendly, custom-molded packaging.",
        result: "Featured on Food Network",
        color: "from-pink-300 via-rose-300 to-red-400",
        stats: { locations: "15", growth: "+90%", features: "20+" },
        images: [
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop",
        ],
        keyFeatures: [
            { title: "Custom die-cut packaging", description: "Unique structural designs for seasonal products." },
            { title: "Visual Storytelling", description: "Art-directed photography for social and print." }
        ],
        results: [
            { metric: "15", label: "Retail Locations" },
            { metric: "+90%", label: "Annual Growth" },
            { metric: "20+", label: "National Media Features" },
        ],
        testimonial: {
            quote: "The branding captures the joy we bake into every cookie. It's been essential to our expansion.",
            author: "Anna Baker",
            position: "Owner, Sweet Treats"
        },
        faqs: [
            {
                number: "001",
                question: "How did you capture the 'whimsical spirit' visually?",
                answer: "We chose a palette of soft pastels and used organic, hand-drawn illustrations across all packaging, creating a brand that feels both nostalgic and refreshingly modern."
            },
            {
                number: "002",
                question: "What was the goal for the product photography?",
                answer: "To make the products look as delicious as possible while emphasizing their artisanal, 'made-with-love' quality through warm lighting and detailed close-ups."
            }
        ],
        partnershipReasons: [
            "End-to-end visual identity for Sweet Treats with 3 months of dedication",
            "Creation of a cohesive brand experience from digital presence to physical packaging",
            "Successful positioning that led to significant national media attention and growth"
        ]
    }
];
