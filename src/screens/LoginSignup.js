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
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Footer from '../components/layout/Footer';

const { width, height } = Dimensions.get('window');

const LoginSignup = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const isPhoneNumberValid = phoneNumber.length === 10;

  const handleContinue = () => {
    if (isPhoneNumberValid) {
      navigation.navigate('EnterOTP');
    }
  };

  const handleKeypadInput = (digit) => {
    if (phoneNumber.length < 10) {
      setPhoneNumber(prev => prev + digit);
    }
  };

  const handleKeypadDelete = () => {
    if (phoneNumber.length > 0) {
      setPhoneNumber(prev => prev.slice(0, -1));
    }
  };

  const KeypadButton = ({ number, letters, onPress }) => (
    <TouchableOpacity style={styles.keypadButton} onPress={onPress}>
      <Text style={styles.keypadNumber}>{number}</Text>
      {letters && <Text style={styles.keypadLetters}>{letters}</Text>}
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#dbebfe', '#cae1fe', '#fce7f3']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <Card style={styles.mainCard}>
            <CardContent style={styles.cardContent}>
              <View style={styles.header}>
                <Text style={styles.welcomeTitle}>Welcome</Text>
                <Text style={styles.subtitle}>Log in to your account</Text>
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.phoneInputWrapper}>
                  <Text style={styles.countryCode}>+91</Text>
                  <Input
                    style={styles.phoneInput}
                    placeholder="Mobile number"
                    value={phoneNumber}
                    keyboardType="numeric"
                    editable={false}
                  />
                </View>
              </View>

              <Text style={styles.smsText}>
                You will receive an SMS verification that may apply message and data rates.
              </Text>

              <Button 
                style={[
                  styles.continueButton,
                  { opacity: isPhoneNumberValid ? 1 : 0.5 }
                ]}
                onPress={handleContinue}
                disabled={!isPhoneNumberValid}
              >
                Continue
              </Button>

              <Text style={styles.termsText}>
                By continuing, you agree to our{' '}
                <Text style={styles.linkText}>Terms of Service</Text>
                {' '}and{' '}
                <Text style={styles.linkText}>Privacy Policy</Text>.
              </Text>
            </CardContent>
          </Card>

          <View style={styles.keypadContainer}>
            <View style={styles.keypadHandle} />
            
            <View style={styles.keypadGrid}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <KeypadButton
                  key={num}
                  number={num}
                  letters={
                    num === 2 ? 'ABC' :
                    num === 3 ? 'DEF' :
                    num === 4 ? 'GHI' :
                    num === 5 ? 'JKL' :
                    num === 6 ? 'MNO' :
                    num === 7 ? 'PQRS' :
                    num === 8 ? 'TUV' :
                    num === 9 ? 'WXYZ' : null
                  }
                  onPress={() => handleKeypadInput(num.toString())}
                />
              ))}
            </View>

            <View style={styles.keypadBottomRow}>
              <View style={styles.keypadSpacer} />
              <KeypadButton
                number={0}
                onPress={() => handleKeypadInput('0')}
              />
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={handleKeypadDelete}
              >
                <Text style={styles.deleteText}>⌫</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        
        <Footer navigation={navigation} />
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
  scrollView: {
    flex: 1,
    paddingBottom: 79,
  },
  mainCard: {
    marginHorizontal: 16,
    marginTop: 60,
    borderRadius: 43,
  },
  cardContent: {
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
  },
  inputContainer: {
    marginBottom: 16,
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e3e4e5',
    borderRadius: 10,
    backgroundColor: '#f5f7fc',
    paddingHorizontal: 16,
    height: 50,
  },
  countryCode: {
    fontSize: 16,
    color: '#000000',
    marginRight: 16,
  },
  phoneInput: {
    flex: 1,
    borderWidth: 0,
    backgroundColor: 'transparent',
    padding: 0,
  },
  smsText: {
    fontSize: 12,
    color: '#6c7072',
    marginBottom: 24,
    lineHeight: 16,
  },
  continueButton: {
    height: 48,
    marginBottom: 16,
  },
  termsText: {
    fontSize: 12,
    color: '#090a0a',
    textAlign: 'center',
    lineHeight: 16,
  },
  linkText: {
    color: '#6a4dff',
  },
  keypadContainer: {
    backgroundColor: 'rgba(227, 229, 229, 0.9)',
    marginTop: 20,
    paddingVertical: 16,
  },
  keypadHandle: {
    width: 134,
    height: 5,
    backgroundColor: '#090a0a',
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
  keypadGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
  keypadBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  keypadSpacer: {
    width: 121,
  },
  keypadButton: {
    width: 121,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  keypadNumber: {
    fontSize: 25,
    color: '#090a0a',
    fontWeight: '400',
  },
  keypadLetters: {
    fontSize: 10,
    color: '#090a0a',
    fontWeight: '700',
    letterSpacing: 2,
  },
  deleteButton: {
    width: 121,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    fontSize: 24,
    color: '#090a0a',
  },
});

export default LoginSignup;