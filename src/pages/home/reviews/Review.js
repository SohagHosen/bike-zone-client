import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Rating } from '@mui/material';
const Review = ({ review }) => {
  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {review?.userName?.charAt(0)}
          </Avatar>
        }
        title={review.userName}
        subheader={new Date().toDateString()}
      />
      <CardContent sx={{ mt: -2 }}>
        <Rating name="read-only" value={review.rating} readOnly />
        <Typography variant="body2" color="text.secondary">
          {review.feedback}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="dislike">
          <ThumbDownIcon />
        </IconButton>
      </CardActions>

    </Card>
  )
}

export default Review
