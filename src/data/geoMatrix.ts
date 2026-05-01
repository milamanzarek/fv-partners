export interface GeoCity {
  id: string;
  name: string;
  industryFocus: string;
  context: string;
}

export interface GeoService {
  id: string;
  name: string;
  description: string;
  complianceNote?: string;
}

export const CITIES: GeoCity[] = [
  { id: 'burbank', name: 'Burbank', industryFocus: 'Creative Agencies & Media', context: 'the entertainment capital' },
  { id: 'glendale', name: 'Glendale', industryFocus: 'Professional Services', context: 'the corporate hub' },
  { id: 'agoura-hills', name: 'Agoura Hills', industryFocus: 'Tech & Consulting', context: 'the 101 tech corridor' },
  { id: 'thousand-oaks', name: 'Thousand Oaks', industryFocus: 'Biotech & Retail', context: 'the biotech hub' },
  { id: 'pasadena', name: 'Pasadena', industryFocus: 'Tech Startups & Medical', context: 'the innovation center' },
  { id: 'santa-clarita', name: 'Santa Clarita', industryFocus: 'Construction & Logistics', context: 'the expanding valley' },
  { id: 'westlake-village', name: 'Westlake Village', industryFocus: 'High-Wealth Consultancies', context: 'the premier business district' },
  { id: 'el-segundo', name: 'El Segundo', industryFocus: 'Aerospace & Clean Energy', context: 'the tech and defense hub' },
  { id: 'culver-city', name: 'Culver City', industryFocus: 'Content Creators & Post-Production', context: 'the creative epicenter' },
  { id: 'torrance', name: 'Torrance', industryFocus: 'Manufacturing & Import/Export', context: 'the industrial powerhouse' },
  { id: 'santa-monica', name: 'Santa Monica', industryFocus: 'VC-Backed Startups & SaaS', context: 'Silicon Beach' },
  { id: 'los-angeles', name: 'Los Angeles', industryFocus: 'Small Businesses & Entrepreneurs', context: 'the greater LA area' }
];

export const SERVICES: GeoService[] = [
  { 
    id: 'fractional-cfo', 
    name: 'Fractional CFO', 
    description: 'Strategic scenario planning, cash flow forecasting, and advisory services to help you survive tighter lending markets and scale profitably.' 
  },
  { 
    id: 'catch-up-bookkeeping', 
    name: 'Catch-up Bookkeeping', 
    description: 'Clean-up services for businesses that need to get their books audit-ready and capital-ready immediately.' 
  },
  { 
    id: 'payroll-compliance', 
    name: 'Payroll & Compliance', 
    description: 'Strict payroll management protecting California businesses against EDD audits and AB5 misclassification risks.' 
  },
  { 
    id: 'business-tax-planning', 
    name: 'Business Tax Planning', 
    description: 'Year-round proactive tax strategy to minimize liabilities and optimize your structure.',
    complianceNote: 'As IRS Authorized Enrolled Agents (EA), we are federally licensed to represent taxpayers and sign returns.'
  },
  { 
    id: 'inventory-cost-accounting', 
    name: 'Inventory & Cost Accounting', 
    description: 'Precise margin analysis and cost tracking essential for e-commerce, manufacturing, and wholesale businesses.' 
  }
];

export const getGeoRouteData = (slug: string) => {
  for (const city of CITIES) {
    for (const service of SERVICES) {
      if (`${city.id}-${service.id}` === slug) {
        return { city, service };
      }
    }
  }
  return null;
};
