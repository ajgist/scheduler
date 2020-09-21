import React, {useState} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';
import {terms, getCourseTerm} from '../utils/course.js';

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    return(
        <ScrollView> 
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
            <View style={styles.courseList}>
                <CourseSelector courses={termCourses}/>
            </View>
        </ScrollView>
    );
} 
/* view from in the scrollview
<View style={styles.courseList}>
{termCourses.map(course => <Course key={course.id} course={course} />)}
</View>

*/

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }
});

export default CourseList;