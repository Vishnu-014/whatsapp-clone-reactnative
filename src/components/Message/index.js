import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


const index = ({ message }) => {


  const isMyMessage = () => {
    return message.user.id === 'u1';
  }

  return (
    <View style={[styles.container, {
      backgroundColor: isMyMessage() ? '#DCF8c5' : 'white',
      alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
    }]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {

    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  time: {
    color: 'grey',
    alignSelf: 'flex-end',
  },
})