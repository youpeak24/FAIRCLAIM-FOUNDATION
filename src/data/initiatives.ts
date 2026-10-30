export interface FocusArea {
  id: string;
  title: string;
  category: string;
  status: "Proposed Focus Area" | "Active Initiative";
  summary: string;
  fullScope: string[];
  intendedImpact: string;
  accentColor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  visualTheme: "dialogue" | "education" | "justice" | "community";
}

export const proposedFocusAreas: FocusArea[] = [
  {
    id: "community-equity",
    title: "Community Equity & Access Advocacy",
    category: "Advocacy & Access",
    status: "Proposed Focus Area",
    summary: "Bridging the gap between complex administrative procedures and grassroots community members through clear informational pathways and advocacy.",
    fullScope: [
      "Reviewing common administrative friction points experienced by community members",
      "Developing plain-language navigation guides for public institutions and civic claims",
      "Fostering strategic alliances with legal clinics, civic advisors, and neighborhood advocates",
      "Promoting accessible grievance redress mechanisms that do not require prohibitive financial resources"
    ],
    intendedImpact: "Empower everyday citizens with the knowledge, confidence, and documentation needed to advocate for their rights.",
    accentColor: "#142C20"
  },
  {
    id: "civic-education",
    title: "Public Education & Procedural Literacy",
    category: "Civic Education",
    status: "Proposed Focus Area",
    summary: "Demystifying rights, obligations, and dispute mitigation methods through community workshops, educational circulars, and open seminars.",
    fullScope: [
      "Designing accessible modular curriculum on fundamentals of civil dispute resolution",
      "Facilitating free educational briefings for local community groups and civic organizers",
      "Publishing periodic informational bulletins addressing emerging regulatory changes",
      "Collaborating with academic educators to introduce procedural fairness concepts into secondary learning"
    ],
    intendedImpact: "Build systemic legal and civic literacy, preventing preventable disputes before they escalate.",
    accentColor: "#C85A32"
  },
  {
    id: "constructive-mediation",
    title: "Community Mediation & Dialogue Circles",
    category: "Dialogue & Resolution",
    status: "Proposed Focus Area",
    summary: "Creating safe, neutral environments where differing parties can engage in facilitated dialogue and identify mutually agreeable resolutions.",
    fullScope: [
      "Establishing voluntary mediation protocols rooted in dignity, active listening, and neutrality",
      "Training local community leaders in basic dispute de-escalation and consensus-building",
      "Providing structured roundtables for multi-stakeholder neighborhood consultations",
      "Documenting non-adversarial resolution case principles for educational reference"
    ],
    intendedImpact: "Alleviate court backlogs and foster lasting social cohesion through voluntary reconciliation.",
    accentColor: "#204533"
  },
  {
    id: "fairness-research",
    title: "Institutional Fairness & Policy Research",
    category: "Research & Analysis",
    status: "Proposed Focus Area",
    summary: "Conducting qualitative and quantitative studies into systemic inequities to provide credible, evidence-grounded input for regulatory reform.",
    fullScope: [
      "Gathering verified empirical data on dispute resolution timelines and accessibility barriers",
      "Publishing thematic whitepapers on structural fairness in administrative adjudications",
      "Confronting systemic biases in institutional claims processing",
      "Hosting annual policy symposia bringing together scholars, policymakers, and civic leaders"
    ],
    intendedImpact: "Equip decision-makers with rigorous, objective research to guide systemic policy improvements.",
    accentColor: "#142C20"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Community Dialogue Roundtable",
    caption: "Proposed collaborative framework bringing neighborhood representatives and civic advisors together to address shared concerns in a neutral, structured setting.",
    category: "Civic Dialogue",
    visualTheme: "dialogue"
  },
  {
    id: "gallery-2",
    title: "Procedural Rights Information Hub",
    caption: "Concept for an accessible community learning station providing plain-language guides on public entitlements, fair hearing processes, and grievance channels.",
    category: "Public Education",
    visualTheme: "education"
  },
  {
    id: "gallery-3",
    title: "Principles of Balanced Adjudication",
    caption: "Visual schematic illustrating core tenets of natural justice: the right to be heard, absence of bias, and transparent communication of reasoning.",
    category: "Foundational Principles",
    visualTheme: "justice"
  },
  {
    id: "gallery-4",
    title: "Multi-Stakeholder Consensus Workshop",
    caption: "Planned interactive session format designed to build common ground among divergent civic stakeholders before administrative decisions are finalized.",
    category: "Community Engagement",
    visualTheme: "community"
  }
];

/**
 * Optional Video Embeds:
 * Configured only when verified YouTube links are supplied by the foundation.
 * Left empty initially to prevent loading unverified third-party content.
 */
export const foundationVideos: { id: string; title: string; youtubeId: string }[] = [];
