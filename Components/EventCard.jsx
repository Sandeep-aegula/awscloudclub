export default function EventCard({ title, date, description, tag, cta = 'Learn More' }) {
  return (
    <div className="cloud-card w-full max-w-[340px] min-h-[280px] p-6 rounded-[20px] hover:shadow-lg transition-all group flex flex-col justify-between">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">{title}</h3>
          <p className="text-sm text-[#FF9900] font-semibold">{date}</p>
        </div>
        {tag && (
          <span className="px-3 py-1 bg-[#FF9900]/20 text-[#FFB333] text-xs font-semibold rounded-full whitespace-nowrap">
            {tag}
          </span>
        )}
      </div>
      <p className="text-[#D0D5DD] mb-4 line-clamp-3">{description}</p>
      <button className="text-[#FF9900] font-semibold hover:text-[#FFB333] transition-colors inline-flex items-center gap-2 group">
        {cta}
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  );
}
