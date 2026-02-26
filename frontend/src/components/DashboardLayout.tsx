import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Typography,
} from '@mui/material'
import {
  Home,
  AccountBalance,
  Group,
  Language,
  ShoppingCart,
  Settings,
  ChevronLeft,
  ChevronRight,
  SportsKabaddi,
  CardMembership,
  Event,
  Folder,
} from '@mui/icons-material'

const drawerWidth = 260
const drawerWidthCollapsed = 70

const navItems = [
  { path: '/dashboard', label: 'Home', icon: <Home /> },
  { path: '/dashboard/accounts', label: 'Accounts', icon: <AccountBalance /> },
  { path: '/dashboard/members', label: 'Members', icon: <Group /> },
  { path: '/dashboard/memberships', label: 'Memberships', icon: <CardMembership /> },
  { path: '/dashboard/seminars', label: 'Seminars', icon: <Event /> },
  { path: '/dashboard/shop', label: 'Shop', icon: <ShoppingCart /> },
  { path: '/dashboard/content', label: 'Content', icon: <Folder /> },
  { path: '/dashboard/site', label: 'Site', icon: <Language /> },
  { path: '/dashboard/settings', label: 'Settings', icon: <Settings /> },
]

export const DashboardLayout = () => {
  const [open, setOpen] = useState(true)

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0 }}>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : drawerWidthCollapsed,
          flexShrink: 0,
          transition: 'width 0.3s',
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : drawerWidthCollapsed,
            boxSizing: 'border-box',
            borderRight: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.paper',
            transition: 'width 0.3s',
            overflowX: 'hidden',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 64 }}>
          {open && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SportsKabaddi sx={{ fontSize: 32, color: 'accent1.vibrant' }} />
              <Typography variant="h6" fontWeight="bold">
                Kung Fu
              </Typography>
            </Box>
          )}
          <IconButton onClick={() => setOpen(!open)} size="small">
            {open ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ pt: 2, px: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                end={item.path === '/dashboard'}
                sx={{
                  borderRadius: 2,
                  justifyContent: open ? 'initial' : 'center',
                  '&.active': {
                    backgroundColor: 'accent1.dim',
                    color: 'accent1.vibrant',
                    '& .MuiListItemIcon-root': {
                      color: 'accent1.vibrant',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && <ListItemText primary={item.label} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          backgroundColor: 'background.default',
          overflow: 'auto',
          height: '100vh',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
