// Services data for all service pages - with consistent theme color #C4A484

export const servicesData = {
    "seo-optimization": {
        id: "seo-optimization",
        title: "SEO",
        titleHighlight: "OPTIMIZATION.",
        subtitle: "Search Engine Optimization",
        description: "Rank higher and drive targeted traffic with data-driven keyword strategies that boost your online visibility.",
        heroImage: "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817880/SEO_qymlqf.svg",
        stats: [
            { value: "300%", label: "Average Traffic Increase" },
            { value: "95%", label: "Client Retention" }
        ],
        services: [
            {
                id: 1,
                title: "On-Page SEO",
                description: "Optimize your website's content, meta tags, headings, and internal linking structure for maximum search visibility and user engagement.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
                technologies: ["Meta Tags", "Schema Markup", "Content Optimization", "URL Structure"],
                stats: { projects: "200+", satisfaction: "98%" }
            },
            {
                id: 2,
                title: "Off-Page SEO",
                description: "Build authoritative backlinks and enhance your domain authority through strategic outreach and content marketing campaigns.",
                image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&auto=format",
                technologies: ["Link Building", "Guest Posting", "PR Outreach", "Social Signals"],
                stats: { projects: "150+", satisfaction: "97%" }
            },
            {
                id: 3,
                title: "Technical SEO",
                description: "Ensure your website meets all technical requirements for search engine crawling and indexing with site speed optimization and mobile-first approach.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
                technologies: ["Site Speed", "Core Web Vitals", "Mobile SEO", "XML Sitemaps"],
                stats: { projects: "180+", satisfaction: "99%" }
            },
            {
                id: 4,
                title: "Local SEO",
                description: "Dominate local search results and attract nearby customers with optimized Google Business Profile and local citations strategy.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&auto=format",
                technologies: ["Google Business", "Local Citations", "Review Management", "NAP Consistency"],
                stats: { projects: "120+", satisfaction: "96%" }
            },
            {
                id: 5,
                title: "E-commerce SEO",
                description: "Specialized SEO strategies for online stores to improve product visibility, category rankings, and overall conversion rates.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
                technologies: ["Product SEO", "Category Optimization", "Rich Snippets", "Shopping Ads"],
                stats: { projects: "80+", satisfaction: "98%" }
            }
        ],
        journey: {
            title: "SEO",
            highlight: "JOURNEY.",
            description: "A proven methodology to improve your search rankings.",
            steps: [
                {
                    number: "01",
                    title: "SEO Audit",
                    description: "Comprehensive analysis of your current SEO status, identifying gaps and opportunities for improvement.",
                    details: ["Technical Analysis", "Content Audit", "Backlink Analysis", "Competitor Research"]
                },
                {
                    number: "02",
                    title: "Keyword Research",
                    description: "In-depth keyword research to identify high-value search terms that align with your business goals.",
                    details: ["Search Volume", "Competition Analysis", "Intent Mapping", "Long-tail Keywords"]
                },
                {
                    number: "03",
                    title: "On-Page Optimization",
                    description: "Optimizing your website's content, structure, and technical elements for better search visibility.",
                    details: ["Meta Optimization", "Content Enhancement", "Internal Linking", "Schema Markup"]
                },
                {
                    number: "04",
                    title: "Off-Page Strategy",
                    description: "Building high-quality backlinks and improving your domain authority through strategic outreach.",
                    details: ["Link Building", "Guest Posting", "PR Campaigns", "Brand Mentions"]
                },
                {
                    number: "05",
                    title: "Monitoring & Reporting",
                    description: "Continuous tracking of rankings, traffic, and conversions with detailed monthly reports.",
                    details: ["Rank Tracking", "Traffic Analysis", "Conversion Tracking", "ROI Measurement"]
                },
                {
                    number: "06",
                    title: "Ongoing Optimization",
                    description: "Regular updates and refinements based on algorithm changes and performance data.",
                    details: ["Algorithm Updates", "Content Updates", "Strategy Refinement", "Performance Tuning"]
                }
            ]
        },
        faqs: [
            {
                question: "How long does it take to see SEO results?",
                answer: "SEO is a long-term strategy. You can expect to see initial improvements within 3-6 months, with significant results typically appearing after 6-12 months of consistent effort."
            },
            {
                question: "What's included in your SEO services?",
                answer: "Our comprehensive SEO services include on-page optimization, technical SEO, content strategy, link building, local SEO, and detailed monthly reporting."
            },
            {
                question: "Do you guarantee first page rankings?",
                answer: "While we can't guarantee specific rankings (no ethical SEO company can), we have a proven track record of significantly improving our clients' search visibility and organic traffic."
            },
            {
                question: "How do you measure SEO success?",
                answer: "We track multiple metrics including organic traffic, keyword rankings, conversion rates, domain authority, and most importantly, the ROI of your SEO investment."
            },
            {
                question: "What makes your SEO approach different?",
                answer: "We focus on sustainable, white-hat SEO strategies that align with Google's guidelines. Our data-driven approach ensures every action we take is backed by research and analysis."
            }
        ]
    },
    "paid-advertising": {
        id: "paid-advertising",
        title: "PAID",
        titleHighlight: "ADVERTISING.",
        subtitle: "Performance Marketing",
        description: "Maximize ROI with precision-targeted PPC and social ad campaigns that convert visitors into customers.",
        heroImage: "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817877/Digital_Promotion_q5zfml.svg",
        stats: [
            { value: "5x", label: "Average ROAS" },
            { value: "40%", label: "Lower CPA" }
        ],
        services: [
            {
                id: 1,
                title: "Google Ads Management",
                description: "Strategic Google Ads campaigns including Search, Display, and Shopping to capture high-intent customers actively searching for your services.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&auto=format",
                technologies: ["Search Ads", "Display Ads", "Shopping Ads", "Remarketing"],
                stats: { projects: "180+", satisfaction: "97%" }
            },
            {
                id: 2,
                title: "Facebook & Instagram Ads",
                description: "Engaging social media advertising campaigns that reach your ideal audience with compelling visuals and precise targeting.",
                image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop&auto=format",
                technologies: ["Meta Ads", "Audience Targeting", "Creative Design", "A/B Testing"],
                stats: { projects: "220+", satisfaction: "98%" }
            },
            {
                id: 3,
                title: "LinkedIn Advertising",
                description: "B2B-focused LinkedIn campaigns that target decision-makers and professionals in your industry for lead generation.",
                image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=600&h=400&fit=crop&auto=format",
                technologies: ["Sponsored Content", "InMail Ads", "Lead Gen Forms", "Account Targeting"],
                stats: { projects: "90+", satisfaction: "96%" }
            },
            {
                id: 4,
                title: "Programmatic Advertising",
                description: "Automated, data-driven ad buying that reaches your audience across thousands of websites with precision targeting.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
                technologies: ["DSP Management", "Audience Targeting", "Creative Optimization", "Attribution"],
                stats: { projects: "60+", satisfaction: "95%" }
            },
            {
                id: 5,
                title: "Conversion Rate Optimization",
                description: "Landing page optimization and A/B testing to maximize the effectiveness of your ad spend and improve conversion rates.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
                technologies: ["A/B Testing", "Landing Pages", "Heatmaps", "User Analysis"],
                stats: { projects: "100+", satisfaction: "99%" }
            }
        ],
        journey: {
            title: "ADVERTISING",
            highlight: "JOURNEY.",
            description: "A results-driven approach to paid media that maximizes your ad spend.",
            steps: [
                {
                    number: "01",
                    title: "Account Audit",
                    description: "Deep dive into your existing campaigns to identify optimization opportunities and wasted spend.",
                    details: ["Campaign Analysis", "Audience Review", "Budget Assessment", "Competitor Analysis"]
                },
                {
                    number: "02",
                    title: "Strategy Development",
                    description: "Creating a comprehensive advertising strategy aligned with your business goals and budget.",
                    details: ["Goal Setting", "Channel Selection", "Audience Strategy", "Budget Planning"]
                },
                {
                    number: "03",
                    title: "Campaign Setup",
                    description: "Building high-performing campaigns with optimized structure, targeting, and creative assets.",
                    details: ["Campaign Structure", "Ad Creation", "Tracking Setup", "Landing Pages"]
                },
                {
                    number: "04",
                    title: "Launch & Monitor",
                    description: "Careful campaign launch with close monitoring to ensure optimal performance from day one.",
                    details: ["Campaign Launch", "Performance Monitoring", "Quick Adjustments", "Quality Checks"]
                },
                {
                    number: "05",
                    title: "Optimize & Scale",
                    description: "Continuous optimization based on data to improve performance and scale winning campaigns.",
                    details: ["A/B Testing", "Bid Optimization", "Audience Expansion", "Creative Testing"]
                },
                {
                    number: "06",
                    title: "Report & Refine",
                    description: "Detailed reporting and strategic recommendations for ongoing improvement.",
                    details: ["Performance Reports", "ROI Analysis", "Strategic Insights", "Future Planning"]
                }
            ]
        },
        faqs: [
            {
                question: "What's your minimum ad spend requirement?",
                answer: "We recommend a minimum monthly ad spend of $2,000 for most platforms to gather sufficient data and achieve meaningful results."
            },
            {
                question: "How quickly can I expect results from paid ads?",
                answer: "Unlike SEO, paid advertising can generate traffic immediately. However, optimization for best results typically takes 2-4 weeks of data collection and refinement."
            },
            {
                question: "Which advertising platform is best for my business?",
                answer: "It depends on your target audience and goals. Google Ads works well for high-intent searches, while Facebook/Instagram excels at awareness and B2C. We'll help you choose the right mix."
            },
            {
                question: "How do you measure advertising success?",
                answer: "We track key metrics including ROAS (Return on Ad Spend), CPA (Cost per Acquisition), conversion rates, and ultimately, the revenue generated from your campaigns."
            },
            {
                question: "Do you provide the creative assets?",
                answer: "Yes! Our team includes designers who create compelling ad creatives, landing pages, and copy optimized for conversion."
            }
        ]
    },
    "social-media": {
        id: "social-media",
        title: "SOCIAL",
        titleHighlight: "MEDIA.",
        subtitle: "Social Media Marketing",
        description: "Build community and engagement across all major platforms with strategic content and community management.",
        heroImage: "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Social_Media_Activity_qmsix9.svg",
        stats: [
            { value: "500K+", label: "Followers Generated" },
            { value: "10M+", label: "Engagement Actions" }
        ],
        services: [
            {
                id: 1,
                title: "Social Media Strategy",
                description: "Comprehensive social media strategies tailored to your brand, audience, and business objectives for maximum impact.",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&auto=format",
                technologies: ["Platform Strategy", "Audience Research", "Content Planning", "KPI Setting"],
                stats: { projects: "150+", satisfaction: "98%" }
            },
            {
                id: 2,
                title: "Content Creation",
                description: "Eye-catching visuals, engaging videos, and compelling copy that resonate with your audience and drive engagement.",
                image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop&auto=format",
                technologies: ["Graphics Design", "Video Production", "Copywriting", "UGC Curation"],
                stats: { projects: "300+", satisfaction: "99%" }
            },
            {
                id: 3,
                title: "Community Management",
                description: "Active engagement with your audience through comments, messages, and community building to foster brand loyalty.",
                image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop&auto=format",
                technologies: ["Response Management", "Crisis Handling", "Community Building", "Engagement Growth"],
                stats: { projects: "120+", satisfaction: "97%" }
            },
            {
                id: 4,
                title: "Influencer Marketing",
                description: "Strategic partnerships with influencers and creators to amplify your brand message and reach new audiences.",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format",
                technologies: ["Influencer Research", "Campaign Management", "Content Collaboration", "ROI Tracking"],
                stats: { projects: "80+", satisfaction: "96%" }
            },
            {
                id: 5,
                title: "Social Analytics",
                description: "Data-driven insights and reporting to measure performance and continuously improve your social media presence.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
                technologies: ["Performance Tracking", "Competitor Analysis", "Reporting", "Strategy Optimization"],
                stats: { projects: "200+", satisfaction: "98%" }
            }
        ],
        journey: {
            title: "SOCIAL MEDIA",
            highlight: "JOURNEY.",
            description: "Building your brand's social presence step by step.",
            steps: [
                {
                    number: "01",
                    title: "Brand Discovery",
                    description: "Understanding your brand voice, values, and target audience to create an authentic social presence.",
                    details: ["Brand Audit", "Audience Research", "Competitor Analysis", "Voice Development"]
                },
                {
                    number: "02",
                    title: "Strategy Development",
                    description: "Creating a comprehensive content and engagement strategy for each platform.",
                    details: ["Content Pillars", "Platform Strategy", "Content Calendar", "KPI Definition"]
                },
                {
                    number: "03",
                    title: "Content Creation",
                    description: "Developing high-quality content that engages your audience and reflects your brand.",
                    details: ["Visual Design", "Video Production", "Copywriting", "Content Approval"]
                },
                {
                    number: "04",
                    title: "Publishing & Scheduling",
                    description: "Strategic content publishing at optimal times for maximum reach and engagement.",
                    details: ["Content Scheduling", "Platform Optimization", "Hashtag Strategy", "Cross-posting"]
                },
                {
                    number: "05",
                    title: "Community Engagement",
                    description: "Active engagement with your audience to build relationships and foster brand loyalty.",
                    details: ["Response Management", "Proactive Engagement", "Community Building", "Reputation Management"]
                },
                {
                    number: "06",
                    title: "Analysis & Growth",
                    description: "Continuous analysis and optimization to grow your social presence.",
                    details: ["Performance Analysis", "Strategy Refinement", "Growth Tactics", "Trend Adoption"]
                }
            ]
        },
        faqs: [
            {
                question: "Which social media platforms should my business be on?",
                answer: "It depends on where your target audience spends their time. We'll help you identify the most impactful platforms for your business and create a tailored strategy for each."
            },
            {
                question: "How often should we post on social media?",
                answer: "Posting frequency varies by platform and industry. Generally, we recommend 3-7 times per week on Instagram, 1-2 times daily on Twitter, and 2-5 times per week on LinkedIn."
            },
            {
                question: "Do you handle negative comments and reviews?",
                answer: "Yes, our community management includes crisis management and response protocols for handling negative feedback professionally and constructively."
            },
            {
                question: "Can you help with influencer partnerships?",
                answer: "Absolutely! We identify relevant influencers, manage outreach and negotiations, and oversee campaign execution to ensure authentic partnerships that resonate with your audience."
            },
            {
                question: "How do you measure social media success?",
                answer: "We track engagement rates, follower growth, reach, website traffic from social, and conversions. Most importantly, we tie these metrics back to your business objectives."
            }
        ]
    },
    "content-marketing": {
        id: "content-marketing",
        title: "CONTENT",
        titleHighlight: "MARKETING.",
        subtitle: "Strategic Content Solutions",
        description: "Compelling storytelling that builds authority, trust, and drives meaningful engagement with your audience.",
        heroImage: "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817877/Creative_Content_Writer_nrybwy.svg",
        stats: [
            { value: "500+", label: "Articles Published" },
            { value: "200%", label: "Average Traffic Boost" }
        ],
        services: [
            {
                id: 1,
                title: "Content Strategy",
                description: "Data-driven content strategies that align with your business goals and resonate with your target audience.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format",
                technologies: ["Audience Research", "Content Planning", "Editorial Calendar", "Topic Clustering"],
                stats: { projects: "120+", satisfaction: "98%" }
            },
            {
                id: 2,
                title: "Blog & Article Writing",
                description: "SEO-optimized, engaging blog posts and articles that establish thought leadership and drive organic traffic.",
                image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop&auto=format",
                technologies: ["SEO Writing", "Research", "Editing", "Publishing"],
                stats: { projects: "500+", satisfaction: "99%" }
            },
            {
                id: 3,
                title: "Video Content",
                description: "Engaging video content from concept to production that captures attention and communicates your message effectively.",
                image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=400&fit=crop&auto=format",
                technologies: ["Scripting", "Production", "Editing", "Distribution"],
                stats: { projects: "80+", satisfaction: "97%" }
            },
            {
                id: 4,
                title: "Ebooks & Whitepapers",
                description: "In-depth, authoritative long-form content that positions you as an industry expert and generates qualified leads.",
                image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=400&fit=crop&auto=format",
                technologies: ["Research", "Writing", "Design", "Lead Generation"],
                stats: { projects: "60+", satisfaction: "98%" }
            },
            {
                id: 5,
                title: "Content Distribution",
                description: "Strategic content promotion across multiple channels to maximize reach and engagement with your target audience.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
                technologies: ["Social Promotion", "Email Distribution", "Syndication", "Paid Amplification"],
                stats: { projects: "150+", satisfaction: "96%" }
            }
        ],
        journey: {
            title: "CONTENT",
            highlight: "JOURNEY.",
            description: "Creating content that connects and converts.",
            steps: [
                {
                    number: "01",
                    title: "Content Audit",
                    description: "Analyzing your existing content to identify gaps, opportunities, and high-performing pieces to build upon.",
                    details: ["Content Inventory", "Performance Analysis", "Gap Analysis", "Competitor Review"]
                },
                {
                    number: "02",
                    title: "Strategy Development",
                    description: "Creating a comprehensive content strategy aligned with your business objectives.",
                    details: ["Goal Setting", "Audience Personas", "Content Pillars", "Channel Strategy"]
                },
                {
                    number: "03",
                    title: "Content Planning",
                    description: "Developing an editorial calendar with topics, formats, and publishing schedule.",
                    details: ["Topic Research", "Keyword Mapping", "Editorial Calendar", "Content Briefs"]
                },
                {
                    number: "04",
                    title: "Content Creation",
                    description: "Producing high-quality content that engages your audience and achieves your goals.",
                    details: ["Writing", "Design", "Video Production", "Quality Review"]
                },
                {
                    number: "05",
                    title: "Publishing & Distribution",
                    description: "Strategic publishing and promotion to maximize content reach and impact.",
                    details: ["SEO Optimization", "Multi-channel Publishing", "Social Promotion", "Email Distribution"]
                },
                {
                    number: "06",
                    title: "Measure & Optimize",
                    description: "Tracking performance and continuously improving your content strategy.",
                    details: ["Analytics Review", "Performance Reporting", "Content Updates", "Strategy Refinement"]
                }
            ]
        },
        faqs: [
            {
                question: "What types of content do you create?",
                answer: "We create a wide range of content including blog posts, articles, videos, infographics, ebooks, whitepapers, case studies, social media content, and more."
            },
            {
                question: "How do you ensure content quality?",
                answer: "Every piece goes through our rigorous quality process including research, writing, editing, and client review before publishing."
            },
            {
                question: "How often should we publish new content?",
                answer: "It depends on your goals and resources. We typically recommend 2-4 blog posts per month for consistent growth, but we'll create a schedule that works for you."
            },
            {
                question: "Can you write in our brand voice?",
                answer: "Absolutely! We take time to understand your brand voice and create detailed style guides to ensure all content sounds authentically like you."
            },
            {
                question: "How do you measure content success?",
                answer: "We track metrics like organic traffic, engagement, time on page, social shares, lead generation, and ultimately, the impact on your business goals."
            }
        ]
    },
    "email-marketing": {
        id: "email-marketing",
        title: "EMAIL",
        titleHighlight: "MARKETING.",
        subtitle: "Email Marketing Automation",
        description: "Personalized automation flows that nurture leads and convert subscribers into loyal customers.",
        heroImage: "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Chat_Via_Email_nwa7vz.svg",
        stats: [
            { value: "42%", label: "Average Open Rate" },
            { value: "3.5x", label: "ROI Improvement" }
        ],
        services: [
            {
                id: 1,
                title: "Email Strategy",
                description: "Comprehensive email marketing strategies that align with your customer journey and business objectives.",
                image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop&auto=format",
                technologies: ["Journey Mapping", "Segmentation", "Campaign Planning", "KPI Setting"],
                stats: { projects: "100+", satisfaction: "98%" }
            },
            {
                id: 2,
                title: "Marketing Automation",
                description: "Sophisticated automation flows that deliver the right message at the right time to nurture leads and drive conversions.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
                technologies: ["Drip Campaigns", "Trigger Emails", "Lead Scoring", "Behavioral Targeting"],
                stats: { projects: "150+", satisfaction: "99%" }
            },
            {
                id: 3,
                title: "Newsletter Design",
                description: "Beautiful, responsive email templates that engage subscribers and reflect your brand identity.",
                image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop&auto=format",
                technologies: ["Template Design", "Responsive Coding", "Brand Consistency", "A/B Testing"],
                stats: { projects: "200+", satisfaction: "97%" }
            },
            {
                id: 4,
                title: "List Management",
                description: "Strategic list building, segmentation, and hygiene to maximize deliverability and engagement.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
                technologies: ["List Building", "Segmentation", "Data Hygiene", "Compliance"],
                stats: { projects: "120+", satisfaction: "96%" }
            },
            {
                id: 5,
                title: "Performance Optimization",
                description: "Continuous testing and optimization to improve open rates, click-through rates, and conversions.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&auto=format",
                technologies: ["A/B Testing", "Subject Line Optimization", "Send Time Optimization", "Analytics"],
                stats: { projects: "180+", satisfaction: "98%" }
            }
        ],
        journey: {
            title: "EMAIL",
            highlight: "JOURNEY.",
            description: "Building email campaigns that connect and convert.",
            steps: [
                {
                    number: "01",
                    title: "Email Audit",
                    description: "Analyzing your current email performance, list health, and automation to identify opportunities.",
                    details: ["Performance Review", "List Analysis", "Automation Audit", "Competitor Research"]
                },
                {
                    number: "02",
                    title: "Strategy Development",
                    description: "Creating a comprehensive email strategy aligned with your customer journey.",
                    details: ["Journey Mapping", "Segmentation Strategy", "Campaign Calendar", "Automation Planning"]
                },
                {
                    number: "03",
                    title: "List Building",
                    description: "Growing your subscriber list with high-quality leads through strategic opt-in campaigns.",
                    details: ["Lead Magnets", "Opt-in Forms", "Landing Pages", "List Segmentation"]
                },
                {
                    number: "04",
                    title: "Campaign Development",
                    description: "Creating engaging email campaigns and automation flows that drive results.",
                    details: ["Content Creation", "Template Design", "Automation Setup", "Testing"]
                },
                {
                    number: "05",
                    title: "Launch & Monitor",
                    description: "Strategic campaign deployment with careful monitoring of deliverability and engagement.",
                    details: ["Campaign Launch", "Deliverability Check", "Performance Tracking", "Quick Optimization"]
                },
                {
                    number: "06",
                    title: "Optimize & Scale",
                    description: "Continuous testing and optimization to improve results and scale successful campaigns.",
                    details: ["A/B Testing", "Performance Analysis", "Strategy Refinement", "Campaign Scaling"]
                }
            ]
        },
        faqs: [
            {
                question: "What email platforms do you work with?",
                answer: "We work with all major email platforms including Mailchimp, Klaviyo, HubSpot, Constant Contact, and can recommend the best fit for your needs."
            },
            {
                question: "How do you improve email deliverability?",
                answer: "We focus on list hygiene, proper authentication (SPF, DKIM, DMARC), engagement optimization, and following email best practices to maximize deliverability."
            },
            {
                question: "What kind of automation can you set up?",
                answer: "We create welcome series, abandoned cart recovery, post-purchase flows, re-engagement campaigns, lead nurturing sequences, and custom automation based on your needs."
            },
            {
                question: "How often should we email our subscribers?",
                answer: "It depends on your audience and content. We typically recommend 1-4 emails per week, but we'll help you find the optimal frequency through testing."
            },
            {
                question: "Can you help grow our email list?",
                answer: "Absolutely! We create lead magnets, optimize opt-in forms, design landing pages, and implement strategies to grow your subscriber base with quality leads."
            }
        ]
    },
    "youtube-marketing": {
        id: "youtube-marketing",
        title: "YOUTUBE",
        titleHighlight: "MARKETING.",
        subtitle: "Video Marketing Excellence",
        description: "Increase visibility and engagement with strategic video content that captivates your audience on YouTube.",
        heroImage: "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/Video_Learning_nojkh4.svg",
        stats: [
            { value: "10M+", label: "Views Generated" },
            { value: "200%", label: "Channel Growth" }
        ],
        services: [
            {
                id: 1,
                title: "YouTube Channel Strategy",
                description: "Comprehensive YouTube strategies that grow your channel, increase subscribers, and build a loyal audience.",
                image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop&auto=format",
                technologies: ["Channel Optimization", "Content Strategy", "Audience Growth", "Brand Building"],
                stats: { projects: "80+", satisfaction: "98%" }
            },
            {
                id: 2,
                title: "Video Production",
                description: "Professional video production from concept to final edit that captures attention and communicates your message.",
                image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=400&fit=crop&auto=format",
                technologies: ["Scripting", "Filming", "Editing", "Post-Production"],
                stats: { projects: "150+", satisfaction: "99%" }
            },
            {
                id: 3,
                title: "YouTube SEO",
                description: "Optimizing your videos for YouTube search to increase discoverability and organic views.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
                technologies: ["Keyword Research", "Title Optimization", "Tags & Descriptions", "Thumbnail Design"],
                stats: { projects: "200+", satisfaction: "97%" }
            },
            {
                id: 4,
                title: "YouTube Advertising",
                description: "Strategic YouTube ad campaigns that reach your target audience with compelling video content.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&auto=format",
                technologies: ["TrueView Ads", "Bumper Ads", "Display Ads", "Remarketing"],
                stats: { projects: "100+", satisfaction: "96%" }
            },
            {
                id: 5,
                title: "Community Building",
                description: "Building and engaging your YouTube community through comments, community posts, and subscriber engagement.",
                image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop&auto=format",
                technologies: ["Comment Management", "Community Posts", "Live Streams", "Subscriber Engagement"],
                stats: { projects: "60+", satisfaction: "98%" }
            }
        ],
        journey: {
            title: "YOUTUBE",
            highlight: "JOURNEY.",
            description: "Building your YouTube presence step by step.",
            steps: [
                {
                    number: "01",
                    title: "Channel Audit",
                    description: "Comprehensive analysis of your current YouTube presence and opportunities for growth.",
                    details: ["Performance Review", "Content Analysis", "Competitor Research", "Opportunity Identification"]
                },
                {
                    number: "02",
                    title: "Strategy Development",
                    description: "Creating a content strategy that resonates with your audience and achieves your goals.",
                    details: ["Content Pillars", "Publishing Schedule", "Audience Strategy", "Growth Plan"]
                },
                {
                    number: "03",
                    title: "Channel Optimization",
                    description: "Optimizing your channel branding, keywords, and settings for maximum discoverability.",
                    details: ["Channel Branding", "Keyword Optimization", "Playlist Organization", "Channel Settings"]
                },
                {
                    number: "04",
                    title: "Content Production",
                    description: "Creating high-quality video content that engages your audience and builds your brand.",
                    details: ["Scripting", "Production", "Editing", "Thumbnail Design"]
                },
                {
                    number: "05",
                    title: "Publishing & Promotion",
                    description: "Strategic video publishing and promotion to maximize views and engagement.",
                    details: ["SEO Optimization", "Publishing", "Cross-promotion", "Community Posts"]
                },
                {
                    number: "06",
                    title: "Analyze & Grow",
                    description: "Continuous analysis and optimization to grow your channel and audience.",
                    details: ["Analytics Review", "Content Refinement", "Audience Growth", "Revenue Optimization"]
                }
            ]
        },
        faqs: [
            {
                question: "How often should we post on YouTube?",
                answer: "Consistency is key on YouTube. We typically recommend 1-4 videos per week depending on your capacity and content type. Quality is more important than quantity."
            },
            {
                question: "How long does it take to grow a YouTube channel?",
                answer: "YouTube growth is a long-term game. You might see initial traction in 3-6 months, but significant growth usually takes 12-24 months of consistent effort."
            },
            {
                question: "Do you handle video production?",
                answer: "Yes! We offer full video production services from concept development and scripting to filming, editing, and post-production."
            },
            {
                question: "Can you help with YouTube monetization?",
                answer: "Absolutely! We help channels reach monetization requirements and optimize for ad revenue, sponsorships, and other income streams."
            },
            {
                question: "What type of videos perform best on YouTube?",
                answer: "It depends on your niche, but generally tutorials, how-tos, reviews, and storytelling content perform well. We'll help you identify what works for your audience."
            }
        ]
    },
    "ai-automation": {
        id: "ai-automation",
        title: "AI &",
        titleHighlight: "AUTOMATION.",
        subtitle: "AI-Powered Solutions",
        description: "Automate repetitive tasks and unlock new possibilities with cutting-edge AI-powered tools and workflows.",
        heroImage: "https://res.cloudinary.com/de4kw1t2i/image/upload/v1768817876/AI_and_Data_Integration_o0cqqm.svg",
        stats: [
            { value: "70%", label: "Time Savings" },
            { value: "10x", label: "Efficiency Boost" }
        ],
        services: [
            {
                id: 1,
                title: "AI Chatbots & Assistants",
                description: "Intelligent conversational AI that handles customer inquiries, qualifies leads, and provides 24/7 support.",
                image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop&auto=format",
                technologies: ["ChatGPT", "Custom LLMs", "NLP", "Conversational AI"],
                stats: { projects: "50+", satisfaction: "98%" }
            },
            {
                id: 2,
                title: "Marketing Automation",
                description: "AI-powered marketing workflows that personalize customer experiences and optimize campaign performance.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
                technologies: ["Email Automation", "Lead Scoring", "Personalization", "Predictive Analytics"],
                stats: { projects: "80+", satisfaction: "97%" }
            },
            {
                id: 3,
                title: "AI Content Generation",
                description: "Leverage AI to scale content creation while maintaining quality and brand voice across all channels.",
                image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop&auto=format",
                technologies: ["GPT Models", "Image Generation", "Content Optimization", "Brand Voice"],
                stats: { projects: "100+", satisfaction: "96%" }
            },
            {
                id: 4,
                title: "Business Process Automation",
                description: "Streamline operations by automating repetitive tasks and workflows to increase efficiency and reduce errors.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
                technologies: ["Workflow Automation", "RPA", "Integration APIs", "Custom Solutions"],
                stats: { projects: "60+", satisfaction: "99%" }
            },
            {
                id: 5,
                title: "AI Analytics & Insights",
                description: "Advanced analytics powered by AI that uncover insights, predict trends, and guide strategic decisions.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&auto=format",
                technologies: ["Predictive Analytics", "Data Visualization", "Trend Analysis", "Reporting"],
                stats: { projects: "70+", satisfaction: "98%" }
            }
        ],
        journey: {
            title: "AI",
            highlight: "JOURNEY.",
            description: "Transforming your business with intelligent automation.",
            steps: [
                {
                    number: "01",
                    title: "Discovery & Assessment",
                    description: "Understanding your business processes and identifying opportunities for AI and automation.",
                    details: ["Process Mapping", "Pain Point Analysis", "Opportunity Identification", "ROI Assessment"]
                },
                {
                    number: "02",
                    title: "Strategy & Planning",
                    description: "Creating a comprehensive AI and automation strategy aligned with your business goals.",
                    details: ["Technology Selection", "Integration Planning", "Implementation Roadmap", "Resource Planning"]
                },
                {
                    number: "03",
                    title: "Design & Development",
                    description: "Building custom AI solutions and automation workflows tailored to your needs.",
                    details: ["Solution Design", "AI Model Training", "Workflow Building", "Integration Development"]
                },
                {
                    number: "04",
                    title: "Testing & Refinement",
                    description: "Rigorous testing and optimization to ensure solutions perform as expected.",
                    details: ["Quality Testing", "Performance Optimization", "User Testing", "Refinement"]
                },
                {
                    number: "05",
                    title: "Deployment & Training",
                    description: "Smooth deployment with comprehensive training for your team.",
                    details: ["Solution Launch", "Team Training", "Documentation", "Change Management"]
                },
                {
                    number: "06",
                    title: "Monitor & Evolve",
                    description: "Continuous monitoring and improvement as AI technology and your needs evolve.",
                    details: ["Performance Monitoring", "AI Model Updates", "Feature Enhancements", "Scaling"]
                }
            ]
        },
        faqs: [
            {
                question: "How can AI benefit my business?",
                answer: "AI can automate repetitive tasks, provide 24/7 customer support, personalize marketing, analyze data for insights, and much more—saving time and improving efficiency."
            },
            {
                question: "Is AI implementation expensive?",
                answer: "AI solutions range from affordable chatbots to complex custom systems. We'll help you find solutions that fit your budget and deliver strong ROI."
            },
            {
                question: "Will AI replace my employees?",
                answer: "AI is meant to augment your team, not replace them. It handles repetitive tasks so your team can focus on higher-value, creative work."
            },
            {
                question: "How long does AI implementation take?",
                answer: "Simple chatbots can be live in days, while complex automation projects may take 2-6 months. We'll provide accurate timelines based on your specific needs."
            },
            {
                question: "Do you provide ongoing support?",
                answer: "Yes! AI systems need ongoing monitoring and optimization. We offer support packages to ensure your solutions continue performing at their best."
            }
        ]
    }
};

export default servicesData;
