import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import ItemServer from "./components/itemServer";
import { getFlagEmoji } from "./lib/functions";
import useSWR from "swr";
import { RecoilRoot, useRecoilState } from "recoil";
import {
  countryFilterState,
  pageCounterState,
  portFilterState,
} from "./lib/store";

export default function Main() {
  const [pageCounter, setPageCounter] = useRecoilState(pageCounterState);
  const [portFilter, setPortFilter] = useRecoilState(portFilterState);
  const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);

  const fetcher = (...args: [any, any]) =>
    fetch(...args).then((res) => res.json());
  const { data, error, mutate } = useSWR(
    "https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&location_country_code=" +
      countryFilter +
      "&port=" +
      portFilter +
      "&page=" +
      pageCounter?.toString(),
    fetcher
  );

  return (
        <ScrollView style={tw`w-full h-full px-4`} contentContainerStyle={tw`gap-4`}>
          {data.results.map((d: any) => (
            <ItemServer key={d.id} proxy={d} />
          ))}
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  "@font-face": {
    fontFamily: "Twemoji",
    src: "url('./fonts/twemoji.woff2') format('woff2')",
    sizeAdjust: "120%",
    fontDisplay: "swap",
  },
  Twemoji: {
    fontFamily: "Twemoji",
  },
});
