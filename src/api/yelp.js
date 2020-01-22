import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
      authorization: 'Bearer UsifFLItNwSSVUGcTS07XpXGqriDqHGf4MvWVJJX-P2iBtHLXo0NqU1dQ3MbuMA0puoerI1QMPWD5tXEbt2VCT7_sGKqNwbkVJr5p82jEmI4XDXcvnRGxTeYha8lXnYx'
   }
});