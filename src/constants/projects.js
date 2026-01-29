import p1 from "../assets/portfolio/Tanmay - BP MAX   2847 x 1602/1.jpg";
import p2 from "../assets/portfolio/Tanmay - BP MAX   2847 x 1602/2.jpg";
import p3 from "../assets/portfolio/Tanmay - BP MAX   2847 x 1602/3.jpg";
import p4 from "../assets/portfolio/Tanmay - BP MAX   2847 x 1602/4.jpg";
import p5 from "../assets/portfolio/Tanmay - BP MAX   2847 x 1602/5.jpg";
import p6 from "../assets/portfolio/Tanmay - BP MAX   2847 x 1602/6.jpg";
import s1 from "../assets/portfolio/Tanmay - BP Raj hospital  2847 x 1602/1.jpg";
import s2 from "../assets/portfolio/Tanmay - BP Raj hospital  2847 x 1602/2.jpg";
import s3 from "../assets/portfolio/Tanmay - BP Raj hospital  2847 x 1602/3.jpg";
import s4 from "../assets/portfolio/Tanmay - BP Raj hospital  2847 x 1602/4.jpg";
import s5 from "../assets/portfolio/Tanmay - BP Raj hospital  2847 x 1602/5.jpg";
import s6 from "../assets/portfolio/Tanmay - BP Raj hospital  2847 x 1602/6.jpg";
import s7 from "../assets/portfolio/Tanmay - BP Raj hospital  2847 x 1602/7.jpg";
import s8 from "../assets/portfolio/Tanmay - BP Raj hospital  2847 x 1602/8.jpg";
import t1 from "../assets/portfolio/_Tanmay - BP  LIFECARE  2847 x 1602/1.jpg";
import t2 from "../assets/portfolio/_Tanmay - BP  LIFECARE  2847 x 1602/2.jpg";
import t3 from "../assets/portfolio/_Tanmay - BP  LIFECARE  2847 x 1602/3.jpg";
import t4 from "../assets/portfolio/_Tanmay - BP  LIFECARE  2847 x 1602/4.jpg";
import t5 from "../assets/portfolio/_Tanmay - BP  LIFECARE  2847 x 1602/5.jpg";
import t6 from "../assets/portfolio/_Tanmay - BP  LIFECARE  2847 x 1602/6.jpg";
import t7 from "../assets/portfolio/_Tanmay - BP  LIFECARE  2847 x 1602/7.jpg";
import t8 from "../assets/portfolio/_Tanmay - BP  LIFECARE  2847 x 1602/8.jpg";
import t9 from "../assets/portfolio/_Tanmay - BP  LIFECARE  2847 x 1602/9.jpg";
import apolloHero from "../assets/portfolio/apollo/hero.jpg";
import apollo2 from "../assets/portfolio/apollo/2.jpg";
import apollo3 from "../assets/portfolio/apollo/3.jpg";
import apollo4 from "../assets/portfolio/apollo/4.jpg";
import apollo5 from "../assets/portfolio/apollo/5.jpg";
import apollo6 from "../assets/portfolio/apollo/6.jpg";
// Cover images for portfolio cards
import rajCard from "../assets/portfolio/covers/RAJ-CARD.webp";
import maxCard from "../assets/portfolio/covers/max-thumbnail.webp";
import lifecareCard from "../assets/portfolio/covers/lifecare-card.webp";
import apolloCard from "../assets/portfolio/covers/apollo-card.webp";
export const projects = [
    {
        id: 1,
        title: "MAX@Home",
        subtitle: "Healthcare Website Development",
        category: "web",
        year: "2024",
        client: "MAX@Home (Max Healthcare)",
        duration: "5 months",
        image: maxCard,
        heroImage: p1,
        tags: ["Website Development", "Healthcare UI/UX", "Patient Portal", "Service Booking", "Performance Optimization"],
        description: "Building a digital platform for India's largest home healthcare brand to connect patients with hospital-quality care at home",
        challenge: "MAX@Home, India's largest home healthcare brand under Max Healthcare, needed a modern, user-friendly website that communicates their mission of bringing medical expertise and hospital-quality care to patients' homes. The challenge was to create a seamless digital experience that builds trust, simplifies service booking, and helps families find the right care with compassion and reliability.",
        solution: "We designed and developed a comprehensive healthcare website with intuitive service discovery, easy appointment booking, and patient-centric UI/UX. The platform features service pages for all healthcare offerings, a streamlined inquiry system, and responsive design optimized for families seeking home-based medical care.",
        result: "185% increase in online inquiries",
        color: "from-amber-300 via-orange-300 to-amber-400",
        stats: { Inquiries: "+185%", "Load Time": "1.6s", Bookings: "+210%" },
        images: [p1, p2, p3, p4, p5, p6],
        keyFeatures: [
            { title: "Patient-Centric UI/UX Design", description: "Intuitive interface designed for easy navigation and service discovery for patients and families." },
            { title: "Service Booking System", description: "Streamlined appointment booking with real-time availability and care coordinator integration." },
            { title: "Responsive Healthcare Platform", description: "Mobile-optimized design ensuring accessibility across all devices for urgent care needs." },
            { title: "Performance Optimization", description: "Lightning-fast load times with optimized assets and efficient caching strategies." }
        ],
        results: [
            { metric: "185%", label: "Online Inquiry Growth", description: "Achieved through intuitive UX and streamlined service booking flow." },
            { metric: "1.6s", label: "Average Load Time", description: "Optimized performance ensuring fast access for patients seeking care." },
            { metric: "210%", label: "Service Bookings", description: "Direct result of improved user journey and clear service presentation." },
            { metric: "92%", label: "User Satisfaction", description: "Reflecting the ease of finding and booking home healthcare services." },
        ],
        testimonial: {
            quote: "The new website has transformed how families connect with our home healthcare services. The user experience truly reflects our mission of compassion, excellence and reliability.",
            author: "MAX@Home Team",
            position: "India's Largest Home Healthcare Brand"
        },
        faqs: [
            {
                number: "001",
                question: "What was the website development approach?",
                answer: "We focused on creating a patient-centric platform with easy service discovery, streamlined booking, and fast performance to help families quickly find and access home healthcare services."
            },
            {
                number: "002",
                question: "How does the booking system work?",
                answer: "The integrated booking system allows patients to browse services, check availability, and connect with care coordinators seamlessly, reducing friction in the inquiry-to-booking journey."
            },
            {
                number: "003",
                question: "What technologies were used?",
                answer: "We built a modern, responsive website with optimized performance, integrated CMS for service management, and seamless third-party integrations for appointment scheduling."
            }
        ],
        partnershipReasons: [
            "End-to-end website development for India's largest home healthcare brand",
            "Patient-centric design that reflects compassion, excellence and reliability",
            "Measurable growth in service inquiries and online bookings"
        ]
    },
    {
        id: 2,
        title: "Raj Hospitals Ranchi",
        subtitle: "Digital Healthcare Transformation",
        category: "healthcare",
        year: "2025",
        client: "Raj Hospitals Ranchi",
        duration: "12 months",
        image: rajCard,
        heroImage: s1,
        tags: ["Full-Funnel Digital Strategy", "Doctor-Led Video Production", "Patient Community Building", "SEO & Local Search Optimization", "Performance Analytics", "Web Development"],
        description: "Digitizing Care: A Year of Expanding Healthcare Horizons in Jharkhand",
        challenge: "Transitioning from 'traditional hospital marketing' to an interactive, educational ecosystem that reduces patient anxiety and builds preemptive trust. In 2025, Raj Hospitals Ranchi embarked on a mission to modernize its legacy brand image to align with its high-tech medical infrastructure (Cath Lab, Modular OTs).",
        solution: "The Human Hospital – Humanizing specialists through 1:1 video Q&As and showcasing 'Real Patient Outcomes' to validate clinical excellence. We optimized Google My Business and Instagram SEO, launched the Health-Byte Reel series, and implemented direct 'Book Appointment' integrations on social platforms.",
        result: "140% YoY increase in digital reach",
        color: "from-blue-300 via-indigo-300 to-purple-400",
        stats: { impressions: "5M+", engagement: "+85%", patientGrowth: "+28%" },
        images: [s1, s2, s3, s4, s5, s6, s7, s8],
        keyFeatures: [
            { title: "Doctor-Led Video Production", description: "Health-Byte Reel series simplifying complex cardiac and neurosurgical topics for laypeople." },
            { title: "Patient Community Building", description: "Built trust through 1:1 video Q&As and real patient outcome showcases." },
            { title: "Local Search Optimization", description: "Focused on 'Best Hospital in Ranchi' keywords for maximum local visibility." },
            { title: "Direct Appointment Integration", description: "Streamlined patient journey from discovery to consultation on social platforms." }
        ],
        results: [
            { metric: "5M+", label: "Total Impressions" },
            { metric: "+140%", label: "Annual Reach Growth" },
            { metric: "+85%", label: "Community Engagement" },
            { metric: "+28%", label: "Patient Acquisition" },
        ],
        testimonial: {
            quote: "By the end of 2025, Raj Hospitals established itself as the most engaged healthcare brand in Jharkhand, proving that empathy-driven content is the most effective driver of clinical growth.",
            author: "Raj Hospitals Team",
            position: "Jharkhand's #1 Digital Healthcare Growth Story"
        },
        faqs: [
            {
                number: "001",
                question: "What was the core strategy for digital transformation?",
                answer: "The Human Hospital approach – humanizing specialists through 1:1 video Q&As and showcasing 'Real Patient Outcomes' to validate clinical excellence and build preemptive trust with the 2.5 Million+ residents of Ranchi."
            },
            {
                number: "002",
                question: "Which content performed best?",
                answer: "Video content (Reels) drove 3.5x more saves than static graphics. The Health-Byte Reel series simplifying complex cardiac and neurosurgical topics resonated strongly, especially during October's 'Cardiac Care Awareness' month."
            }
        ],
        partnershipReasons: [
            "Full-funnel digital strategy transforming legacy brand image for modern healthcare",
            "210% growth in video views through doctor-led educational content",
            "Established Raj Hospitals as Jharkhand's most engaged healthcare brand"
        ]
    },
    {
        id: 3,
        title: "Lifecare Hospitals Africa",
        subtitle: "Healthcare Digital Ecosystem",
        category: "healthcare",
        year: "2025–2026",
        client: "Lifecare Hospitals Africa",
        duration: "Ongoing",
        image: lifecareCard,
        heroImage: t1,
        tags: ["Social Media Strategy", "Content Production (Reels)", "Performance Marketing", "Community Management", "Healthcare SEO", "Web Development"],
        description: "Democratizing Specialized Healthcare Across the African Continent",
        challenge: "Move away from ad-heavy healthcare marketing to a trust-driven, community-first digital model that resonates with diverse local populations. Lifecare Hospitals operates a distributed healthcare ecosystem, bringing advanced clinical services—MRI, Dialysis, ICU—to underserved regions like Bungoma, Migori, and Freetown.",
        solution: "The Human Side of Clinical Excellence – Introduced surgeons, pediatricians, and specialists to build trust before the first visit. Complex procedures like dialysis and neurosurgery simplified into 60-second explainers. Used Instagram's preference for educational health content for explosive organic discovery.",
        result: "210% organic growth",
        color: "from-green-300 via-emerald-300 to-teal-400",
        stats: { views: "839.6K+", reach: "130,812", followers: "41.2K+" },
        images: [t1, t2, t3, t4, t5, t6, t7, t8, t9],
        keyFeatures: [
            { title: "Specialist Spotlights", description: "Introduced surgeons, pediatricians, and specialists to build trust before the first visit." },
            { title: "Educational Reels", description: "Complex procedures like dialysis and neurosurgery simplified into 60-second explainers." },
            { title: "Organic Growth Engine", description: "Used Instagram's preference for educational health content—resulting in explosive organic discovery." },
            { title: "Community Management", description: "Built digital communities across Kenya and Sierra Leone regions." }
        ],
        results: [
            { metric: "839.6K+", label: "Total Views (30 Days)" },
            { metric: "210%", label: "Organic Growth" },
            { metric: "41.2K+", label: "Followers Built" },
            { metric: "92.5%", label: "Non-Follower Reach" },
        ],
        testimonial: {
            quote: "By aligning Lifecare's mission—'Making Life Better'—with a human-first digital strategy, we positioned the brand as a trusted healthcare leader, proving that clinical excellence works best when it's accessible, visible, and authentic.",
            author: "Lifecare Team",
            position: "Elevating Africa's Healthcare Standards"
        },
        faqs: [
            {
                number: "001",
                question: "How did you achieve 210% organic growth?",
                answer: "By leveraging Instagram's preference for educational health content and creating specialist spotlights and 60-second procedure explainers that resonated with local communities in Kenya and Sierra Leone."
            },
            {
                number: "002",
                question: "What were the top content pillars?",
                answer: "Predictive AI Diagnostics and Maternal Health Tips were the top performers, with audience hotspots in Nairobi, Mombasa, and Nakuru driving peak interactions of 34.9K."
            }
        ],
        partnershipReasons: [
            "Trust-driven, community-first digital model for multi-region healthcare",
            "92.5% non-follower reach proving viral organic discovery",
            "Successfully broke free from ad-dependency with sustainable organic growth"
        ]
    },
    {
        id: 4,
        title: "Apollo Hospitals Delhi",
        subtitle: "Healthcare Digital Scaling",
        category: "healthcare",
        year: "2025–2026",
        client: "Indraprastha Apollo Hospitals, Delhi",
        duration: "5 months",
        image: apolloCard,
        heroImage: apolloHero,
        tags: ["Omnichannel Growth Strategy", "Paid Media Scaling", "Educational Content Production", "Medical Tourism Marketing", "Robotic Surgery Awareness"],
        description: "Bridging Clinical Brilliance with Digital Mass Awareness",
        challenge: "Maintain brand prestige while scaling reach to local and international patients. Premier NCR hospital with 710+ beds needing digital scale to match clinical leadership as India's first JCI-accredited hospital.",
        solution: "Dual-engine approach: organic trust via Reels + hyper-targeted paid conversion. 'Science of Healing' series on robotics and transplants. Video-first pivot causing 717.2% organic growth with ad engine delivering 7.5M views.",
        result: "+598.7% view growth",
        color: "from-amber-300 via-orange-300 to-amber-400",
        stats: { views: "8.3M", reach: "5.6M", interactions: "+2.4K%" },
        images: [apolloHero, apollo2, apollo3, apollo4, apollo5, apollo6],
        keyFeatures: [
            { title: "Omnichannel Growth Strategy", description: "Dual-engine: organic trust via Reels + hyper-targeted paid conversion campaigns." },
            { title: "Science of Healing Series", description: "Educational content on robotics and transplant Centres of Excellence." },
            { title: "Video-First Pivot", description: "Strategic shift to Reels-first content causing 717.2% organic growth." },
            { title: "Medical Tourism Marketing", description: "Targeting global transplant seekers and local NCR families." }
        ],
        results: [
            { metric: "8.3M", label: "Total Views" },
            { metric: "+598.7%", label: "View Growth" },
            { metric: "5.6M", label: "Unique Reach" },
            { metric: "+2.4K%", label: "Interactions Growth" },
        ],
        testimonial: {
            quote: "Transformed India's most trusted hospital into its most visible healthcare brand. Now a top-of-funnel discovery engine with 8.3M views.",
            author: "Apollo Team",
            position: "India's First JCI Hospital, Now Its Digital Leader"
        },
        faqs: [
            {
                number: "001",
                question: "What drove the 598.7% view growth?",
                answer: "A video-first pivot with 5–7 posts/week, Reels-first strategy. The 'Science of Healing' series on robotic surgery and transplants resonated strongly, achieving 55.2K deep engagements."
            },
            {
                number: "002",
                question: "What content performed best?",
                answer: "Robotic Surgery Reels and Transplant Centres of Excellence content drove the highest engagement, with a strong Q4 rise via the 'Expert Insight' campaign."
            }
        ],
        partnershipReasons: [
            "Scaled India's first JCI-accredited hospital to 8.3M+ digital views",
            "Achieved 717.2% organic growth through video-first content strategy",
            "Transformed trusted clinical brand into most visible healthcare digital presence"
        ]
    },
    {
        id: 5,
        title: "MAX@Home",
        subtitle: "Healthcare Website Development",
        category: "web",
        year: "2024",
        client: "MAX@Home (Max Healthcare)",
        duration: "5 months",
        image: maxCard,
        heroImage: p1,
        tags: ["Website Development", "Healthcare UI/UX", "Patient Portal", "Service Booking", "Performance Optimization"],
        description: "Building a digital platform for India's largest home healthcare brand to connect patients with hospital-quality care at home",
        challenge: "MAX@Home, India's largest home healthcare brand under Max Healthcare, needed a modern, user-friendly website that communicates their mission of bringing medical expertise and hospital-quality care to patients' homes. The challenge was to create a seamless digital experience that builds trust, simplifies service booking, and helps families find the right care with compassion and reliability.",
        solution: "We designed and developed a comprehensive healthcare website with intuitive service discovery, easy appointment booking, and patient-centric UI/UX. The platform features service pages for all healthcare offerings, a streamlined inquiry system, and responsive design optimized for families seeking home-based medical care.",
        result: "185% increase in online inquiries",
        color: "from-amber-300 via-orange-300 to-amber-400",
        stats: { Inquiries: "+185%", "Load Time": "1.6s", Bookings: "+210%" },
        images: [p1, p2, p3, p4, p5, p6],
        keyFeatures: [
            { title: "Patient-Centric UI/UX Design", description: "Intuitive interface designed for easy navigation and service discovery for patients and families." },
            { title: "Service Booking System", description: "Streamlined appointment booking with real-time availability and care coordinator integration." },
            { title: "Responsive Healthcare Platform", description: "Mobile-optimized design ensuring accessibility across all devices for urgent care needs." },
            { title: "Performance Optimization", description: "Lightning-fast load times with optimized assets and efficient caching strategies." }
        ],
        results: [
            { metric: "185%", label: "Online Inquiry Growth", description: "Achieved through intuitive UX and streamlined service booking flow." },
            { metric: "1.6s", label: "Average Load Time", description: "Optimized performance ensuring fast access for patients seeking care." },
            { metric: "210%", label: "Service Bookings", description: "Direct result of improved user journey and clear service presentation." },
            { metric: "92%", label: "User Satisfaction", description: "Reflecting the ease of finding and booking home healthcare services." },
        ],
        testimonial: {
            quote: "The new website has transformed how families connect with our home healthcare services. The user experience truly reflects our mission of compassion, excellence and reliability.",
            author: "MAX@Home Team",
            position: "India's Largest Home Healthcare Brand"
        },
        faqs: [
            {
                number: "001",
                question: "What was the website development approach?",
                answer: "We focused on creating a patient-centric platform with easy service discovery, streamlined booking, and fast performance to help families quickly find and access home healthcare services."
            },
            {
                number: "002",
                question: "How does the booking system work?",
                answer: "The integrated booking system allows patients to browse services, check availability, and connect with care coordinators seamlessly, reducing friction in the inquiry-to-booking journey."
            },
            {
                number: "003",
                question: "What technologies were used?",
                answer: "We built a modern, responsive website with optimized performance, integrated CMS for service management, and seamless third-party integrations for appointment scheduling."
            }
        ],
        partnershipReasons: [
            "End-to-end website development for India's largest home healthcare brand",
            "Patient-centric design that reflects compassion, excellence and reliability",
            "Measurable growth in service inquiries and online bookings"
        ]
    },
    {
        id: 6,
        title: "Apollo Hospitals Delhi",
        subtitle: "Healthcare Digital Scaling",
        category: "healthcare",
        year: "2025–2026",
        client: "Indraprastha Apollo Hospitals, Delhi",
        duration: "5 months",
        image: apolloCard,
        heroImage: apolloHero,
        tags: ["Omnichannel Growth Strategy", "Paid Media Scaling", "Educational Content Production", "Medical Tourism Marketing", "Robotic Surgery Awareness"],
        description: "Bridging Clinical Brilliance with Digital Mass Awareness",
        challenge: "Maintain brand prestige while scaling reach to local and international patients. Premier NCR hospital with 710+ beds needing digital scale to match clinical leadership as India's first JCI-accredited hospital.",
        solution: "Dual-engine approach: organic trust via Reels + hyper-targeted paid conversion. 'Science of Healing' series on robotics and transplants. Video-first pivot causing 717.2% organic growth with ad engine delivering 7.5M views.",
        result: "+598.7% view growth",
        color: "from-amber-300 via-orange-300 to-amber-400",
        stats: { views: "8.3M", reach: "5.6M", interactions: "+2.4K%" },
        images: [apolloHero, apollo2, apollo3, apollo4, apollo5, apollo6],
        keyFeatures: [
            { title: "Omnichannel Growth Strategy", description: "Dual-engine: organic trust via Reels + hyper-targeted paid conversion campaigns." },
            { title: "Science of Healing Series", description: "Educational content on robotics and transplant Centres of Excellence." },
            { title: "Video-First Pivot", description: "Strategic shift to Reels-first content causing 717.2% organic growth." },
            { title: "Medical Tourism Marketing", description: "Targeting global transplant seekers and local NCR families." }
        ],
        results: [
            { metric: "8.3M", label: "Total Views", description: "Massive reach through video-first content strategy." },
            { metric: "+598.7%", label: "View Growth", description: "Exponential growth via Reels-first approach." },
            { metric: "5.6M", label: "Unique Reach", description: "Expanded audience across NCR and international markets." },
            { metric: "+2.4K%", label: "Interactions Growth", description: "Deep engagement through educational content." },
        ],
        testimonial: {
            quote: "Transformed India's most trusted hospital into its most visible healthcare brand. Now a top-of-funnel discovery engine with 8.3M views.",
            author: "Apollo Team",
            position: "India's First JCI Hospital, Now Its Digital Leader"
        },
        faqs: [
            {
                number: "001",
                question: "What drove the 598.7% view growth?",
                answer: "A video-first pivot with 5–7 posts/week, Reels-first strategy. The 'Science of Healing' series on robotic surgery and transplants resonated strongly, achieving 55.2K deep engagements."
            },
            {
                number: "002",
                question: "What content performed best?",
                answer: "Robotic Surgery Reels and Transplant Centres of Excellence content drove the highest engagement, with a strong Q4 rise via the 'Expert Insight' campaign."
            }
        ],
        partnershipReasons: [
            "Scaled India's first JCI-accredited hospital to 8.3M+ digital views",
            "Achieved 717.2% organic growth through video-first content strategy",
            "Transformed trusted clinical brand into most visible healthcare digital presence"
        ]
    },
    // {
    //     id: 7,
    //     title: "FitLife Wellness App",
    //     subtitle: "Mobile App Redesign",
    //     category: "branding",
    //     year: "2024",
    //     client: "FitLife",
    //     duration: "5 months",
    //     image: pcard4,
    //     heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    //     tags: ["App Design", "Branding", "Motion"],
    //     description: "Complete redesign of fitness tracking platform",
    //     challenge: "FitLife had high churn rates due to a cluttered interface and lack of clear progression tracking.",
    //     solution: "We reimagined the entire user journey, focusing on habit formation and gamified achievements with a sleek, motivating aesthetic.",
    //     result: "1M downloads in first month",
    //     color: "from-purple-300 via-violet-300 to-purple-400",
    //     stats: { downloads: "1M+", rating: "4.8", retention: "+75%" },
    //     images: [
    //         "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1517838276548-23d211c40331?w=800&h=600&fit=crop",
    //     ],
    //     keyFeatures: [
    //         { title: "Gamified Progress", description: "Intuitive milestone tracking and social sharing." },
    //         { title: "Adaptive UI", description: "Interface that evolves with the user's fitness level." }
    //     ],
    //     results: [
    //         { metric: "1M+", label: "App Store Downloads" },
    //         { metric: "4.8", label: "Average User Rating" },
    //         { metric: "+75%", label: "User Retention" },
    //     ],
    //     testimonial: {
    //         quote: "The redesign has completely turned our metrics around. Our users love the new experience.",
    //         author: "David Miller",
    //         position: "CEO, FitLife Wellness"
    //     },
    //     faqs: [
    //         {
    //             number: "001",
    //             question: "How did you address the high churn rate?",
    //             answer: "We simplified the core user journey to reduce friction and introduced a gamified progression system that rewards consistency, keeping users motivated and engaged."
    //         },
    //         {
    //             number: "002",
    //             question: "What role did motion design play in the app?",
    //             answer: "Motion was used to provide delightful feedback for completed workouts and to make the transition between different app states feel fluid and instinctive."
    //         }
    //     ],
    //     partnershipReasons: [
    //         "Strategic UI/UX redesign for FitLife Wellness with 5 months of dedication",
    //         "Implementation of gamification strategies that significantly increased user retention",
    //         "Creation of a scalable design system that accommodates future feature expansions"
    //     ]
    // },
    // {
    //     id: 6,
    //     title: "Urban Style Collective",
    //     subtitle: "Fashion Brand Launch",
    //     category: "social",
    //     year: "2023",
    //     client: "Urban Style",
    //     duration: "3 months",
    //     image: pcard6,
    //     heroImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=800&fit=crop",
    //     tags: ["Campaign", "Influencer", "Content"],
    //     description: "Launch campaign for sustainable streetwear",
    //     challenge: "Launching a new fashion brand in a crowded digital space with a focus on ethical production.",
    //     solution: "A community-first launch strategy highlighting transparency through behind-the-scenes storytelling and diverse influencer advocacy.",
    //     result: "Viral campaign: 10M views",
    //     color: "from-red-300 via-pink-300 to-rose-400",
    //     stats: { views: "10M+", engagement: "+320%", coverage: "50+" },
    //     images: [
    //         "https://images.unsplash.com/photo-1523381294911-8d3ecad09002?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1529139513075-131bbbb64ef1?w=800&h=600&fit=crop",
    //     ],
    //     keyFeatures: [
    //         { title: "Viral Content Strategy", description: "Trend-driven social media assets and challenges." },
    //         { title: "Impact Reporting", description: "Clear visualization of sustainability metrics." }
    //     ],
    //     results: [
    //         { metric: "10M+", label: "Campaign Views" },
    //         { metric: "+320%", label: "Engagement Spike" },
    //         { metric: "50+", label: "Press Features" },
    //     ],
    //     testimonial: {
    //         quote: "We didn't just launch a brand; we built a community. The results exceeded all our expectations.",
    //         author: "Sophie vance",
    //         position: "Creative Director, Urban Style"
    //     },
    //     faqs: [
    //         {
    //             number: "001",
    //             question: "How did you maintain brand authenticity?",
    //             answer: "By creating a transparent brand story that shared the actual production process and highlighted the artisans behind the clothes, fostering deep trust with the audience."
    //         },
    //         {
    //             number: "002",
    //             question: "What was the key to the campaign's virality?",
    //             answer: "A combination of timely trend participation on TikTok and a compelling 'mission-first' narrative that gave people a reason to share and participate in the brand's launch."
    //         }
    //     ],
    //     partnershipReasons: [
    //         "Community-first launch strategy for Urban Style with 3 months of dedication",
    //         "Viral content production that reached millions of potential customers organically",
    //         "Successful positioning of a sustainable brand in a highly competitive market"
    //     ]
    // },
    // {
    //     id: 7,
    //     title: "Ocean Breeze Resorts",
    //     subtitle: "Luxury Hotel Branding",
    //     category: "branding",
    //     year: "2023",
    //     client: "Ocean Breeze",
    //     duration: "8 months",
    //     image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    //     heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
    //     tags: ["Brand Identity", "Collateral", "Print"],
    //     description: "Sophisticated branding for boutique resort chain",
    //     challenge: "Repositioning a heritage resort group for a new generation of luxury travelers seeking authentic experiences.",
    //     solution: "A modular branding system that blends classic elegance with modern digital integration for a seamless guest experience.",
    //     result: "40% increase in bookings",
    //     color: "from-cyan-300 via-blue-300 to-indigo-400",
    //     stats: { bookings: "+40%", revenue: "+60%", reviews: "4.9" },
    //     images: [
    //         "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    //     ],
    //     keyFeatures: [
    //         { title: "Digital Guest Concierge", description: "Integrated brand experience across mobile and in-resort tablets." },
    //         { title: "Custom Scent & Sound", description: "Multi-sensory brand assets for immersive environments." }
    //     ],
    //     results: [
    //         { metric: "+40%", label: "Direct Bookings" },
    //         { metric: "+60%", label: "Revenue per Room" },
    //         { metric: "4.9", label: "Guest Experience Rating" },
    //     ],
    //     testimonial: {
    //         quote: "The new identity has brought a fresh energy to our resorts. Our guests feel the difference immediately.",
    //         author: "Robert Sterling",
    //         position: "V.P. Operations, Ocean Breeze"
    //     },
    //     faqs: [
    //         {
    //             number: "001",
    //             question: "How did you modernize the heritage brand?",
    //             answer: "We carefully preserved the core iconic elements of the original logo while introducing a more refined, minimalist typography and a color palette inspired by the coastal surroundings."
    //         },
    //         {
    //             number: "002",
    //             question: "How does the digital concierge work?",
    //             answer: "It's an integrated app that allows guests to browse resort amenities, book spa treatments, and order room service directly from their devices, all wrapped in the new brand aesthetic."
    //         }
    //     ],
    //     partnershipReasons: [
    //         "Sophisticated brand evolution for Ocean Breeze with 8 months of dedication",
    //         "Seamless integration of digital tools with premium physical guest experiences",
    //         "High impact results with a 40% increase in direct bookings"
    //     ]
    // },
    // {
    //     id: 8,
    //     title: "Startup Hub Website",
    //     subtitle: "Community Platform",
    //     category: "web",
    //     year: "2024",
    //     client: "Startup Hub",
    //     duration: "4 months",
    //     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    //     heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    //     tags: ["Web Design", "Development", "CMS"],
    //     description: "Interactive community platform for entrepreneurs",
    //     challenge: "Creating a digital home for founders that encourages collaboration rather than just static information sharing.",
    //     solution: "A vibrant, modular community portal with personlized feeds, mentor matching algorithms, and integrated event management.",
    //     result: "25K active community members",
    //     color: "from-orange-300 via-amber-300 to-yellow-400",
    //     stats: { members: "25K+", engagement: "Daily", events: "200+" },
    //     images: [
    //         "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    //     ],
    //     keyFeatures: [
    //         { title: "Mentor Matching", description: "AI-driven connections based on skill gaps and expertise." },
    //         { title: "Resource Library", description: "Curated content and tools for every stage of the startup journey." }
    //     ],
    //     results: [
    //         { metric: "25K+", label: "Active Members" },
    //         { metric: "Daily", label: "User Interaction" },
    //         { metric: "200+", label: "Annual Events" },
    //     ],
    //     testimonial: {
    //         quote: "This platform has become the heartbeat of our startup ecosystem. It's truly transformative.",
    //         author: "Liam Walker",
    //         position: "Founder, Startup Hub"
    //     },
    //     faqs: [
    //         {
    //             number: "001",
    //             question: "How does the mentor matching algorithm work?",
    //             answer: "It uses a multi-faceted approach, matching founders based on their specific challenges (e.g., fundraising, hiring) with mentors who have proven expertise and success in those exact areas."
    //         },
    //         {
    //             number: "002",
    //             question: "How do you ensure high community engagement?",
    //             answer: "We implemented interactive features like real-time Q&A sessions, exclusive founder circles, and a reward system for active contributors, making the platform indispensable for daily growth."
    //         }
    //     ],
    //     partnershipReasons: [
    //         "Comprehensive platform development for Startup Hub with 4 months of dedication",
    //         "Successful integration of advanced features that fostered genuine community growth",
    //         "User-centric design that made complex networking and resource management intuitive"
    //     ]
    // },
    // {
    //     id: 9,
    //     title: "Sweet Treats Bakery",
    //     subtitle: "Product Photography & Packaging",
    //     category: "packaging",
    //     year: "2023",
    //     client: "Sweet Treats",
    //     duration: "3 months",
    //     image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&h=600&fit=crop",
    //     heroImage: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&h=800&fit=crop",
    //     tags: ["Photography", "Packaging", "Brand"],
    //     description: "Complete visual identity for artisan bakery",
    //     challenge: "Conveying the handmade quality and whimsical spirit of the bakery's products through digital and physical touchpoints.",
    //     solution: "A warm, nostalgia-infused brand identity paired with vibrant photography and eco-friendly, custom-molded packaging.",
    //     result: "Featured on Food Network",
    //     color: "from-pink-300 via-rose-300 to-red-400",
    //     stats: { locations: "15", growth: "+90%", features: "20+" },
    //     images: [
    //         "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop",
    //         "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop",
    //     ],
    //     keyFeatures: [
    //         { title: "Custom die-cut packaging", description: "Unique structural designs for seasonal products." },
    //         { title: "Visual Storytelling", description: "Art-directed photography for social and print." }
    //     ],
    //     results: [
    //         { metric: "15", label: "Retail Locations" },
    //         { metric: "+90%", label: "Annual Growth" },
    //         { metric: "20+", label: "National Media Features" },
    //     ],
    //     testimonial: {
    //         quote: "The branding captures the joy we bake into every cookie. It's been essential to our expansion.",
    //         author: "Anna Baker",
    //         position: "Owner, Sweet Treats"
    //     },
    //     faqs: [
    //         {
    //             number: "001",
    //             question: "How did you capture the 'whimsical spirit' visually?",
    //             answer: "We chose a palette of soft pastels and used organic, hand-drawn illustrations across all packaging, creating a brand that feels both nostalgic and refreshingly modern."
    //         },
    //         {
    //             number: "002",
    //             question: "What was the goal for the product photography?",
    //             answer: "To make the products look as delicious as possible while emphasizing their artisanal, 'made-with-love' quality through warm lighting and detailed close-ups."
    //         }
    //     ],
    //     partnershipReasons: [
    //         "End-to-end visual identity for Sweet Treats with 3 months of dedication",
    //         "Creation of a cohesive brand experience from digital presence to physical packaging",
    //         "Successful positioning that led to significant national media attention and growth"
    //     ]
    // }
];
