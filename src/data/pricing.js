export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter',
    badge: null,
    priceMonthly: 1490,
    priceAnnual: 1190,
    description: 'For growing teams automating single-inbox communication flows.',
    features: [
      'Single Gmail mailbox connection',
      'WhatsApp Business Cloud alerts',
      '1,500 triage & dispatch events/mo',
      'Google Calendar direct sync',
      'Standard 24h support SLA',
      'Deterministic audit trail'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    id: 'scale',
    name: 'Scale',
    badge: 'Most Popular',
    priceMonthly: 2890,
    priceAnnual: 2310,
    description: 'Multi-mailbox operations with custom voice modeling and automated dispatch.',
    features: [
      'Up to 5 connected Gmail mailboxes',
      'Multi-agent conditional routing',
      '10,000 triage events included/mo',
      'Custom fine-tuned tone profile',
      'HubSpot & CRM webhook sync',
      'Dedicated Slack channel SLA (1h)'
    ],
    cta: 'Deploy Scale Agent',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Custom Architecture',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    description: 'Dedicated single-tenant infrastructure with bespoke ERP and CRM pipelines.',
    features: [
      'Unlimited mailboxes & channels',
      'Dedicated single-tenant infrastructure',
      'Bespoke ERP & Salesforce pipelines',
      'Custom deterministic guardrail audit',
      '24/7 dedicated engineering pod',
      'Full SOC2 Type II compliance pack'
    ],
    cta: 'Contact Solutions Team',
    popular: false
  }
];
