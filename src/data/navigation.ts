export interface NavItem {
  name: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Mission & Vision', href: '/mission-vision' },
  { name: 'Initiatives', href: '/initiatives' },
  { name: 'Contact', href: '/contact' },
];

export const policyNav: NavItem[] = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions' },
];
