import { motion } from "framer-motion";

const logos = [
  {
    name: "OpenAI",
    url: "https://static.cdnlogo.com/logos/o/99/OpenAI.svg",
  },
  {
    name: "Gemini",
    url: "https://static.cdnlogo.com/logos/g/69/google-gemini.svg",
  },
  {
    name: "Claude",
    url: "https://static.cdnlogo.com/logos/c/69/claude.svg",
  },
  {
    name: "Meta",
    url: "https://static.cdnlogo.com/logos/m/16/meta-ai_800.png",
  },
  { name: "AWS", url: "https://static.cdnlogo.com/logos/a/10/aws_800.png" },
  {
    name: "Midjourney",
    url: "https://static.cdnlogo.com/logos/m/1/midjourney.svg",
  },
  {
    name: "Grok",
    url: "https://static.cdnlogo.com/logos/g/40/grok.svg",
  },
  {
    name: "Suno",
    url: "https://static.cdnlogo.com/logos/s/1/suno.svg",
  },
  {
    name: "Canva",
    url: "https://static.cdnlogo.com/logos/c/36/canva.png",
  },
  {
    name: "N8N",
    url: "https://static.cdnlogo.com/logos/n/75/n8n.svg",
  },
  {
    name: "NotebookLM",
    url: "https://static.cdnlogo.com/logos/n/33/notebooklm.svg",
  },
  {
    name: "Copilot",
    url: "https://static.cdnlogo.com/logos/c/99/copilot.svg",
  },
];

const AITechTicker = () => {
  return (
    <section className="py-8  border-b border-gray-800 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Loop heavily to ensure seamless infinite scroll */}
          {[...logos, ...logos, ...logos, ...logos].map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0  transition-opacity duration-300"
            >
              <img
                src={brand.url}
                alt={brand.name}
                className="h-10 w-auto max-w-36 object-contain transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AITechTicker;
