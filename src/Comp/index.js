import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    particlesCanvas:{
        position:"absolute",
        opacity:"0.3"
    }
})
const Home = () =>{

    const classes = useStyles()
    return (
        <div>
            <Navbar/>
            <Header/>
            <Particles canvasClassName={classes.particlesCanvas}
               params={{
                particles:{
                   number:{
                       value:100,
                       density:{
                           enable:true,
                           value_area:800
                       },
                      
                    shape:{
                        stroke:{
                            width:0,
                            color:"#fff"
                           },
                        polygon:{ 
                            nb_sides:8
                        },
                        type:"star"
                          
                    },
                    size:{
                        value:7,
                        random:true,
                        anim:{
                            enable:false,
                            speed: 40,
                            size_min:0.1,
                            sync:false,
                            
                            }  
                    },
                    opacity:{
                            value:1,
                            random:false,
                            anim:{
                                enable:false,
                                opacity_min:0.5,
                                speed:1,
                                sync: false,
                            }
                    },
                    line_linked:{
                            enable:"auto",
                            distance:150,
                            color:"#ffffff",
                            opacity:0.4,
                            width:1
                    },
                    move:{
                        enable:true,
                        // direction:"none",
                        random:false,
                        straight:false,
                        speed:8,
                        out_mode:"bounce",
                        attract:{
                            rotateX:600,
                            rotateY:1200
                            }     
                    },
                    interactivity:{
                        onhover:{
                            enable:true,
                            mode:"repulse"
                        },
                        onclick:{
                            enable:true,
                            mode:"push"
                        },
                        detect_on:"canvas",

                    },
                    modes:{
                        repulse:{
                            distance:200
                        }
                    }
                    }
                }
            
               }}
            />
        </div>
    )
}

export default Home;
