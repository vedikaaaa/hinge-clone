import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import { Icons } from '../assets/Themes';

export default function NavBar() {
  function NavBarItem({icon, text}) {
    return (
      <View style={styles.navigationItem}>
        <Image source={icon} style={styles.navigationItemIcon}/>
        <Text style={styles.navigationItemText}>{text}</Text>
      </View>
    );
  }

  return (
    <View style={styles.navigation}>
      <NavBarItem icon={Icons.discover.light} text={"Discover"}></NavBarItem>
      <NavBarItem icon={Icons.heart.light} text={"Matches"}></NavBarItem>
      <NavBarItem icon={Icons.messages.light} text={"DMs"}></NavBarItem>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    height: Platform.OS === 'ios' ? '9%' : '9%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: Themes.light.navigation,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  navigationItem: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    padding: 4
  },
  navigationItemIcon: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: 'contain',
  },
  navigationItemText: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    textAlign: 'center',
    padding: 1,
    fontSize: 18
  }
})