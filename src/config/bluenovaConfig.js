// BlueNova Tech Global Configuration & Data (Fetched from https://www.bluenovatech.in)
export const BLUENOVA_CONFIG = {
  name: 'Bluenova Tech',
  legalName: 'Bluenova Tech Innovative IT Solutions',
  tagline: 'Innovative IT Solutions, Website Development & Digital Engineering',
  headline: 'Empower Your Business With Scalable, Secure & High-Performance Technology',
  description: 'Bluenova Tech delivers end-to-end digital solutions, custom website development, interactive product engines, software engineering, and cloud architecture to help modern brands dominate the digital landscape.',
  phone: '+91 7600 236 644',
  phoneTel: '+917600236644',
  email: 'contact@bluenovatech.in',
  website: 'https://www.bluenovatech.in/',
  whatsappNumber: '917600236644',
  whatsappMessage: encodeURIComponent(
    "Hello Bluenova Tech! I am viewing your BathCentric website demo and I'm interested in discussing a website development project for my business."
  ),
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${this.whatsappMessage}`;
  },
  social: {
    instagram: 'https://www.instagram.com/bluenova_tech?igsh=dHBhb3lqcnBidGli&utm_source=qr',
    linkedin: 'https://www.linkedin.com/company/bluenovatech/',
    facebook: 'https://www.facebook.com/share/18a7wKsnaQ/?mibextid=wwXIfr',
    twitter: 'https://x.com/bluenova_tech?s=21'
  },
  services: [
    {
      title: 'Professional Website Development',
      badge: 'Core Expertise',
      desc: 'Expert custom website engineering with responsive architectural UI/UX, sub-second load times, and Google SEO optimization designed to maximize brand prestige and buyer trust.'
    },
    {
      title: 'Interactive 3D & Custom Quoting Engines',
      badge: 'Conversion Engine',
      desc: 'Smart product visualizers, instant laser-measurement calculators, and multi-step lead pipelines routing qualified customer specifications straight to your sales team.'
    },
    {
      title: 'Custom Software & Workflow Automation',
      badge: 'Enterprise Tech',
      desc: 'Bespoke web applications, CRM integrations, and automated digital workflows tailored to streamline business operations and eliminate manual friction.'
    },
    {
      title: 'Cloud Infrastructure & High-Security Systems',
      badge: 'Scalability & Trust',
      desc: 'Zero-trust architecture, robust cybersecurity, and scalable cloud hosting ensuring 99.99% uptime, data privacy, and rapid global response times.'
    }
  ],
  stats: [
    { value: '100%', label: 'Custom Tailored Code & Design' },
    { value: '<1s', label: 'Ultra-Fast Page Load Speed' },
    { value: '3.5x', label: 'Higher Lead Conversion Rate' },
    { value: '24/7', label: 'Dedicated Engineering Support' }
  ],
  pillars: [
    'Bespoke Web Development',
    'Custom Product Configurator',
    'WhatsApp Lead Router',
    'SEO & Core Web Vitals',
    'Zero-Trust Security',
    'Cloud Architecture'
  ]
};
