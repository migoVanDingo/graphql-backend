import { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Breadcrumbs,
  Link,
} from '@mui/material'
import {
  Add,
  CreateNewFolder,
  Upload,
  Delete,
  Folder,
  PictureAsPdf,
  VideoLibrary,
  InsertDriveFile,
  Home,
} from '@mui/icons-material'

interface ContentFile {
  id: number
  name: string
  type: 'pdf' | 'video' | 'image' | 'other'
  size: string
  uploadDate: string
  url: string
}

interface ContentFolder {
  id: number
  name: string
  files: ContentFile[]
  subfolders: ContentFolder[]
}

export const ContentPage = () => {
  const [folders, setFolders] = useState<ContentFolder[]>([
    {
      id: 1,
      name: 'Black Belt',
      files: [
        {
          id: 1,
          name: 'Advanced Forms Guide.pdf',
          type: 'pdf',
          size: '2.4 MB',
          uploadDate: '2026-02-20',
          url: '#',
        },
        {
          id: 2,
          name: 'Wooden Dummy Tutorial.mp4',
          type: 'video',
          size: '45.2 MB',
          uploadDate: '2026-02-18',
          url: '#',
        },
      ],
      subfolders: [],
    },
    {
      id: 2,
      name: 'Brown Belt',
      files: [
        {
          id: 3,
          name: 'Intermediate Techniques.pdf',
          type: 'pdf',
          size: '1.8 MB',
          uploadDate: '2026-02-15',
          url: '#',
        },
      ],
      subfolders: [],
    },
    {
      id: 3,
      name: 'Site Assets',
      files: [
        {
          id: 4,
          name: 'School Logo.png',
          type: 'image',
          size: '156 KB',
          uploadDate: '2026-01-10',
          url: '#',
        },
        {
          id: 5,
          name: 'Hero Banner.jpg',
          type: 'image',
          size: '2.1 MB',
          uploadDate: '2026-01-10',
          url: '#',
        },
      ],
      subfolders: [],
    },
  ])

  const [currentPath, setCurrentPath] = useState<number[]>([])
  const [openFolderDialog, setOpenFolderDialog] = useState(false)
  const [openFileDialog, setOpenFileDialog] = useState(false)
  const [newFolderName, setNewFolderName] = useState('')

  const getCurrentFolder = (): ContentFolder | null => {
    if (currentPath.length === 0) return null

    let current: ContentFolder | undefined
    let folders_ = folders

    for (const id of currentPath) {
      current = folders_.find((f) => f.id === id)
      if (!current) return null
      folders_ = current.subfolders
    }

    return current || null
  }

  const getCurrentFolderList = (): ContentFolder[] => {
    const current = getCurrentFolder()
    return current ? current.subfolders : folders
  }

  const getCurrentFiles = (): ContentFile[] => {
    const current = getCurrentFolder()
    return current ? current.files : []
  }

  const handleCreateFolder = () => {
    if (!newFolderName.trim()) return

    const newFolder: ContentFolder = {
      id: Math.max(...folders.flatMap((f) => [f.id, ...f.subfolders.map((sf) => sf.id)]), 0) + 1,
      name: newFolderName,
      files: [],
      subfolders: [],
    }

    if (currentPath.length === 0) {
      setFolders([...folders, newFolder])
    } else {
      // Add to current subfolder (simplified - would need recursive update in real implementation)
      console.log('Adding to subfolder', newFolder)
    }

    setNewFolderName('')
    setOpenFolderDialog(false)
  }

  const handleDeleteFolder = (id: number) => {
    setFolders(folders.filter((f) => f.id !== id))
  }

  const handleDeleteFile = (folderId: number, fileId: number) => {
    setFolders(
      folders.map((folder) =>
        folder.id === folderId
          ? { ...folder, files: folder.files.filter((f) => f.id !== fileId) }
          : folder
      )
    )
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <PictureAsPdf sx={{ color: 'error.main' }} />
      case 'video':
        return <VideoLibrary sx={{ color: 'primary.main' }} />
      case 'image':
        return <InsertDriveFile sx={{ color: 'success.main' }} />
      default:
        return <InsertDriveFile />
    }
  }

  const getBreadcrumbs = () => {
    const crumbs = [{ id: null, name: 'All Folders' }]
    // In a real implementation, would build full path from currentPath
    return crumbs
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Content Library
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<CreateNewFolder />}
            onClick={() => setOpenFolderDialog(true)}
          >
            New Folder
          </Button>
          <Button
            variant="contained"
            startIcon={<Upload />}
            onClick={() => setOpenFileDialog(true)}
            sx={{
              backgroundColor: 'accent1.vibrant',
              '&:hover': { backgroundColor: 'accent1.main' },
            }}
          >
            Upload File
          </Button>
        </Box>
      </Box>

      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link
          component="button"
          variant="body1"
          onClick={() => setCurrentPath([])}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          <Home fontSize="small" />
          All Folders
        </Link>
      </Breadcrumbs>

      <Grid container spacing={3}>
        {/* Folders Section */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Folders
          </Typography>
          <Grid container spacing={2}>
            {getCurrentFolderList().map((folder) => (
              <Grid item xs={12} sm={6} md={3} key={folder.id}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.palette.boxShadow.hover,
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}
                    >
                      <Box
                        onClick={() => setCurrentPath([...currentPath, folder.id])}
                        sx={{ flexGrow: 1 }}
                      >
                        <Folder sx={{ fontSize: 48, color: 'accent1.vibrant', mb: 1 }} />
                        <Typography variant="h6" fontWeight="bold">
                          {folder.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {folder.files.length} files
                        </Typography>
                      </Box>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDeleteFolder(folder.id)
                        }}
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Files Section */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Files {currentPath.length > 0 && `in ${getCurrentFolder()?.name}`}
          </Typography>

          {getCurrentFiles().length === 0 && currentPath.length === 0 ? (
            <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'background.default' }}>
              <Typography color="text.secondary">
                Select a folder to view its files or create a new folder to get started
              </Typography>
            </Paper>
          ) : (
            <Paper>
              <List>
                {folders
                  .flatMap((folder) =>
                    folder.files.map((file) => ({ ...file, folderId: folder.id }))
                  )
                  .map((file) => (
                    <ListItem
                      key={file.id}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          color="error"
                          onClick={() => handleDeleteFile(file.folderId, file.id)}
                        >
                          <Delete />
                        </IconButton>
                      }
                    >
                      <ListItemIcon>{getFileIcon(file.type)}</ListItemIcon>
                      <ListItemText
                        primary={file.name}
                        secondary={
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Typography variant="caption">{file.size}</Typography>
                            <Typography variant="caption">
                              Uploaded: {file.uploadDate}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
              </List>
            </Paper>
          )}
        </Grid>
      </Grid>

      {/* Create Folder Dialog */}
      <Dialog open={openFolderDialog} onClose={() => setOpenFolderDialog(false)}>
        <DialogTitle>Create New Folder</DialogTitle>
        <DialogContent sx={{ minWidth: 400 }}>
          <TextField
            autoFocus
            fullWidth
            label="Folder Name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            sx={{ mt: 2 }}
            placeholder="e.g., White Belt, Site Assets"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFolderDialog(false)}>Cancel</Button>
          <Button
            onClick={handleCreateFolder}
            variant="contained"
            sx={{
              backgroundColor: 'accent1.vibrant',
              '&:hover': { backgroundColor: 'accent1.main' },
            }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* Upload File Dialog */}
      <Dialog open={openFileDialog} onClose={() => setOpenFileDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Upload File</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<Upload />}
              sx={{ py: 3, fontSize: '1rem' }}
            >
              Choose File to Upload
              <input type="file" hidden />
            </Button>

            <Typography variant="body2" color="text.secondary" align="center">
              Supported formats: PDF, MP4, JPG, PNG (Max 100MB)
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFileDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'accent1.vibrant',
              '&:hover': { backgroundColor: 'accent1.main' },
            }}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
