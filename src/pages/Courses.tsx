import { ReactNode, useMemo, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export function Courses() {
  const { goBack } = useNavigation();

  const courses = useMemo(() => ['English', 'Geometry', 'Design'], []);

  const [actualCourseSelected, setActualCourseSelected] = useState(courses[1]);

  type Tab =
    | { name: 'home'; icon: ReactNode }
    | { name: 'hour'; icon: ReactNode }
    | { name: 'profile'; icon: ReactNode };

  const [actualTab, setActualTab] = useState<Tab['name']>('home');

  const tabs = useMemo(
    (): Tab[] => [
      {
        name: 'home',
        icon: (
          <MaterialCommunityIcons
            name="home-minus-outline"
            size={25}
            color={actualTab === 'home' ? '#2f2d51' : '#EDEDFA'}
          />
        ),
      },
      {
        name: 'hour',
        icon: (
          <MaterialCommunityIcons
            name="chat-outline"
            size={25}
            color={actualTab === 'hour' ? '#2f2d51' : '#EDEDFA'}
          />
        ),
      },
      {
        name: 'profile',
        icon: (
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={25}
            color={actualTab === 'profile' ? '#2f2d51' : '#EDEDFA'}
          />
        ),
      },
    ],
    [actualTab]
  );

  return (
    <View style={s.courses_container}>
      <StatusBar backgroundColor="#fff" />

      <View style={{ flex: 1 }}>
        {actualTab === 'home' && (
          <>
            <View style={s.courses_header_wrapper}>
              <Pressable onPress={goBack}>
                <Ionicons name="arrow-back" size={24} color="#2F2D50" />
              </Pressable>

              <Ionicons name="menu" size={24} color="#2F2D50" />
            </View>

            <Text style={s.courses_title}>Select</Text>
            <Text
              style={[
                s.courses_title,
                { fontSize: 30, fontFamily: 'inter-900' },
              ]}
            >
              Course
            </Text>

            <View style={s.courses_footer_content}>
              <FlatList
                data={courses}
                keyExtractor={(item) => item}
                contentContainerStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: 50,
                  backgroundColor: '#EDEDFA',
                  borderRadius: 15,
                }}
                renderItem={({ item }) => (
                  <Pressable
                    style={
                      item !== actualCourseSelected
                        ? s.courses_button_course
                        : [
                            s.courses_button_course,
                            { backgroundColor: '#2F2D50' },
                          ]
                    }
                    onPress={() => setActualCourseSelected(item)}
                  >
                    <Text
                      style={
                        item !== actualCourseSelected
                          ? s.courses_button_course_text
                          : [s.courses_button_course_text, { color: '#fff' }]
                      }
                    >
                      {item}
                    </Text>
                  </Pressable>
                )}
              />
            </View>
          </>
        )}

        <FlatList
          data={tabs}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%',
            height: 50,
            marginTop: 40,
          }}
          renderItem={({ item }) => (
            <Pressable onPress={() => setActualTab(item.name)}>
              {item.icon}
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  courses_container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  courses_header_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: Dimensions.get('screen').width * 0.2,
    marginBottom: 40,
  },
  courses_title: {
    fontSize: 20,
    fontFamily: 'inter-200',
    color: '#2F2D50',
    textAlign: 'left',
  },
  courses_footer_content: {
    marginTop: 'auto',
    marginVertical: 10,
  },
  courses_button_course: {
    width: (Dimensions.get('screen').width - 60) / 3,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  courses_button_course_text: {
    fontSize: 15,
    fontFamily: 'inter-600',
    color: '#9190A9',
  },
  courses_tabs_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 50,
    marginTop: 40,
  },
});
