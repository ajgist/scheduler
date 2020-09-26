import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import CourseList from '../components/CourseList';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import UserContext from '../UserContext'; //one or 2 dots??
import CourseEditScreen from './CourseEditScreen';
import { firebase } from '../utils/firebase';

const ScheduleScreen = ({navigation}) => {
    const [schedule, setSchedule] = useState({title: '', courses: [] });
    const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

    const user = useContext(UserContext);
    const canEdit = user && user.role === 'admin';

    const view = (course) => {
        navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
};

  useEffect(() => {
    const db = firebase.database().ref();
    const handleData = snap => {
      if (snap.val()) setSchedule(fixCourses(snap.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => {db.off('value', handleData); };
  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <Banner title = {schedule.title} />
      <CourseList courses = {schedule.courses} view={view}/>
    </SafeAreaView>
  );
}

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
);

const fixCourses = json => ({
  ...json,
  courses: Object.values(json.courses)
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  }
});
export default ScheduleScreen;
