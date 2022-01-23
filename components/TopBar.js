import { StyleSheet, Text, Platform, SafeAreaView, Image } from 'react-native';
import { Icons } from '../assets/Themes';

export default function TopBar() {
  return (
    <SafeAreaView style={styles.topBar}>
      <Image source={Icons.menu.light} style={styles.topBarIcon}/>
        <Text style={styles.topBarText}>
          ensom
        </Text>
      <Image source={Icons.sun} style={styles.topBarIcon}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: Platform.OS === 'ios' ? '12%' : '10%',
    marginLeft: '5%',
    marginRight: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarIcon: {
    height: '100%',
    width: '12%',
    resizeMode: 'contain'
  },
  topBarText: {
    fontFamily: 'Sydney-Bold',
    fontSize: 36
  },
})