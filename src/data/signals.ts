import { Signal } from '../types/signal';

export const INITIAL_SIGNALS: Signal[] = [
  {
    id: 'signal-1',
    title: 'Founder burnout from long development cycles',
    theme: 'Founder well-being',
    taxonomyCategory: 'sentiment',
    supportingPosts: 24,
    communities: ['r/indiehacking', 'r/startups'],
    timePeriod: 'Past 30 days',
    qualityScore: 0.82,
    qualityDefinition: 'Average silhouette score above 0.75 threshold',
    sourceUrl: 'https://reddit.com/r/indiehacking/comments/abc123',
    isDemo: true,
    summary: 'Solo builders and micro-teams report compounding psychological fatigue after spending 6–9 months engineering complex feature surfaces before validating buyer willingness to pay.',
    acceleration: '+28% MoM',
    coherence: 0.86,
    rootCauses: [
      'Scope creep masquerading as competitive parity against venture-backed incumbent software.',
      'Isolation in decision-making without objective release milestones or external accountability.',
      'Over-engineering foundational plumbing (auth, billing, multitenancy) instead of shipping thin slice MVPs.'
    ],
    representativeQuotes: [
      {
        id: 'q-1',
        author: 'u/solodev_88',
        community: 'r/indiehacking',
        upvotes: 342,
        date: '2026-09-28',
        text: 'Spent 7 months perfecting a collaborative workspace engine. Launched yesterday to 4 signups. The exhaustion isn\'t physical; it\'s the crushing realization I could have tested this in 2 weeks with a landing page.',
        url: 'https://reddit.com/r/indiehacking'
      },
      {
        id: 'q-2',
        author: 'u/kernel_crafter',
        community: 'r/startups',
        upvotes: 189,
        date: '2026-10-02',
        text: 'Third time building an MVP that took half a year. By month four I hate the product, avoid user interviews because I fear the feedback, and work 14 hours just refactoring code nobody asked for.',
        url: 'https://reddit.com/r/startups'
      }
    ],
    marketOpportunity: {
      problemStatement: 'Indie founders lack opinionated, time-boxed validation frameworks with automatic kill-switches for unvalidated features.',
      whatToBuild: 'Time-boxed MVP Constraint Engine: A micro-scoping companion that enforces 14-day ship deadlines, restricts backlog additions until 5 pre-orders are logged, and syncs directly with GitHub PR limits.',
      targetBeachhead: 'Technical solo founders and bootstrapped dev duos building their 2nd or 3rd project.',
      willingnessToPaySignal: 'High willingness to pay for launch accountability tools ($29–$49/mo), equivalent to fitness coaching for builders.',
      tamEstimate: '$140M Bootstrapped Founder Tooling Space',
      difficultyLevel: 'Low'
    },
    validationChecklist: [
      {
        id: 'val-1',
        label: 'Multi-community signal recurrence',
        checked: true,
        rationale: 'Verified across r/indiehacking, r/startups, and Hacker News Ask HN threads.'
      },
      {
        id: 'val-2',
        label: 'Acute emotional resonance in discussions',
        checked: true,
        rationale: 'High thread upvote-to-comment ratio (>14:1) with founders detailing personal lifestyle costs.'
      },
      {
        id: 'val-3',
        label: 'Fragile existing manual workarounds',
        checked: true,
        rationale: 'Founders currently rely on Notion templates and accountability Slack groups that churn within 3 weeks.'
      },
      {
        id: 'val-4',
        label: 'Verifiable willingness to pay',
        checked: true,
        rationale: 'Strong conversion on paid founder peer accountability rings ($50/mo).'
      }
    ],
    coordinates: { x: 38, y: 76 }
  },
  {
    id: 'signal-2',
    title: 'Low user retention after onboarding',
    theme: 'Product experience',
    taxonomyCategory: 'sentiment',
    supportingPosts: 18,
    communities: ['r/startups', 'r/saas'],
    timePeriod: 'Past 60 days',
    qualityScore: 0.76,
    qualityDefinition: 'Average silhouette score above 0.75 threshold',
    sourceUrl: 'https://reddit.com/r/startups/comments/def456',
    isDemo: true,
    summary: 'SaaS products suffer steep drop-offs between Day 1 signup and Day 7 repeat activity because tour modals educate users on UI buttons rather than accelerating immediate time-to-first-value.',
    acceleration: '+19% MoM',
    coherence: 0.79,
    rootCauses: [
      'Reliance on static tooltip product tours that users reflexively dismiss within 3 seconds.',
      'Empty state syndrome: complex software requiring heavy initial data import before providing visible payoff.',
      'Absence of reactive triggers that re-engage users when key intermediate milestones remain uncompleted.'
    ],
    representativeQuotes: [
      {
        id: 'q-3',
        author: 'u/growth_lead_dave',
        community: 'r/saas',
        upvotes: 215,
        date: '2026-09-15',
        text: 'Our Day 1 retention was 42% but Day 7 plummeted to 4%. Appcues tooltips just annoyed everyone. Once people close the modal, they stare at an empty dashboard and never return.',
        url: 'https://reddit.com/r/saas'
      },
      {
        id: 'q-4',
        author: 'u/pixel_founder',
        community: 'r/startups',
        upvotes: 167,
        date: '2026-10-04',
        text: 'Every analytics tool tells me where people drop off, but none can automatically synthesize the qualitative friction: why did they abandon during the CSV import?',
        url: 'https://reddit.com/r/startups'
      }
    ],
    marketOpportunity: {
      problemStatement: 'SaaS onboarding tools focus on superficial walkthroughs rather than programmatic synthetic seed data and concierge quick-wins.',
      whatToBuild: 'Synthetic First-Session Orchestrator: An embeddable SDK that populates realistic mock operational state upon signup, so the user experiences the value instantly before requiring real data imports.',
      targetBeachhead: 'B2B SaaS products with multi-tenant data dependencies (CRM, analytics, project boards).',
      willingnessToPaySignal: 'Retention optimization carries direct LTV expansion; existing onboarding suites charge $200–$800/mo.',
      tamEstimate: '$820M Product-Led Growth & Onboarding Sector',
      difficultyLevel: 'Medium'
    },
    validationChecklist: [
      {
        id: 'val-1',
        label: 'Multi-community signal recurrence',
        checked: true,
        rationale: 'Observed across r/saas, r/startups, and GrowthHackers forums.'
      },
      {
        id: 'val-2',
        label: 'Acute emotional resonance in discussions',
        checked: true,
        rationale: 'Founders express frustration over paying $40+ CAC only to lose 90% of signups in 48 hours.'
      },
      {
        id: 'val-3',
        label: 'Fragile existing manual workarounds',
        checked: false,
        rationale: 'Teams try custom email sequences and Loom videos; adoption remains spotty.'
      },
      {
        id: 'val-4',
        label: 'Verifiable willingness to pay',
        checked: true,
        rationale: 'High willingness to pay because increasing Day 7 retention by 5% doubles 12-month ARR.'
      }
    ],
    coordinates: { x: 26, y: 64 }
  },
  {
    id: 'signal-3',
    title: 'Payment integration friction for indie makers',
    theme: 'Monetization',
    taxonomyCategory: 'governance',
    supportingPosts: 31,
    communities: ['r/indiehacking', 'r/webdev'],
    timePeriod: 'Past 90 days',
    qualityScore: 0.88,
    qualityDefinition: 'Average silhouette score above 0.75 threshold',
    sourceUrl: 'https://reddit.com/r/indiehacking/comments/ghi789',
    isDemo: true,
    summary: 'International tax nexus enforcement, Merchant of Record (MoR) cut fees, and webhook reconciliation bugs continue to block developers from turning prototypes into revenue engines.',
    acceleration: '+44% MoM',
    coherence: 0.91,
    rootCauses: [
      'Complexities of EU VAT Moss and US state economic nexus laws exceeding the legal acumen of independent engineers.',
      'Disproportionate take rates (5% + 50c) from Merchant of Record providers for high-volume, low-ticket subscriptions.',
      'Fragility in billing webhook handling leading to desynchronized customer subscription states and manual remediation.'
    ],
    representativeQuotes: [
      {
        id: 'q-5',
        author: 'u/codewithpassion',
        community: 'r/indiehacking',
        upvotes: 498,
        date: '2026-09-12',
        text: 'Setting up Stripe Billing, customer portal, webhooks, idempotency keys, invoice PDF generation, and EU VAT took longer than building my actual core product.',
        url: 'https://reddit.com/r/indiehacking'
      },
      {
        id: 'q-6',
        author: 'u/berlin_dev',
        community: 'r/webdev',
        upvotes: 312,
        date: '2026-09-24',
        text: 'Got hit with German tax authorities asking for proof of digital goods exports because my checkout didn\'t properly collect reverse-charge VAT IDs. Almost gave up indie hacking entirely.',
        url: 'https://reddit.com/r/webdev'
      }
    ],
    marketOpportunity: {
      problemStatement: 'Developers need a single-file, zero-maintenance checkout adapter that handles tax compliance, idempotent webhooks, and subscription reconciliation out of the box.',
      whatToBuild: 'Autonomous Billing Runtime: A drop-in client/server package with auto-healing webhook reconcilers, built-in reverse-charge tax verification, and instant usage-meter sync.',
      targetBeachhead: 'Next.js and Vite fullstack developers building digital goods and developer tooling.',
      willingnessToPaySignal: 'Devs willingly pay $150+ for starter boilerplate repositories solely to bypass payment headaches.',
      tamEstimate: '$2.1B Fintech Infrastructure & Creator Monetization',
      difficultyLevel: 'High'
    },
    validationChecklist: [
      {
        id: 'val-1',
        label: 'Multi-community signal recurrence',
        checked: true,
        rationale: 'Dominant topic across r/indiehacking, r/webdev, r/stripe, and Hacker News.'
      },
      {
        id: 'val-2',
        label: 'Acute emotional resonance in discussions',
        checked: true,
        rationale: 'Existential dread of tax compliance audits and lost revenue.'
      },
      {
        id: 'val-3',
        label: 'Fragile existing manual workarounds',
        checked: true,
        rationale: 'Hacked scripts and expensive manual accounting consultants.'
      },
      {
        id: 'val-4',
        label: 'Verifiable willingness to pay',
        checked: true,
        rationale: 'Paddle and LemonSqueezy built tens of millions in revenue on this exact pain point.'
      }
    ],
    coordinates: { x: 52, y: 88 }
  },
  {
    id: 'signal-4',
    title: 'ChatGPT saturation making niche tools invisible',
    theme: 'AI tooling',
    taxonomyCategory: 'technology',
    supportingPosts: 12,
    communities: ['r/artificial', 'r/technology'],
    timePeriod: 'Past 30 days',
    qualityScore: 0.73,
    qualityDefinition: 'Below coherence threshold - for monitoring only',
    sourceUrl: 'https://reddit.com/r/artificial/comments/jkl012',
    isDemo: true,
    summary: 'Single-prompt AI wrappers face rapid commoditization as foundation models integrate native multimodal capabilities, causing severe consumer fatigue toward generic "AI-powered" utilities.',
    acceleration: '-8% MoM',
    coherence: 0.68,
    rootCauses: [
      'Lack of proprietary workflow data or system-of-record integration; easy copycat competition.',
      'User perception that third-party wrappers are merely markup over raw ChatGPT Plus subscriptions.',
      'High churn rates (>30% monthly) once initial novelty wears off.'
    ],
    representativeQuotes: [
      {
        id: 'q-7',
        author: 'u/prompt_pioneer',
        community: 'r/artificial',
        upvotes: 142,
        date: '2026-10-01',
        text: 'Every day there are 50 new "AI writing assistants" launched on Product Hunt. The market is numb. If you don\'t own the actual editing canvas and distribution, you have zero moat.',
        url: 'https://reddit.com/r/artificial'
      }
    ],
    marketOpportunity: {
      problemStatement: 'Point-solution AI wrappers lack operational defense mechanisms against frontier model updates.',
      whatToBuild: 'Deep Vertical System of Record: Focus on unsexy domain-specific software (plumbing dispatch, clinical trial matching, construction permits) where AI is an invisible execution substrate rather than the front-facing selling point.',
      targetBeachhead: 'Legacy industry operators requiring automated compliance documentation.',
      willingnessToPaySignal: 'High enterprise contract value ($5k–$20k ARR) compared to consumer micro-SaaS.',
      tamEstimate: '$4.5B Vertical B2B Automation',
      difficultyLevel: 'High'
    },
    validationChecklist: [
      {
        id: 'val-1',
        label: 'Multi-community signal recurrence',
        checked: true,
        rationale: 'Frequent complaints in r/artificial, r/technology, and Twitter/X dev discussions.'
      },
      {
        id: 'val-2',
        label: 'Acute emotional resonance in discussions',
        checked: true,
        rationale: 'Skepticism and fatigue rather than desperate buyer intent.'
      },
      {
        id: 'val-3',
        label: 'Fragile existing manual workarounds',
        checked: false,
        rationale: 'Users simply switch back to native ChatGPT/Claude subscriptions directly.'
      },
      {
        id: 'val-4',
        label: 'Verifiable willingness to pay',
        checked: false,
        rationale: 'Consumer willingness to pay for standalone wrappers has deteriorated.'
      }
    ],
    coordinates: { x: 19, y: 45 }
  },
  {
    id: 'signal-5',
    title: 'Enterprise RBAC retrofitting nightmares in growing SaaS',
    theme: 'Product experience',
    taxonomyCategory: 'governance',
    supportingPosts: 29,
    communities: ['r/saas', 'r/webdev', 'r/devops'],
    timePeriod: 'Past 60 days',
    qualityScore: 0.85,
    qualityDefinition: 'Average silhouette score above 0.75 threshold',
    sourceUrl: 'https://reddit.com/r/saas/comments/rbac99',
    isDemo: false,
    summary: 'Mid-stage products landing their first enterprise pilot discover that refactoring single-tenant or flat-permission schemas into multi-tenant, granular role-based access control (RBAC) stalls product roadmaps for 4–6 months.',
    acceleration: '+36% MoM',
    coherence: 0.89,
    rootCauses: [
      'Early architecture assumed binary "Admin / Member" permissions with hardcoded conditional checks across API endpoints.',
      'Enterprise buyers mandate custom roles, SCIM provisioning, and audit logs before IT security sign-off.',
      'Refactoring database queries to enforce tenant boundaries risks catastrophic data leak bugs.'
    ],
    representativeQuotes: [
      {
        id: 'q-8',
        author: 'u/cto_scramble',
        community: 'r/saas',
        upvotes: 410,
        date: '2026-09-19',
        text: 'A Fortune 500 company agreed to a $60k contract if we supported Okta SCIM and granular folder permissions. Our backend has "if (user.role === \'admin\')" littered across 200 files. We have to freeze all new features.',
        url: 'https://reddit.com/r/saas'
      },
      {
        id: 'q-9',
        author: 'u/infra_guru',
        community: 'r/devops',
        upvotes: 288,
        date: '2026-10-03',
        text: 'Retrofitting RBAC is the quiet startup killer. It generates zero marketing hype, consumes 100% of engineering bandwidth, and if you mess up one join, you leak customer data.',
        url: 'https://reddit.com/r/devops'
      }
    ],
    marketOpportunity: {
      problemStatement: 'SaaS codebases lack a zero-migration policy enforcement layer that intercepts API requests and database queries without deep schema rewrites.',
      whatToBuild: 'Schema-Agnostic Policy Proxy: A proxy and ORM plugin that injects granular tenant ACLs, SCIM directory sync, and audit logging with minimal codebase disruption.',
      targetBeachhead: 'Post-seed and Series A B2B startups preparing for enterprise procurement.',
      willingnessToPaySignal: 'High enterprise willingness to pay ($300–$1,200/mo) to unlock six-figure enterprise contracts.',
      tamEstimate: '$1.4B B2B Enterprise Readiness Infrastructure',
      difficultyLevel: 'High'
    },
    validationChecklist: [
      {
        id: 'val-1',
        label: 'Multi-community signal recurrence',
        checked: true,
        rationale: 'Consistently surfaced in r/saas, r/devops, and engineering leader Discords.'
      },
      {
        id: 'val-2',
        label: 'Acute emotional resonance in discussions',
        checked: true,
        rationale: 'Engineering leaders report severe stress during enterprise security reviews.'
      },
      {
        id: 'val-3',
        label: 'Fragile existing manual workarounds',
        checked: true,
        rationale: 'Hacked together CASL/Pundit rules and manual spreadsheet permission audits.'
      },
      {
        id: 'val-4',
        label: 'Verifiable willingness to pay',
        checked: true,
        rationale: 'Proven pricing power shown by WorkOS, BoxyHQ, and Auth0 Enterprise.'
      }
    ],
    coordinates: { x: 48, y: 84 }
  },
  {
    id: 'signal-6',
    title: 'Self-hosted AI inference cost unpredictability',
    theme: 'AI tooling',
    taxonomyCategory: 'technology',
    supportingPosts: 38,
    communities: ['r/datascience', 'r/artificial', 'r/devops'],
    timePeriod: 'Past 30 days',
    qualityScore: 0.89,
    qualityDefinition: 'Average silhouette score above 0.75 threshold',
    sourceUrl: 'https://reddit.com/r/datascience/comments/inf_cost',
    isDemo: false,
    summary: 'Startups self-hosting open-weight LLMs (Llama 3, Mistral) on cloud GPUs encounter sudden $10k+ cloud billing spikes due to vLLM memory fragmentation, unmetered batch queues, and idle GPU reservations.',
    acceleration: '+52% MoM',
    coherence: 0.94,
    rootCauses: [
      'Cloud GPU instances (H100/A10G) bill per allocated hour regardless of actual token throughput utilization.',
      'Absence of elastic cold-start caching; engineering teams keep multiple instances warm to avoid 45-second model loads.',
      'Sudden user traffic surges exhaust KV-cache memory, causing throughput collapses and auto-scaling runaway.'
    ],
    representativeQuotes: [
      {
        id: 'q-10',
        author: 'u/mlops_dan',
        community: 'r/datascience',
        upvotes: 560,
        date: '2026-10-06',
        text: 'Woke up to an $8,200 AWS bill because our autoscale group on G5 instances triggered during a crawler burst and never spun down. We literally burned our seed round margin on idle tensor memory.',
        url: 'https://reddit.com/r/datascience'
      },
      {
        id: 'q-11',
        author: 'u/vector_voyager',
        community: 'r/devops',
        upvotes: 345,
        date: '2026-10-08',
        text: 'Everyone talks about how cheap open-source models are until you realize you need 3 engineers full-time managing Triton, vLLM, and spot instance interruptions.',
        url: 'https://reddit.com/r/devops'
      }
    ],
    marketOpportunity: {
      problemStatement: 'Engineers lack an autonomous GPU scale-to-zero gateway with persistent KV cache snapshots across spot instances.',
      whatToBuild: 'Zero-Idle GPU Inference Gateway: An open-source orchestrator that provisions spot GPUs on demand, snapshots active model states into ultra-fast NVMe cache, and automatically throttles non-paying request spikes.',
      targetBeachhead: 'AI startups running over $3,000/mo in raw cloud compute bills.',
      willingnessToPaySignal: 'Direct cost-reduction pitch: customers easily pay 20% of net cloud savings.',
      tamEstimate: '$3.8B Cloud AI Compute Optimization',
      difficultyLevel: 'High'
    },
    validationChecklist: [
      {
        id: 'val-1',
        label: 'Multi-community signal recurrence',
        checked: true,
        rationale: 'Active across r/datascience, r/devops, r/localllama, and Hacker News.'
      },
      {
        id: 'val-2',
        label: 'Acute emotional resonance in discussions',
        checked: true,
        rationale: 'Emergency budget panic and investor pressure to preserve runway.'
      },
      {
        id: 'val-3',
        label: 'Fragile existing manual workarounds',
        checked: true,
        rationale: 'Cron scripts to shut down instances at midnight; manual Grafana alerts.'
      },
      {
        id: 'val-4',
        label: 'Verifiable willingness to pay',
        checked: true,
        rationale: 'Demonstrated willingness to adopt specialized inference providers (Together, Groq, Fireworks).'
      }
    ],
    coordinates: { x: 62, y: 92 }
  },
  {
    id: 'signal-7',
    title: 'SOC2 & ISO27001 audit fatigue for seed-stage startups',
    theme: 'Monetization',
    taxonomyCategory: 'risk',
    supportingPosts: 22,
    communities: ['r/startups', 'r/saas'],
    timePeriod: 'Past 90 days',
    qualityScore: 0.81,
    qualityDefinition: 'Average silhouette score above 0.75 threshold',
    sourceUrl: 'https://reddit.com/r/startups/comments/soc2_hell',
    isDemo: false,
    summary: 'Automated compliance tools (Vanta, Drata) alert founders to hundreds of security controls but fail to provide automated code remediation, leaving 3-person teams buried in administrative screenshot generation.',
    acceleration: '+22% MoM',
    coherence: 0.83,
    rootCauses: [
      'Compliance platforms act as auditor dashboards rather than autonomous policy remediators.',
      'Seed founders spend 80+ hours taking manual screenshots of laptop encryption, GitHub branch protections, and employee offboarding checklists.',
      'Auditor interpretation variances cause conflicting requirements across different certification firms.'
    ],
    representativeQuotes: [
      {
        id: 'q-12',
        author: 'u/founder_in_chains',
        community: 'r/startups',
        upvotes: 388,
        date: '2026-09-08',
        text: 'Paid $12,000 for a compliance platform, only to discover I now have 180 "failing tasks" that require me to manually write 40 policy documents and upload screenshots. It’s an extortion racket for enterprise gatekeeping.',
        url: 'https://reddit.com/r/startups'
      }
    ],
    marketOpportunity: {
      problemStatement: 'Compliance platforms detect gaps but do not autonomously apply the technical fixes to cloud infrastructure and repositories.',
      whatToBuild: 'Autonomous Compliance Bot: A GitHub and AWS agent that automatically opens pull requests with required Terraform policies, branch protection rules, and employee identity logs to pass SOC2 Type 1 without human intervention.',
      targetBeachhead: 'Seed and pre-Series A B2B founders selling to regulated industries (health, fintech).',
      willingnessToPaySignal: 'Companies currently pay $15k–$30k between auditor and compliance software.',
      tamEstimate: '$2.4B Security Compliance Automation',
      difficultyLevel: 'Medium'
    },
    validationChecklist: [
      {
        id: 'val-1',
        label: 'Multi-community signal recurrence',
        checked: true,
        rationale: 'Observed across r/startups, r/saas, and tech founder communities.'
      },
      {
        id: 'val-2',
        label: 'Acute emotional resonance in discussions',
        checked: true,
        rationale: 'Founders describe feeling demoralized and distracted from core product engineering.'
      },
      {
        id: 'val-3',
        label: 'Fragile existing manual workarounds',
        checked: true,
        rationale: 'Hiring fractional CISOs at $5,000/mo or copy-pasting generic open-source templates.'
      },
      {
        id: 'val-4',
        label: 'Verifiable willingness to pay',
        checked: true,
        rationale: 'Massive proven market with venture-backed incumbents valued in billions.'
      }
    ],
    coordinates: { x: 35, y: 74 }
  },
  {
    id: 'signal-8',
    title: 'Fragmented customer feedback triage across Discord & Slack',
    theme: 'Product experience',
    taxonomyCategory: 'sentiment',
    supportingPosts: 17,
    communities: ['r/indiehacking', 'r/ProductManagement'],
    timePeriod: 'Past 30 days',
    qualityScore: 0.77,
    qualityDefinition: 'Average silhouette score above 0.75 threshold',
    sourceUrl: 'https://reddit.com/r/ProductManagement/comments/slack_feedback',
    isDemo: false,
    summary: 'Product managers managing community-led growth spend hours daily copying bug reports, feature requests, and complaints from noisy Discord and Slack channels into Linear or Jira.',
    acceleration: '+14% MoM',
    coherence: 0.80,
    rootCauses: [
      'Chat channels mix casual banter, customer support cries, and product bugs in unthreaded streams.',
      'Lack of automated duplicate clustering; 10 users reporting the same edge case creates 10 isolated Slack messages.',
      'Feedback decays without status updates back to the original poster, eroding community goodwill.'
    ],
    representativeQuotes: [
      {
        id: 'q-13',
        author: 'u/pm_whisperer',
        community: 'r/ProductManagement',
        upvotes: 275,
        date: '2026-10-04',
        text: 'Our Discord has 4,000 members. It is completely unmanageable. Gold customer insights get buried under memes in #general, and by the time engineering sees it, the user has already churned.',
        url: 'https://reddit.com/r/ProductManagement'
      }
    ],
    marketOpportunity: {
      problemStatement: 'Community chats are great for dialogue but terrible for structured backlog extraction and bidirectional status sync.',
      whatToBuild: 'Community Signal Siphon: A Discord/Slack native bot that clusters conversation threads, extracts reproducible steps, creates linked Linear issues, and auto-notifies original users when fixes deploy.',
      targetBeachhead: 'Developer tool and dev-infra companies with public Discord/Slack communities.',
      willingnessToPaySignal: 'B2B PM tools command $49–$199/mo per seat.',
      tamEstimate: '$680M Product Feedback & Community Operations',
      difficultyLevel: 'Low'
    },
    validationChecklist: [
      {
        id: 'val-1',
        label: 'Multi-community signal recurrence',
        checked: true,
        rationale: 'Discussed heavily in r/ProductManagement and r/indiehacking.'
      },
      {
        id: 'val-2',
        label: 'Acute emotional resonance in discussions',
        checked: true,
        rationale: 'Overwhelmed solo founders and devrel leads experiencing burnout from notification fatigue.'
      },
      {
        id: 'val-3',
        label: 'Fragile existing manual workarounds',
        checked: true,
        rationale: 'Zapier hooks that dump raw un-deduplicated messages into Notion or Google Sheets.'
      },
      {
        id: 'val-4',
        label: 'Verifiable willingness to pay',
        checked: true,
        rationale: 'Tools like Canny and Featurebase demonstrate clear subscription willingness.'
      }
    ],
    coordinates: { x: 28, y: 68 }
  }
];

export { TAXONOMY_CONFIG } from '../types/signal';
