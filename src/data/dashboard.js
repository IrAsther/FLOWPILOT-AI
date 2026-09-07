export const mockDashboardMetrics = {
  hoursSaved: '16.4 hrs',
  emailsProcessed: '1,284',
  avgResponseTime: '2.4 min',
  approvalRate: '98.8%',
};

export const mockRecentActivities = [
  {
    id: 'act-1',
    time: '2 mins ago',
    type: 'approval',
    title: 'Enterprise Onboarding Inquiry approved',
    detail: 'Draft dispatched to alex@acme-corp.com via Gmail',
    status: 'success'
  },
  {
    id: 'act-2',
    time: '14 mins ago',
    type: 'calendar',
    title: 'Discovery Call Scheduled',
    detail: 'Thursday 14:00 EST held on Google Calendar for Sarah K.',
    status: 'success'
  },
  {
    id: 'act-3',
    time: '42 mins ago',
    type: 'whatsapp',
    title: 'WhatsApp Alert Delivered',
    detail: 'Inbound RFQ summary sent to +1 (415) •••-2940',
    status: 'pending'
  }
];

export const mockIntegrations = [
  { id: 'gmail', name: 'Gmail', status: 'Connected', account: 'operations@flowpilot.ai' },
  { id: 'whatsapp', name: 'WhatsApp Business', status: 'Connected', account: '+1 (415) 890-2341' },
  { id: 'calendar', name: 'Google Calendar', status: 'Connected', account: 'Synchronized (Primary)' },
  { id: 'hubspot', name: 'HubSpot CRM', status: 'Ready to connect', account: 'Not configured' },
];
