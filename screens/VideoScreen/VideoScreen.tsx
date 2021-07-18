import React, { useRef, RefObject } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";
import video from "../../assets/data/video.json";
import videos from "../../assets/data/videos.json";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import VideoListItem, { VideoProps } from "../../components/VideoListItem";
import BottonSheet from "@gorhom/bottom-sheet";
import VideoComments from "../../components/VideoComments";

interface VideoScreenProps {
  openComment: () => void;
}

const VideoScreen: React.FC<VideoScreenProps> = ({ openComment }) => {
  return (
    <View>
      <Image style={styles.videoPlayer} source={{ uri: video.thumbnail }} />
      <View style={styles.infoContainer}>
        <Text style={styles.tags}>{video.tags}</Text>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.subTitle}>
          {video.views} views · {video.createdAt}
        </Text>
      </View>
      <View style={styles.actionListContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.actionListItem}>
            <AntDesign name="like2" size={24} color="grey" />
            <Text style={styles.iconText}>{video.likes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="dislike2" size={24} color="grey" />
            <Text style={styles.iconText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <Ionicons name="chatbubbles-outline" size={24} color="grey" />
            <Text style={styles.iconText}>Live Chat</Text>
          </View>
          <View style={styles.actionListItem}>
            <MaterialCommunityIcons name="share" size={24} color="grey" />
            <Text style={styles.iconText}>Share</Text>
          </View>
          <View style={styles.actionListItem}>
            <MaterialCommunityIcons name="download" size={24} color="grey" />
            <Text style={styles.iconText}>Download</Text>
          </View>
          <View style={styles.actionListItem}>
            <MaterialIcons name="save" size={24} color="grey" />
            <Text style={styles.iconText}>Save</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.userContainer}>
        <Image source={{ uri: video.user.image }} style={styles.avatar} />
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Text style={styles.userTitle}>{video.user.name}</Text>
          <Text style={{ color: "lightgrey", fontSize: 12 }}>
            {video.user.subscribers} subscribers
          </Text>
        </View>
        <Text style={styles.subscribeBtn}>Subscribe</Text>
        <MaterialCommunityIcons name="bell-outline" size={24} color="grey" />
      </View>
      {/* Comments */}

      <View>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            marginTop: 10,
            marginRight: 10,
          }}
        >
          Comments
          <Text style={{ color: "lightgrey" }}> 333</Text>
        </Text>
        <Pressable onPress={openComment}>
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
            <Text style={{ color: "white", fontSize: 12 }}>
              Some comments here
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Video List */}
    </View>
  );
};

const videoScrenWithRecomandation = () => {
  const bottomRef = useRef<BottonSheet>(null);
  const openComment = () => {
    bottomRef.current?.expand();
  };

  return (
    <SafeAreaView>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        ListHeaderComponent={<VideoScreen openComment={openComment} />}
      />
      <BottonSheet
        snapPoints={[0, "60%"]}
        index={0}
        ref={bottomRef}
        backgroundComponent={(item) => (
          <View style={{ backgroundColor: "#fff", borderRadius: 10 }} />
        )}
      >
        <VideoComments video={video} />
      </BottonSheet>
    </SafeAreaView>
  );
};

export default videoScrenWithRecomandation;
