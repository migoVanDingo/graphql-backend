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
} from '@mui/material'
import { Visibility, Email } from '@mui/icons-material'

// Mock data
const accounts = [
  {
    id: 1,
    name: 'John Smith',
    balance: 0,
    monthlyRate: 150,
    membershipLength: '2 years 3 months',
    recurringBilling: true,
    status: 'current',
    lastPayment: '2026-02-15',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    balance: 0,
    monthlyRate: 150,
    membershipLength: '1 year 8 months',
    recurringBilling: true,
    status: 'current',
    lastPayment: '2026-02-10',
  },
  {
    id: 3,
    name: 'Mike Chen',
    balance: -150,
    monthlyRate: 150,
    membershipLength: '3 years 1 month',
    recurringBilling: false,
    status: 'past_due',
    lastPayment: '2026-01-05',
  },
  {
    id: 4,
    name: 'Lisa Wang',
    balance: 0,
    monthlyRate: 120,
    membershipLength: '6 months',
    recurringBilling: true,
    status: 'current',
    lastPayment: '2026-02-18',
  },
  {
    id: 5,
    name: 'David Rodriguez',
    balance: -300,
    monthlyRate: 150,
    membershipLength: '1 year 2 months',
    recurringBilling: false,
    status: 'past_due',
    lastPayment: '2025-12-20',
  },
  {
    id: 6,
    name: 'Emily Brown',
    balance: 0,
    monthlyRate: 150,
    membershipLength: '4 years',
    recurringBilling: true,
    status: 'current',
    lastPayment: '2026-02-12',
  },
  {
    id: 7,
    name: 'James Wilson',
    balance: 0,
    monthlyRate: 180,
    membershipLength: '2 months',
    recurringBilling: true,
    status: 'current',
    lastPayment: '2026-02-16',
  },
  {
    id: 8,
    name: 'Anna Martinez',
    balance: -150,
    monthlyRate: 150,
    membershipLength: '5 months',
    recurringBilling: false,
    status: 'past_due',
    lastPayment: '2026-01-10',
  },
]

export const AccountsPage = () => {
  const getStatusChip = (status: string) => {
    if (status === 'current') {
      return <Chip label="Current" color="success" size="small" />
    }
    return <Chip label="Past Due" color="error" size="small" />
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Member Accounts
      </Typography>

      <TableContainer component={Paper} sx={{ boxShadow: (theme) => theme.palette.boxShadow.light }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'background.paper' }}>
              <TableCell><strong>Member Name</strong></TableCell>
              <TableCell align="right"><strong>Balance</strong></TableCell>
              <TableCell align="right"><strong>Monthly Rate</strong></TableCell>
              <TableCell><strong>Membership Length</strong></TableCell>
              <TableCell align="center"><strong>Recurring Billing</strong></TableCell>
              <TableCell align="center"><strong>Status</strong></TableCell>
              <TableCell align="center"><strong>Last Payment</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((account) => (
              <TableRow
                key={account.id}
                sx={{
                  '&:hover': { backgroundColor: 'action.hover' },
                  backgroundColor: account.status === 'past_due' ? 'error.light' : 'inherit',
                }}
              >
                <TableCell>{account.name}</TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: account.balance < 0 ? 'error.main' : 'success.main',
                    fontWeight: 'bold',
                  }}
                >
                  ${Math.abs(account.balance)}
                  {account.balance < 0 && ' owed'}
                </TableCell>
                <TableCell align="right">${account.monthlyRate}/mo</TableCell>
                <TableCell>{account.membershipLength}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={account.recurringBilling ? 'Yes' : 'No'}
                    color={account.recurringBilling ? 'primary' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">{getStatusChip(account.status)}</TableCell>
                <TableCell align="center">{account.lastPayment}</TableCell>
                <TableCell align="center">
                  <IconButton size="small" color="primary">
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="primary">
                    <Email fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
