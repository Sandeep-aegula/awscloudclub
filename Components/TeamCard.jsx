// export default function TeamCard({ name, role, photo, linkedin }) {
//   return (
//     <div className="cloud-card p-6 text-center hover:shadow-lg transition-all group">
//       <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#C96969]/30 to-[#A14F4F]/30 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
//         {photo}
//       </div>
//       <h3 className="text-lg font-bold text-[#E8E8E8] mb-1">{name}</h3>
//       <p className="text-sm text-[#C96969] font-semibold mb-4">{role}</p>
//       <a
//         href={linkedin}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-flex items-center gap-2 px-4 py-2 bg-[#C96969]/20 text-[#E79C9C] rounded-full hover:bg-[#C96969] hover:text-white transition-colors font-medium text-sm"
//       >
//         💼 LinkedIn
//       </a>
//     </div>
//   );
// }
import { Linkedin } from 'lucide-react'; // Recommended: npm install lucide-react

export default function TeamCard({ name, role, photo, linkedin }) {
  return (
    <div className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-[#404040] to-transparent hover:from-[#FF9900]/50 hover:to-[#FF9900]/10 transition-all duration-500 shadow-2xl">
      {/* Inner Card */}
      <div className="bg-[#161E2D]/90 backdrop-blur-xl rounded-2xl p-8 text-center h-full flex flex-col items-center border border-white/5">
        
        {/* Profile Image Container with Glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FF9900]/20 rounded-full blur-xl group-hover:bg-[#FF9900]/40 transition-colors duration-500" />
          <div className="relative w-28 h-28 mx-auto bg-[#232F3E] border-2 border-[#404040] group-hover:border-[#FF9900] rounded-full flex items-center justify-center text-5xl overflow-hidden transition-all duration-500 group-hover:scale-105 shadow-inner">
             {photo}
          </div>
        </div>

        {/* Name & Role */}
        <div className="space-y-1 mb-6">
          <h3 className="text-xl font-extrabold text-[#FFFFFF] tracking-tight group-hover:text-[#FF9900] transition-colors">
            {name}
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-[#94A3B8] font-bold">
            {role}
          </p>
        </div>

        {/* Action Button */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 px-6 py-2.5 bg-[#232F3E] text-[#D4DADA] rounded-xl border border-[#404040] hover:border-[#FF9900] hover:bg-[#FF9900] hover:text-[#161E2D] transition-all duration-300 font-bold text-xs uppercase tracking-wider"
        >
          <Linkedin size={14} />
          Network
        </a>
      </div>
    </div>
  );
}