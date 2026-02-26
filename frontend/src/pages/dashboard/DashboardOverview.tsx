import { useNavigate } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
} from '@mui/material'
import {
  PersonAdd,
  PersonOff,
  Warning,
  AttachMoney,
  ShoppingCart,
  Notifications,
  Timeline,
} from '@mui/icons-material'

export const DashboardOverview = () => {
  const stats = [
    {
      icon: <PersonAdd fontSize="large" />,
      label: 'Active Members',
      value: '42',
      color: 'success.main',
    },
    {
      icon: <PersonOff fontSize="large" />,
      label: 'Dormant Members',
      value: '8',
      color: 'warning.main',
    },
    {
      icon: <Warning fontSize="large" />,
      label: 'Accounts Past Due',
      value: '3',
      color: 'error.main',
    },
    {
      icon: <AttachMoney fontSize="large" />,
      label: 'Membership Income',
      value: '$5,240',
      color: 'accent1.vibrant',
    },
    {
      icon: <ShoppingCart fontSize="large" />,
      label: 'Store Income',
      value: '$1,820',
      color: 'accent2.vibrant',
    },
    {
      icon: <Notifications fontSize="large" />,
      label: 'Notifications',
      value: '12',
      color: 'info.main',
    },
  ]

  const recentActivity = [
    { action: 'John Smith promoted to Yellow Belt', time: '2 hours ago', type: 'promotion' },
    { action: 'Sarah Johnson completed Wing Chun form', time: '5 hours ago', type: 'progress' },
    { action: 'Mike Chen payment received - $150', time: '1 day ago', type: 'payment' },
    { action: 'New member registered - Lisa Wang', time: '1 day ago', type: 'member' },
    { action: 'Tiger Form seminar scheduled', time: '2 days ago', type: 'event' },
    { action: 'Equipment order delivered', time: '3 days ago', type: 'inventory' },
  ]

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        School Overview
      </Typography>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Card
              sx={{
                height: '100%',
                boxShadow: (theme) => theme.palette.boxShadow.light,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.palette.boxShadow.hover,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: `${stat.color}15`,
                      color: stat.color,
                      mb: 2,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity */}
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <Timeline sx={{ color: 'accent1.vibrant' }} />
            <Typography variant="h6">Recent Activity</Typography>
          </Box>
          <Box>
            {recentActivity.map((activity, index) => (
              <Box
                key={index}
                sx={{
                  py: 2,
                  borderBottom: index !== recentActivity.length - 1 ? '1px solid' : 'none',
                  borderColor: 'divider',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                    borderRadius: 1,
                    px: 1,
                  },
                }}
              >
                <Typography variant="body1">{activity.action}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {activity.time}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
