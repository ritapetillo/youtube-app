import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import comments from "../../assets/data/comments.json";
import { styles } from "./styles";

interface VideoProps {
  video: { user: { image: string } };
  comment?: { comment: string };
}
const VideoComments: React.FC<VideoProps> = ({ video }) => {
  return (
    <View style={{ backgroundColor: "#141414", flex: 1 }}>
      <BottomSheetFlatList
        data={comments}
        renderItem={({ item }) => (
          <SingleComment video={video} comment={item} />
        )}
      />
    </View>
  );
};

const SingleComment: React.FC<VideoProps> = ({ video, comment }) => {
  return (
    <View style={styles.commentItem}>
      <Image
        style={{
          height: 25,
          width: 25,
          borderRadius: 13,
          marginRight: 10,
        }}
        source={{ uri: video.user.image }}
      />
      <Text style={{ color: "white", fontSize: 12 }}>{comment?.comment}</Text>
    </View>
  );
};

export default VideoComments;
