import React from 'react';
import { 
  Container, Card, CardContent, CardMedia, Typography, Link
} from '@mui/material';

export async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/review/${id}/`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function page({ params }) {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null
  }
  const id = params.id
  const data = await getData(id)
  
  return (
    <Container maxWidth="md" sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      { data.length > 0 && (
        <Card sx={{ display: 'flex', width: '130%', borderRadius: '15px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}>
          <CardMedia
            component="img"
            sx={{ width: '40%', borderRadius: '15px 0px 0px 15px' }} 
            image={data[0].coverimage}
            title={data[0].name}
          />
          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {data[0].name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '18px', lineHeight: '1.5', marginBottom: '20px' }}>
              <strong>Detail:</strong> {data[0].detail}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '18px', lineHeight: '1.5', marginBottom: '20px' }}>
              <strong>Review:</strong> {data[0].review}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '18px', lineHeight: '1.5', marginBottom: '20px' }}>
              <strong>Score:</strong> {data[0].score} / 10
            </Typography>
            {data[0].video ? (
              <video width="100%" controls>
                <source src={data[0].video} type="video/mp4" />
              </video>
            ) : (
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '18px', lineHeight: '1.5', marginBottom: '20px' }}>
                No video available. You can view the video <Link href={data[0].videoLink}>here</Link>.
              </Typography>
            )}
          </CardContent>
        </Card>
      )}
    </Container>
  )
  
}
