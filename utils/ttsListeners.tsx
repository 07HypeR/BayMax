import Tts from "react-native-tts";

export const initializeTtsListeners = async () => {
  Tts.getInitStatus().then(
    () => {
      console.log("ALL OK TTS ✅");
    },
    (err) => {
      if (err.code === "no_engine") {
        console.log("NO TTS ENGINE ❌ ");
        Tts.requestInstallEngine();
      }
    }
  );

  const voices = await Tts.voices();
  console.log(voices);
};
