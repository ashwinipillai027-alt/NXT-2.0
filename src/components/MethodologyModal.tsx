import React from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171717]/40 backdrop-blur-[2px] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#ffffff] border border-[#e7e5e0] rounded-xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#e7e5e0]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#516d00] font-instrument uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#4d6700]" />
              <span>Epistemic Rigor & Data Architecture</span>
            </div>
            <h3 className="font-editorial text-2xl font-medium text-[#1b1c1a] mt-0.5">
              Methodology: Silhouette Score & 0.75 Threshold
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#737373] hover:text-[#1b1c1a] p-1 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6 text-xs sm:text-sm font-instrument leading-relaxed text-[#1b1c1a]">
          {/* Formula Callout */}
          <div className="p-4 rounded-xl bg-[#faf9f5] border border-[#e7e5e0]">
            <div className="text-[11px] font-mono font-bold text-[#737373] uppercase mb-1">
              Mathematical Formulation
            </div>
            <div className="font-mono text-sm sm:text-base text-[#1b1c1a] py-2">
              s(i) = [ b(i) - a(i) ] / max( a(i), b(i) )
            </div>
            <p className="text-xs text-[#5f5e5e] mt-1">
              Where <span className="font-mono font-semibold">a(i)</span> represents mean intra-cluster distance between embedding vectors of corroborating community posts, and <span className="font-mono font-semibold">b(i)</span> represents mean distance to the closest neighboring problem cluster.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-[#1b1c1a] mb-2">
              Why the 0.75 Threshold Separates Actionable Signals from Noise
            </h4>
            <p className="text-[#5f5e5e] mb-3">
              Standard social media listening tools flood founders with raw keyword hits, creating false positives and analysis paralysis. NXT enforces a rigorous 0.75 average silhouette coefficient:
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4d6700] shrink-0 mt-0.5" />
                <span>
                  <strong>s(i) ≥ 0.75 (Qualified Signal):</strong> Indicates a tight, dense semantic cluster with clear boundaries. Post authors describe the same exact mechanical obstacle across multiple threads, establishing a verified problem space.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ba1a1a] shrink-0 mt-0.5" />
                <span>
                  <strong>s(i) &lt; 0.75 (Monitoring Only):</strong> Discourse is diffuse, ambiguous, or lacks consensus. Kept for observation to prevent premature engineering commitments on transient trends.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-[#1b1c1a] mb-2">
              Community Ingestion & Noise Filtering
            </h4>
            <p className="text-[#5f5e5e]">
              NXT continuously ingests publicly posted threads across builder forums (Reddit, GitHub Discussions, Hacker News). Self-promotional spam, generic praise, and bot submissions are stripped before semantic embedding clustering, ensuring every metric reflects authentic builder friction.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#e7e5e0] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#ffffff] bg-[#171717] hover:bg-[#2e2e2e] rounded-lg transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
