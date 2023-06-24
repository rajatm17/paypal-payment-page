import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import paypal from '../assets/logo/paypal.png';

import '../App.css';

import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar() {
  return (
    <Box sx={{ background: '#142C8F', width: '100%', mx: 0 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          ml="250px"
          p="15px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
          sx={{ direction: { xs: 'column', md: 'row' } }}
        >
          <img
            src={paypal}
            alt="PayPal Logo"
            style={{ height: '40px', cursor: 'pointer' }}
          />

          <Button
            className="nav-button"
            variant="outlined"
            sx={{
              ':hover': {
                bgcolor: '#27419B',
              },
            }}
            style={{
              borderRadius: '30px',
              textTransform: 'capitalize',
              color: 'white',
              border: '0px solid',
            }}
            component={Link}
            to="/"
          >
            Home
          </Button>

          <Button
            className="nav-button"
            variant="outlined"
            style={{
              borderRadius: '30px',
              textTransform: 'capitalize',
              color: 'white',
              border: '0px solid',
            }}
            sx={{
              ':hover': {
                bgcolor: '#27419B',
              },
            }}
            component={Link}
            to="/"
          >
            Finances
          </Button>

          <Button
            className="nav-button"
            variant="outlined"
            style={{
              borderRadius: '30px',
              textTransform: 'capitalize',
              color: 'white',
              border: '0px solid',
            }}
            sx={{
              ':hover': {
                bgcolor: '#27419B',
              },
            }}
            component={Link}
            to="/"
          >
            Send and Request
          </Button>

          <Button
            className="nav-button"
            variant="outlined"
            style={{
              borderRadius: '30px',
              textTransform: 'capitalize',
              color: 'white',
              border: '0px solid',
            }}
            sx={{
              ':hover': {
                bgcolor: '#27419B',
              },
            }}
            component={Link}
            to="/"
          >
            Deals
          </Button>

          <Button
            className="nav-button"
            variant="outlined"
            style={{
              borderRadius: '30px',
              textTransform: 'capitalize',
              color: 'white',
              border: '0px solid',
            }}
            sx={{
              ':hover': {
                bgcolor: '#27419B',
              },
            }}
            component={Link}
            to="/"
          >
            Wallet
          </Button>

          <Button
            className="nav-button"
            variant="outlined"
            style={{
              borderRadius: '30px',
              textTransform: 'capitalize',
              color: 'white',
              border: '0px solid',
            }}
            sx={{
              ':hover': {
                bgcolor: '#27419B',
              },
            }}
            component={Link}
            to="/"
          >
            Activity
          </Button>

          <Button
            className="nav-button"
            variant="outlined"
            style={{
              borderRadius: '30px',
              textTransform: 'capitalize',
              color: 'white',
              border: '0px solid',
            }}
            sx={{
              ':hover': {
                bgcolor: '#27419B',
              },
            }}
            component={Link}
            to="/"
          >
            Help
          </Button>
        </Stack>
        <Stack>
          <Stack direction="row" mr="250px" spacing={1} alignItems="center">
            <NotificationsIcon sx={{ color: 'white', cursor: 'pointer' }} />
            <SettingsIcon sx={{ color: 'white', cursor: 'pointer' }} />

            <Button
              className="nav-button"
              variant="outlined"
              style={{
                borderRadius: '30px',
                textTransform: 'uppercase',
                color: 'white',
                border: '0px solid',
              }}
              sx={{
                ':hover': {
                  bgcolor: '#27419B',
                },
              }}
              component={Link}
              to="/"
            >
              Log out
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
