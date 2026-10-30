import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'FAIRCLAIM FOUNDATION | A Fairer Future. Built Together.',
    description: 'Official informational website of FAIRCLAIM FOUNDATION. Advancing procedural fairness, community equity, and transparent civic dialogue.'
  },
  '/about': {
    title: 'About Us | FAIRCLAIM FOUNDATION',
    description: 'Learn about FAIRCLAIM FOUNDATION, our guiding principles, approach to civic fairness, and collaborative ethos.'
  },
  '/mission-vision': {
    title: 'Mission & Vision | FAIRCLAIM FOUNDATION',
    description: 'Explore the foundational mission, long-term vision, and strategic objectives guiding FAIRCLAIM FOUNDATION.'
  },
  '/initiatives': {
    title: 'Our Initiatives & Activities | FAIRCLAIM FOUNDATION',
    description: 'Discover proposed focus areas, civic dialogues, public education frameworks, and community engagement concepts.'
  },
  '/contact': {
    title: 'Contact Us | FAIRCLAIM FOUNDATION',
    description: 'Connect with FAIRCLAIM FOUNDATION for general inquiries, civic collaboration, and institutional dialogue.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | FAIRCLAIM FOUNDATION',
    description: 'Information regarding data privacy practices, baseline transparency principles, and foundation review status.'
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | FAIRCLAIM FOUNDATION',
    description: 'Provisional website terms of use for FAIRCLAIM FOUNDATION visitors, subject to formal institutional review.'
  }
};

export const DocumentTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const routeConfig = routeTitles[pathname] || {
      title: 'Page Not Found | FAIRCLAIM FOUNDATION',
      description: 'The requested page could not be located on the FAIRCLAIM FOUNDATION website.'
    };

    document.title = routeConfig.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', routeConfig.description);
  }, [pathname]);

  return null;
};
