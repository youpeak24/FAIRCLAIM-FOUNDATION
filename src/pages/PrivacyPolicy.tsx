import { ContactPageLink, PolicyPage } from '../components/PolicyPage';
import type { PolicySection } from '../components/PolicyPage';

const sections: PolicySection[] = [
  {
    title: 'General commitment to privacy',
    body: (
      <p>
        Fairclaim Foundation intends to handle visitor information with respect and care. The website is not designed
        for commercial data monetization, advertising profiling, or sharing visitor information without a reason.
      </p>
    ),
  },
  {
    title: 'Information collected through enquiries',
    body: (
      <>
        <p>When you write to the foundation through the contact page, only the information you choose to provide is collected:</p>
        <ul>
          <li>Your full name and email address</li>
          <li>Your area of interest, and your organization if you choose to add it</li>
          <li>The message you write</li>
        </ul>
        <p>Please do not include sensitive case documents or unnecessary personal details in your message.</p>
      </>
    ),
  },
  {
    title: 'Purpose of use',
    body: (
      <>
        <p>Information submitted is intended to be used only to:</p>
        <ul>
          <li>Read and respond to your enquiry or collaboration interest</li>
          <li>Keep basic correspondence records needed to follow up</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Cookies and analytics',
    body: (
      <p>
        This website is an informational resource. It does not use advertising trackers, behavioral cookies, or
        marketing pixels, and its fonts are served from the site itself rather than from a third-party font service.
        Hosting infrastructure may keep standard technical logs (such as IP address and request headers) for security
        and reliability.
      </p>
    ),
  },
  {
    title: 'Third-party links and services',
    body: (
      <p>
        If you submit the contact form, your message is passed to the form-handling service the foundation configures
        for this site. The website may also link to external organizations; Fairclaim Foundation is not responsible
        for their privacy practices.
      </p>
    ),
  },
  {
    title: 'Privacy questions',
    body: (
      <p>
        If you have questions about this draft, or want to ask about information you submitted, please use the{' '}
        <ContactPageLink />. Direct contact details will be published once the foundation confirms them.
      </p>
    ),
  },
];

export function PrivacyPolicy() {
  return (
    <PolicyPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="How information shared with this website is intended to be handled."
      draftNotice="This is a provisional framework awaiting formal review and adoption by Fairclaim Foundation. Specific registrations and legal commitments will be added once they are confirmed."
      sections={sections}
    />
  );
}
