import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { getFlagEmoji, getPercentage } from "../lib/functions";

export default function ItemServer(props: any) {
  return (
    <View
      style={tw`item-server relative w-full h-24 bg-white rounded-lg flex items-center justify-between px-4 py-2 border border-[#e0e0e0]`}
    >
      <View style={tw`gap-1 w-auto flex flex-col items-start justify-center`}>
        <View style={tw`w-auto h-auto flex flex-row gap-2 items-center`}>
          <Text style={tw`text-3xl`}>
            {getFlagEmoji(props.proxy.location_country_code)}
          </Text>
          <View>
            <Text
              style={tw`leading-[1.10rem] font-semibold w-auto overflow-hidden truncate text-[14px]`}
            >
              {props.proxy.location_country}
            </Text>
            <Text
              style={tw`leading-[1.10rem] font-medium w-auto overflow-hidden truncate text-[14px] text-[#7e7d7d]`}
            >
              {props.proxy.ip_address}
            </Text>
          </View>
        </View>

        <View
          style={tw`stats-active-port relative w-56 flex flex-row gap-2`}
        >
          <View
            style={tw.style(
              `w-14 h-6 before:content-[''] before:absolute before:rounded flex gap-1 items-center justify-start select-none bg-[#cfcfcf] font-medium text-xs sm:text-sm rounded overflow-visible flex align-center justify-center`,
              (getPercentage(
                props.proxy.times_check_succeeded,
                props.proxy.times_checked
              ) <= 79 &&
                getPercentage(
                  props.proxy.times_check_succeeded,
                  props.proxy.times_checked
                ) > 30 &&
                "before:w-7 before:h-6 before:bg-yellow-500") ||
                (getPercentage(
                  props.proxy.times_check_succeeded,
                  props.proxy.times_checked
                ) > 79 &&
                  "before:w-14 before:h-6 before:bg-green-500") ||
                (getPercentage(
                  props.proxy.times_check_succeeded,
                  props.proxy.times_checked
                ) <= 30 &&
                  "before:w-4 before:h-6 before:bg-red-500")
            )}
          >
            <Text>
              {getPercentage(
                props.proxy.times_check_succeeded,
                props.proxy.times_checked
              ).toString() + "%"}
            </Text>
          </View>
          <View
            style={tw`w-16 h-6 before:content-[''] before:absolute before:rounded before:w-16 before:h-6 before:bg-[#7474FF] flex gap-1 items-center justify-center select-none bg-[#cfcfcf] font-medium text-xs sm:text-sm rounded overflow-visible `}
          >
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7.5L9.5 5.5L8 7.5H8.953C8.735 8.7345 7.734 9.7355 6.5 9.953V6.5H7.5V5.5H6.5V4.668C7.2715 4.4385 7.857 3.7065 7.857 2.8575C7.857 1.833 7.024 1 6 1C4.976 1 4.143 1.833 4.143 2.8575C4.143 3.7065 4.7285 4.4385 5.5 4.668V5.5H4.5V6.5H5.5V9.953C4.2655 9.7355 3.2645 8.7345 3.047 7.5H4L2.5 5.5L1 7.5H2.0365C2.292 9.4425 4.001 11 6 11C7.999 11 9.708 9.4425 9.9635 7.5H11ZM5.143 2.8575C5.143 2.385 5.5275 2 6 2C6.4725 2 6.857 2.385 6.857 2.8575C6.857 3.333 6.4565 3.75 6 3.75C5.5435 3.75 5.143 3.333 5.143 2.8575Z"
                  fill="white"
                />
              </svg>
            <Text>{props.proxy.port}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
