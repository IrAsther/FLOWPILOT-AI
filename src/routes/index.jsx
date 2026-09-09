import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { BackToTop } from '../components/common/BackToTop';
import { GoToFooter } from '../components/common/GoToFooter';
import { SplashScreen } from '../components/common/SplashScreen';
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
import { TeamPage } from '../pages/public/TeamPage';
import { FaqPage } from '../pages/public/FaqPage';
import { AuthPage } from '../pages/public/AuthPage';
import { DashboardPage } from '../pages/public/DashboardPage';
import { DashboardPreviewPage } from '../pages/public/DashboardPreviewPage';
import { NotFoundPage } from '../pages/system/NotFoundPage';
import { ServerErrorPage } from '../pages/system/ServerErrorPage';

/**
 * Global root layout mounting the launch SplashScreen and singleton navigation controls
 * (Back to Top & Go to Footer) cleanly across all application routes.
 */
function RootLayout() {
  return (
    <>
      <SplashScreen />
      <Outlet />
      <div className="fp-floating-nav-stack">
        <BackToTop />
        <GoToFooter />
      </div>
      <style>{`
        .fp-floating-nav-stack {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 900;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .fp-floating-nav-stack {
            right: 16px;
            bottom: 16px;
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ServerErrorPage />,
    children: [
      {
        path: '/',
        element: <PublicLayout />,
        errorElement: <ServerErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'services', element: <ServicesPage /> },
          { path: 'solutions', element: <SolutionsPage /> },
          { path: 'how-it-works', element: <HowItWorksPage /> },
          { path: 'pricing', element: <PricingPage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'contact', element: <ContactPage /> },
          { path: 'team', element: <TeamPage /> },
          { path: 'faq', element: <FaqPage /> },
          { path: 'book-a-demo', element: <BookDemoPage /> },
          { path: 'book-demo', element: <BookDemoPage /> },
          { path: 'whatsapp-ai-agent', element: <WhatsAppAgentPage /> },
          { path: 'email-automation', element: <EmailAutomationPage /> },
          { path: 'calendar-automation', element: <CalendarAutomationPage /> },
          { path: 'custom-ai-workflows', element: <CustomWorkflowsPage /> },
          { path: 'custom-workflows', element: <CustomWorkflowsPage /> },
          { path: 'dashboard-preview', element: <DashboardPreviewPage /> },
        ],
      },
      {
        path: 'auth',
        element: <AuthPage initialView="login" />,
        errorElement: <ServerErrorPage />,
      },
      {
        path: 'login',
        element: <AuthPage initialView="login" />,
        errorElement: <ServerErrorPage />,
      },
      {
        path: 'signup',
        element: <AuthPage initialView="signup" />,
        errorElement: <ServerErrorPage />,
      },
      {
        path: 'forgot-password',
        element: <AuthPage initialView="forgot" />,
        errorElement: <ServerErrorPage />,
      },
      {
        path: 'reset-password',
        element: <AuthPage initialView="reset" />,
        errorElement: <ServerErrorPage />,
      },
      {
        path: 'verify-email',
        element: <AuthPage initialView="verify" />,
        errorElement: <ServerErrorPage />,
      },
      {
        path: 'onboarding',
        element: <AuthPage initialView="onboarding" />,
        errorElement: <ServerErrorPage />,
      },
      {
        path: 'onboarding/*',
        element: <AuthPage initialView="onboarding" />,
        errorElement: <ServerErrorPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
        errorElement: <ServerErrorPage />,
      },
      {
        path: 'dashboard/*',
        element: <DashboardPage />,
        errorElement: <ServerErrorPage />,
      },
      {
        path: '500',
        element: <ServerErrorPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
