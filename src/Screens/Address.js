import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddress} from '../Redux/Action';

const Address = () => {
  const dispatch = useDispatch();
  const AddressData = useSelector(state => state.Address);

  useEffect(() => {
    dispatch(fetchAddress());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Address Screen</Text>
        <View style={styles.cardRow}>
          <Text style={styles.label}>Country:</Text>
          <Text style={styles.value}>{AddressData.country}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.label}>State:</Text>
          <Text style={styles.value}>{AddressData.state}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.value}>{AddressData.city}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.label}>Street Name:</Text>
          <Text style={styles.value}>{AddressData.street_name}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.label}>Community:</Text>
          <Text style={styles.value}>{AddressData.community}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.label}>Zip Code:</Text>
          <Text style={styles.value}>{AddressData.zip_code}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '80%', // Adjust card width as needed
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});

export default Address;
