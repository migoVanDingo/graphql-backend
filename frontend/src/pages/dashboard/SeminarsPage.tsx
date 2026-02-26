import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
} from '@mui/material'
import { Add, Edit, Delete, Upload } from '@mui/icons-material'
import { useState } from 'react'

interface Seminar {
  id: number
  title: string
  description: string
  image: string
  firstTimePrice: number
  repeatPrice: number
  date: string
  status: 'upcoming' | 'past'
}

const initialSeminars: Seminar[] = [
  {
    id: 1,
    title: 'Tiger Form Intensive',
    description: 'Master the powerful Tiger Form in this comprehensive 2-day seminar. Learn the fundamental stances, strikes, and applications of this dynamic form.',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400',
    firstTimePrice: 200,
    repeatPrice: 150,
    date: '2026-03-15',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Wing Chun Basics Workshop',
    description: 'Perfect for beginners! Learn the foundational principles of Wing Chun including centerline theory, economy of motion, and basic Chi Sao drills.',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400',
    firstTimePrice: 150,
    repeatPrice: 100,
    date: '2026-03-22',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Wooden Dummy Mastery',
    description: 'Advanced training on the wooden dummy. Explore the 116 movements and their practical applications in combat scenarios.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400',
    firstTimePrice: 250,
    repeatPrice: 200,
    date: '2026-04-05',
    status: 'upcoming',
  },
]

export const SeminarsPage = () => {
  const [seminars, setSeminars] = useState<Seminar[]>(initialSeminars)
  const [openDialog, setOpenDialog] = useState(false)
  const [editingSeminar, setEditingSeminar] = useState<Seminar | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    firstTimePrice: 0,
    repeatPrice: 0,
    date: '',
  })

  const handleOpenDialog = (seminar?: Seminar) => {
    if (seminar) {
      setEditingSeminar(seminar)
      setFormData({
        title: seminar.title,
        description: seminar.description,
        image: seminar.image,
        firstTimePrice: seminar.firstTimePrice,
        repeatPrice: seminar.repeatPrice,
        date: seminar.date,
      })
    } else {
      setEditingSeminar(null)
      setFormData({
        title: '',
        description: '',
        image: '',
        firstTimePrice: 0,
        repeatPrice: 0,
        date: '',
      })
    }
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditingSeminar(null)
  }

  const handleSave = () => {
    if (editingSeminar) {
      setSeminars(
        seminars.map((s) =>
          s.id === editingSeminar.id
            ? { ...s, ...formData, status: 'upcoming' as const }
            : s
        )
      )
    } else {
      const newSeminar: Seminar = {
        id: Math.max(...seminars.map((s) => s.id)) + 1,
        ...formData,
        status: 'upcoming',
      }
      setSeminars([...seminars, newSeminar])
    }
    handleCloseDialog()
  }

  const handleDelete = (id: number) => {
    setSeminars(seminars.filter((s) => s.id !== id))
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Seminars & Workshops
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpenDialog()}
          sx={{
            backgroundColor: 'accent1.vibrant',
            '&:hover': { backgroundColor: 'accent1.main' },
          }}
        >
          Add Seminar
        </Button>
      </Box>

      <Grid container spacing={3}>
        {seminars.map((seminar) => (
          <Grid item xs={12} md={6} lg={4} key={seminar.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: (theme) => theme.palette.boxShadow.medium,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.palette.boxShadow.hover,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={seminar.image}
                alt={seminar.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {seminar.title}
                  </Typography>
                  <Chip
                    label={seminar.status}
                    color={seminar.status === 'upcoming' ? 'success' : 'default'}
                    size="small"
                  />
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {seminar.description}
                </Typography>

                <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>
                  Date: {new Date(seminar.date).toLocaleDateString()}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      First Time
                    </Typography>
                    <Typography variant="h6" color="accent1.vibrant" fontWeight="bold">
                      ${seminar.firstTimePrice}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Repeat
                    </Typography>
                    <Typography variant="h6" color="accent2.vibrant" fontWeight="bold">
                      ${seminar.repeatPrice}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Edit />}
                    onClick={() => handleOpenDialog(seminar)}
                  >
                    Edit
                  </Button>
                  <IconButton color="error" onClick={() => handleDelete(seminar.id)}>
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingSeminar ? 'Edit Seminar' : 'Add New Seminar'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Seminar Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />

            <TextField
              fullWidth
              label="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              helperText="Enter image URL or upload"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <Upload />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                label="First Time Price"
                type="number"
                value={formData.firstTimePrice}
                onChange={(e) =>
                  setFormData({ ...formData, firstTimePrice: parseFloat(e.target.value) || 0 })
                }
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />

              <TextField
                fullWidth
                label="Repeat Attendee Price"
                type="number"
                value={formData.repeatPrice}
                onChange={(e) =>
                  setFormData({ ...formData, repeatPrice: parseFloat(e.target.value) || 0 })
                }
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{
              backgroundColor: 'accent1.vibrant',
              '&:hover': { backgroundColor: 'accent1.main' },
            }}
          >
            {editingSeminar ? 'Save Changes' : 'Add Seminar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
