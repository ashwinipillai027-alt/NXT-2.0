/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Signal, ViewMode, FilterState, ValidationItem } from './types/signal';
import { INITIAL_SIGNALS } from './data/signals';
import { Header } from './components/Header';
import { HeroOverview } from './components/HeroOverview';
import { FilterToolbar } from './components/FilterToolbar';
import { SignalCard } from './components/SignalCard';
import { SignalTableView } from './components/SignalTableView';
import { SignalClusterMatrix } from './components/SignalClusterMatrix';
import { SignalDossierModal } from './components/SignalDossierModal';
import { SynthesizeSignalModal } from './components/SynthesizeSignalModal';
import { MethodologyModal } from './components/MethodologyModal';
import { SavedDrawer } from './components/SavedDrawer';
import { RotateCcw } from 'lucide-react';

export default function App() {
  const [signals, setSignals] = useState<Signal[]>(() => {
    const saved = localStorage.getItem('nxt_signals');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_SIGNALS;
      }
    }
    return INITIAL_SIGNALS;
  });

  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('nxt_saved_ids');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch {
        return new Set();
      }
    }
    return new Set(['signal-3']); // Starter bookmark
  });

  const [currentView, setCurrentView] = useState<ViewMode>('cards');
  const [selectedSignal, setSelectedSignal] = useState<Signal | null>(null);
  const [isSynthesizeOpen, setIsSynthesizeOpen] = useState(false);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    theme: 'all',
    community: 'all',
    timePeriod: 'all',
    qualifiedOnly: false,
    taxonomy: 'all',
    sortBy: 'quality',
  });

  // Save to localStorage when signals or savedIds change
  useEffect(() => {
    localStorage.setItem('nxt_signals', JSON.stringify(signals));
  }, [signals]);

  useEffect(() => {
    localStorage.setItem('nxt_saved_ids', JSON.stringify(Array.from(savedIds)));
  }, [savedIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast('Removed from shortlist');
      } else {
        next.add(id);
        showToast('Saved to shortlist');
      }
      return next;
    });
  };

  const handleClearAllSaved = () => {
    setSavedIds(new Set());
    showToast('Shortlist cleared');
  };

  const handleAddSignal = (newSignal: Signal) => {
    setSignals((prev) => [newSignal, ...prev]);
    setSelectedSignal(newSignal);
    showToast(`Synthesized signal added: "${newSignal.title}"`);
  };

  const handleUpdateValidation = (signalId: string, items: ValidationItem[]) => {
    setSignals((prev) =>
      prev.map((s) => (s.id === signalId ? { ...s, validationChecklist: items } : s))
    );
    if (selectedSignal && selectedSignal.id === signalId) {
      setSelectedSignal((prev) => (prev ? { ...prev, validationChecklist: items } : null));
    }
  };

  // Available filter options
  const availableThemes = useMemo(() => {
    return Array.from(new Set(signals.map((s) => s.theme))).sort();
  }, [signals]);

  const availableCommunities = useMemo(() => {
    return Array.from(new Set(signals.flatMap((s) => s.communities))).sort();
  }, [signals]);

  // Filter and sort signals
  const filteredSignals = useMemo(() => {
    return signals
      .filter((signal) => {
        // Search query
        if (filters.searchQuery.trim()) {
          const q = filters.searchQuery.toLowerCase();
          const matchTitle = signal.title.toLowerCase().includes(q);
          const matchTheme = signal.theme.toLowerCase().includes(q);
          const matchSummary = signal.summary.toLowerCase().includes(q);
          const matchCauses = signal.rootCauses.some((c) => c.toLowerCase().includes(q));
          const matchComm = signal.communities.some((c) => c.toLowerCase().includes(q));
          const matchOpp = signal.marketOpportunity.whatToBuild.toLowerCase().includes(q);
          if (
            !matchTitle &&
            !matchTheme &&
            !matchSummary &&
            !matchCauses &&
            !matchComm &&
            !matchOpp
          ) {
            return false;
          }
        }

        // Theme filter
        if (filters.theme !== 'all' && signal.theme !== filters.theme) {
          return false;
        }

        // Community filter
        if (
          filters.community !== 'all' &&
          !signal.communities.includes(filters.community)
        ) {
          return false;
        }

        // Time period filter
        if (
          filters.timePeriod !== 'all' &&
          signal.timePeriod !== filters.timePeriod
        ) {
          return false;
        }

        // Qualified threshold filter (>= 0.75)
        if (filters.qualifiedOnly && signal.qualityScore < 0.75) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'quality') {
          return b.qualityScore - a.qualityScore;
        }
        if (filters.sortBy === 'posts') {
          return b.supportingPosts - a.supportingPosts;
        }
        if (filters.sortBy === 'acceleration') {
          const getNum = (str: string) => parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;
          return getNum(b.acceleration) - getNum(a.acceleration);
        }
        if (filters.sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [signals, filters]);

  const savedSignalsList = useMemo(() => {
    return signals.filter((s) => savedIds.has(s.id));
  }, [signals, savedIds]);

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1b1c1a] flex flex-col font-instrument antialiased">
      {/* 3-zone Top Bar Contract */}
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        onOpenSynthesize={() => setIsSynthesizeOpen(true)}
        onOpenMethodology={() => setIsMethodologyOpen(true)}
        savedCount={savedIds.size}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Hero Section */}
        <HeroOverview
          signals={signals}
          onFilterQualified={() =>
            setFilters((prev) => ({ ...prev, qualifiedOnly: !prev.qualifiedOnly }))
          }
          qualifiedOnly={filters.qualifiedOnly}
        />

        {/* Toolbar & Filters */}
        <FilterToolbar
          currentView={currentView}
          onViewChange={setCurrentView}
          filters={filters}
          onFilterChange={setFilters}
          availableThemes={availableThemes}
          availableCommunities={availableCommunities}
          totalMatches={filteredSignals.length}
          totalSignals={signals.length}
        />

        {/* Dynamic View rendering */}
        {filteredSignals.length === 0 ? (
          <div className="bg-[#ffffff] border border-[#e7e5e0] rounded-xl p-12 text-center my-8">
            <h3 className="font-editorial text-2xl font-medium text-[#1b1c1a] mb-2">
              No problem signals match your parameters
            </h3>
            <p className="text-sm text-[#737373] max-w-md mx-auto mb-6">
              Try relaxing your silhouette score threshold, widening the observation window, or clearing search keywords.
            </p>
            <button
              onClick={() =>
                setFilters({
                  searchQuery: '',
                  theme: 'all',
                  community: 'all',
                  timePeriod: 'all',
                  qualifiedOnly: false,
                  taxonomy: 'all',
                  sortBy: 'quality',
                })
              }
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#1b1c1a] bg-[#efeeea] hover:bg-[#e3e2df] rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <>
            {currentView === 'cards' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSignals.map((signal) => (
                  <SignalCard
                    key={signal.id}
                    signal={signal}
                    onSelect={setSelectedSignal}
                    isSaved={savedIds.has(signal.id)}
                    onToggleSave={handleToggleSave}
                  />
                ))}
              </div>
            )}

            {currentView === 'table' && (
              <SignalTableView
                signals={filteredSignals}
                onSelect={setSelectedSignal}
                savedIds={savedIds}
                onToggleSave={handleToggleSave}
              />
            )}

            {currentView === 'cluster' && (
              <SignalClusterMatrix
                signals={filteredSignals}
                onSelect={setSelectedSignal}
                onOpenMethodology={() => setIsMethodologyOpen(true)}
              />
            )}
          </>
        )}
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-[#e7e5e0] bg-[#faf9f5] mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373] font-instrument">
          <div className="flex items-center gap-2">
            <span className="font-editorial text-base font-semibold text-[#1b1c1a]">NXT</span>
            <span>·</span>
            <span>Executive Intelligence Interface</span>
            <span>·</span>
            <span>Silhouette Threshold ≥ 0.75</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMethodologyOpen(true)}
              className="hover:text-[#1b1c1a] transition-colors cursor-pointer"
            >
              Data Architecture
            </button>
            <button
              onClick={() => {
                setSignals(INITIAL_SIGNALS);
                localStorage.removeItem('nxt_signals');
                showToast('Reset signals dataset to default');
              }}
              className="hover:text-[#1b1c1a] transition-colors cursor-pointer"
            >
              Restore Defaults
            </button>
            <span className="text-[#a3a3a3]">
              Calibrated for Market Foresight & Problem Discovery
            </span>
          </div>
        </div>
      </footer>

      {/* Deep Dossier Modal */}
      <SignalDossierModal
        signal={selectedSignal}
        onClose={() => setSelectedSignal(null)}
        isSaved={selectedSignal ? savedIds.has(selectedSignal.id) : false}
        onToggleSave={handleToggleSave}
        onUpdateValidationChecklist={handleUpdateValidation}
      />

      {/* Synthesize Signal Modal */}
      <SynthesizeSignalModal
        isOpen={isSynthesizeOpen}
        onClose={() => setIsSynthesizeOpen(false)}
        onAddSignal={handleAddSignal}
      />

      {/* Methodology Transparency Modal */}
      <MethodologyModal
        isOpen={isMethodologyOpen}
        onClose={() => setIsMethodologyOpen(false)}
      />

      {/* Shortlist Drawer */}
      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedSignals={savedSignalsList}
        onSelectSignal={setSelectedSignal}
        onRemoveSaved={handleToggleSave}
        onClearAll={handleClearAllSaved}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#171717] text-[#ffffff] px-4 py-2.5 rounded-lg text-xs font-medium shadow-xl border border-[#30312e] animate-in fade-in slide-in-from-bottom-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c8f169]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
