import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Dimensions, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const { width } = Dimensions.get('window');

const IntroCarousel = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Anonymous Feedback",
      description: "Receive honest and anonymous feedback from people who know you best!",
      icon: "📝"
    },
    {
      id: 2,
      title: "Therapists & Coaches",
      description: "Connect with professional therapists and certified coaches who can guide your personal development journey with expert insights.",
      icon: "👨‍⚕️"
    },
    {
      id: 3,
      title: "Grow Yourself Better",
      description: "Transform feedback into actionable growth plans. Track your progress and become the best version of yourself with personalized insights.",
      icon: "🌱"
    }
  ];

  const goToSlide = (index) => {
    setActiveSlide(index);
    scrollViewRef.current?.scrollTo({
      x: width * index,
      animated: true,
    });
  };

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveSlide(slideIndex);
  };

  useEffect(() => {
    const autoScrollTimer = setInterval(() => {
      const nextSlide = (activeSlide + 1) % slides.length;
      goToSlide(nextSlide);
    }, 3000);

    return () => clearInterval(autoScrollTimer);
  }, [activeSlide]);

  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <LinearGradient
      colors={['#dbebfe', '#cae1fe', '#fce7f3']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.carousel}
      >
        {slides.map((slide, index) => (
          <View key={slide.id} style={styles.slide}>
            <Card style={styles.card}>
              <CardContent style={styles.cardContent}>
                <Text style={styles.icon}>{slide.icon}</Text>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.description}>{slide.description}</Text>
              </CardContent>
            </Card>
          </View>
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              { opacity: index === activeSlide ? 1 : 0.3 }
            ]}
            onPress={() => goToSlide(index)}
          />
        ))}
      </View>

      <Button 
        style={styles.getStartedButton}
        onPress={handleGetStarted}
      >
        Get Started
      </Button>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    flex: 1,
    marginTop: 150,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  card: {
    width: width - 64,
    height: 404,
    borderRadius: 43,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  icon: {
    fontSize: 65,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 22,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000000',
    marginHorizontal: 4,
  },
  getStartedButton: {
    marginHorizontal: 59,
    marginBottom: 120,
    height: 49,
  },
});

export default IntroCarousel;