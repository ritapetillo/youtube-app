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
    paddingHorizontal: 5,
  },
  actionListItem: {
    padding: 10,
    paddingHorizontal: 20,
    height: 72,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconText: {
    color: "grey",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    paddingVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userTitle: {
    color: "white",
    fontSize: 16,
  },
  subscribeBtn: {
    textTransform: "uppercase",
    color: "grey",
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 20,
  },
  commentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,

    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
});
