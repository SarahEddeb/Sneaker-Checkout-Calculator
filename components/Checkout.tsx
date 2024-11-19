import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Checkout(props: { subtotal: number; tax: number; discountPercent: number; discount: number; total: number; }) {

    return (
      <Grid container direction="column">

        <Grid item>
          <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
            <Grid item>
              <Typography variant="h3" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 400, fontSize: '1.15rem' }}>
                Subtotal
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 400, fontSize: '1.15rem' }}>
                ${props.subtotal}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item >
          <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
            <Grid item>
              <Typography variant="h3" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 400, fontSize: '1.15rem' }}>
                Tax 
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 400, fontSize: '1.15rem' }}>
                ${props.tax}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item >
          <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
            <Grid item>
              <Typography variant="h3" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 400, fontSize: '1.15rem' }}>
                {/* Discount {(props.discountPercent*100).toString()}% */}
                Discount {props.discountPercent*100}%
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 400, fontSize: '1.15rem' }}>
                ${props.discount}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item >
          <Grid container direction="row" justifyContent="space-between" sx={{ mt: 3, mb: 5 }}>
            <Grid item>
              <Typography variant="h3" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 500, fontSize: '1.25rem' }}>
                Total
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 500, fontSize: '1.25rem' }}>
                ${props.total}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
  );
}
