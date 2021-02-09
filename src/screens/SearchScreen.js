import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  return (
    <View style={styles.backgroundStyle}>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
  }
});

export default SearchScreen;