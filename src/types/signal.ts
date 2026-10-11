export type TaxonomyCategory = 'governance' | 'sentiment' | 'technology' | 'risk';

export interface RepresentativeQuote {
  id: string;
  author: string;
  community: string;
  upvotes: number;
  text: string;
  date: string;
  url?: string;
}

export interface ValidationItem {
  id: string;
  label: string;
  checked: boolean;
  rationale: string;
}

export interface MarketOpportunity {
  problemStatement: string;
  whatToBuild: string;
  targetBeachhead: string;
  willingnessToPaySignal: string;
  tamEstimate: string;
  difficultyLevel: 'Low' | 'Medium' | 'High';
}

export interface Signal {
  id: string;
  title: string;
  theme: string;
  taxonomyCategory: TaxonomyCategory;
  supportingPosts: number;
  communities: string[];
  timePeriod: string;
  qualityScore: number; // Silhouette coefficient
  qualityDefinition: string;
  sourceUrl: string;
  isDemo: boolean;
  summary: string;
  acceleration: string; // e.g. +38% MoM
  coherence: number;
  rootCauses: string[];
  representativeQuotes: RepresentativeQuote[];
  marketOpportunity: MarketOpportunity;
  validationChecklist: ValidationItem[];
  coordinates: { x: number; y: number }; // Relative coordinates for quadrant scatter
}

export type ViewMode = 'cards' | 'table' | 'cluster';

export const TAXONOMY_CONFIG = {
  governance: {
    label: 'Institutional Governance & Policy',
    bg: '#E4EDF5',
    text: '#2A4B6B',
  },
  sentiment: {
    label: 'Consumer Sentiment & Market Shifts',
    bg: '#FBE8DE',
    text: '#7A3E26',
  },
  technology: {
    label: 'Technological & Deep Science Shifts',
    bg: '#EFE8F6',
    text: '#573977',
  },
  risk: {
    label: 'Critical Risk & Anomalies',
    bg: '#FCE3E4',
    text: '#8A1C22',
  },
} as const;

export type FilterState = {
  searchQuery: string;
  theme: string;
  community: string;
  timePeriod: string;
  qualifiedOnly: boolean; // Quality >= 0.75
  taxonomy: string;
  sortBy: 'quality' | 'posts' | 'acceleration' | 'title';
};
