import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [ term, setTerm ] = React.useState('');
  const [ searchApi, results, errorMessage ] = useResults();
   
  const filterResultByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar 
        term={term}
        onChangeTerm={setTerm}
        onSubmitTerm={() => searchApi(term)}
      />
      {
        errorMessage ? <Text>{errorMessage}</Text> : null
      }
      <Text>We have found {results.length} results.</Text>
      <ScrollView>
        <ResultsList 
          title="Cost Effective" 
          results={filterResultByPrice('$')}
        />
        <ResultsList 
          title="Bit Pricer" 
          results={filterResultByPrice('$$')}
        />
        <ResultsList 
          title="Big Spender"
          results={filterResultByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;