/**
 * The four focus areas. Every one is PROPOSED. Wording must stay
 * conditional (“explore”, “consider”) and must not describe operating
 * services, partners, results or beneficiaries.
 */

export interface FocusArea {
  /** Anchor id on the Initiatives page */
  id: string;
  number: string;
  title: string;
  status: 'Proposed focus area';
  /** Short description for the homepage */
  summary: string;
  /** Longer description for the Initiatives page */
  description: string;
  /** Activities the foundation could explore */
  proposedActivities: string[];
  /** What the area aims to contribute: an aspiration, not a measured result */
  intendedContribution: string;
}

export const focusAreas: FocusArea[] = [
  {
    id: 'community-equity',
    number: '01',
    title: 'Community equity & access',
    status: 'Proposed focus area',
    summary:
      'Exploring clearer pathways to information and participation, particularly where complex processes create barriers.',
    description:
      'Many people meet unfamiliar procedures at moments that matter. This area would look at where complexity gets in the way of access, and at what clearer information could change.',
    proposedActivities: [
      'Mapping common points of confusion in everyday civic and administrative processes',
      'Exploring plain-language guides to help people find the right information',
      'Listening to community members about what makes participation difficult',
      'Considering how community organizations and advisors might contribute',
    ],
    intendedContribution:
      'To help more people understand where to find information and how to take part in processes that affect them.',
  },
  {
    id: 'civic-education',
    number: '02',
    title: 'Public education & civic understanding',
    status: 'Proposed focus area',
    summary:
      'Developing ideas for accessible learning resources that help people understand civic processes and make informed decisions.',
    description:
      'Understanding how a process works is the first step toward taking part in it. This area would develop ideas for learning resources that are accessible, accurate and easy to follow.',
    proposedActivities: [
      'Developing concepts for short, plain-language explainers on civic processes',
      'Exploring community workshop formats built around questions people actually ask',
      'Considering how learning resources can be kept accurate and up to date',
      'Exploring conversations with educators about procedural fairness as a topic',
    ],
    intendedContribution:
      'To make civic processes easier to understand so that people can make informed decisions.',
  },
  {
    id: 'community-dialogue',
    number: '03',
    title: 'Community dialogue & mediation',
    status: 'Proposed focus area',
    summary:
      'Exploring respectful, voluntary approaches to dialogue, shared understanding, and constructive problem-solving.',
    description:
      'Not every difference needs to become a dispute. This area would explore voluntary, respectful ways for people to talk, listen and find common ground, without replacing legal advice or formal processes.',
    proposedActivities: [
      'Exploring principles for respectful, voluntary dialogue',
      'Considering structured conversations for shared community questions',
      'Looking at what skills and training constructive dialogue depends on',
      'Defining clearly what dialogue can and cannot offer',
    ],
    intendedContribution:
      'To create room for people to be heard and to work toward shared understanding, where they choose to take part.',
  },
  {
    id: 'fairness-research',
    number: '04',
    title: 'Fairness research & policy insight',
    status: 'Proposed focus area',
    summary:
      'Examining barriers to equitable treatment and identifying questions that can inform thoughtful public discussion.',
    description:
      'Good conversations about fairness depend on good questions. This area would examine where barriers to equitable treatment arise and frame the questions that deserve public attention.',
    proposedActivities: [
      'Reviewing existing public research on access and procedural fairness',
      'Identifying open questions that would benefit from further study',
      'Exploring ways to share findings in clear, balanced language',
      'Considering how research could be shared with people working on related questions',
    ],
    intendedContribution:
      'To help inform thoughtful, evidence-aware public discussion about equitable treatment.',
  },
];
