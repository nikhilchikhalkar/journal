import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prof1 from "../assets/prof1.jpg"
import prof2 from "../assets/prof2.jpg"
import prof3 from "../assets/prof3.jpg"
import prof4 from "../assets/prof4.jpg"
import prof5 from "../assets/prof5.jpg"

const data = [
  { img: prof1, name: 'Prof. (Dr.) Shamim Akhtar', degree: 'MBBS, MD(Pathology)' },
  { img: prof2, name: 'Rovena Bode', degree: 'PhD in Normal Anatomy, Morphology Department' },
  { img: prof3, name: 'Prof (Dr) Kumari Sandhya', degree: 'MBBS, DGO, MS(Anatomy), CCHFWM, FICMCH' },
  { img: prof4, name: 'Ahmad Al Nashar', degree: 'Ph.D, Oral and Maxillofacial Surgery' },
  { img: prof5, name: 'Dr. Kapil Amgain', degree: 'MSc Anatomy, MD (AM), Anatomy' }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const EditorsSlider = () => {
    const sliderRef = useRef(null);

  return (
    <Box>
        <Typography sx={{width:"80%", marginX:"auto", fontWeight:"bold", fontSize:"2rem"}} >IOT Global Editors</Typography>
<Box sx={{ py: 4, width:"80%", display:"flex", position:"relative", justifyContent:"center", marginX:"auto"}}>
      <Container maxWidth={"lg"}>
        <Slider {...settings} ref={sliderRef}>
          {data.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'center', px: 2 }}>
              <Box component="figure" sx={{ mb: 2 }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: '70%',
                    // padding: "10px",
                    height: 'auto',
                    objectFit: 'cover',
                    maxHeight: '200px',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {item.name}
              </Typography>
              <Typography variant="body2">{item.degree}</Typography>
            </Box>
          ))}
        </Slider>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left:'0',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        >
          <IconButton
            onClick={() => sliderRef.current.slickPrev()}
            color="primary"
            sx={{
              pointerEvents: 'auto',
              bgcolor: 'background.paper',
              '&:hover': {
                bgcolor: 'background.default',
              },
            }}
          >
            <FaArrowLeft />
          </IconButton>
          <IconButton
            onClick={() => sliderRef.current.slickNext()}
            color="primary"
            sx={{
              pointerEvents: 'auto',
              bgcolor: 'background.paper',
              '&:hover': {
                bgcolor: 'background.default',
              },
            }}
          >
            <FaArrowRight />
          </IconButton>
        </Box>
      </Container>
    </Box>
    </Box>
  )
}

export default EditorsSlider