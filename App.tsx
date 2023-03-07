import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './App.styles';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const [classes, setClasses] = React.useState<string[]>(['Warrior', 'Knight', 'Wanderer', 'Thief', 'Bandit', 'Hunter', 'Sorcerer', 'Pyromancer', 'Cleric', 'Deprived']);
  const [images, setImages] = React.useState<string[]>([
    'https://i.pinimg.com/originals/41/60/61/416061b9d95e206d7bbeb51e644cca6e.gif',
    'https://steamuserimages-a.akamaihd.net/ugc/921427206947773938/E2F15721B22F1743B257B9FC33647146BC157E30/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    'https://i.pinimg.com/originals/c1/b0/b4/c1b0b43ff8a2ed7a4f68aff8a9fc8974.gif',
    'https://i.makeagif.com/media/6-03-2018/fMJQAc.gif',
    'https://media.tenor.com/jWhi_6_kVEYAAAAM/dark-souls.gif',
    'https://64.media.tumblr.com/024ea40d1d5ecc6c6d418fedd63d8435/tumblr_n9fhdfNAuj1sghp54o1_500.gif',
    'https://media.tenor.com/AfC5BzIuEl0AAAAd/dark-souls-death.gif',
    'https://media.tenor.com/QQgapCXIuPsAAAAd/dark-souls.gif',
    'https://thumbs.gfycat.com/WickedLonelyKoi-size_restricted.gif',
    'https://i.kym-cdn.com/photos/images/original/001/105/501/adb.gif',
    'https://thumbs.gfycat.com/BriskHardFeline-max-1mb.gif',
    'https://www.kotaku.com.au/wp-content/uploads/sites/3/2016/03/30/tzeo1y57nigciudlajfz.gif?q=65&w=1280',
    'https://64.media.tumblr.com/21e802b242e07d0584b7a4d81ac265cb/tumblr_mgz455e0J01r94e9jo1_500.gif',
    'https://thumbs.gfycat.com/DentalImpossibleFluke-max-1mb.gif',
    'https://i.chzbgr.com/full/8104339968/h329B9231/have-you-ever-failed-at-dark-souls-2-so-bad-that'
  ]);
  const [indexImageSelected, setIndexImageSelected] = React.useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dark Souls</Text>
      {/* <Text style={styles.subTitle}>Subtitulo descrição...</Text> */}
      <View style={styles.wrapperImage}>
        <Icons name='angle-left' size={35} color='#fff' onClick={(): void => setIndexImageSelected(indexImageSelected => indexImageSelected > 0 ? indexImageSelected - 1 : images.length - 1)} onPress={() => setIndexImageSelected(indexImageSelected => indexImageSelected > 0 ? indexImageSelected - 1 : images.length - 1)} />
        <Image style={styles.image} source={{uri: images[indexImageSelected]}} />
        <Icons name='angle-right' size={35} color='#fff' onClick={(): void => setIndexImageSelected(indexImageSelected => indexImageSelected < images.length -1 ? indexImageSelected + 1 : 0)} onPress={() => setIndexImageSelected(indexImageSelected => indexImageSelected < images.length -1 ? indexImageSelected + 1 : 0)} />
      </View>
      <Text style={styles.text}>No início do jogo existem as classes iniciais: 
        {classes.map((classe, index) => {
          return(
            <React.Fragment key={index}>
              {index === 0 && <Text> </Text>}
              <View style={styles.span}>
                <Text>{classe}</Text>
              </View>
              {index < classes.length - 2 && <Text>, </Text>}
              {index === classes.length - 2 && <Text> e </Text>}
              {index === classes.length - 1 && <Text>. </Text>}
            </React.Fragment>
          )
        })}
        Mas não importa muito qual você pegue, todos irão morrer igualmente.
      </Text>
    </View>
  );
}