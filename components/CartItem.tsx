import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from '@mui/material/Grid';

export default function CartItem(props: { id: string | number; photo: string | undefined; price: number; name: string | undefined; added: boolean | undefined; subtotalCalculator: Function; addRemoveItem: Function;}) {

    const handleAdd = () => {
        props.addRemoveItem(props.id, !(props.added))

        if (props.added === false) {
            props.subtotalCalculator(props.price)
        } else {
            props.subtotalCalculator((-1)*(props.price))
        }
    }

    if (!props.added) {
        return <></>
    } else {
        return (
            <Grid item> 
                <Card sx={{ borderRadius: 5, boxShadow: 3 }}>
                    <Grid container direction='row' justifyContent="flex-start" alignItems="center">
                        <Grid item xs={4} sx={{ backgroundColor: '#F6F6F6' }}>
                            <CardMedia
                                component="img"
                                sx={{ minHeight: '30px', maxHeight: '100px' }}
                                image={props.photo}
                                alt={props.name}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CardContent>
                                <Typography variant="subtitle1" component="div" sx={{ fontWeight: '500', fontSize: '0.85rem', lineHeight: '1.5' }}>
                                    {props.name}
                                </Typography>

                                <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                                    ${props.price}
                                </Typography>
                            </CardContent>

                        </Grid>
                        <Grid item xs={2}>
                            <Box display="flex" justifyContent="center">
                                <CardActions>
                                    <IconButton aria-label="add item" component="span" sx={{ backgroundColor: '#e03b0d', color: '#ffffff', '&:hover': {
                                        backgroundColor: "#fc582b",
                                        }}} onClick={() => handleAdd()}>
                                        <RemoveIcon sx={{ fontSize: '1rem' }}/>
                                    </IconButton>
                                </CardActions>
                            </Box>   
                        </Grid>
                    </Grid>
                </Card>   
            </Grid>
        );
    }
}
