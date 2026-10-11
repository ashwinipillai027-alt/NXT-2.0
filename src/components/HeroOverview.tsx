import React from 'react';
import { Signal } from '../types/signal';
import { ShieldCheck, MessageSquare, Layers, Sparkles } from 'lucide-react';

interface HeroOverviewProps {
  signals: Signal[];
  onFilterQualified: () => void;
  qualifiedOnly: boolean;
}

export const HeroOverview: React.FC<HeroOverviewProps> = ({
  signals,
  onFilterQualified,
  qualifiedOnly,
}) => {
  const totalPosts = signals.reduce((acc, s) => acc + s.supportingPosts, 0);
  const qualifiedSignals = signals.filter((s) => s.qualityScore >= 0.75);
  const allCommunities = Array.from(new Set(signals.flatMap((s) => s.communities)));

  return (
    <section className="mb-8 pt-2">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#e7e5e0]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-[#516d00] font-instrument uppercase tracking-wider mb-2 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4d6700]" />
            Frontier Problem Discovery Engine
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-[#1b1c1a] tracking-tight">
            Discover emerging problems
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5f5e5e] font-instrument leading-relaxed">
            Qualified signals from online communities, helping you decide what to build next.
          </p>
        </div>

        {/* Executive summary metrics strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 shrink-0">
          <div className="bg-[#ffffff] border border-[#e7e5e0] rounded-lg p-3 sm:p-3.5 min-w-[125px]">
            <div className="flex items-center gap-1.5 text-xs text-[#737373] mb-1">
              <Layers className="w-3.5 h-3.5 text-[#5f5e5e]" />
              <span>Monitored</span>
            </div>
            <div className="text-xl sm:text-2xl font-instrument font-semibold text-[#1b1c1a] tabular-nums">
              {signals.length}
            </div>
            <div className="text-[11px] text-[#737373] mt-0.5">Problem clusters</div>
          </div>

          <button
            onClick={onFilterQualified}
            className={`text-left rounded-lg p-3 sm:p-3.5 min-w-[135px] transition-all cursor-pointer border ${
              qualifiedOnly
                ? 'bg-[#c8f169]/20 border-[#4d6700]'
                : 'bg-[#ffffff] border-[#e7e5e0] hover:border-[#757966]'
            }`}
          >
            <div className="flex items-center gap-1.5 text-xs text-[#4d6700] font-medium mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Qualified (≥0.75)</span>
            </div>
            <div className="text-xl sm:text-2xl font-instrument font-semibold text-[#1b1c1a] tabular-nums">
              {qualifiedSignals.length}
            </div>
            <div className="text-[11px] text-[#516d00] mt-0.5">
              {qualifiedOnly ? 'Filtering active' : 'Click to isolate'}
            </div>
          </button>

          <div className="bg-[#ffffff] border border-[#e7e5e0] rounded-lg p-3 sm:p-3.5 min-w-[125px]">
            <div className="flex items-center gap-1.5 text-xs text-[#737373] mb-1">
              <MessageSquare className="w-3.5 h-3.5 text-[#5f5e5e]" />
              <span>Posts Indexed</span>
            </div>
            <div className="text-xl sm:text-2xl font-instrument font-semibold text-[#1b1c1a] tabular-nums">
              {totalPosts}
            </div>
            <div className="text-[11px] text-[#737373] mt-0.5">Corroborating threads</div>
          </div>

          <div className="bg-[#ffffff] border border-[#e7e5e0] rounded-lg p-3 sm:p-3.5 min-w-[125px]">
            <div className="flex items-center gap-1.5 text-xs text-[#737373] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#5f5e5e]" />
              <span>Communities</span>
            </div>
            <div className="text-xl sm:text-2xl font-instrument font-semibold text-[#1b1c1a] tabular-nums">
              {allCommunities.length}
            </div>
            <div className="text-[11px] text-[#737373] mt-0.5">Subreddits & forums</div>
          </div>
        </div>
      </div>
    </section>
  );
};
