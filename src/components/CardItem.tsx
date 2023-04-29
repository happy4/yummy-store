import { Link } from 'react-router-dom';
import CardType from 'src/models/card';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardItem: React.FC<{ item: CardType }> = (props) => {
  const { item } = props;
  return (
    <Card variant="outlined">
      <CardContent>
        <img
          src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=150&h=150&fit=crop&auto=format"
          alt="Alt"
          loading="lazy"
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Link to={`/products/${item.id}`}>{item.name}</Link>
        </Typography>
        <Typography variant="body2">
          <b>Color: </b>{item.color}
        </Typography>
        <Typography variant="body2">
          <b>Price: </b>{item.price}
        </Typography>
        <Typography variant="body2">
          <b>Rating: </b>{item.rate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;
