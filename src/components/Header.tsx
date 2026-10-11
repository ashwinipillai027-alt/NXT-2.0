import React from 'react';
import { ViewMode } from '../types/signal';
import { Plus, Bookmark } from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onOpenSynthesize: () => void;
  onOpenMethodology: () => void;
  savedCount: number;
  onOpenSavedDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  onOpenSynthesize,
  onOpenMethodology,
  savedCount,
  onOpenSavedDrawer,
}) => {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e7e5e0] bg-[#faf9f5]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onViewChange('cards');
            }}
            className="font-editorial text-2xl font-semibold tracking-tight text-[#1b1c1a] whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
          >
            NXT
          </a>
          <span className="hidden sm:inline-block text-xs text-[#737373] border-l border-[#e7e5e0] pl-3 whitespace-nowrap">
            Executive Intelligence Interface
          </span>
        </div>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-instrument text-[#5f5e5e]">
          <button
            onClick={() => onViewChange('cards')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
              currentView === 'cards'
                ? 'text-[#1b1c1a] font-medium border-b-2 border-[#1b1c1a]'
                : 'hover:text-[#1b1c1a]'
            }`}
          >
            Signals Feed
          </button>
          <button
            onClick={() => onViewChange('table')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
              currentView === 'table'
                ? 'text-[#1b1c1a] font-medium border-b-2 border-[#1b1c1a]'
                : 'hover:text-[#1b1c1a]'
            }`}
          >
            Monograph Table
          </button>
          <button
            onClick={() => onViewChange('cluster')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
              currentView === 'cluster'
                ? 'text-[#1b1c1a] font-medium border-b-2 border-[#1b1c1a]'
                : 'hover:text-[#1b1c1a]'
            }`}
          >
            Cluster Matrix
          </button>
          <button
            onClick={onOpenMethodology}
            className="whitespace-nowrap transition-colors hover:text-[#1b1c1a] py-1 cursor-pointer"
          >
            Methodology
          </button>
          <button
            onClick={onOpenSavedDrawer}
            className="whitespace-nowrap transition-colors hover:text-[#1b1c1a] py-1 flex items-center gap-1.5 cursor-pointer"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Shortlist</span>
            {savedCount > 0 && (
              <span className="inline-flex items-center justify-center bg-[#1b1c1a] text-[#ffffff] text-[10px] w-4 h-4 rounded-full font-mono tabular-nums">
                {savedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSavedDrawer}
            className="md:hidden p-2 text-[#5f5e5e] hover:text-[#1b1c1a] relative"
            aria-label="Open Shortlist"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#1b1c1a] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono">
                {savedCount}
              </span>
            )}
          </button>
          <button
            onClick={onOpenSynthesize}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#171717] bg-[#c8f169] hover:bg-[#bdeb55] rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer border border-[#b2dd50]/40"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Synthesize Signal</span>
          </button>
        </div>
      </div>
    </header>
  );
};
