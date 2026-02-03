import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
    FaPaperPlane,
    FaBriefcase,
    FaMapMarkerAlt,
    FaClock,
    FaFilter,
    FaSearch,
    FaTimes,
    FaChevronDown,
    FaLinkedin,
    FaStar,
    FaGraduationCap,
    FaLaptopCode,
    FaUsers,
    FaRocket,
    FaHeart,
    FaCheck,
    FaUpload,
    FaCloudUploadAlt,
} from "react-icons/fa";

const CareersPage = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("all");
    const [selectedLocation, setSelectedLocation] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [sortBy, setSortBy] = useState("newest");
    const [showFilters, setShowFilters] = useState(false);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        experience: "",
        coverLetter: "",
        resume: null,
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const formRef = useRef(null);

    // Job Postings Data
    const jobPostings = [
        {
            id: 1,
            title: "Senior UI/UX Designer",
            department: "Design",
            location: "Delhi NCR",
            type: "Full-time",
            experience: "4-6 Years",
            salary: "₹12-18 LPA",
            postedDate: "2026-01-28",
            description: "We're looking for a talented Senior UI/UX Designer to lead design initiatives and create exceptional user experiences for our clients.",
            responsibilities: [
                "Lead the design process from concept to final deliverables",
                "Create wireframes, prototypes, and high-fidelity designs",
                "Collaborate with development teams to ensure design integrity",
                "Conduct user research and usability testing",
                "Mentor junior designers and contribute to design systems",
            ],
            requirements: [
                "4+ years of experience in UI/UX design",
                "Proficiency in Figma, Adobe Creative Suite",
                "Strong portfolio showcasing web and mobile projects",
                "Excellent communication and presentation skills",
                "Experience with design systems and component libraries",
            ],
            benefits: ["Health Insurance", "Flexible Hours", "Remote Work Options", "Learning Budget", "Team Outings"],
            featured: true,
        },
        {
            id: 2,
            title: "Full Stack Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            experience: "3-5 Years",
            salary: "₹15-25 LPA",
            postedDate: "2026-01-25",
            description: "Join our engineering team to build scalable web applications using modern technologies and best practices.",
            responsibilities: [
                "Develop and maintain full-stack web applications",
                "Write clean, maintainable, and efficient code",
                "Collaborate with cross-functional teams",
                "Participate in code reviews and technical discussions",
                "Optimize applications for performance and scalability",
            ],
            requirements: [
                "3+ years of experience with React, Node.js",
                "Experience with databases (MongoDB, PostgreSQL)",
                "Familiarity with cloud services (AWS/GCP)",
                "Strong problem-solving skills",
                "Experience with Git and CI/CD pipelines",
            ],
            benefits: ["Health Insurance", "100% Remote", "Stock Options", "Learning Budget", "Wellness Programs"],
            featured: true,
        },
        {
            id: 3,
            title: "Digital Marketing Specialist",
            department: "Marketing",
            location: "Delhi NCR",
            type: "Full-time",
            experience: "2-4 Years",
            salary: "₹8-12 LPA",
            postedDate: "2026-01-20",
            description: "Drive digital marketing campaigns and strategies to help our clients grow their online presence.",
            responsibilities: [
                "Plan and execute digital marketing campaigns",
                "Manage social media accounts and content calendar",
                "Analyze campaign performance and optimize ROI",
                "Collaborate with content and design teams",
                "Stay updated with latest digital marketing trends",
            ],
            requirements: [
                "2+ years of digital marketing experience",
                "Experience with Google Ads, Facebook Ads",
                "Strong analytical and data-driven mindset",
                "Excellent written and verbal communication",
                "Certifications in Google Analytics, Ads preferred",
            ],
            benefits: ["Health Insurance", "Performance Bonus", "Team Events", "Career Growth", "Mentorship"],
            featured: false,
        },
        {
            id: 4,
            title: "Content Strategist",
            department: "Content",
            location: "Hybrid",
            type: "Full-time",
            experience: "3-5 Years",
            salary: "₹10-15 LPA",
            postedDate: "2026-01-18",
            description: "Create compelling content strategies that drive engagement and conversions for diverse clients.",
            responsibilities: [
                "Develop content strategies aligned with client goals",
                "Create editorial calendars and content roadmaps",
                "Write and edit high-quality content across platforms",
                "Conduct content audits and competitive analysis",
                "Collaborate with SEO and marketing teams",
            ],
            requirements: [
                "3+ years of content strategy experience",
                "Excellent writing and editing skills",
                "Understanding of SEO best practices",
                "Experience with content management systems",
                "Portfolio of successful content campaigns",
            ],
            benefits: ["Health Insurance", "Hybrid Work", "Creative Freedom", "Learning Budget", "Flexible Hours"],
            featured: false,
        },
        {
            id: 5,
            title: "SEO Specialist",
            department: "Marketing",
            location: "Delhi NCR",
            type: "Full-time",
            experience: "2-3 Years",
            salary: "₹6-10 LPA",
            postedDate: "2026-01-15",
            description: "Optimize websites and content for search engines to improve organic visibility and traffic.",
            responsibilities: [
                "Conduct keyword research and competitive analysis",
                "Implement on-page and technical SEO optimizations",
                "Build high-quality backlinks and manage link profiles",
                "Monitor rankings and traffic using analytics tools",
                "Create SEO reports and recommendations",
            ],
            requirements: [
                "2+ years of SEO experience",
                "Knowledge of SEO tools (Ahrefs, SEMrush, Moz)",
                "Understanding of technical SEO aspects",
                "Experience with Google Search Console, Analytics",
                "Strong analytical and problem-solving skills",
            ],
            benefits: ["Health Insurance", "Certifications", "Growth Path", "Team Outings", "Snacks & Beverages"],
            featured: false,
        },
        {
            id: 6,
            title: "Junior Graphic Designer",
            department: "Design",
            location: "Delhi NCR",
            type: "Full-time",
            experience: "0-2 Years",
            salary: "₹4-6 LPA",
            postedDate: "2026-01-12",
            description: "Start your design career with us! Create stunning visuals for digital and print media.",
            responsibilities: [
                "Create graphics for social media and marketing",
                "Design marketing collaterals and brand materials",
                "Assist senior designers on client projects",
                "Maintain brand consistency across deliverables",
                "Stay updated with design trends and tools",
            ],
            requirements: [
                "Degree in Design or related field",
                "Proficiency in Adobe Photoshop, Illustrator",
                "Strong visual design skills",
                "Understanding of color theory and typography",
                "Eagerness to learn and grow",
            ],
            benefits: ["Mentorship", "Learning Budget", "Team Culture", "Career Growth", "Health Insurance"],
            featured: false,
        },
        {
            id: 7,
            title: "Project Manager",
            department: "Operations",
            location: "Hybrid",
            type: "Full-time",
            experience: "4-6 Years",
            salary: "₹12-18 LPA",
            postedDate: "2026-01-10",
            description: "Lead project delivery and ensure client satisfaction through effective project management.",
            responsibilities: [
                "Manage multiple client projects simultaneously",
                "Coordinate between teams and stakeholders",
                "Track project timelines, budgets, and deliverables",
                "Identify and mitigate project risks",
                "Ensure high-quality deliverables and client satisfaction",
            ],
            requirements: [
                "4+ years of project management experience",
                "Experience with agile methodologies",
                "Strong communication and leadership skills",
                "Proficiency in project management tools",
                "PMP certification is a plus",
            ],
            benefits: ["Health Insurance", "Leadership Role", "Hybrid Work", "Performance Bonus", "Team Events"],
            featured: false,
        },
        {
            id: 8,
            title: "Video Editor & Motion Designer",
            department: "Design",
            location: "Remote",
            type: "Contract",
            experience: "2-4 Years",
            salary: "₹8-12 LPA",
            postedDate: "2026-01-08",
            description: "Create engaging video content and motion graphics for our diverse client portfolio.",
            responsibilities: [
                "Edit video content for various platforms",
                "Create motion graphics and animations",
                "Collaborate with creative teams on concepts",
                "Manage video production workflow",
                "Stay updated with video trends and techniques",
            ],
            requirements: [
                "2+ years of video editing experience",
                "Proficiency in Adobe Premiere, After Effects",
                "Strong portfolio of video and motion work",
                "Understanding of storytelling principles",
                "Knowledge of 3D animation is a plus",
            ],
            benefits: ["Remote Work", "Creative Freedom", "Flexible Hours", "Project Variety", "Skill Development"],
            featured: false,
        },
    ];

    // Filter and Sort Logic
    const departments = ["all", ...new Set(jobPostings.map((job) => job.department))];
    const locations = ["all", ...new Set(jobPostings.map((job) => job.location))];
    const types = ["all", ...new Set(jobPostings.map((job) => job.type))];

    const filteredJobs = jobPostings
        .filter((job) => {
            const matchesSearch =
                job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                job.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
            const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
            const matchesType = selectedType === "all" || job.type === selectedType;
            return matchesSearch && matchesDepartment && matchesLocation && matchesType;
        })
        .sort((a, b) => {
            if (sortBy === "newest") return new Date(b.postedDate) - new Date(a.postedDate);
            if (sortBy === "oldest") return new Date(a.postedDate) - new Date(b.postedDate);
            if (sortBy === "title") return a.title.localeCompare(b.title);
            return 0;
        });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setFormSubmitted(true);
        setTimeout(() => {
            setShowApplicationForm(false);
            setFormSubmitted(false);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                linkedin: "",
                portfolio: "",
                experience: "",
                coverLetter: "",
                resume: null,
            });
        }, 3000);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
        if (diff === 0) return "Today";
        if (diff === 1) return "Yesterday";
        if (diff < 7) return `${diff} days ago`;
        return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    };

    // Scroll to form when opening
    useEffect(() => {
        if (showApplicationForm && formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [showApplicationForm]);

    const perks = [
        { icon: <FaHeart />, title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs" },
        { icon: <FaRocket />, title: "Career Growth", desc: "Clear growth paths and continuous learning opportunities" },
        { icon: <FaLaptopCode />, title: "Remote Flexibility", desc: "Work from anywhere with flexible schedules" },
        { icon: <FaUsers />, title: "Amazing Culture", desc: "Collaborative environment with fun team activities" },
        { icon: <FaGraduationCap />, title: "Learning Budget", desc: "Annual budget for courses and certifications" },
        { icon: <FaStar />, title: "Recognition", desc: "Performance bonuses and employee appreciation" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Team Background */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                        alt="Team working together"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-[1] overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
                        style={{ background: "radial-gradient(circle, #C4A484 0%, transparent 70%)" }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.15, 0.1],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
                        style={{ background: "radial-gradient(circle, #C4A484 0%, transparent 70%)" }}
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.15, 0.1, 0.15],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 pt-10 text-center text-white relative z-10">
                    {/* <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 py-2 px-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-md font-mono text-xs uppercase tracking-[0.2em] mb-6"
                    >
                        <FaBriefcase className="text-[#C4A484]" />
                        Join Our Team
                    </motion.span> */}

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-[0.9]"
                    >
                        BUILD YOUR <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                            CAREER WITH US.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg md:text-md text-gray-200 max-w-2xl mx-auto leading-relaxed font-light mb-6"
                    >
                        Join a team of passionate innovators, creators, and strategists. We're always looking for talented individuals who are ready to make an impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#openings"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C4A484] text-white rounded-full text-sm font-semibold hover:bg-[#b39474] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#C4A484]/20"
                        >
                            <span>View Open Positions</span>
                            <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
                        </a>
                        <a
                            href="#perks"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-all"
                        >
                            <span>Why Join Us?</span>
                        </a>
                    </motion.div>

                    {/* Stats Row */}

                </div>


            </section>

            {/* Why Join Us / Perks Section */}
            <section id="perks" className="py-20 bg-[#FDF8F3]">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                            Benefits & Perks
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
                            WHY JOIN <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                                BRANDING PIONEERS?
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {perks.map((perk, idx) => (
                            <motion.div
                                key={idx}
                                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#C4A484]/30 hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-14 h-14 bg-[#FDF8F3] rounded-xl flex items-center justify-center text-[#C4A484] text-2xl mb-5 group-hover:bg-[#C4A484] group-hover:text-white transition-all duration-300">
                                    {perk.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{perk.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <section id="openings" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4 block">
                            Career Opportunities
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
                            OPEN <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                                POSITIONS.
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Find your perfect role and become part of our growing team.
                        </p>
                    </motion.div>

                    {/* Search and Filters */}
                    <div className="max-w-5xl mx-auto mb-10">
                        {/* Search Bar */}
                        <motion.div
                            className="relative mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search jobs by title, skills, or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 rounded-xl bg-[#F9F9F9] border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all text-gray-800"
                            />
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-600 transition-all"
                            >
                                <FaFilter />
                                Filters
                            </button>
                        </motion.div>

                        {/* Filter Options */}
                        <AnimatePresence>
                            {showFilters && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="bg-[#F9F9F9] p-6 rounded-xl border border-gray-200 mb-6">
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                            {/* Department Filter */}
                                            <div>
                                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2 block">
                                                    Department
                                                </label>
                                                <select
                                                    value={selectedDepartment}
                                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] text-sm"
                                                >
                                                    {departments.map((dept) => (
                                                        <option key={dept} value={dept}>
                                                            {dept === "all" ? "All Departments" : dept}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Location Filter */}
                                            <div>
                                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2 block">
                                                    Location
                                                </label>
                                                <select
                                                    value={selectedLocation}
                                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] text-sm"
                                                >
                                                    {locations.map((loc) => (
                                                        <option key={loc} value={loc}>
                                                            {loc === "all" ? "All Locations" : loc}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Type Filter */}
                                            <div>
                                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2 block">
                                                    Job Type
                                                </label>
                                                <select
                                                    value={selectedType}
                                                    onChange={(e) => setSelectedType(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] text-sm"
                                                >
                                                    {types.map((type) => (
                                                        <option key={type} value={type}>
                                                            {type === "all" ? "All Types" : type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Sort By */}
                                            <div>
                                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2 block">
                                                    Sort By
                                                </label>
                                                <select
                                                    value={sortBy}
                                                    onChange={(e) => setSortBy(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] text-sm"
                                                >
                                                    <option value="newest">Newest First</option>
                                                    <option value="oldest">Oldest First</option>
                                                    <option value="title">Title A-Z</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Clear Filters */}
                                        <button
                                            onClick={() => {
                                                setSelectedDepartment("all");
                                                setSelectedLocation("all");
                                                setSelectedType("all");
                                                setSortBy("newest");
                                                setSearchQuery("");
                                            }}
                                            className="mt-4 text-sm text-[#C4A484] hover:underline"
                                        >
                                            Clear All Filters
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Results Count */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-gray-600 text-sm">
                                Showing <span className="font-bold text-gray-900">{filteredJobs.length}</span> positions
                            </p>
                            {(selectedDepartment !== "all" || selectedLocation !== "all" || selectedType !== "all" || searchQuery) && (
                                <div className="flex flex-wrap gap-2">
                                    {selectedDepartment !== "all" && (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#C4A484]/10 text-[#C4A484] text-xs rounded-full">
                                            {selectedDepartment}
                                            <FaTimes className="cursor-pointer" onClick={() => setSelectedDepartment("all")} />
                                        </span>
                                    )}
                                    {selectedLocation !== "all" && (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#C4A484]/10 text-[#C4A484] text-xs rounded-full">
                                            {selectedLocation}
                                            <FaTimes className="cursor-pointer" onClick={() => setSelectedLocation("all")} />
                                        </span>
                                    )}
                                    {selectedType !== "all" && (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#C4A484]/10 text-[#C4A484] text-xs rounded-full">
                                            {selectedType}
                                            <FaTimes className="cursor-pointer" onClick={() => setSelectedType("all")} />
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Job Cards */}
                    <div className="max-w-5xl mx-auto space-y-4">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job, idx) => (
                                <motion.div
                                    key={job.id}
                                    className={`group relative bg-white border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer ${job.featured ? "border-[#C4A484] shadow-lg" : "border-gray-200"
                                        }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setSelectedJob(job)}
                                    whileHover={{ x: 5 }}
                                >
                                    {job.featured && (
                                        <span className="absolute -top-3 left-6 px-3 py-1 bg-[#C4A484] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                                            Featured
                                        </span>
                                    )}

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#C4A484] transition-colors">
                                                    {job.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full">
                                                    <FaBriefcase className="text-[#C4A484]" />
                                                    {job.department}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full">
                                                    <FaMapMarkerAlt className="text-[#C4A484]" />
                                                    {job.location}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full">
                                                    <FaClock className="text-[#C4A484]" />
                                                    {job.type}
                                                </span>
                                                <span className="text-xs text-gray-400">Posted {formatDate(job.postedDate)}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="text-right hidden sm:block">
                                                <div className="text-lg font-bold text-[#C4A484]">{job.salary}</div>
                                                <div className="text-xs text-gray-500">{job.experience}</div>
                                            </div>
                                            <motion.button
                                                className="px-6 py-3 bg-black text-white text-sm font-semibold rounded-xl hover:bg-[#C4A484] transition-colors whitespace-nowrap"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedJob(job);
                                                }}
                                            >
                                                View Details
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                className="text-center py-16"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
                                <p className="text-gray-600">Try adjusting your filters or search query.</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Job Detail Modal */}
            <AnimatePresence>
                {selectedJob && !showApplicationForm && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedJob(null)}
                    >
                        <motion.div
                            className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-3xl z-10">
                                <button
                                    onClick={() => setSelectedJob(null)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <FaTimes className="text-gray-600" />
                                </button>

                                {selectedJob.featured && (
                                    <span className="inline-block px-3 py-1 bg-[#C4A484]/10 text-[#C4A484] text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                                        Featured Position
                                    </span>
                                )}

                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{selectedJob.title}</h2>

                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                    <span className="inline-flex items-center gap-1.5">
                                        <FaBriefcase className="text-[#C4A484]" />
                                        {selectedJob.department}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <FaMapMarkerAlt className="text-[#C4A484]" />
                                        {selectedJob.location}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <FaClock className="text-[#C4A484]" />
                                        {selectedJob.type}
                                    </span>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 space-y-8">
                                {/* Salary & Experience */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-[#FDF8F3] p-4 rounded-xl">
                                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Salary Range</div>
                                        <div className="text-xl font-bold text-[#C4A484]">{selectedJob.salary}</div>
                                    </div>
                                    <div className="bg-[#FDF8F3] p-4 rounded-xl">
                                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Experience Required</div>
                                        <div className="text-xl font-bold text-gray-900">{selectedJob.experience}</div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">About This Role</h3>
                                    <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                                </div>

                                {/* Responsibilities */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Key Responsibilities</h3>
                                    <ul className="space-y-2">
                                        {selectedJob.responsibilities.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                                                <FaCheck className="text-[#C4A484] mt-1 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Requirements */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Requirements</h3>
                                    <ul className="space-y-2">
                                        {selectedJob.requirements.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                                                <FaCheck className="text-[#C4A484] mt-1 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Benefits */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits & Perks</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedJob.benefits.map((benefit, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-[#FDF8F3] text-gray-700 text-sm rounded-full"
                                            >
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Apply Button */}
                                <div className="pt-4 border-t border-gray-100">
                                    <button
                                        onClick={() => {
                                            setShowApplicationForm(true);
                                        }}
                                        className="w-full py-4 bg-[#C4A484] text-white font-bold rounded-xl hover:bg-[#b39474] transition-colors flex items-center justify-center gap-3"
                                    >
                                        <span>Apply for This Position</span>
                                        <FaPaperPlane />
                                    </button>
                                    <p className="text-center text-gray-500 text-sm mt-3">
                                        Or apply via{" "}
                                        <a href="#" className="text-[#0077B5] hover:underline inline-flex items-center gap-1">
                                            <FaLinkedin /> LinkedIn
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Application Form Section */}
            <AnimatePresence>
                {showApplicationForm && selectedJob && (
                    <motion.section
                        ref={formRef}
                        id="application-form"
                        className="fixed inset-0 z-50 bg-white overflow-y-auto"
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <div className="min-h-screen py-12">
                            <div className="container mx-auto px-6 max-w-3xl">
                                {/* Close Button */}
                                <button
                                    onClick={() => {
                                        setShowApplicationForm(false);
                                        setSelectedJob(null);
                                    }}
                                    className="fixed top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10 transition-colors"
                                >
                                    <FaTimes className="text-gray-600 text-lg" />
                                </button>

                                {/* Form Header */}
                                <motion.div
                                    className="text-center mb-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 block">
                                        Apply Now
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-[0.9] mb-4">
                                        APPLICATION FOR <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] via-[#d4b896] to-[#C4A484] italic font-serif">
                                            {selectedJob.title.toUpperCase()}
                                        </span>
                                    </h2>
                                    <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-gray-500">
                                        <span className="inline-flex items-center gap-1.5">
                                            <FaBriefcase className="text-[#C4A484]" />
                                            {selectedJob.department}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <FaMapMarkerAlt className="text-[#C4A484]" />
                                            {selectedJob.location}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Success State */}
                                <AnimatePresence>
                                    {formSubmitted && (
                                        <motion.div
                                            className="text-center py-20"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <motion.div
                                                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", delay: 0.2 }}
                                            >
                                                <FaCheck className="text-green-600 text-4xl" />
                                            </motion.div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                                            <p className="text-gray-600 max-w-md mx-auto">
                                                Thank you for your interest in joining Branding Pioneers. We'll review your application and get back to you within 5-7 business days.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Application Form */}
                                {!formSubmitted && (
                                    <motion.form
                                        className="space-y-6 bg-[#F9F9F9] p-8 md:p-10 rounded-3xl border border-gray-100"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        onSubmit={handleSubmit}
                                    >
                                        {/* Personal Information */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-700">First Name *</label>
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="John"
                                                        className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-700">Last Name *</label>
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="Doe"
                                                        className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contact Details */}
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="+91 98765 43210"
                                                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Professional Links */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">Professional Links</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-700">LinkedIn Profile</label>
                                                    <input
                                                        type="url"
                                                        name="linkedin"
                                                        value={formData.linkedin}
                                                        onChange={handleInputChange}
                                                        placeholder="https://linkedin.com/in/yourprofile"
                                                        className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-700">Portfolio / Website</label>
                                                    <input
                                                        type="url"
                                                        name="portfolio"
                                                        value={formData.portfolio}
                                                        onChange={handleInputChange}
                                                        placeholder="https://yourportfolio.com"
                                                        className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Experience */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Years of Experience *</label>
                                            <select
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all"
                                            >
                                                <option value="">Select experience level</option>
                                                <option value="0-1">0-1 Years (Fresher)</option>
                                                <option value="1-2">1-2 Years</option>
                                                <option value="2-4">2-4 Years</option>
                                                <option value="4-6">4-6 Years</option>
                                                <option value="6-10">6-10 Years</option>
                                                <option value="10+">10+ Years</option>
                                            </select>
                                        </div>

                                        {/* Resume Upload */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Resume / CV *</label>
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    name="resume"
                                                    onChange={handleFileChange}
                                                    accept=".pdf,.doc,.docx"
                                                    required
                                                    className="sr-only"
                                                    id="resume-upload"
                                                />
                                                <label
                                                    htmlFor="resume-upload"
                                                    className="flex items-center justify-center gap-3 w-full px-5 py-6 rounded-xl bg-white border-2 border-dashed border-gray-300 hover:border-[#C4A484] cursor-pointer transition-all"
                                                >
                                                    <FaCloudUploadAlt className="text-2xl text-[#C4A484]" />
                                                    <div>
                                                        {formData.resume ? (
                                                            <span className="text-gray-700 font-medium">{formData.resume.name}</span>
                                                        ) : (
                                                            <>
                                                                <span className="text-gray-700 font-medium">Upload your resume</span>
                                                                <span className="text-gray-500 text-sm block">PDF, DOC, DOCX (Max 5MB)</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Cover Letter */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Cover Letter</label>
                                            <textarea
                                                name="coverLetter"
                                                value={formData.coverLetter}
                                                onChange={handleInputChange}
                                                rows="5"
                                                placeholder="Tell us why you're the perfect fit for this role..."
                                                className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#C4A484] focus:ring-1 focus:ring-[#C4A484] transition-all resize-none"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-[#C4A484] transition-colors flex items-center justify-center gap-3 group"
                                        >
                                            <span>Submit Application</span>
                                            <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                                        </button>

                                        <p className="text-center text-gray-500 text-sm">
                                            By submitting, you agree to our{" "}
                                            <a href="#" className="text-[#C4A484] hover:underline">
                                                Privacy Policy
                                            </a>{" "}
                                            and{" "}
                                            <a href="#" className="text-[#C4A484] hover:underline">
                                                Terms of Service
                                            </a>
                                        </p>
                                    </motion.form>
                                )}
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "radial-gradient(circle at 2px 2px, #C4A484 1px, transparent 0)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
                            DON'T SEE THE RIGHT FIT?
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            We're always on the lookout for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:careers@brandingpioneers.com"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C4A484] text-white font-semibold rounded-full hover:bg-[#b39474] transition-all hover:scale-105"
                            >
                                <FaPaperPlane />
                                Send Your Resume
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                            >
                                <FaLinkedin />
                                Follow on LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
