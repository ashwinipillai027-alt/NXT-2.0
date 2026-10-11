import React from 'react';
import { Signal, TAXONOMY_CONFIG } from '../types/signal';
import { ArrowUpRight, Bookmark, ArrowRight, TrendingUp } from 'lucide-react';

interface SignalTableViewProps {
  signals: Signal[];
  onSelect: (signal: Signal) => void;
  savedIds: Set<string>;
  onToggleSave: (signalId: string) => void;
}

export const SignalTableView: React.FC<SignalTableViewProps> = ({
  signals,
  onSelect,
  savedIds,
  onToggleSave,
}) => {
  return (
    <div className="border border-[#e7e5e0] rounded-xl overflow-hidden bg-[#ffffff] shadow-2xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f7f6f2] border-b border-[#e7e5e0] text-[11px] font-instrument uppercase tracking-[0.04em] text-[#737373]">
              <th className="py-3 px-4 font-semibold">Problem Signal</th>
              <th className="py-3 px-4 font-semibold">Theme</th>
              <th className="py-3 px-4 font-semibold text-right">Silhouette Score</th>
              <th className="py-3 px-4 font-semibold text-right">Posts</th>
              <th className="py-3 px-4 font-semibold">Communities</th>
              <th className="py-3 px-4 font-semibold">Momentum</th>
              <th className="py-3 px-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e7e5e0] text-xs font-instrument">
            {signals.map((signal) => {
              const taxonomy =
                TAXONOMY_CONFIG[signal.taxonomyCategory] || TAXONOMY_CONFIG.sentiment;
              const isQualified = signal.qualityScore >= 0.75;
              const isSaved = savedIds.has(signal.id);

              return (
                <tr
                  key={signal.id}
                  onClick={() => onSelect(signal)}
                  className="hover:bg-[#faf9f6] transition-colors cursor-pointer group"
                >
                  {/* Title & summary snippet */}
                  <td className="py-3.5 px-4 max-w-sm">
                    <div className="font-editorial text-base font-medium text-[#1b1c1a] group-hover:text-[#4d6700] transition-colors leading-snug">
                      {signal.title}
                    </div>
                    <div className="text-[11px] text-[#737373] line-clamp-1 mt-0.5">
                      {signal.summary}
                    </div>
                  </td>

                  {/* Theme */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className="text-[11px] font-instrument font-semibold px-2 py-0.5 rounded-[4px] tracking-wide inline-block"
                      style={{ backgroundColor: taxonomy.bg, color: taxonomy.text }}
                    >
                      {signal.theme}
                    </span>
                  </td>

                  {/* Silhouette Score */}
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5 font-mono tabular-nums">
                      <span
                        className={`text-sm font-bold ${
                          isQualified ? 'text-[#4d6700]' : 'text-[#ba1a1a]'
                        }`}
                      >
                        {signal.qualityScore.toFixed(2)}
                      </span>
                      <span
                        className={`text-[10px] px-1 py-0.2 rounded ${
                          isQualified
                            ? 'bg-[#c8f169]/30 text-[#4d6700]'
                            : 'bg-[#ffdad6] text-[#ba1a1a]'
                        }`}
                      >
                        {isQualified ? '≥0.75' : '<0.75'}
                      </span>
                    </div>
                  </td>

                  {/* Posts volume */}
                  <td className="py-3.5 px-4 text-right font-mono tabular-nums text-[#1b1c1a] font-medium whitespace-nowrap">
                    {signal.supportingPosts}
                  </td>

                  {/* Communities */}
                  <td className="py-3.5 px-4 text-[#5f5e5e] whitespace-nowrap">
                    {signal.communities.join(', ')}
                  </td>

                  {/* Acceleration / Momentum */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="font-mono tabular-nums text-[#1b1c1a] flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[#4d6700]" />
                      {signal.acceleration}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <div
                      className="flex items-center justify-end gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => onToggleSave(signal.id)}
                        title={isSaved ? 'Remove from shortlist' : 'Save to shortlist'}
                        className="p-1 text-[#737373] hover:text-[#1b1c1a] rounded transition-colors"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${isSaved ? 'fill-[#1b1c1a] text-[#1b1c1a]' : ''}`}
                        />
                      </button>
                      <a
                        href={signal.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-[#737373] hover:text-[#1b1c1a] rounded transition-colors"
                        title="View conversation source"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => onSelect(signal)}
                        className="px-2.5 py-1 text-[11px] font-medium bg-[#efeeea] hover:bg-[#1b1c1a] hover:text-[#ffffff] rounded transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>Dossier</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
