export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="cloud-card p-8 text-center group">
      <div className="w-16 h-16 bg-[#C96969]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#2E2E2E]">{title}</h3>
      <p className="text-[#444444]">{description}</p>
    </div>
  );
}
