export const coreWorkflowSteps = [
  {
    step: '01',
    title: 'Email Received',
    channel: 'Gmail API',
    description: 'Inbound client inquiries land directly in your connected Google Workspace inbox.',
    icon: 'Mail',
    status: 'Inbound'
  },
  {
    step: '02',
    title: 'AI Understands & Plans',
    channel: 'FlowPilot Reasoning Core',
    description: 'FlowPilot parses intent, checks calendar availability, retrieves CRM context, and drafts a precise response.',
    icon: 'Cpu',
    status: 'Analyzing'
  },
  {
    step: '03',
    title: 'WhatsApp Alert Dispatched',
    channel: 'WhatsApp Cloud API',
    description: 'You receive an instant executive summary and prepared draft directly on your WhatsApp.',
    icon: 'MessageSquare',
    status: 'Dispatched'
  },
  {
    step: '04',
    title: 'Human Approval',
    channel: 'Mobile Chat Interaction',
    description: 'Approve with a single tap, or send a quick voice note to adjust specific details.',
    icon: 'CheckCircle',
    status: 'Awaiting Action'
  },
  {
    step: '05',
    title: 'Flawless Execution',
    channel: 'Gmail & Calendar Outbound',
    description: 'The finalized reply is sent natively from your Gmail, and calendar holds are confirmed.',
    icon: 'Send',
    status: 'Completed'
  }
];
