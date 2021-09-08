
import Art from '../static/firstnft.jpg'
import ReactImage from 'react-image-wrapper'
import User from '../static/user.png'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';


const useStyles = makeStyles({
    media: {
      height: 140,
    },
  });



const NFTCard = () => {

    const classes = useStyles();

    return ( 

        <div className="art-card">
        <Card className={classes.root}>
                <CardActionArea>
                        <CardMedia
                              className={classes.media}
                              image={Art}
                              title="Contemplative Reptile"
                        />
                       <CardContent>
                           <div className="card-content">
                               <div className="user-image">
                                   <ReactImage 
                                        src={User}
                                        width={30}
                                        height={30}
                           
                                    />

                               </div>
                               
                                <div className="user-creator">
                                   <h2>sippinonthejuice</h2>
                                </div>
                               
                           </div>
                           
                       </CardContent>
                </CardActionArea>
                
         </Card>

         </div>

     );
}
 
export default NFTCard;