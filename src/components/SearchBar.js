import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onChangeTerm, onSubmitTerm }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather
        name="search"
        style={styles.iconStyle}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onChangeTerm(newTerm)}
        onEndEditing={onSubmitTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#f0eeee',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  }
});

export default SearchBar;