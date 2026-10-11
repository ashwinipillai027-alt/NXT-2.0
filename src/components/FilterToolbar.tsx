import React from 'react';
import { ViewMode, FilterState } from '../types/signal';
import { Search, LayoutGrid, Table2, ScatterChart, X, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface FilterToolbarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableThemes: string[];
  availableCommunities: string[];
  totalMatches: number;
  totalSignals: number;
}

export const FilterToolbar: React.FC<FilterToolbarProps> = ({
  currentView,
  onViewChange,
  filters,
  onFilterChange,
  availableThemes,
  availableCommunities,
  totalMatches,
  totalSignals,
}) => {
  const isFiltered =
    filters.searchQuery !== '' ||
    filters.theme !== 'all' ||
    filters.community !== 'all' ||
    filters.qualifiedOnly ||
    filters.taxonomy !== 'all';

  const resetFilters = () => {
    onFilterChange({
      ...filters,
      searchQuery: '',
      theme: 'all',
      community: 'all',
      qualifiedOnly: false,
      taxonomy: 'all',
      sortBy: 'quality',
    });
  };

  return (
    <div className="space-y-3 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Left: Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
            placeholder="Search problems, themes, quotes, or keywords..."
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-[#ffffff] border border-[#e7e5e0] rounded-lg text-[#1b1c1a] placeholder-[#a3a3a3] focus:outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717] transition-all"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#737373] hover:text-[#1b1c1a]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Right: View mode segmented controls + Qualified toggle */}
        <div className="flex items-center gap-2.5 self-start md:self-auto flex-wrap">
          {/* Quality threshold segmented pill-free toggle */}
          <button
            onClick={() => onFilterChange({ ...filters, qualifiedOnly: !filters.qualifiedOnly })}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
              filters.qualifiedOnly
                ? 'bg-[#1b1c1a] text-[#ffffff] border-[#1b1c1a]'
                : 'bg-[#ffffff] text-[#5f5e5e] border-[#e7e5e0] hover:border-[#757966] hover:text-[#1b1c1a]'
            }`}
          >
            Silhouette ≥ 0.75 Only
          </button>

          {/* View mode buttons */}
          <div className="inline-flex items-center bg-[#ffffff] border border-[#e7e5e0] rounded-lg p-0.5">
            <button
              onClick={() => onViewChange('cards')}
              title="Card Dossier View"
              className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                currentView === 'cards'
                  ? 'bg-[#efeeea] text-[#1b1c1a] font-medium'
                  : 'text-[#737373] hover:text-[#1b1c1a]'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewChange('table')}
              title="Monograph Table View"
              className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                currentView === 'table'
                  ? 'bg-[#efeeea] text-[#1b1c1a] font-medium'
                  : 'text-[#737373] hover:text-[#1b1c1a]'
              }`}
            >
              <Table2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewChange('cluster')}
              title="Quadrant Cluster Matrix"
              className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                currentView === 'cluster'
                  ? 'bg-[#efeeea] text-[#1b1c1a] font-medium'
                  : 'text-[#737373] hover:text-[#1b1c1a]'
              }`}
            >
              <ScatterChart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary filter chips row: Theme, Community, Sort */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Theme dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#737373] font-medium">Theme:</span>
            <select
              value={filters.theme}
              onChange={(e) => onFilterChange({ ...filters, theme: e.target.value })}
              className="bg-[#ffffff] border border-[#e7e5e0] rounded-md px-2.5 py-1 text-xs text-[#1b1c1a] focus:outline-none focus:border-[#171717] cursor-pointer"
            >
              <option value="all">All Themes</option>
              {availableThemes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Community dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#737373] font-medium">Community:</span>
            <select
              value={filters.community}
              onChange={(e) => onFilterChange({ ...filters, community: e.target.value })}
              className="bg-[#ffffff] border border-[#e7e5e0] rounded-md px-2.5 py-1 text-xs text-[#1b1c1a] focus:outline-none focus:border-[#171717] cursor-pointer"
            >
              <option value="all">All Communities</option>
              {availableCommunities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Timeframe dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#737373] font-medium">Window:</span>
            <select
              value={filters.timePeriod}
              onChange={(e) => onFilterChange({ ...filters, timePeriod: e.target.value })}
              className="bg-[#ffffff] border border-[#e7e5e0] rounded-md px-2.5 py-1 text-xs text-[#1b1c1a] focus:outline-none focus:border-[#171717] cursor-pointer"
            >
              <option value="all">All Timeframes</option>
              <option value="Past 30 days">Past 30 days</option>
              <option value="Past 60 days">Past 60 days</option>
              <option value="Past 90 days">Past 90 days</option>
            </select>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#737373] font-medium">Sort:</span>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  sortBy: e.target.value as FilterState['sortBy'],
                })
              }
              className="bg-[#ffffff] border border-[#e7e5e0] rounded-md px-2.5 py-1 text-xs text-[#1b1c1a] focus:outline-none focus:border-[#171717] cursor-pointer font-instrument"
            >
              <option value="quality">Quality Score (Silhouette)</option>
              <option value="posts">Supporting Posts (Volume)</option>
              <option value="acceleration">MoM Acceleration</option>
              <option value="title">Problem Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Counter and reset */}
        <div className="flex items-center gap-3 ml-auto text-[#737373]">
          <span className="tabular-nums font-mono text-[11px]">
            Showing <strong className="text-[#1b1c1a]">{totalMatches}</strong> of {totalSignals}{' '}
            signals
          </span>
          {isFiltered && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-[11px] text-[#4d6700] hover:text-[#1b1c1a] underline cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
