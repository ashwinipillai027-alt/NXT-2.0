import React from 'react';
import { Signal, TAXONOMY_CONFIG } from '../types/signal';
import { ArrowUpRight, Bookmark, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

interface SignalCardProps {
  signal: Signal;
  onSelect: (signal: Signal) => void;
  isSaved: boolean;
  onToggleSave: (signalId: string) => void;
}

export const SignalCard: React.FC<SignalCardProps> = ({
  signal,
  onSelect,
  isSaved,
  onToggleSave,
}) => {
  const taxonomy = TAXONOMY_CONFIG[signal.taxonomyCategory] || TAXONOMY_CONFIG.sentiment;
  const isQualified = signal.qualityScore >= 0.75;

  return (
    <article
      onClick={() => onSelect(signal)}
      className="group relative rounded-xl border border-[#e7e5e0] bg-[#ffffff] p-5 sm:p-6 transition-all duration-200 hover:border-[#1b1c1a] hover:shadow-xs flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Top meta strip: Taxonomy category chip + Save icon */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className="text-[11px] font-instrument font-semibold px-2 py-0.5 rounded-[4px] tracking-wide"
              style={{ backgroundColor: taxonomy.bg, color: taxonomy.text }}
            >
              {signal.theme}
            </span>
            {signal.acceleration && (
              <span className="text-[11px] font-mono tabular-nums text-[#5f5e5e] flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3 text-[#4d6700]" />
                {signal.acceleration}
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(signal.id);
            }}
            title={isSaved ? 'Remove from shortlist' : 'Save to shortlist'}
            className="p-1.5 text-[#737373] hover:text-[#1b1c1a] rounded transition-colors"
          >
            <Bookmark
              className={`w-4 h-4 ${isSaved ? 'fill-[#1b1c1a] text-[#1b1c1a]' : ''}`}
            />
          </button>
        </div>

        {/* Primary Editorial Title */}
        <h3 className="font-editorial text-xl sm:text-[1.35rem] font-medium text-[#1b1c1a] leading-snug mb-2.5 group-hover:text-[#4d6700] transition-colors">
          {signal.title}
        </h3>

        {/* Executive summary paragraph */}
        <p className="text-xs sm:text-sm text-[#5f5e5e] font-instrument leading-relaxed line-clamp-2 mb-4">
          {signal.summary}
        </p>

        {/* Unboxed metadata with typographic separators - strictly zero-pill */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#737373] font-instrument mb-4">
          <span className="font-medium text-[#1b1c1a] capitalize">
            {signal.communities.join(', ')}
          </span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums font-mono">💬 {signal.supportingPosts} posts</span>
          <span aria-hidden="true">·</span>
          <span>{signal.timePeriod}</span>
        </div>

        {/* Opportunity teaser block */}
        <div className="bg-[#faf9f5] border border-[#e7e5e0] rounded-lg p-3 mb-5">
          <div className="flex items-center gap-1.5 text-[11px] font-instrument font-semibold text-[#1b1c1a] mb-1">
            <Sparkles className="w-3 h-3 text-[#4d6700]" />
            <span>What to Build:</span>
          </div>
          <p className="text-xs text-[#444938] font-instrument line-clamp-2 leading-relaxed">
            {signal.marketOpportunity.whatToBuild}
          </p>
        </div>
      </div>

      {/* Footer telemetry & actions */}
      <div className="pt-3 border-t border-[#e7e5e0] flex items-center justify-between gap-3 text-xs">
        {/* Silhouette score readout */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-[#737373] font-instrument">Quality</span>
          <span
            className={`font-mono tabular-nums font-bold text-sm ${
              isQualified ? 'text-[#4d6700]' : 'text-[#ba1a1a]'
            }`}
          >
            {signal.qualityScore.toFixed(2)}
          </span>
          <span className="text-[11px] text-[#737373] hidden sm:inline">
            ({isQualified ? 'Above threshold' : 'Monitoring'})
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={signal.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-0.5 text-[#5f5e5e] hover:text-[#1b1c1a] underline-offset-2 hover:underline transition-colors"
          >
            <span>Thread</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <span
            className="inline-flex items-center gap-1 font-medium text-[#1b1c1a] group-hover:translate-x-0.5 transition-transform"
          >
            <span>Dossier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
