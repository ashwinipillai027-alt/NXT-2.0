import React, { useState } from 'react';
import { Signal, TAXONOMY_CONFIG } from '../types/signal';
import { Sparkles, ArrowRight, Layers, Info } from 'lucide-react';

interface SignalClusterMatrixProps {
  signals: Signal[];
  onSelect: (signal: Signal) => void;
  onOpenMethodology: () => void;
}

export const SignalClusterMatrix: React.FC<SignalClusterMatrixProps> = ({
  signals,
  onSelect,
  onOpenMethodology,
}) => {
  const [hoveredSignal, setHoveredSignal] = useState<Signal | null>(null);

  // Scalers:
  // X: Posts volume (0 to 65)
  // Y: Silhouette Score (0.65 to 0.95)
  const minPosts = 0;
  const maxPosts = 65;
  const minScore = 0.65;
  const maxScore = 0.95;

  const getCoordinates = (posts: number, score: number) => {
    const xPct = Math.min(Math.max(((posts - minPosts) / (maxPosts - minPosts)) * 100, 8), 92);
    // Y is inverted in SVG/DOM (top is 0)
    const yPct = Math.min(Math.max((1 - (score - minScore) / (maxScore - minScore)) * 100, 8), 90);
    return { x: xPct, y: yPct };
  };

  // Threshold Y line: score = 0.75
  const thresholdY = (1 - (0.75 - minScore) / (maxScore - minScore)) * 100;

  return (
    <div className="border border-[#e7e5e0] rounded-xl bg-[#ffffff] p-5 sm:p-7 shadow-2xs">
      {/* Title & Legend Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#e7e5e0]">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#516d00] font-instrument uppercase tracking-wider font-semibold">
            <Layers className="w-3.5 h-3.5 text-[#4d6700]" />
            <span>Semantic Embedding Space</span>
          </div>
          <h2 className="font-editorial text-2xl font-medium text-[#1b1c1a] mt-0.5">
            Silhouette Coherence vs. Post Volume Matrix
          </h2>
          <p className="text-xs text-[#5f5e5e] font-instrument mt-1">
            Signals plotted by cluster silhouette score against community frequency. Hover or click to inspect.
          </p>
        </div>

        <button
          onClick={onOpenMethodology}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#1b1c1a] bg-[#efeeea] hover:bg-[#e3e2df] rounded-lg transition-colors cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 text-[#5f5e5e]" />
          <span>Why 0.75 Threshold?</span>
        </button>
      </div>

      {/* Main Scatter View Container */}
      <div className="relative mt-6 h-[460px] sm:h-[520px] w-full bg-[#faf9f5] border border-[#e7e5e0] rounded-lg overflow-hidden select-none">
        {/* Subtle grid guidelines */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none opacity-40">
          <div className="border-r border-b border-[#e7e5e0]" />
          <div className="border-r border-b border-[#e7e5e0]" />
          <div className="border-r border-b border-[#e7e5e0]" />
          <div className="border-b border-[#e7e5e0]" />
          <div className="border-r border-b border-[#e7e5e0]" />
          <div className="border-r border-b border-[#e7e5e0]" />
          <div className="border-r border-b border-[#e7e5e0]" />
          <div className="border-b border-[#e7e5e0]" />
          <div className="border-r border-b border-[#e7e5e0]" />
          <div className="border-r border-b border-[#e7e5e0]" />
          <div className="border-r border-b border-[#e7e5e0]" />
          <div className="border-b border-[#e7e5e0]" />
          <div className="border-r border-[#e7e5e0]" />
          <div className="border-r border-[#e7e5e0]" />
          <div className="border-r border-[#e7e5e0]" />
          <div />
        </div>

        {/* Quadrant Watermark Labels */}
        <div className="absolute top-4 right-4 pointer-events-none text-right">
          <span className="text-[11px] font-instrument font-semibold uppercase tracking-wider text-[#4d6700] bg-[#c8f169]/30 px-2 py-0.5 rounded-[4px]">
            High-Conviction Breakouts
          </span>
          <p className="text-[10px] text-[#737373] mt-0.5">High Volume · High Coherence</p>
        </div>

        <div className="absolute top-4 left-4 pointer-events-none text-left">
          <span className="text-[11px] font-instrument font-semibold uppercase tracking-wider text-[#2A4B6B] bg-[#E4EDF5] px-2 py-0.5 rounded-[4px]">
            Emergent Whispers
          </span>
          <p className="text-[10px] text-[#737373] mt-0.5">Low Volume · High Coherence</p>
        </div>

        <div className="absolute bottom-4 right-4 pointer-events-none text-right">
          <span className="text-[11px] font-instrument font-semibold uppercase tracking-wider text-[#7A3E26] bg-[#FBE8DE] px-2 py-0.5 rounded-[4px]">
            Noisy Discourse
          </span>
          <p className="text-[10px] text-[#737373] mt-0.5">High Volume · Fragmented Sentiment</p>
        </div>

        <div className="absolute bottom-4 left-4 pointer-events-none text-left">
          <span className="text-[11px] font-instrument font-semibold uppercase tracking-wider text-[#8A1C22] bg-[#FCE3E4] px-2 py-0.5 rounded-[4px]">
            Monitoring Zone
          </span>
          <p className="text-[10px] text-[#737373] mt-0.5">Below 0.75 Cutoff · Watch Only</p>
        </div>

        {/* Critical Silhouette Threshold Line at Y = 0.75 */}
        <div
          style={{ top: `${thresholdY}%` }}
          className="absolute left-0 right-0 border-t-2 border-dashed border-[#4d6700]/70 z-10 pointer-events-none flex items-center justify-between px-4"
        >
          <span className="bg-[#ffffff] text-[#4d6700] text-[10px] font-mono font-semibold px-2 py-0.5 rounded border border-[#e7e5e0] -translate-y-1/2">
            Silhouette Threshold: 0.75
          </span>
          <span className="bg-[#ffffff] text-[#737373] text-[10px] font-instrument px-2 py-0.5 rounded border border-[#e7e5e0] -translate-y-1/2 hidden sm:inline">
            Qualified Zone Above ↑
          </span>
        </div>

        {/* Interactive Signal Nodes */}
        {signals.map((signal) => {
          const { x, y } = getCoordinates(signal.supportingPosts, signal.qualityScore);
          const isQualified = signal.qualityScore >= 0.75;
          const isHovered = hoveredSignal?.id === signal.id;
          const taxonomy =
            TAXONOMY_CONFIG[signal.taxonomyCategory] || TAXONOMY_CONFIG.sentiment;

          return (
            <div
              key={signal.id}
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={() => onSelect(signal)}
              onMouseEnter={() => setHoveredSignal(signal)}
              onMouseLeave={() => setHoveredSignal(null)}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            >
              {/* Outer halo on hover */}
              <div
                className={`relative flex items-center justify-center rounded-full transition-all duration-200 ${
                  isHovered ? 'scale-125 z-30' : 'hover:scale-110'
                }`}
              >
                {/* Visual node representation */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border text-[11px] font-mono font-bold shadow-xs transition-colors ${
                    isQualified
                      ? 'bg-[#ffffff] text-[#1b1c1a] border-[#1b1c1a] group-hover:bg-[#c8f169]'
                      : 'bg-[#ffffff] text-[#ba1a1a] border-[#ba1a1a]'
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? '0 0 0 4px rgba(200, 241, 105, 0.4)'
                      : '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  {signal.qualityScore.toFixed(2)}
                </div>

                {/* Always-on mini label on desktop */}
                <div className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-instrument font-medium bg-[#ffffff]/90 px-1.5 py-0.5 rounded border border-[#e7e5e0] text-[#1b1c1a]">
                    {signal.title.length > 24
                      ? signal.title.slice(0, 24) + '...'
                      : signal.title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Hovered Tooltip Card */}
        {hoveredSignal && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#ffffff] border border-[#1b1c1a] rounded-xl p-4 shadow-lg max-w-md w-[92%] sm:w-auto animate-in fade-in zoom-in-95 pointer-events-none">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span
                className="text-[10px] font-instrument font-semibold px-2 py-0.5 rounded-[4px]"
                style={{
                  backgroundColor: TAXONOMY_CONFIG[hoveredSignal.taxonomyCategory].bg,
                  color: TAXONOMY_CONFIG[hoveredSignal.taxonomyCategory].text,
                }}
              >
                {hoveredSignal.theme}
              </span>
              <div className="flex items-center gap-2 font-mono text-[11px] tabular-nums">
                <span
                  className={
                    hoveredSignal.qualityScore >= 0.75
                      ? 'text-[#4d6700] font-bold'
                      : 'text-[#ba1a1a] font-bold'
                  }
                >
                  Score: {hoveredSignal.qualityScore.toFixed(2)}
                </span>
                <span className="text-[#737373]">·</span>
                <span className="text-[#1b1c1a]">{hoveredSignal.supportingPosts} posts</span>
              </div>
            </div>
            <h4 className="font-editorial text-base font-semibold text-[#1b1c1a] leading-tight">
              {hoveredSignal.title}
            </h4>
            <p className="text-xs text-[#5f5e5e] font-instrument mt-1 line-clamp-2">
              {hoveredSignal.summary}
            </p>
            <div className="mt-2.5 pt-2 border-t border-[#e7e5e0] flex items-center justify-between text-[11px]">
              <span className="text-[#444938] font-instrument">
                What to build: {hoveredSignal.marketOpportunity.targetBeachhead}
              </span>
              <span className="font-medium text-[#1b1c1a] inline-flex items-center gap-0.5">
                Click to open dossier <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Axis explanation footer */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#737373] gap-2 pt-2 border-t border-[#e7e5e0]">
        <div className="flex items-center gap-4">
          <span>
            <strong>X-Axis:</strong> Corroborating Community Posts (0 → 65+)
          </span>
          <span>
            <strong>Y-Axis:</strong> Silhouette Score (0.65 → 0.95)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c8f169] border border-[#1b1c1a] inline-block" />
          <span>Green border = Silhouette ≥ 0.75 (Actionable)</span>
        </div>
      </div>
    </div>
  );
};
