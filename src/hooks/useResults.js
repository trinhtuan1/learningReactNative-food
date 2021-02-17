import React from 'react';
import yelp from '../api/yelp';

export default useResults = () => {
  const [ results, setResults ] = React.useState([]);
  const [ errorMessage, setErrorMessage ] = React.useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch(err) {
      setErrorMessage('Something went wrong');
    }
  };

  React.useEffect(() => {
    searchApi('ham');
  }, []);

  return [ searchApi, results, errorMessage ];
};
