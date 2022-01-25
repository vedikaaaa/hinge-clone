import { StyleSheet, Text, Platform, View, SafeAreaView, Image, Dimensions } from 'react-native';
import Constants from '../Constants';
import { Icons } from '../assets/Themes';

export default function TopBar() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Image source={Icons.menu.light} style={styles.topBarIcon}/>
          <Text style={styles.topBarText}>
            ensom
          </Text>
        <Image source={Icons.sun} style={styles.topBarIcon}/>
      </View>
    </SafeAreaView>
  );
}

function calculateHeight() {
  if(Dimensions.get('screen').width > Constants.tabletWidth) {
    return '10%';
  }

  return Platform.OS === 'ios' ? '12%' : '12%';
}

const styles = StyleSheet.create({
  container: {
    height: calculateHeight(),
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  topBar: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-end',
  },
  topBarIcon: {
    width: '12%',
    height: Platform.OS === 'ios' ? '100%' : '50%',
    resizeMode: 'contain',
  },
  topBarText: {
    fontFamily: 'Sydney-Bold',
    fontSize: Dimensions.get('screen').width > Constants.tabletWidth ? 60 : 36,
  },
})