import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import Input from '../components/ui/Input';

const { width } = Dimensions.get('window');

const SetupProfile = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bio: '',
  });

  const handleBackClick = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate('Dashboard');
  };

  const handleSkip = () => {
    navigation.navigate('Dashboard');
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <LinearGradient
      colors={['#dbebfe', '#cae1fe', '#fce7f3']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackClick} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#090a0a" />
          </TouchableOpacity>
          <Text style={styles.title}>Set up Profile</Text>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Card style={styles.mainCard}>
            <CardContent style={styles.cardContent}>
              <TouchableOpacity style={styles.profilePhotoContainer}>
                <Icon name="camera-alt" size={80} color="#74a4ee" />
              </TouchableOpacity>

              <View style={styles.formContainer}>
                <Input
                  style={styles.input}
                  placeholder="Name"
                  value={formData.name}
                  onChangeText={(value) => updateFormData('name', value)}
                />

                <Input
                  style={styles.input}
                  placeholder="Age"
                  value={formData.age}
                  onChangeText={(value) => updateFormData('age', value)}
                  keyboardType="numeric"
                />

                <Input
                  style={styles.input}
                  placeholder="Gender"
                  value={formData.gender}
                  onChangeText={(value) => updateFormData('gender', value)}
                />

                <Input
                  style={[styles.input, styles.bioInput]}
                  placeholder="Bio"
                  value={formData.bio}
                  onChangeText={(value) => updateFormData('bio', value)}
                  multiline
                  numberOfLines={3}
                />
              </View>

              <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>

              <Button 
                style={styles.continueButton}
                onPress={handleContinue}
              >
                Continue
              </Button>
            </CardContent>
          </Card>
        </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  backButton: {
    padding: 8,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '700',
    color: '#090a0a',
    textAlign: 'center',
    marginRight: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  mainCard: {
    borderRadius: 40,
    minHeight: 647,
  },
  cardContent: {
    padding: 24,
    alignItems: 'center',
  },
  profilePhotoContainer: {
    width: 162,
    height: 162,
    backgroundColor: '#ecedff',
    borderRadius: 81,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  formContainer: {
    width: '100%',
    marginBottom: 24,
  },
  input: {
    height: 60,
    marginBottom: 16,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#e9eefd',
    backgroundColor: '#f5f7fc',
    fontSize: 16,
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  skipButton: {
    paddingVertical: 16,
    marginBottom: 16,
  },
  skipText: {
    fontSize: 16,
    color: '#4d1bf1',
    textAlign: 'center',
  },
  continueButton: {
    width: '100%',
    height: 48,
  },
});

export default SetupProfile;