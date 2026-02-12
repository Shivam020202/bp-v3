import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const ThankYou = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-[#D4A574] rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-[#FBD9BF] rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#FBD9BF]/30 flex items-center justify-center animate-bounce-slow">
                        <FaCheckCircle className="text-6xl text-[#D4A574]" />
                    </div>
                </div>

                <h1
                    className="text-4xl md:text-5xl font-bold mb-6"
                    style={{ color: "#6B5744" }}
                >
                    Thank You!
                </h1>

                <p
                    className="text-lg md:text-xl mb-10 leading-relaxed"
                    style={{ color: "#8B7355" }}
                >
                    Your message has been successfully received. We appreciate you contacting us and will get back to you shortly.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{
                        background: "linear-gradient(135deg, #D4A574 0%, #C69563 100%)",
                    }}
                >
                    Back to Home
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;
