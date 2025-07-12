import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, CardContent } from '../components/ui/Card';
import Footer from '../components/layout/Footer';

const { width } = Dimensions.get('window');

const RequestFeedback = ({ navigation }) => {
  const templates = [
    { id: 'personal-growth', name: 'Personal Growth', icon: '🌱' },
    { id: 'emotional-intelligence', name: 'Emotional Intelligence', icon: '🧠' },
    { id: 'relationship', name: 'Relationship', icon: '👥' },
    { id: 'mental-health', name: 'Mental Health', icon: '🧘' },
    { id: 'communication', name: 'Communication', icon: '💬' },
    { id: 'values', name: 'Values', icon: '🛡️' },
    { id: 'conflicts-resolution', name: 'Conflicts Resolution', icon: '🧭' },
    { id: 'confidence', name: 'Confidence', icon: '✨' },
    { id: 'romantic', name: 'Romantic', icon: '💕' },
  ];

  const handleBackClick = () => {
    navigation.goBack();
  };

  const handleTemplateClick = (templateId) => {
    console.log(`Selected template: ${templateId}`);
  };

  const renderTemplate = ({ item }) => (
    <TouchableOpacity 
      style={styles.templateItem}
      onPress={() => handleTemplateClick(item.id)}
    >
      <Card style={styles.templateCard}>
        <CardContent style={styles.templateContent}>
          <Text style={styles.templateIcon}>{item.icon}</Text>
        </CardContent>
      </Card>
      <Text style={styles.templateName}>{item.name}</Text>
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
          <Text style={styles.title}>Request Feedback</Text>
        </View>

        <View style={styles.content}>
          <Card style={styles.mainCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.headerText}>Choose a Template</Text>
            </View>

            <View style={styles.selectedTemplate}>
              <View style={styles.selectedIcon}>
                <Text style={styles.selectedIconText}>⭐</Text>
              </View>
              <Text style={styles.selectedText}>Personal Growth</Text>
            </View>

            <FlatList
              data={templates}
              renderItem={renderTemplate}
              keyExtractor={(item) => item.id}
              numColumns={3}
              contentContainerStyle={styles.templateGrid}
              showsVerticalScrollIndicator={false}
            />
          </Card>
        </View>

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
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
    paddingBottom: 100,
  },
  mainCard: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.09,
    shadowRadius: 35.3,
    elevation: 10,
  },
  cardHeader: {
    height: 77,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6b4eff',
  },
  selectedTemplate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 32,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    padding: 0,
    height: 63,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 3,
  },
  selectedIcon: {
    width: 63,
    height: 63,
    backgroundColor: 'rgba(139, 92, 246, 0.27)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIconText: {
    fontSize: 24,
  },
  selectedText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#090a0a',
    marginLeft: 14,
  },
  templateGrid: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  templateItem: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 8,
  },
  templateCard: {
    width: 89,
    height: 89,
    backgroundColor: '#ebedff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e1e1e1',
  },
  templateContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  templateIcon: {
    fontSize: 53,
  },
  templateName: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 18,
  },
});

export default RequestFeedback;