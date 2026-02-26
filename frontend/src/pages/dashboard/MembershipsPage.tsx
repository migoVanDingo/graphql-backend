import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  IconButton,
  InputAdornment,
} from '@mui/material'
import { Save, Edit, Add, Delete } from '@mui/icons-material'
import { useState } from 'react'

interface Membership {
  id: number
  name: string
  duration: string
  price: number
  description: string
  type: 'standard' | 'addon'
}

const initialMemberships: Membership[] = [
  {
    id: 1,
    name: 'Month-to-Month',
    duration: '1 month',
    price: 150,
    description: 'Flexible monthly membership with no commitment',
    type: 'standard',
  },
  {
    id: 2,
    name: '3-Month Package',
    duration: '3 months',
    price: 400,
    description: 'Save $50 with our 3-month commitment',
    type: 'standard',
  },
  {
    id: 3,
    name: '6-Month Package',
    duration: '6 months',
    price: 750,
    description: 'Save $150 with our 6-month commitment',
    type: 'standard',
  },
  {
    id: 4,
    name: '1-Year Package',
    duration: '12 months',
    price: 1400,
    description: 'Best value! Save $400 with annual membership',
    type: 'standard',
  },
  {
    id: 5,
    name: 'Wooden Man Training',
    duration: 'addon',
    price: 50,
    description: 'Additional monthly fee for wooden dummy training',
    type: 'addon',
  },
]

export const MembershipsPage = () => {
  const [memberships, setMemberships] = useState<Membership[]>(initialMemberships)
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleSave = (id: number) => {
    setEditingId(null)
    // TODO: Save to backend
    console.log('Saving membership', id)
  }

  const handlePriceChange = (id: number, newPrice: string) => {
    setMemberships(
      memberships.map((m) =>
        m.id === id ? { ...m, price: parseFloat(newPrice) || 0 } : m
      )
    )
  }

  const handleDescriptionChange = (id: number, newDescription: string) => {
    setMemberships(
      memberships.map((m) =>
        m.id === id ? { ...m, description: newDescription } : m
      )
    )
  }

  const standardMemberships = memberships.filter((m) => m.type === 'standard')
  const addonMemberships = memberships.filter((m) => m.type === 'addon')

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Membership Pricing
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            backgroundColor: 'accent1.vibrant',
            '&:hover': { backgroundColor: 'accent1.main' },
          }}
        >
          Add Membership
        </Button>
      </Box>

      {/* Standard Memberships */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Standard Memberships
      </Typography>
      <Grid container spacing={3} sx={{ mb: 5 }}>
        {standardMemberships.map((membership) => (
          <Grid item xs={12} md={6} key={membership.id}>
            <Card
              sx={{
                height: '100%',
                boxShadow: (theme) => theme.palette.boxShadow.medium,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.palette.boxShadow.hover,
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {membership.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {membership.duration}
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => setEditingId(editingId === membership.id ? null : membership.id)}
                  >
                    {editingId === membership.id ? <Save /> : <Edit />}
                  </IconButton>
                </Box>

                <Divider sx={{ my: 2 }} />

                {editingId === membership.id ? (
                  <>
                    <TextField
                      fullWidth
                      label="Price"
                      type="number"
                      value={membership.price}
                      onChange={(e) => handlePriceChange(membership.id, e.target.value)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Description"
                      multiline
                      rows={2}
                      value={membership.description}
                      onChange={(e) => handleDescriptionChange(membership.id, e.target.value)}
                      sx={{ mb: 2 }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => handleSave(membership.id)}
                      sx={{
                        backgroundColor: 'success.main',
                        '&:hover': { backgroundColor: 'success.dark' },
                      }}
                    >
                      Save Changes
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography variant="h3" color="accent1.vibrant" fontWeight="bold" sx={{ mb: 2 }}>
                      ${membership.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {membership.description}
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add-on Memberships */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Add-On Programs
      </Typography>
      <Grid container spacing={3}>
        {addonMemberships.map((membership) => (
          <Grid item xs={12} md={6} key={membership.id}>
            <Card
              sx={{
                height: '100%',
                boxShadow: (theme) => theme.palette.boxShadow.medium,
                border: '2px solid',
                borderColor: 'accent2.dim',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {membership.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Monthly add-on
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => setEditingId(editingId === membership.id ? null : membership.id)}
                    >
                      {editingId === membership.id ? <Save /> : <Edit />}
                    </IconButton>
                    <IconButton size="small" color="error">
                      <Delete />
                    </IconButton>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {editingId === membership.id ? (
                  <>
                    <TextField
                      fullWidth
                      label="Monthly Price"
                      type="number"
                      value={membership.price}
                      onChange={(e) => handlePriceChange(membership.id, e.target.value)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Description"
                      multiline
                      rows={2}
                      value={membership.description}
                      onChange={(e) => handleDescriptionChange(membership.id, e.target.value)}
                      sx={{ mb: 2 }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => handleSave(membership.id)}
                      sx={{
                        backgroundColor: 'success.main',
                        '&:hover': { backgroundColor: 'success.dark' },
                      }}
                    >
                      Save Changes
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography variant="h4" color="accent2.vibrant" fontWeight="bold" sx={{ mb: 2 }}>
                      +${membership.price}/mo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {membership.description}
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
