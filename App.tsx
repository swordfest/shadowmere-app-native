import { StyleSheet, Text, View } from "react-native";
import { RecoilRoot, useRecoilState } from "recoil";

import Main from "./Main";

export default function App() {

  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // "@font-face": {
  //   fontFamily: "Twemoji",
  //   src: "url('./fonts/twemoji.woff2') format('woff2')",
  //   sizeAdjust: "120%",
  //   fontDisplay: "swap",
  // },
  // Twemoji: {
  //   fontFamily: "Twemoji",
  // },
});
