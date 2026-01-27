import ContactHero from "../components/sections/ContactHero";
import ContactFormSection from "../components/sections/ContactFormSection";
import ProcessSteps from "../components/sections/ProcessSteps";
import ClientSuccessSection from "../components/sections/ClientSuccessSection";
import FAQSection from "../components/sections/FAQSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ContactHero />
      <ContactFormSection />
      <ClientSuccessSection />
      {/* Background Decorative Elements for lower sections if needed */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-[70vh] right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl" />
      </div>
      <ProcessSteps />
      <FAQSection />
    </div>
  );
};

export default Contact;
