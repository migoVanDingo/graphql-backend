import { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
} from '@mui/material'
import { Add, Edit, Delete, Upload } from '@mui/icons-material'

interface Product {
  id: number
  name: string
  description: string
  image: string
  price: number
  quantity: number
  beltLevel: string
  category: string
  sku: string
}

const beltLevels = ['White', 'Yellow', 'Orange', 'Green', 'Blue', 'Purple', 'Brown', 'Black', 'None']

const categories = ['Uniforms', 'Equipment', 'Weapons', 'Books', 'DVDs', 'Apparel', 'Other']

export const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Wing Chun Uniform',
      description: 'Traditional black Wing Chun uniform with pants',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400',
      price: 89.99,
      quantity: 25,
      beltLevel: 'None',
      category: 'Uniforms',
      sku: 'WCU-001',
    },
    {
      id: 2,
      name: 'Wooden Dummy',
      description: 'Traditional Wing Chun wooden training dummy - floor mounted',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400',
      price: 599.99,
      quantity: 3,
      beltLevel: 'Brown',
      category: 'Equipment',
      sku: 'WD-001',
    },
    {
      id: 3,
      name: 'Butterfly Swords',
      description: 'Wing Chun butterfly swords (pair) - stainless steel',
      image: 'https://images.unsplash.com/photo-1563401161-f155e31c7e05?w=400',
      price: 249.99,
      quantity: 8,
      beltLevel: 'Black',
      category: 'Weapons',
      sku: 'BS-001',
    },
  ])

  const [openDialog, setOpenDialog] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    description: '',
    image: '',
    price: 0,
    quantity: 0,
    beltLevel: 'None',
    category: 'Other',
    sku: '',
  })

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product)
      setFormData({
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        quantity: product.quantity,
        beltLevel: product.beltLevel,
        category: product.category,
        sku: product.sku,
      })
    } else {
      setEditingProduct(null)
      setFormData({
        name: '',
        description: '',
        image: '',
        price: 0,
        quantity: 0,
        beltLevel: 'None',
        category: 'Other',
        sku: '',
      })
    }
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditingProduct(null)
  }

  const handleSave = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) => (p.id === editingProduct.id ? { ...p, ...formData } : p))
      )
    } else {
      const newProduct: Product = {
        id: Math.max(...products.map((p) => p.id)) + 1,
        ...formData,
      }
      setProducts([...products, newProduct])
    }
    handleCloseDialog()
  }

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const getBeltColor = (belt: string) => {
    const colors: { [key: string]: string } = {
      White: '#f5f5f5',
      Yellow: '#ffd700',
      Orange: '#ff8c00',
      Green: '#32cd32',
      Blue: '#1e90ff',
      Purple: '#9370db',
      Brown: '#8b4513',
      Black: '#1a1a1a',
      None: '#9e9e9e',
    }
    return colors[belt] || '#9e9e9e'
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Shop Management
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
          Add Product
        </Button>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {product.name}
                  </Typography>
                  <Chip label={product.category} size="small" />
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 40 }}>
                  {product.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5" color="accent1.vibrant" fontWeight="bold">
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    SKU: {product.sku}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stock: {product.quantity} units
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={`Requires: ${product.beltLevel} Belt`}
                    size="small"
                    sx={{
                      backgroundColor: getBeltColor(product.beltLevel),
                      color: ['Black', 'Blue', 'Purple', 'Brown'].includes(product.beltLevel)
                        ? 'white'
                        : 'black',
                      border: product.beltLevel === 'White' ? '1px solid #ccc' : 'none',
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="small"
                    startIcon={<Edit />}
                    onClick={() => handleOpenDialog(product)}
                  >
                    Edit
                  </Button>
                  <IconButton size="small" color="error" onClick={() => handleDelete(product.id)}>
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Product Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Product Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="SKU"
                  value={formData.sku}
                  onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image URL"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
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
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={formData.category}
                    label="Category"
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Belt Level Requirement</InputLabel>
                  <Select
                    value={formData.beltLevel}
                    label="Belt Level Requirement"
                    onChange={(e) => setFormData({ ...formData, beltLevel: e.target.value })}
                  >
                    {beltLevels.map((belt) => (
                      <MenuItem key={belt} value={belt}>
                        {belt === 'None' ? 'No Requirement' : `${belt} Belt or Higher`}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
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
            {editingProduct ? 'Save Changes' : 'Add Product'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
