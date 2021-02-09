import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [ term, setTerm ] = React.useState('');
  return (
    <View style={styles.backgroundStyle}>
      <SearchBar 
        term={term}
        onChangeTerm={newTerm => setTerm(newTerm)}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
  }
});

export default SearchScreen;