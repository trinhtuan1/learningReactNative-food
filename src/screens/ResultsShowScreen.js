import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [ result, setResult ] = React.useState('');
  const id = navigation.getParam('id');

  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  };

  React.useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;