import * as React from 'react';
import {Link} from 'react-router-dom'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList maxWidth='xs' cols={1}  sx={{ width: 375, height: '100vh', minWidth: 275 }}>
      <ImageListItem key="Subheader" cols={1}>
        <Box textAlign="center" sx={{marginBottom: '-10px'}}>

        <Typography variant='h5' sx={{marginBottom: '10px'}}>Welcome to Tool App!</Typography>
        <Typography variant='subtitle1' sx={{marginBottom: '30px'}}>A variety of random tools to help you with day to day life. Just click the question icon within each tool to learn more.</Typography>
        </Box>
      </ImageListItem>
      {itemData.map((item) => (
        <Link
        to={`/${item.title.split(' ').join('-').toLowerCase()}`}
        style={{ textDecoration: 'none' }}
      >

        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
                       />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
              />
        </ImageListItem>
      </Link>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Pizza Time',
    author: 'Which gives more Pizza?',
  },
  {
    img: 'https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    title: 'Car Share',
    author: 'Easiest way to split the fuel cost',
  },
  {
    img: 'https://images.unsplash.com/photo-1616705334775-bb7739245489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Dad Jokes',
    author: 'Prepare to laugh!',
   
  },
  {
    img: 'https://images.unsplash.com/photo-1567067974934-75a3e4534c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Age Compare',
    author: 'When will they be double your age?',
  },
  {
    img: 'https://images.unsplash.com/photo-1610719887095-1c2d1486be5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    title: 'Coin Flip',
    author: 'Heads or Tails?',
    cols: 1,
  }
];
