/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Platform,
  TouchableHighlight,
} from 'react-native';

const baseUrl = 'https://reqres.in';

function User({userObject}) {
  return (
    <>
      <View>
        <Image
          source={{uri: userObject.avatar}}
          style={{width: 200, height: 200, borderRadius: 100}}
        />
        <Text style={{textAlign: 'center', fontSize: 20}}>
          {`${userObject.first_name} ${userObject.last_name}`}
        </Text>
      </View>
    </>
  );
}

export default function HomeScreen() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  const changeUserIdHandler = () => {
    setUserId(userId => (userId === 3 ? 1 : userId + 1));
  };

  useEffect(() => {
    const abortController = new AbortController();
    const url = `${baseUrl}/api/users/${userId}`;

    const fetchUsers = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(url, {
          signal: abortController.signal,
        });

        if (response.status === 200) {
          setUser(response.data.data);
          setIsLoading(false);

          return;
        } else {
          throw new Error('Failed to fetch users');
        }
      } catch (error) {
        if (abortController.signal.aborted) {
          console.log('Data fetching cancelled');
        } else {
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };

    fetchUsers();

    return () => abortController.abort('Data fetching cancelled');
  }, [userId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.heading}>
          Improve your communication with our best mentors
        </Text>
      </View>
      <View style={styles.wrapperStyle}>
        {!isLoading && !hasError && user && <User userObject={user} />}
      </View>
      <View style={styles.wrapperStyle}>
        {isLoading && <Text> Loading </Text>}
        {!isLoading && hasError && <Text> An error has occurred </Text>}
      </View>
      <View>
        <TouchableHighlight
          onPress={changeUserIdHandler}
          disabled={isLoading}
          style={styles.buttonStyles}>
          <Text style={styles.textStyles}>Click To See Top Rated Mentor</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperStyle: {
    minHeight: 128,
  },
  buttonStyles: {
    backgroundColor: 'green',
    borderRadius: 15,
  },
  textStyles: {
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
  heading: {
    marginTop: -30,
    fontSize: 15,
    fontWeight: '600',
    color: 'red',
  },
});
