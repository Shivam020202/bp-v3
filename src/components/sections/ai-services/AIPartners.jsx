const partners = [
  "OpenAI",
  "IBM",
  "NVIDIA",
  "AWS",
  "Google Cloud",
  "Azure",
  "Vercel",
  "Databricks",
  "Snowflake",
  "MongoDB",
];

const AIPartners = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
            Ecosystem Partners
          </h3>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {partners.map((p, i) => (
              <span
                key={i}
                className="text-sm font-semibold text-gray-300 hover:text-black transition-colors cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPartners;
