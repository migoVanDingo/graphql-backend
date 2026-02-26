import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { DashboardLayout } from '@/components/DashboardLayout'
import { Registration } from '@/pages/Registration'
import { Login } from '@/pages/Login'
import { WelcomePage } from '@/pages/WelcomePage'
import { DashboardOverview } from '@/pages/dashboard/DashboardOverview'
import { AccountsPage } from '@/pages/dashboard/AccountsPage'
import { MembersPage } from '@/pages/dashboard/MembersPage'
import { MembershipsPage } from '@/pages/dashboard/MembershipsPage'
import { SeminarsPage } from '@/pages/dashboard/SeminarsPage'
import { SitePage } from '@/pages/dashboard/SitePage'
import { ShopPage } from '@/pages/dashboard/ShopPage'
import { ContentPage } from '@/pages/dashboard/ContentPage'
import { SettingsPage } from '@/pages/dashboard/SettingsPage'

// Stub loaders for future implementation
const registrationLoader = async () => {
  console.log('Registration loader called')
  return null
}

const loginLoader = async () => {
  console.log('Login loader called')
  return null
}

const welcomeLoader = async () => {
  console.log('Welcome loader called')
  return { user: null }
}

const dashboardLoader = async () => {
  console.log('Dashboard loader called')
  return {
    stats: {
      projects: 12,
      members: 48,
      notifications: 7,
    },
  }
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/register',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Registration />,
        loader: registrationLoader,
      },
    ],
  },
  {
    path: '/login',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
        loader: loginLoader,
      },
    ],
  },
  {
    path: '/welcome',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
        loader: welcomeLoader,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    loader: dashboardLoader,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: 'accounts',
        element: <AccountsPage />,
      },
      {
        path: 'members',
        element: <MembersPage />,
      },
      {
        path: 'memberships',
        element: <MembershipsPage />,
      },
      {
        path: 'seminars',
        element: <SeminarsPage />,
      },
      {
        path: 'site',
        element: <SitePage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'content',
        element: <ContentPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
])
