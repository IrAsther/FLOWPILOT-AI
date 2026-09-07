import { useState, useCallback } from 'react';

const INITIAL_ONBOARDING_STATE = {
  businessName: '',
  industry: 'agency',
  primaryGoal: 'inbox_triage',
  gmailConnected: false,
  whatsappConnected: false,
  calendarConnected: false,
  workflowConfigured: false,
};

export function useOnboarding() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('flowpilot_onboarding');
      return saved ? JSON.parse(saved) : INITIAL_ONBOARDING_STATE;
    } catch {
      return INITIAL_ONBOARDING_STATE;
    }
  });

  const updateData = useCallback((updates) => {
    setData((prev) => {
      const next = { ...prev, ...updates };
      try {
        localStorage.setItem('flowpilot_onboarding', JSON.stringify(next));
      } catch (err) {
        console.error('Failed to save onboarding data', err);
      }
      return next;
    });
  }, []);

  const resetOnboarding = useCallback(() => {
    localStorage.removeItem('flowpilot_onboarding');
    setData(INITIAL_ONBOARDING_STATE);
  }, []);

  return { data, updateData, resetOnboarding };
}
