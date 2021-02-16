import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [ term, setTerm ] = React.useState('');
  const [ searchApi, results, errorMessage ] = useResults();
   
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