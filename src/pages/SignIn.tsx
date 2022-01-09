import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const { navigate } = useNavigation();

  return (
    <View style={s.signin_container}>
      <StatusBar backgroundColor="#2f2d51" />

      <View style={s.signin_title_wrapper}>
        <Text style={s.signin_title}>Class</Text>
        <Text style={[s.signin_title, { fontFamily: 'inter-200' }]}>room</Text>
      </View>
      <Text style={s.signin_subtitle}>
        Our classroom. Our classroom is very nice. It is large, clean and light.
      </Text>

      <Pressable
        style={s.signin_button_get_started}
        onPress={() =>
          navigate(
            'courses' as never,
            {
              path: 'home',
            } as never
          )
        }
      >
        <Text style={s.signin_button_get_started_title}>Get Started</Text>
      </Pressable>

      <Pressable style={s.signin_button_log_in}>
        <Text style={s.signin_button_log_in_title}>Log in</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  signin_container: {
    flex: 1,
    paddingHorizontal: 65,
    paddingBottom: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 1,
    backgroundColor: '#2f2d51',
  },
  signin_title_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signin_title: {
    fontFamily: 'inter-800',
    color: '#fff',
    fontSize: 50,
  },
  signin_subtitle: {
    fontSize: 15,
    fontFamily: 'inter-600',
    color: '#9998A9',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 40,
  },
  signin_button_get_started: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B2F4DC',
    width: Dimensions.get('screen').width / 1.5,
    height: 50,
    borderRadius: 15,
    marginVertical: 10,
  },
  signin_button_get_started_title: {
    fontSize: 15,
    fontFamily: 'inter-600',
    color: '#2F2D51',
    textAlign: 'center',
    lineHeight: 25,
  },
  signin_button_log_in: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#595773',
    width: Dimensions.get('screen').width / 1.5,
    height: 50,
    borderRadius: 15,
    marginVertical: 10,
  },
  signin_button_log_in_title: {
    fontSize: 15,
    fontFamily: 'inter-600',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 25,
  },
});
