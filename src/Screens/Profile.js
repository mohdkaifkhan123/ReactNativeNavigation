import React, {useEffect} from 'react';
import {SafeAreaView, Text, Image, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfile} from '../Redux/Action';

const Profile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.Profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{uri: profileData.avatar}} />
        </View>
        <Text style={styles.name}>
          {profileData.first_name} {profileData.last_name}
        </Text>
        <Text style={styles.phoneNumber}>{profileData.phone_number}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <View style={styles.card}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.info}>{profileData.email}</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.card}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.info}>{profileData.gender}</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.card}>
            <Text style={styles.label}>Date of Birth</Text>
            <Text style={styles.info}>{profileData.date_of_birth}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  profileContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  avatarContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  phoneNumber: {
    fontSize: 18,
    color: '#666',
  },
  infoContainer: {
    padding: 20,
  },
  infoItem: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  info: {
    fontSize: 18,
    color: '#333',
  },
});

export default Profile;
