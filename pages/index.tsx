import type { NextPage } from 'next'
import { useEffect } from 'react';
import Head from 'next/head'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ItemCard from '../components/ItemCard'
import Typography from '@mui/material/Typography';
import CalculateIcon from '@mui/icons-material/Calculate';
import CartItem from '../components/CartItem';
import { useState } from 'react';
import Checkout from '../components/Checkout';
import axios from 'axios';

const Home: NextPage = () => {
  const [subtotal, calcTotal] = useState(0)
  const [discountPercent, calcDiscount] = useState(0)

  const [initialSub, setInitialSub] = useState(false)

  const [itemsList, setItems] = useState([{id: '', name: '', photo: '', price: -1, added: false}])

  useEffect(() => {
    axios
    .post("/db/getAllData")
    .then((response) => {
      if (response.data.length > 0) {
        let data = response.data;
        setItems(data)

        let value = 0
        if (!initialSub) {
          setInitialSub(true)
          for (let i = 0; i < data.length; i++){
            if (data[i].added) {
              value += data[i].price

            }
          }
          subtotalCalculator(value)
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
  })

  const subtotalCalculator = (value: number) => {
    calcTotal(subtotal + value)
    
    if ((subtotal + value) >= 100 && (subtotal + value) < 150) {
      calcDiscount(0.25)
    } else if ((subtotal + value) >= 150 && (subtotal + value) < 300) {
      calcDiscount(0.30)
    } else if ((subtotal + value) >= 300) {
      calcDiscount(0.60)
    } else {
      calcDiscount(0)
    }
      
    total(Number(tax()), Number(discount(discountPercent)))
  }

  const tax = () => {
    const HST = 0.13
    return Number((subtotal*HST).toFixed(2))
  }

  const discount = (percentage: number) => {
    return Number((subtotal*Number(percentage.toFixed(2))).toFixed(2))
  }

  const total = (tax: number, discount: number) => {
    return Number((subtotal+tax-discount).toFixed(2))
  }

  const addRemoveItem = (id: number, added: boolean) => {
    //TODO
    return axios
        .post("/db/updateAdded", {id: id, value: added})
        .then((res) => console.log(res.data));
    // items[id-1].added = !items[id-1].added
  }

  return (
    <div> 
      <Head>
        <title>Sneaker Checkout Calculator</title>
        <meta name="description" content="A simple checkout calculator for your sneaker obssession" />
      </Head>
      <header>
          
       <Grid container justifyContent='center' sx={{ backgroundColor: "#8a42f5"}}>
        <Grid item>
          <Typography variant="subtitle2" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', py: 1, px: 2 }}>
            Get 25% off purchases over $100, 30% off purchases over $150, and 60% off purchases over $300!
          </Typography>
        </Grid>
      </Grid>
          
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Grid container direction='row' alignItems="center" spacing={1}>
            <Grid item>
              <CalculateIcon sx={{ fontSize: '1.75rem'}}/>
            </Grid>
            <Grid item>
              <Typography variant="h1" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 500, fontSize: '1.75rem' }}>
                Sneaker Checkout Calculator
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </header>
      <main> {/* className={styles.main} */}
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Grid container direction="row" spacing={4}>
            <Grid item xs={12} md={8} sx={{ mb: 3 }}>
              
              <Grid container>
                <Grid item>
                  <Typography variant="h2" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 500, fontSize: '1.35rem' }}>
                    Add Sneakers
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container spacing={3}>
                    {itemsList.map((item) => (
                      <ItemCard key={item.id} id={item.id} name={item.name} photo={item.photo} price={item.price} added={item.added} subtotalCalculator={subtotalCalculator} addRemoveItem={addRemoveItem}/>
                    ))}
                   </Grid>
                </Grid>
              </Grid>
              
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container direction='column' spacing={3}>
                <Grid item>
                  <Typography variant="h2" sx={{ fontFamily: 'Poppins, Helvetica, Sans Serif', fontWeight: 500, fontSize: '1.35rem' }}>
                    Checkout
                  </Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={1} direction='column'>
                      {itemsList.map((item) => (
                        <CartItem key={item.id} id={item.id} name={item.name} photo={item.photo} price={item.price} added={item.added} subtotalCalculator={subtotalCalculator} addRemoveItem={addRemoveItem}/>
                      ))}
                    </Grid>
                </Grid>
                <Grid item>
                  <Checkout subtotal={subtotal} tax={tax()} discountPercent={discountPercent} discount={discount(discountPercent)} total={total(tax(), discount(discountPercent))}/>
                </Grid>

              </Grid>
              
            </Grid>
          </Grid>
        </Container>
      </main>

    </div>
  )
}

export default Home
