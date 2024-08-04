// pages/dash.js
'use client';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Deposits from '@/app/dashboard/Deposits'; // Atualize o caminho de importação
import Orders from '@/app/dashboard/Orders'; // Atualize o caminho de importação
import Chart from '@/app/dashboard/Chart'; // Importe o componente Chart
import * as React from 'react';

export default function Dash() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Chart /> {/* Adicione o componente Chart */}
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
