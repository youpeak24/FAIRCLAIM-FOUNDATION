import { ContactPageLink, PolicyPage } from '../components/PolicyPage';
import type { PolicySection } from '../components/PolicyPage';

const sections: PolicySection[] = [
  {
    title: 'Acceptance of terms',
    body: (
      <p>
        By using the Fairclaim Foundation website, visitors are asked to follow these provisional terms. If you have
        concerns about any part of them, please raise them through the <ContactPageLink />.
      </p>
    ),
  },
  {
    title: 'Informational nature of this site',
    body: (
      <p>
        Materials on this website, including summaries of proposed focus areas, are provided for general educational
        and civic information. Nothing here is legal advice or legal representation, and no attorney-client
        relationship is created. Visitors facing a specific legal matter should consult a licensed professional.
      </p>
    ),
  },
  {
    title: 'Proposed initiatives',
    body: (
      <p>
        The focus areas described on this website are proposed. Descriptions of them are not offers of services, and
        no assistance, outcome, or availability is promised.
      </p>
    ),
  },
  {
    title: 'Intellectual property and fair use',
    body: (
      <p>
        The name “Fairclaim Foundation”, its emblem, brand identity, layout, and original text are protected under
        applicable intellectual property laws. Short quotations for educational purposes are welcome with clear
        attribution to Fairclaim Foundation.
      </p>
    ),
  },
  {
    title: 'Acceptable use',
    body: (
      <p>
        Please do not misuse this website, for example by sending unsolicited advertising, attempting to breach its
        security, submitting false identities in enquiries, or interfering with its communication channels.
      </p>
    ),
  },
  {
    title: 'Disclaimer',
    body: (
      <p>
        This website and its content are provided “as is”. The foundation aims to keep information accurate and
        current but does not guarantee uninterrupted availability.
      </p>
    ),
  },
  {
    title: 'Changes to these terms',
    body: (
      <p>
        These terms may be revised once they have been formally reviewed and adopted. Updated terms will be published
        on this page.
      </p>
    ),
  },
];

export function TermsConditions() {
  return (
    <PolicyPage
      eyebrow="Terms of use"
      title="Terms & Conditions"
      intro="General terms for using the Fairclaim Foundation website."
      draftNotice="These provisional terms are published for preliminary information and await formal review and adoption by Fairclaim Foundation."
      sections={sections}
    />
  );
}
