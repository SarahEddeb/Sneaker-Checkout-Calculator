import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from '@mui/material/Grid';

export default function ItemCard(props: { id: string | number; photo: string | undefined; price: number; name: string | undefined; added: boolean | undefined; subtotalCalculator: Function; addRemoveItem: Function;}) {

    const handleAdd = () => {
        props.addRemoveItem(props.id, (!props.added))

        if (props.added === false) {
            props.subtotalCalculator(props.price)
        } else {
            props.subtotalCalculator((-1)*(props.price))
        }
    }

    return (
    <Grid item xs={6} sm={6} md={6} lg={4}>
        <Grid container
        justifyContent="center">

            <CardActions sx={{ p: 0, m: 0 }}>
                {props.added ?
                    <IconButton aria-label="add item" component="span" sx={{ position: 'relative', top: '20px', backgroundColor: '#e03b0d', color: '#ffffff', '&:hover': {
                        backgroundColor: "#fc582b",
                        }}} onClick={() => handleAdd()}>
                        <RemoveIcon />
                    </IconButton>
                     :
                     <IconButton aria-label="add item" component="span" sx={{ position: 'relative', top: '20px', backgroundColor: '#2486c7', color: '#ffffff', '&:hover': {
                        backgroundColor: "#3ea9f0",
                        }}} onClick={() => handleAdd()}>
                        <AddIcon />
                    </IconButton>
                }
                
            </CardActions>
        

        <Card sx={{ minHeight: '50px', borderRadius: 5, boxShadow: 3 }}>
        
        
        <CardMedia
            component="img"
            sx={{ px: 3, backgroundColor: '#F6F6F6' }}
            image={props.photo}
            alt={props.name}
        />
        <CardContent>
            <Typography variant="subtitle1" component="div" sx={{ fontWeight: '500' }}>
                {props.name}
            </Typography>

            <Typography variant="subtitle2" color="text.secondary">
                ${props.price}
            </Typography>
        </CardContent>

        </Card>
        </Grid>
    </Grid>
  );
}
