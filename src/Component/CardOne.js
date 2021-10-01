import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Images from '../../src/Images/download.jpeg';
import ImagesOne from '../../src/Images/download (1).jpeg';
import ImagesTwo from '../../src/Images/download (2).jpeg';
import ImagesThree from '../../src/Images/download (3).jpeg';
import ImagesFour from '../../src/Images/images (1).jpeg';
import ImagesFive from '../../src/Images/images (2).jpeg';
import ImagesSix from '../../src/Images/images (3).jpeg';
import ImagesSeven from '../../src/Images/images (4).jpeg';
import ImagesEight from '../../src/Images/images (5).jpeg';
import ImagesNine from '../../src/Images/images (6).jpeg';
import ImagesTen from '../../src/Images/images (7).jpeg';
import ImagesEleven from '../../src/Images/images (8).jpeg';
import ImagesTwelve from '../../src/Images/images.jpeg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { borders } from '@mui/system';
import Avatar from '@mui/material/Avatar';

class CardOne extends Component {
    render() {
        return (
            <div>
                 <Grid container spacing={1} sx={{ mt: 2 }}>
                  <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                    Recent
                  </Typography>

                  <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:3,  fontWeight: 'bold'}}>
                    Most Liked
                  </Typography>

                  <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:3}}>
                    Most Viewed
                  </Typography>
                </Grid>
                {/* Row One */}
                <Grid container spacing={2} sx={{ mt: 1 }}>
                      <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={Images}
                               alt="green iguana"
                            />
                            <CardContent >
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                      <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={Images}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             Heco <br/> by jthelms
                         </Typography>
                       </Box>
                     </Grid>

                     <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesOne}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesTwo}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             IMDB <br/> by joaopulots
                         </Typography>
                       </Box>

                     </Grid>

                     <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesTwo}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesThree}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             Cards <br/> by janlosert
                         </Typography>
                       </Box>

                     </Grid>

                     <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesThree}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesFour}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             geospace <br/> by joaopaulots
                         </Typography>
                       </Box>

                     </Grid>

                     {/* Row One Closes Here */}

                     {/* Row Two Starts Here */}

                     <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesFour}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesFive}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             Legowerk <br/> DarioStefanutto
                         </Typography>
                       </Box>

                     </Grid>

                     <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesFive}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesSix}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             IEAD <br/> by MILK
                         </Typography>
                       </Box>

                     </Grid>

                     <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesSix}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesSeven}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             Cards <br/> by janlosert
                         </Typography>
                       </Box>

                     </Grid>

                     <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesSeven}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesEight}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             Overton <br/> OvertonGraphics
                         </Typography>
                       </Box>

                     </Grid>

                     {/* Row Two Closes Here */}
 
                    { /* Row Three Starts Here */}

                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesEight}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesNine}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             Overton <br/> by jthelms
                         </Typography>
                       </Box>

                     </Grid>

                     <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesNine}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesTen}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             IEAD <br/> by jthelms
                         </Typography>
                       </Box>

                     </Grid>

                     <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesTen}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesEleven}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             Cards <br/> by jthelms
                         </Typography>
                       </Box>

                     </Grid>

                     <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                               component="img"
                               height="250"
                               image={ImagesEleven}
                               alt="green iguana"
                            />
                            <CardContent>
                             <IconButton aria-label="settings"> 
                                   <RemoveRedEyeIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    222
                                </Typography>
                             </IconButton>
                             <IconButton aria-label="settings"> 
                                 <SmsFailedIcon />
                                 <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    52
                                </Typography>
                            </IconButton>
                             <IconButton aria-label="settings"> 
                                < FavoriteIcon />
                                <Typography gutterBottom variant="p" component="div" sx={{mt:1,ml:1}}>
                                    56
                                </Typography>
                             </IconButton>
                           </CardContent>
                        </Card>
                        <Box sx={{ display: 'flex',flexDirection: 'row',}}>
                          <Avatar
                             alt="Remy Sharp"
                             src={ImagesTwelve}
                             sx={{ width: 35, height: 35, mt: 2 }}
                          />
                         <Typography gutterBottom variant="p" component="div" sx={{mt:2,ml:1,color:"black"}}>
                             Heco <br/> by jthelms
                         </Typography>
                       </Box>

                     </Grid>

                    { /* Row Three Closes Here */}
                   
                </Grid>
            </div>
        );
    }
}

export default CardOne;