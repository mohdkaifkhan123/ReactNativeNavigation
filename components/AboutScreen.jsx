/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.aboutSection}>
        <Text style={styles.aboutHeader}>About Us Page</Text>
        <Text>Some text about who we are and what we.</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          ipsum quod dolores, ipsa molestias nam! Provident expedita maiores aut
          explicabo assumenda quo tenetur eligendi sunt, doloribus, delectus
          dolores consequuntur. Deserunt.
        </Text>
      </View>

      <Text style={styles.teamHeader}>Our Team</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.card}>
            <Image
              source={{uri: 'https://www.w3schools.com/w3images/team1.jpg'}}
              style={styles.image}
            />
            <View style={styles.container}>
              <Text style={styles.name}>Jane Doe</Text>
              <Text style={styles.title}>CEO</Text>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
              <Text>jane@example.com</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.card}>
            <Image
              source={{uri: 'https://www.w3schools.com/w3images/team2.jpg'}}
              style={styles.image}
            />
            <View style={styles.container}>
              <Text style={styles.name}>Mike</Text>
              <Text style={styles.title}>Director</Text>
              <Text>Some text that describes me lorem ipsum lorem.</Text>
              <Text>mike@example.com</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://www.w3schools.com/w3images/team3.jpg',
              }}
              style={styles.image}
            />
            <View style={styles.container}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.title}> Mentor</Text>
              <Text style={styles.description}>
                Some text that describes me lorem ipsum ipsum.
              </Text>
              <Text style={{marginTop: -10}}>john@example.com</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  aboutSection: {
    padding: 50,
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    color: 'white',
  },
  aboutHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  teamHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    margin: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  container: {
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AboutScreen;
