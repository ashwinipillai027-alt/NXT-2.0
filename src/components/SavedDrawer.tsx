import React from 'react';
import { Signal, TAXONOMY_CONFIG } from '../types/signal';
import { X, Bookmark, Trash2, ArrowRight, Download, Sparkles } from 'lucide-react';

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedSignals: Signal[];
  onSelectSignal: (signal: Signal) => void;
  onRemoveSaved: (signalId: string) => void;
  onClearAll: () => void;
}

export const SavedDrawer: React.FC<SavedDrawerProps> = ({
  isOpen,
  onClose,
  savedSignals,
  onSelectSignal,
  onRemoveSaved,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const handleExportAll = () => {
    if (savedSignals.length === 0) return;

    const md = `# NXT Executive Shortlist: Strategic Problem Portfolio
Date: ${new Date().toISOString().split('T')[0]}
Total Shortlisted Signals: ${savedSignals.length}

---

${savedSignals
  .map(
    (s, idx) => `## ${idx + 1}. ${s.title}
- **Theme:** ${s.theme}
- **Quality Score:** ${s.qualityScore.toFixed(2)} (${s.supportingPosts} posts across ${s.communities.join(', ')})
- **Summary:** ${s.summary}
- **What to Build:** ${s.marketOpportunity.whatToBuild}
- **Beachhead User:** ${s.marketOpportunity.targetBeachhead}
- **Willingness to Pay:** ${s.marketOpportunity.willingnessToPaySignal}
- **Source:** ${s.sourceUrl}
`
  )
  .join('\n\n')}

---
*Exported from NXT Executive Intelligence Interface*
`;

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NXT-Strategic-Shortlist-${new Date().toISOString().split('T')[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171717]/35 backdrop-blur-[2px] flex justify-end">
      <div className="w-full max-w-md bg-[#ffffff] min-h-screen border-l border-[#e7e5e0] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-250">
        <div>
          {/* Header */}
          <div className="p-5 border-b border-[#e7e5e0] bg-[#faf9f5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 fill-[#1b1c1a] text-[#1b1c1a]" />
              <h3 className="font-editorial text-xl font-medium text-[#1b1c1a]">
                Saved Shortlist
              </h3>
              <span className="text-xs font-mono font-bold bg-[#efeeea] px-2 py-0.5 rounded text-[#1b1c1a] tabular-nums">
                {savedSignals.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#737373] hover:text-[#1b1c1a] rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Signals list */}
          <div className="p-5 space-y-3.5 max-h-[calc(100vh-140px)] overflow-y-auto">
            {savedSignals.length === 0 ? (
              <div className="text-center py-12 px-4">
                <Bookmark className="w-8 h-8 text-[#a3a3a3] mx-auto mb-3 stroke-[1.5]" />
                <h4 className="font-medium text-sm text-[#1b1c1a]">No shortlisted problems yet</h4>
                <p className="text-xs text-[#737373] mt-1 leading-relaxed">
                  Click the bookmark icon on any signal card or table row to assemble a strategic product portfolio.
                </p>
              </div>
            ) : (
              savedSignals.map((signal) => {
                const taxonomy =
                  TAXONOMY_CONFIG[signal.taxonomyCategory] || TAXONOMY_CONFIG.sentiment;
                const isQualified = signal.qualityScore >= 0.75;

                return (
                  <div
                    key={signal.id}
                    className="p-4 rounded-xl border border-[#e7e5e0] bg-[#ffffff] hover:border-[#1b1c1a] transition-all relative group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="text-[10px] font-instrument font-semibold px-2 py-0.5 rounded-[4px]"
                        style={{ backgroundColor: taxonomy.bg, color: taxonomy.text }}
                      >
                        {signal.theme}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-bold tabular-nums ${
                            isQualified ? 'text-[#4d6700]' : 'text-[#ba1a1a]'
                          }`}
                        >
                          {signal.qualityScore.toFixed(2)}
                        </span>
                        <button
                          onClick={() => onRemoveSaved(signal.id)}
                          className="p-1 text-[#737373] hover:text-[#ba1a1a] transition-colors"
                          title="Remove from shortlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <h4
                      onClick={() => {
                        onSelectSignal(signal);
                        onClose();
                      }}
                      className="font-editorial text-base font-medium text-[#1b1c1a] hover:text-[#4d6700] transition-colors cursor-pointer leading-snug"
                    >
                      {signal.title}
                    </h4>

                    <p className="text-xs text-[#5f5e5e] font-instrument mt-1.5 line-clamp-2">
                      {signal.marketOpportunity.whatToBuild}
                    </p>

                    <div className="mt-3 pt-2 border-t border-[#e7e5e0] flex items-center justify-between text-[11px] text-[#737373]">
                      <span>{signal.communities.join(', ')}</span>
                      <button
                        onClick={() => {
                          onSelectSignal(signal);
                          onClose();
                        }}
                        className="font-medium text-[#1b1c1a] hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>Open Dossier</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Footer */}
        {savedSignals.length > 0 && (
          <div className="p-4 border-t border-[#e7e5e0] bg-[#faf9f5] flex items-center justify-between gap-2">
            <button
              onClick={onClearAll}
              className="text-xs text-[#737373] hover:text-[#ba1a1a] transition-colors underline cursor-pointer"
            >
              Clear All
            </button>
            <button
              onClick={handleExportAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#171717] bg-[#c8f169] hover:bg-[#bdeb55] rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Portfolio (.md)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
