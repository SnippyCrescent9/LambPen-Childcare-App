import {View, Text} from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const StudentProfile = () => {

    const { id } = useLocalSearchParams()

    return (
        <View>
            <Text>Student { id }</Text>
        </View>
    );
}
export default StudentProfile