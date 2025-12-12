export default function EventCard({ title, date, description, tag, cta = 'Learn More' }) {
  return (
    <div className="cloud-card p-6 hover:shadow-lg transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#E8E8E8] mb-2">{title}</h3>
          <p className="text-sm text-[#C96969] font-semibold">{date}</p>
        </div>
        {tag && (
          <span className="px-3 py-1 bg-[#C96969]/20 text-[#E79C9C] text-xs font-semibold rounded-full whitespace-nowrap">
            {tag}
          </span>
        )}
      </div>
      <p className="text-[#B0B0B0] mb-4 line-clamp-3">{description}</p>
      <button className="text-[#C96969] font-semibold hover:text-[#E79C9C] transition-colors inline-flex items-center gap-2 group">
        {cta}
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  );
}
