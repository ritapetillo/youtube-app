import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  thumbNail: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  videoCard: {
    position: "relative",
  },
  timeContainer: {
    backgroundColor: "#00000099",
    height: 25,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  time: {
    color: "white",
  },
  titleRow: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  titleContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  subTitle: {
    color: "gray",
  },
});
