import React, {useState} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(json => setData(json.data))
      .finally(() => setLoading(false));
  };

  const renderItem = itemData => {
    return (
      <View style={styles.containerFlate}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Name : {itemData.item.name}</Text>
          <Text style={styles.title}>Email : {itemData.item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {isLoading && (
        <TouchableOpacity
          style={styles.input}
          onPress={getDataUsingSimpleGetCall}>
          <Text style={styles.text}>Click to get list of all mentors</Text>
        </TouchableOpacity>
      )}

      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlate: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'orange',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 280,
    paddingHorizontal: 10,
    marginLeft: 40,
    marginRight: 42,
    borderRadius: 20,
    shadowColor: '#000',
    height: 40,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});

export default App;
