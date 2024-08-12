import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { FaUsers, FaGlobe, FaFlag, FaHandshake, FaUser, FaBook, FaBriefcase, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  { icon: <FaUser />, count: '1800+', label: 'Editorial Team' },
  { icon: <FaBook />, count: '12000+', label: 'Articles published' },
  { icon: <FaBriefcase />, count: '23', label: 'Journals' },
  { icon: <FaUsers />, count: '26000+', label: 'Authors' },
  { icon: <FaGlobe />, count: '10', label: 'Indexing Services' },
  { icon: <FaFlag />, count: '600', label: 'Conference Published' },
  { icon: <FaHandshake />, count: '1200+ Eminent', label: 'Faculty' },
];
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        zIndex: 1,
        color: '#1976d2',
        '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.1)' },
      }}
    >
      <FaChevronRight />
    </IconButton>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        zIndex: 1,
        color: '#1976d2',
        '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.1)' },
      }}
    >
      <FaChevronLeft />
    </IconButton>
  );
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
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



export default function FeaturedSlider() {
  return (
    <Box sx={{ py: 4, width: '80%', marginX: 'auto', position: 'relative' }}>
      <Container className="slider-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'center', px: 2 }}>
              <Box sx={{ fontSize: '48px', color: '#1976d2' }}>{item.icon}</Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', my: 1 }}>
                {item.count}
              </Typography>
              <Typography variant="body1">{item.label}</Typography>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
