export default function TeamCard({ name, role, photo, linkedin }) {
  return (
    <div className="cloud-card p-6 text-center hover:shadow-lg transition-all group">
      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#C96969]/30 to-[#A14F4F]/30 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
        {photo}
      </div>
      <h3 className="text-lg font-bold text-[#E8E8E8] mb-1">{name}</h3>
      <p className="text-sm text-[#C96969] font-semibold mb-4">{role}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#C96969]/20 text-[#E79C9C] rounded-full hover:bg-[#C96969] hover:text-white transition-colors font-medium text-sm"
      >
        💼 LinkedIn
      </a>
    </div>
  );
}
