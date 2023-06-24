import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

import Card from '../components/Card';

import GetAppIcon from '@mui/icons-material/GetApp';
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  return (
    <div style={{ margin: 'auto', width: '50%' }}>
      <Stack direction="column" spacing={2}>
        <Stack
          direction="row"
          gap={1}
          sx={{ gap: { xs: 2, sm: 4, md: 3, lg: 3 } }}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            id="outlined-basic"
            placeholder="Search by Name or Email"
            variant="outlined"
            sx={{
              width: { sm: '600px', xs: '400px', lg: '800px', md: '700px' },
              mt: '50px',
            }}
            InputProps={{
              style: {
                borderRadius: '60px',
                border: '1px solid black',
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <div style={{ marginTop: '40px', height: '35px' }}>
            <GetAppIcon
              sx={{
                color: '#0F258E',
                cursor: 'pointer',
                p: '5px',
                backgroundColor: '#F7F5F1',
                borderRadius: '35px',
              }}
              fontSize="large"
            />
          </div>
        </Stack>
        <Box
          m={1} //margin
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Typography fontWeight="500">Filter by</Typography>
        </Box>
        <Box sx={{ ml: { xs: '20px', sm: '40px', md: '70px', lg: '90px' } }}>
          <Stack direction="row" gap={2} sx={{ mb: '40px' }}>
            <Button
              variant="outlined"
              sx={{ ':hover': { bgcolor: '#D1F2FF' } }}
              style={{
                borderRadius: '60px',
                textTransform: 'capitalize',
              }}
            >
              {' '}
              Date Last 90 days
            </Button>
            <Button
              sx={{
                px: { xs: '20px', sm: '25px', md: '10px', lg: '10px' },
                ':hover': { bgcolor: '#D1F2FF' },
              }}
              variant="outlined"
              style={{ borderRadius: '30px', textTransform: 'capitalize' }}
            >
              Type
            </Button>
            <Button
              sx={{
                px: { xs: '20px', sm: '25px', md: '10px', lg: '10px' },
                ':hover': { bgcolor: '#D1F2FF' },
              }}
              variant="outlined"
              style={{ borderRadius: '30px', textTransform: 'capitalize' }}
            >
              Status
            </Button>
          </Stack>
          <Typography fontWeight="700" mb="30px">
            Completed
          </Typography>
          <Typography fontWeight="300" fontSize="14px" color="grey">
            This Week
          </Typography>
          <Card />
        </Box>
      </Stack>
    </div>
  );
}
