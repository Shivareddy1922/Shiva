import React, { useState, useEffect } from 'react';
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

const { width } = Dimensions.get('window');

const EnterOTP = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [isResendActive, setIsResendActive] = useState(false);
  
  const isOtpComplete = otp.length === 4;

  useEffect(() => {
    let interval;
    
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsResendActive(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handleBackClick = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    if (isOtpComplete) {
      navigation.navigate('SetupProfile');
    }
  };

  const handleResendCode = () => {
    if (isResendActive) {
      setTimer(30);
      setIsResendActive(false);
      setOtp('');
    }
  };

  const handleKeypadInput = (digit) => {
    if (otp.length < 4) {
      setOtp(prev => prev + digit);
    }
  };

  const handleKeypadDelete = () => {
    if (otp.length > 0) {
      setOtp(prev => prev.slice(0, -1));
    }
  };

  const KeypadButton = ({ number, letters, onPress }) => (
    <TouchableOpacity style={styles.keypadButton} onPress={onPress}>
      <Text style={styles.keypadNumber}>{number}</Text>
      {letters && <Text style={styles.keypadLetters}>{letters}</Text>}
      }
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
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackClick} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#090a0a" />
          </TouchableOpacity>
          <Text style={styles.title}>Enter OTP</Text>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.description}>
            Enter the 4-digit code that we have sent via the{'\n'}
            phone number <Text style={styles.phoneNumber}>+91 9876543210</Text>
          </Text>

          <View style={styles.otpContainer}>
            {[0, 1, 2, 3].map((index) => (
              <View
                key={index}
                style={[
                  styles.otpBox,
                  { borderColor: otp.length > index ? '#74a4ee' : '#e1e1e1' }
                ]}
              >
                <Text style={styles.otpText}>{otp[index] || ''}</Text>
              </View>
            ))}
          </View>

          <Button 
            style={[
              styles.verifyButton,
              { opacity: isOtpComplete ? 1 : 0.5 }
            ]}
            onPress={handleContinue}
            disabled={!isOtpComplete}
          >
            Verify OTP
          </Button>

          <Button
            variant="ghost"
            style={[
              styles.resendButton,
              { opacity: isResendActive ? 1 : 0.5 }
            ]}
            onPress={handleResendCode}
            disabled={!isResendActive}
          >
            Resend code
          </Button>
          
          {!isResendActive && (
            <Text style={styles.timerText}>
              Resend in <Text style={styles.timerBold}>{timer}s</Text>
            </Text>
          )}
        </ScrollView>

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
    paddingHorizontal: 32,
  },
  description: {
    fontSize: 16,
    color: '#090a0a',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 22,
  },
  phoneNumber: {
    fontWeight: '700',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
    marginBottom: 48,
  },
  otpBox: {
    width: 50,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#090a0a',
  },
  verifyButton: {
    height: 48,
    marginBottom: 24,
  },
  resendButton: {
    height: 48,
    marginBottom: 8,
  },
  timerText: {
    fontSize: 14,
    color: '#090a0a',
    textAlign: 'center',
  },
  timerBold: {
    fontWeight: '700',
  },
  keypadContainer: {
    backgroundColor: 'rgba(227, 229, 229, 0.9)',
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

export default EnterOTP;