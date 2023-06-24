import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import shoopy from '../assets/logo/shoopy.jpeg';

export default function Card() {
  const data = [
    {
      orgName: 'Name.com Inc.',
      date: 'Jun 22',
      paymentType: 'Automatic Payment',
      amount: '$9.89',
    },
    {
      orgName: 'Name.com Inc.',
      date: 'Jun 21',
      paymentType: 'Automatic Payment',
      amount: '$9.89',
    },
    {
      orgName: 'Name.com Inc.',
      date: 'Jun 20',
      paymentType: 'Automatic Payment',
      amount: '$8.99',
    },
    {
      orgName: 'Name.com Inc.',
      date: 'Jun 19',
      paymentType: 'Automatic Payment',
      amount: '$9.99',
    },
    {
      orgName: 'Name.com Inc.',
      date: 'Jun 18',
      paymentType: 'Automatic Payment',
      amount: '$9.99',
    },
    {
      orgName: 'Name.com Inc.',
      date: 'Jun 17',
      paymentType: 'Automatic Payment',
      amount: '$9.80',
    },
    {
      orgName: 'Name.com Inc.',
      date: 'Jun 16',
      paymentType: 'Automatic Payment',
      amount: '$7.89',
    },
  ];

  return (
    <Stack mt="10px">
      {data.map((item, index) => (
        <Stack
          className="box"
          key={index}
          sx={{
            mb: '20px',
            borderRadius: '10px',
            border: '1px solid grey',
            p: '10px',
          }}
        >
          <Stack direction="row">
            <Grid container justifyContent="flex-start">
              <Stack
                direction="row"
                justifyContent="flex-start"
                margin="0"
                spacing={1}
              >
                <img
                  src={shoopy}
                  alt="shoopy"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '15px',
                    marginLeft: '3px',
                    marginTop: '10px',
                    marginBottom: '10px',
                  }}
                />
                <Stack direction="column">
                  <Typography fontWeight="700" mt="10px">
                    {item.orgName}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={0.5}
                  >
                    <Typography fontWeight="300" fontSize="10px">
                      {item.date}
                    </Typography>
                    <Typography fontWeight="300" fontSize="10px">
                      ∙
                    </Typography>

                    <Typography fontWeight="300" fontSize="10px">
                      {item.paymentType}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Typography fontWeight="700" mt="10px">
                - {item.amount}
              </Typography>
            </Grid>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
