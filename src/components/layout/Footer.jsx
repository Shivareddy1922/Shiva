import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Footer = ({ navigation, activeRoute = 'Dashboard' }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      
      <View style={styles.navContainer}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigateToScreen('Dashboard')}
        >
          <Icon 
            name="home" 
            size={24} 
            color={activeRoute === 'Dashboard' ? '#74a4ee' : '#999999'} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="chat" size={24} color="#999999" />
        </TouchableOpacity>

        <View style={styles.placeholder} />

        <TouchableOpacity style={styles.navItem}>
          <Icon name="notifications" size={24} color="#999999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#999999" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.floatingButton}
        onPress={() => navigateToScreen('RequestFeedback')}
      >
        <Icon name="add" size={34} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 79,
  },
  background: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  navContainer: {
    position: 'absolute',
    bottom: 11,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navItem: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    width: 40,
    height: 40,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 34,
    left: '50%',
    marginLeft: -24.5,
    width: 49,
    height: 49,
    backgroundColor: '#74a4ee',
    borderRadius: 24.5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default Footer;

export { Footer }