import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  videoPlayer: {
    height: 250,
    aspectRatio: 16 / 9,
  },
  infoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
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
  tags: {
    color: "#0094e3",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
    paddingVertical: 5,
  },
  actionListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  actionListItem: {
    padding: 10,
    height: 72,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconText: {
    color: "grey",
  },
});
