import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Intro');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#dbebfe', '#cae1fe', '#fce7f3']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.logoContainer}>
        <View style={styles.logoWrapper}>
          <View style={styles.logoBack} />
          <View style={styles.logoFront} />
          <View style={styles.star} />
        </View>
        
        <Text style={styles.title}>I Mirror</Text>
        <Text style={styles.subtitle}>Know yourself from who knows you best!</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoWrapper: {
    width: 95,
    height: 101,
    marginBottom: 32,
    position: 'relative',
  },
  logoBack: {
    position: 'absolute',
    top: 6,
    left: 0,
    width: 50,
    height: 80,
    backgroundColor: 'rgba(151, 131, 211, 0.02)',
    borderColor: '#74a4ee',
    borderWidth: 5,
    borderRadius: 10,
  },
  logoFront: {
    position: 'absolute',
    top: 21,
    left: 25,
    width: 50,
    height: 80,
    borderColor: '#9783d3',
    borderWidth: 5,
    borderRadius: 10,
  },
  star: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 26,
    height: 26,
    backgroundColor: '#FFD700',
    borderRadius: 13,
  },
  title: {
    fontSize: 92,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#000000',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default SplashScreen;