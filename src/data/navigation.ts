export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export const headerNavLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Mission & Vision", href: "/mission-vision" },
  { name: "Our Initiatives", href: "/initiatives" },
];

export const footerQuickLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About the Foundation", href: "/about" },
  { name: "Mission & Core Vision", href: "/mission-vision" },
  { name: "Proposed Initiatives", href: "/initiatives" },
  { name: "Contact & Inquiries", href: "/contact" },
];

export const policyLinks: NavItem[] = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];
