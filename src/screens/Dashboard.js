import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Card, CardContent } from '../components/ui/Card';
import Footer from '../components/layout/Footer';

const { width } = Dimensions.get('window');

const Dashboard = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#dbebfe', '#cae1fe', '#fce7f3']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Card style={styles.welcomeCard}>
            <CardContent style={styles.cardContent}>
              <Text style={styles.cardTitle}>Welcome to iMirror!</Text>
              <Text style={styles.cardText}>
                Your profile has been set up successfully. You can now start using the app to receive feedback and connect with coaches.
              </Text>
            </CardContent>
          </Card>

          <Card style={styles.getStartedCard}>
            <CardContent style={styles.cardContent}>
              <Text style={styles.cardTitle}>Get Started</Text>
              <View style={styles.listContainer}>
                <Text style={styles.listItem}>• Request anonymous feedback from friends</Text>
                <Text style={styles.listItem}>• Connect with professional coaches</Text>
                <Text style={styles.listItem}>• Track your personal growth journey</Text>
                <Text style={styles.listItem}>• Set goals and monitor your progress</Text>
              </View>
            </CardContent>
          </Card>
        </ScrollView>

        <Footer navigation={navigation} activeRoute="Dashboard" />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#090a0a',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  welcomeCard: {
    borderRadius: 40,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.09,
    shadowRadius: 35.3,
    elevation: 10,
  },
  getStartedCard: {
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.09,
    shadowRadius: 35.3,
    elevation: 10,
  },
  cardContent: {
    padding: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#090a0a',
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    color: '#090a0a',
    lineHeight: 22,
  },
  listContainer: {
    paddingLeft: 16,
  },
  listItem: {
    fontSize: 16,
    color: '#090a0a',
    lineHeight: 22,
    marginBottom: 8,
  },
});

export default Dashboard;