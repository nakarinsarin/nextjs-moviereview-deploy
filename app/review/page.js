import React from 'react'
import { 
  Card, CardActions, CardContent, CardMedia, Button, Typography, Grid 
} from '@mui/material'

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/review`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function page() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null
  }
  const data = await getData()
  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography variant='h5' sx={{ fontFamily: 'Poppins', textAlign: 'center', position: 'relative', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
        <span style={{ zIndex: 1, position: 'relative', display: 'block', marginBottom: '20px' }}>NetFox Review</span>
        <span style={{ zIndex: 0, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px', boxShadow: '0px 4px 8px rgba(0,0,0,0.2)' }}></span>
      </Typography>
      <Grid container spacing={1}>
        {data.map(review => (
          <Grid item key={review.id} xs={12} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={review.coverimage}
                title={review.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {review.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {review.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <a href={`/review/${review.id}`}>
                  <Button size="small">Learn More</Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
