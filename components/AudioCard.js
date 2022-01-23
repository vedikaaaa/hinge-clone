import { StyleSheet, Text, View, Image } from 'react-native';
import { Icons } from '../assets/Themes';

export default function AudioCard() {
  return (
    <View style={[styles.audioCardContainer, styles.shadow]}>
      <Text style={styles.audioCardText}>My hottest take</Text>
      <View style={styles.audioCardContent}>
        <Image style={[styles.audioCardContentImage, {width: '20%'}]} source={Icons.player.light}></Image>
        <Image style={[styles.audioCardContentImage, {width: '78%'}]} source={Icons.audioWave.light}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  audioCardContainer: {
    width: '86%',
    height: '25%',
    borderRadius: 32,
    margin: '2%',
    padding: '4%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Themes.light.bgSecondary
  },
  audioCardText: {
    fontFamily: 'Sydney',
    color: Themes.light.text,
    fontSize: 26
  },
  audioCardContent: {
    width: '100%',
    height: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  audioCardContentImage: {
    height: '100%',
    resizeMode: 'contain'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,  
    elevation: 5
  }
})