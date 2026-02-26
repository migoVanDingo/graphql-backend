import { useNavigate } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material'
import {
  CheckCircleOutline,
  Explore,
  Group,
  Settings,
  ArrowForward,
} from '@mui/icons-material'

export const WelcomePage = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Explore fontSize="large" />,
      title: 'Explore Features',
      description: 'Discover all the amazing features available to you',
    },
    {
      icon: <Group fontSize="large" />,
      title: 'Connect with Others',
      description: 'Build your network and collaborate with your team',
    },
    {
      icon: <Settings fontSize="large" />,
      title: 'Customize Settings',
      description: 'Personalize your experience with custom preferences',
    },
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 200px)',
      }}
    >
      <Box sx={{ maxWidth: 1000, width: '100%' }}>
        <Card
          sx={{
            p: 4,
            textAlign: 'center',
            boxShadow: (theme) => theme.palette.boxShadow.medium,
            mb: 4,
          }}
        >
          <CardContent>
            <CheckCircleOutline
              sx={{
                fontSize: 80,
                color: 'success.main',
                mb: 2,
              }}
            />
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome!
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Your account has been created successfully
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Thank you for joining us! Get started by exploring your new dashboard
              and discovering all the features we have to offer.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/dashboard')}
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                backgroundColor: 'accent1.vibrant',
                '&:hover': {
                  backgroundColor: 'accent1.main',
                },
              }}
            >
              Go to Dashboard
            </Button>
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.palette.boxShadow.hover,
                  },
                }}
              >
                <Box
                  sx={{
                    color: 'accent1.vibrant',
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
