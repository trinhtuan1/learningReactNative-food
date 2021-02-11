import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [ term, setTerm ] = React.useState('');
  const [ results, setResults ] = React.useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 30,
        term,
        location: 'san jose'
      }
    });
    setResults(response.data.businesses);
  };

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar 
        term={term}
        onChangeTerm={setTerm}
        onSubmitTerm={searchApi}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
      <Text>Found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
  }
});

export default SearchScreen;