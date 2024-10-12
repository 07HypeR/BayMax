import Tts from 'react-native-tts';

export const initializeTtsListeners = async () => {
  Tts.getInitStatus().then(
    () => {
      console.log('ALL OK TTS ✅');
    },
    err => {
      if (err.code === 'no_engine') {
        console.log('NO TTS ENGINE ❌ ');
        Tts.requestInstallEngine();
      }
    },
  );

  // const voices = await Tts.voices();
  // console.log(voices);

  Tts.setDefaultRate(0.7, true);
  Tts.setIgnoreSilentSwitch('ignore');

  Tts.setDefaultPitch(0.7);
  Tts.addEventListener('tts-start', event => {
    console.log('TTS Started: ', event);
  });
  Tts.setDefaultPitch(0.7);
  Tts.addEventListener('tts-progress', event => {
    // console.log('TTS Progress: ', event);
  });
  Tts.setDefaultPitch(0.7);
  Tts.addEventListener('tts-finish', event => {
    console.log('TTS Finished: ', event);
  });
  Tts.setDefaultPitch(0.7);
  Tts.addEventListener('tts-cancel', event => {
    console.log('TTS Cancel: ', event);
  });
};

export const playTTS = async (message: string) => {
  Tts.getInitStatus().then(
    () => {
      console.log('ALL OK TTS ✅');
    },
    err => {
      if (err.code === 'no_engine') {
        console.log('NO TTS ENGINE ❌ ');
        Tts.requestInstallEngine();
      }
    },
  );
  Tts.speak(message);
};
