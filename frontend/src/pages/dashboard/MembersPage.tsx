import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material'
import { Visibility, Edit } from '@mui/icons-material'

// Belt colors with their display colors
const beltColors: { [key: string]: string } = {
  White: '#f5f5f5',
  Yellow: '#ffd700',
  Orange: '#ff8c00',
  Green: '#32cd32',
  Blue: '#1e90ff',
  Purple: '#9370db',
  Brown: '#8b4513',
  Black: '#1a1a1a',
}

// Mock data
const members = [
  {
    id: 1,
    name: 'John Smith',
    beltLevel: 'Yellow',
    seminarsAttended: ['Tiger Form', 'Wing Chun Basics'],
    knownForms: ['Siu Lim Tao', 'Basic Stances', 'Tiger Form'],
    nextForm: 'Chum Kiu',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    beltLevel: 'Green',
    seminarsAttended: ['Tiger Form', 'Wing Chun Basics', 'Chum Kiu', 'Weapons Training'],
    knownForms: ['Siu Lim Tao', 'Chum Kiu', 'Tiger Form', 'Basic Chi Sao'],
    nextForm: 'Biu Jee',
  },
  {
    id: 3,
    name: 'Mike Chen',
    beltLevel: 'Black',
    seminarsAttended: ['Tiger Form', 'Wing Chun Basics', 'Chum Kiu', 'Biu Jee', 'Weapons Training', 'Advanced Chi Sao'],
    knownForms: ['Siu Lim Tao', 'Chum Kiu', 'Biu Jee', 'Wooden Dummy', 'Dragon Pole', 'Butterfly Swords'],
    nextForm: 'Mastery',
  },
  {
    id: 4,
    name: 'Lisa Wang',
    beltLevel: 'White',
    seminarsAttended: [],
    knownForms: ['Basic Stances'],
    nextForm: 'Siu Lim Tao',
  },
  {
    id: 5,
    name: 'David Rodriguez',
    beltLevel: 'Orange',
    seminarsAttended: ['Tiger Form', 'Wing Chun Basics'],
    knownForms: ['Siu Lim Tao', 'Tiger Form', 'Basic Stances'],
    nextForm: 'Chum Kiu',
  },
  {
    id: 6,
    name: 'Emily Brown',
    beltLevel: 'Purple',
    seminarsAttended: ['Tiger Form', 'Wing Chun Basics', 'Chum Kiu', 'Biu Jee', 'Weapons Training'],
    knownForms: ['Siu Lim Tao', 'Chum Kiu', 'Biu Jee', 'Basic Chi Sao', 'Tiger Form'],
    nextForm: 'Wooden Dummy',
  },
  {
    id: 7,
    name: 'James Wilson',
    beltLevel: 'White',
    seminarsAttended: [],
    knownForms: ['Basic Stances'],
    nextForm: 'Siu Lim Tao',
  },
  {
    id: 8,
    name: 'Anna Martinez',
    beltLevel: 'Blue',
    seminarsAttended: ['Tiger Form', 'Wing Chun Basics', 'Chum Kiu'],
    knownForms: ['Siu Lim Tao', 'Chum Kiu', 'Tiger Form', 'Basic Chi Sao'],
    nextForm: 'Biu Jee',
  },
]

export const MembersPage = () => {
  const getBeltChip = (belt: string) => {
    const bgColor = beltColors[belt] || '#grey'
    const textColor = belt === 'Black' || belt === 'Blue' || belt === 'Purple' || belt === 'Brown' ? 'white' : 'black'

    return (
      <Chip
        label={belt}
        size="small"
        sx={{
          backgroundColor: bgColor,
          color: textColor,
          fontWeight: 'bold',
          border: belt === 'White' ? '1px solid #ccc' : 'none',
        }}
      />
    )
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Student Progress Tracking
      </Typography>

      <TableContainer component={Paper} sx={{ boxShadow: (theme) => theme.palette.boxShadow.light }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'background.paper' }}>
              <TableCell><strong>Student Name</strong></TableCell>
              <TableCell align="center"><strong>Belt Level</strong></TableCell>
              <TableCell><strong>Seminars Attended</strong></TableCell>
              <TableCell><strong>Known Forms</strong></TableCell>
              <TableCell><strong>Next Form</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow
                key={member.id}
                sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <TableCell>{member.name}</TableCell>
                <TableCell align="center">{getBeltChip(member.beltLevel)}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {member.seminarsAttended.length > 0 ? (
                      member.seminarsAttended.map((seminar, idx) => (
                        <Chip
                          key={idx}
                          label={seminar}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.75rem' }}
                        />
                      ))
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        None yet
                      </Typography>
                    )}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {member.knownForms.map((form, idx) => (
                      <Chip
                        key={idx}
                        label={form}
                        size="small"
                        color="primary"
                        variant="filled"
                        sx={{ fontSize: '0.75rem' }}
                      />
                    ))}
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={member.nextForm}
                    size="small"
                    color="secondary"
                    sx={{ fontWeight: 'bold' }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="View Details">
                    <IconButton size="small" color="primary">
                      <Visibility fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit Progress">
                    <IconButton size="small" color="primary">
                      <Edit fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
