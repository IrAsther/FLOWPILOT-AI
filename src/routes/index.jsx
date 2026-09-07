import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { HomePage } from '../pages/public/HomePage';
import { ServicesPage } from '../pages/public/ServicesPage';
import { SolutionsPage } from '../pages/public/SolutionsPage';
import { PricingPage } from '../pages/public/PricingPage';
import { AboutPage } from '../pages/public/AboutPage';
import { BookDemoPage } from '../pages/public/BookDemoPage';
import { WhatsAppAgentPage } from '../pages/public/WhatsAppAgentPage';
import { EmailAutomationPage } from '../pages/public/EmailAutomationPage';
import { CalendarAutomationPage } from '../pages/public/CalendarAutomationPage';
import { CustomWorkflowsPage } from '../pages/public/CustomWorkflowsPage';
import { HowItWorksPage } from '../pages/public/HowItWorksPage';
import { ContactPage } from '../pages/public/ContactPage';
import { AuthPage } from '../pages/public/AuthPage';
import { DashboardPage } from '../pages/public/DashboardPage';
import { NotFoundPage } from '../pages/system/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'solutions', element: <SolutionsPage /> },
      { path: 'how-it-works', element: <HowItWorksPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'book-a-demo', element: <BookDemoPage /> },
      { path: 'whatsapp-ai-agent', element: <WhatsAppAgentPage /> },
      { path: 'email-automation', element: <EmailAutomationPage /> },
      { path: 'calendar-automation', element: <CalendarAutomationPage /> },
      { path: 'custom-ai-workflows', element: <CustomWorkflowsPage /> },
    ],
  },
  {
    path: 'auth',
    element: <AuthPage initialView="login" />,
  },
  {
    path: 'login',
    element: <AuthPage initialView="login" />,
  },
  {
    path: 'signup',
    element: <AuthPage initialView="signup" />,
  },
  {
    path: 'onboarding',
    element: <AuthPage initialView="onboarding" />,
  },
  {
    path: 'dashboard/*',
    element: <DashboardPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
