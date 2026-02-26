import { useState } from 'react'
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  IconButton,
  FormControlLabel,
  Switch,
  Divider,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from '@mui/material'
import { Save, Upload, Add, Delete, Image as ImageIcon } from '@mui/icons-material'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  )
}

export const SitePage = () => {
  const [activeTab, setActiveTab] = useState(0)

  // Home Page Settings
  const [homeContent, setHomeContent] = useState({
    heroImage: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200',
    heroTitle: 'Welcome to Our Kung Fu School',
    heroSubtitle: 'Master the ancient art of Wing Chun',
    description:
      'Join our community of dedicated martial artists. We offer authentic Wing Chun training in a supportive and traditional environment.',
    featureImage1: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400',
    featureImage2: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400',
    featureImage3: 'https://images.unsplash.com/photo-1563401161-f155e31c7e05?w=400',
  })

  // Schedule Settings
  const [schedule, setSchedule] = useState([
    { id: 1, day: 'Monday', startTime: '18:00', endTime: '20:00', class: 'Adult Wing Chun' },
    { id: 2, day: 'Tuesday', startTime: '19:00', endTime: '20:30', class: 'Advanced Training' },
    { id: 3, day: 'Wednesday', startTime: '18:00', endTime: '20:00', class: 'Adult Wing Chun' },
    { id: 4, day: 'Thursday', startTime: '17:00', endTime: '18:00', class: 'Kids Class' },
    { id: 5, day: 'Saturday', startTime: '10:00', endTime: '12:00', class: 'Open Training' },
  ])

  // Available seminars (from seminars page)
  const availableSeminars = [
    { id: 1, title: 'Tiger Form Intensive' },
    { id: 2, title: 'Wing Chun Basics Workshop' },
    { id: 3, title: 'Wooden Dummy Mastery' },
  ]

  // Membership Display Settings
  const [membershipDisplay, setMembershipDisplay] = useState({
    showMonthly: true,
    show3Month: true,
    show6Month: true,
    show1Year: true,
    showAddons: true,
    selectedSeminars: [1, 2], // IDs of seminars to display
  })

  // Curriculum Schedule Display (by month for different belt levels)
  const [curriculumSchedule, setCurriculumSchedule] = useState([
    {
      id: 1,
      month: 'March 2026',
      brownBelt: {
        image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400',
        title: 'Crane Spreads its Wings',
        secondaryTitle: 'Defensive Techniques',
        description: 'Focus on fluid defensive movements and counter-strikes',
      },
      blackBelt: {
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400',
        title: 'Golden Tiger',
        secondaryTitle: 'Advanced Forms',
        description: 'Master the powerful Golden Tiger form and applications',
      },
    },
    {
      id: 2,
      month: 'April 2026',
      brownBelt: {
        image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400',
        title: 'Dragon Descends',
        secondaryTitle: '',
        description: '',
      },
      blackBelt: {
        image: 'https://images.unsplash.com/photo-1563401161-f155e31c7e05?w=400',
        title: 'Phoenix Rising',
        secondaryTitle: 'Weapon Integration',
        description: '',
      },
    },
  ])

  // About Us Content
  const [aboutContent, setAboutContent] = useState({
    title: 'About Our School',
    description:
      'Founded in 2010, our school is dedicated to preserving and teaching authentic Wing Chun Kung Fu. Our lineage traces directly back to Ip Man through our Sifu.',
    instructorName: 'Sifu Michael Chen',
    instructorBio:
      'With over 20 years of experience, Sifu Chen has dedicated his life to mastering and teaching Wing Chun. He trained under Grand Master Wong and has produced numerous accomplished students.',
    instructorImage: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400',
  })

  const handleSaveHome = () => {
    console.log('Saving home content:', homeContent)
    // TODO: Save to backend
  }

  const handleSaveSchedule = () => {
    console.log('Saving schedule:', schedule)
    // TODO: Save to backend
  }

  const handleSaveMemberships = () => {
    console.log('Saving membership display settings:', membershipDisplay)
    // TODO: Save to backend
  }

  const handleSaveAbout = () => {
    console.log('Saving about content:', aboutContent)
    // TODO: Save to backend
  }

  const addScheduleItem = () => {
    const newId = Math.max(...schedule.map((s) => s.id)) + 1
    setSchedule([
      ...schedule,
      { id: newId, day: 'Monday', startTime: '18:00', endTime: '20:00', class: 'New Class' },
    ])
  }

  const deleteScheduleItem = (id: number) => {
    setSchedule(schedule.filter((s) => s.id !== id))
  }

  const updateScheduleItem = (id: number, field: string, value: string) => {
    setSchedule(schedule.map((s) => (s.id === id ? { ...s, [field]: value } : s)))
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Website Content Management
      </Typography>

      <Card sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)}>
          <Tab label="Home Page" />
          <Tab label="Class Schedule" />
          <Tab label="Memberships Display" />
          <Tab label="Curriculum Schedule" />
          <Tab label="About Us" />
        </Tabs>
      </Card>

      {/* Home Page Tab */}
      <TabPanel value={activeTab} index={0}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Home Page Content
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Hero Section
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Hero Image URL"
                  value={homeContent.heroImage}
                  onChange={(e) => setHomeContent({ ...homeContent, heroImage: e.target.value })}
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <Upload />
                      </IconButton>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Hero Title"
                  value={homeContent.heroTitle}
                  onChange={(e) => setHomeContent({ ...homeContent, heroTitle: e.target.value })}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Hero Subtitle"
                  value={homeContent.heroSubtitle}
                  onChange={(e) =>
                    setHomeContent({ ...homeContent, heroSubtitle: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Main Description"
                  value={homeContent.description}
                  onChange={(e) =>
                    setHomeContent({ ...homeContent, description: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Feature Images
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Feature Image 1"
                  value={homeContent.featureImage1}
                  onChange={(e) =>
                    setHomeContent({ ...homeContent, featureImage1: e.target.value })
                  }
                  InputProps={{
                    startAdornment: <ImageIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Feature Image 2"
                  value={homeContent.featureImage2}
                  onChange={(e) =>
                    setHomeContent({ ...homeContent, featureImage2: e.target.value })
                  }
                  InputProps={{
                    startAdornment: <ImageIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Feature Image 3"
                  value={homeContent.featureImage3}
                  onChange={(e) =>
                    setHomeContent({ ...homeContent, featureImage3: e.target.value })
                  }
                  InputProps={{
                    startAdornment: <ImageIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  startIcon={<Save />}
                  onClick={handleSaveHome}
                  sx={{
                    backgroundColor: 'accent1.vibrant',
                    '&:hover': { backgroundColor: 'accent1.main' },
                  }}
                >
                  Save Home Page
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </TabPanel>

      {/* Schedule Tab */}
      <TabPanel value={activeTab} index={1}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5">Class Schedule</Typography>
              <Button variant="outlined" startIcon={<Add />} onClick={addScheduleItem}>
                Add Class
              </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2}>
              {schedule.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={2}>
                          <FormControl fullWidth size="small">
                            <InputLabel>Day</InputLabel>
                            <Select
                              value={item.day}
                              label="Day"
                              onChange={(e) => updateScheduleItem(item.id, 'day', e.target.value)}
                            >
                              <MenuItem value="Monday">Monday</MenuItem>
                              <MenuItem value="Tuesday">Tuesday</MenuItem>
                              <MenuItem value="Wednesday">Wednesday</MenuItem>
                              <MenuItem value="Thursday">Thursday</MenuItem>
                              <MenuItem value="Friday">Friday</MenuItem>
                              <MenuItem value="Saturday">Saturday</MenuItem>
                              <MenuItem value="Sunday">Sunday</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                          <TextField
                            fullWidth
                            size="small"
                            label="Start Time"
                            type="time"
                            value={item.startTime}
                            onChange={(e) =>
                              updateScheduleItem(item.id, 'startTime', e.target.value)
                            }
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                          <TextField
                            fullWidth
                            size="small"
                            label="End Time"
                            type="time"
                            value={item.endTime}
                            onChange={(e) => updateScheduleItem(item.id, 'endTime', e.target.value)}
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                          <TextField
                            fullWidth
                            size="small"
                            label="Class Name"
                            value={item.class}
                            onChange={(e) => updateScheduleItem(item.id, 'class', e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={1}>
                          <IconButton color="error" onClick={() => deleteScheduleItem(item.id)}>
                            <Delete />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  startIcon={<Save />}
                  onClick={handleSaveSchedule}
                  sx={{
                    mt: 2,
                    backgroundColor: 'accent1.vibrant',
                    '&:hover': { backgroundColor: 'accent1.main' },
                  }}
                >
                  Save Schedule
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </TabPanel>

      {/* Memberships Display Tab */}
      <TabPanel value={activeTab} index={2}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Membership Display Settings
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Show on Public Site
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={membershipDisplay.showMonthly}
                      onChange={(e) =>
                        setMembershipDisplay({ ...membershipDisplay, showMonthly: e.target.checked })
                      }
                    />
                  }
                  label="Month-to-Month"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={membershipDisplay.show3Month}
                      onChange={(e) =>
                        setMembershipDisplay({ ...membershipDisplay, show3Month: e.target.checked })
                      }
                    />
                  }
                  label="3-Month Package"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={membershipDisplay.show6Month}
                      onChange={(e) =>
                        setMembershipDisplay({ ...membershipDisplay, show6Month: e.target.checked })
                      }
                    />
                  }
                  label="6-Month Package"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={membershipDisplay.show1Year}
                      onChange={(e) =>
                        setMembershipDisplay({ ...membershipDisplay, show1Year: e.target.checked })
                      }
                    />
                  }
                  label="1-Year Package"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={membershipDisplay.showAddons}
                      onChange={(e) =>
                        setMembershipDisplay({ ...membershipDisplay, showAddons: e.target.checked })
                      }
                    />
                  }
                  label="Add-On Programs"
                />
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Select Seminars to Display
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Seminars to Show on Public Site</InputLabel>
                  <Select
                    multiple
                    value={membershipDisplay.selectedSeminars}
                    onChange={(e) =>
                      setMembershipDisplay({
                        ...membershipDisplay,
                        selectedSeminars: e.target.value as number[],
                      })
                    }
                    input={<OutlinedInput label="Seminars to Show on Public Site" />}
                    renderValue={(selected) =>
                      (selected as number[])
                        .map((id) => availableSeminars.find((s) => s.id === id)?.title)
                        .join(', ')
                    }
                  >
                    {availableSeminars.map((seminar) => (
                      <MenuItem key={seminar.id} value={seminar.id}>
                        <Checkbox
                          checked={membershipDisplay.selectedSeminars.includes(seminar.id)}
                        />
                        <ListItemText primary={seminar.title} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  startIcon={<Save />}
                  onClick={handleSaveMemberships}
                  sx={{
                    backgroundColor: 'accent1.vibrant',
                    '&:hover': { backgroundColor: 'accent1.main' },
                  }}
                >
                  Save Display Settings
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </TabPanel>

      {/* Curriculum Schedule Tab */}
      <TabPanel value={activeTab} index={3}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5">Curriculum Schedule Display</Typography>
              <Button
                variant="outlined"
                startIcon={<Add />}
                onClick={() => {
                  const newId = Math.max(...curriculumSchedule.map((s) => s.id)) + 1
                  setCurriculumSchedule([
                    ...curriculumSchedule,
                    {
                      id: newId,
                      month: 'New Month',
                      brownBelt: { image: '', title: '', secondaryTitle: '', description: '' },
                      blackBelt: { image: '', title: '', secondaryTitle: '', description: '' },
                    },
                  ])
                }}
              >
                Add Month
              </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3}>
              {curriculumSchedule.map((schedule) => (
                <Grid item xs={12} key={schedule.id}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <TextField
                          label="Month"
                          value={schedule.month}
                          onChange={(e) =>
                            setCurriculumSchedule(
                              curriculumSchedule.map((s) =>
                                s.id === schedule.id ? { ...s, month: e.target.value } : s
                              )
                            )
                          }
                          sx={{ width: 200 }}
                        />
                        <IconButton
                          color="error"
                          onClick={() =>
                            setCurriculumSchedule(curriculumSchedule.filter((s) => s.id !== schedule.id))
                          }
                        >
                          <Delete />
                        </IconButton>
                      </Box>

                      <Grid container spacing={3}>
                        {/* Brown Belt Section */}
                        <Grid item xs={12} md={6}>
                          <Typography variant="h6" gutterBottom>
                            Brown Belt
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <TextField
                                fullWidth
                                size="small"
                                label="Image URL"
                                value={schedule.brownBelt.image}
                                onChange={(e) =>
                                  setCurriculumSchedule(
                                    curriculumSchedule.map((s) =>
                                      s.id === schedule.id
                                        ? {
                                            ...s,
                                            brownBelt: { ...s.brownBelt, image: e.target.value },
                                          }
                                        : s
                                    )
                                  )
                                }
                                InputProps={{
                                  startAdornment: <ImageIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                fullWidth
                                size="small"
                                label="Title"
                                value={schedule.brownBelt.title}
                                onChange={(e) =>
                                  setCurriculumSchedule(
                                    curriculumSchedule.map((s) =>
                                      s.id === schedule.id
                                        ? {
                                            ...s,
                                            brownBelt: { ...s.brownBelt, title: e.target.value },
                                          }
                                        : s
                                    )
                                  )
                                }
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                fullWidth
                                size="small"
                                label="Secondary Title (optional)"
                                value={schedule.brownBelt.secondaryTitle}
                                onChange={(e) =>
                                  setCurriculumSchedule(
                                    curriculumSchedule.map((s) =>
                                      s.id === schedule.id
                                        ? {
                                            ...s,
                                            brownBelt: { ...s.brownBelt, secondaryTitle: e.target.value },
                                          }
                                        : s
                                    )
                                  )
                                }
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                fullWidth
                                size="small"
                                multiline
                                rows={2}
                                label="Description (optional)"
                                value={schedule.brownBelt.description}
                                onChange={(e) =>
                                  setCurriculumSchedule(
                                    curriculumSchedule.map((s) =>
                                      s.id === schedule.id
                                        ? {
                                            ...s,
                                            brownBelt: { ...s.brownBelt, description: e.target.value },
                                          }
                                        : s
                                    )
                                  )
                                }
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* Black Belt Section */}
                        <Grid item xs={12} md={6}>
                          <Typography variant="h6" gutterBottom>
                            Black Belt
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <TextField
                                fullWidth
                                size="small"
                                label="Image URL"
                                value={schedule.blackBelt.image}
                                onChange={(e) =>
                                  setCurriculumSchedule(
                                    curriculumSchedule.map((s) =>
                                      s.id === schedule.id
                                        ? {
                                            ...s,
                                            blackBelt: { ...s.blackBelt, image: e.target.value },
                                          }
                                        : s
                                    )
                                  )
                                }
                                InputProps={{
                                  startAdornment: <ImageIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                fullWidth
                                size="small"
                                label="Title"
                                value={schedule.blackBelt.title}
                                onChange={(e) =>
                                  setCurriculumSchedule(
                                    curriculumSchedule.map((s) =>
                                      s.id === schedule.id
                                        ? {
                                            ...s,
                                            blackBelt: { ...s.blackBelt, title: e.target.value },
                                          }
                                        : s
                                    )
                                  )
                                }
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                fullWidth
                                size="small"
                                label="Secondary Title (optional)"
                                value={schedule.blackBelt.secondaryTitle}
                                onChange={(e) =>
                                  setCurriculumSchedule(
                                    curriculumSchedule.map((s) =>
                                      s.id === schedule.id
                                        ? {
                                            ...s,
                                            blackBelt: { ...s.blackBelt, secondaryTitle: e.target.value },
                                          }
                                        : s
                                    )
                                  )
                                }
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                fullWidth
                                size="small"
                                multiline
                                rows={2}
                                label="Description (optional)"
                                value={schedule.blackBelt.description}
                                onChange={(e) =>
                                  setCurriculumSchedule(
                                    curriculumSchedule.map((s) =>
                                      s.id === schedule.id
                                        ? {
                                            ...s,
                                            blackBelt: { ...s.blackBelt, description: e.target.value },
                                          }
                                        : s
                                    )
                                  )
                                }
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  startIcon={<Save />}
                  onClick={() => console.log('Saving curriculum schedule:', curriculumSchedule)}
                  sx={{
                    backgroundColor: 'accent1.vibrant',
                    '&:hover': { backgroundColor: 'accent1.main' },
                  }}
                >
                  Save Curriculum Schedule
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </TabPanel>

      {/* About Us Tab */}
      <TabPanel value={activeTab} index={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              About Us Content
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Page Title"
                  value={aboutContent.title}
                  onChange={(e) => setAboutContent({ ...aboutContent, title: e.target.value })}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="School Description"
                  value={aboutContent.description}
                  onChange={(e) =>
                    setAboutContent({ ...aboutContent, description: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Head Instructor
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Instructor Name"
                  value={aboutContent.instructorName}
                  onChange={(e) =>
                    setAboutContent({ ...aboutContent, instructorName: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Instructor Photo URL"
                  value={aboutContent.instructorImage}
                  onChange={(e) =>
                    setAboutContent({ ...aboutContent, instructorImage: e.target.value })
                  }
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <Upload />
                      </IconButton>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="Instructor Biography"
                  value={aboutContent.instructorBio}
                  onChange={(e) =>
                    setAboutContent({ ...aboutContent, instructorBio: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  startIcon={<Save />}
                  onClick={handleSaveAbout}
                  sx={{
                    backgroundColor: 'accent1.vibrant',
                    '&:hover': { backgroundColor: 'accent1.main' },
                  }}
                >
                  Save About Us
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </TabPanel>
    </Box>
  )
}
