import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {getCourseNumber} from '../utils/course.js';

const Course = ({course, isDisabled, isSelected, select, view}) => (
  <TouchableOpacity style={styles[isSelected ? 'courseButtonSelected' : isDisabled ? 'courseButtonDisabled' : 'courseButton']}
                    onPress={() => {if (!isDisabled) select(course);}}
                    onLongPress={() => view(course)}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNumber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
);

const courseButtonBase = {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
};

const styles = StyleSheet.create({
    courseText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
    courseButtonSelected: {
        ...courseButtonBase,
        backgroundColor: '#004a99'
    },
    courseButton: {
        ...courseButtonBase,
        backgroundColor: '#66b0ff'
    },
    courseButtonDisabled: {
        ...courseButtonBase,
        backgroundColor: '#d3d3d3'
    }
  });

  export default Course;