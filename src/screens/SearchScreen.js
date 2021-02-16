import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [ term, setTerm ] = React.useState('');
  const [ results, setResults ] = React.useState([]);
  const [ errorMessage, setErrorMessage ] = React.useState('');

  const searchApi = async (searchTerm) => {
    console.log('Hi there');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 30,
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
    searchApi('pasta');
  }, []);

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar 
        term={term}
        onChangeTerm={setTerm}
        onSubmitTerm={() => searchApi(term)}
      />
      {
        errorMessage ? <Text>{errorMessage}</Text> : null
      }
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
  }
});

export default SearchScreen;