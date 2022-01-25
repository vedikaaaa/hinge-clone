import AppLoading from 'expo-app-loading';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Profiles } from './assets/Themes';
import TopBar from './components/TopBar'
import ProfileCard from './components/ProfileCard'
import AudioCard from './components/AudioCard'
import NavBar from './components/NavBar'

export default function App() {
  let [fontsLoaded] = useFonts({
    'Sydney': require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading/>;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <View style={styles.container}>
      <TopBar></TopBar>
      <View style={styles.content}>
        <ProfileCard profile={Profiles.mtl}></ProfileCard>
        <AudioCard></AudioCard>
      </View>
      <NavBar></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Themes.light.bg
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '3%'
  }
});
