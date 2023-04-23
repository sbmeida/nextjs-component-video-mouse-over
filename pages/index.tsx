import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import classes from "./videos.module.scss";
import VideoCard from "../comps/VideoCard";
import VideoCardWithoutPoster from "../comps/VideoCardWithoutPoster";

const index = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <div className={classes.container}>
      <h2>Video card with poster attribute</h2>
      <div className={classes.grid}>
        {props.videos.map((video: any, key: any) => {
          return (
            <VideoCard
              key={video.id}
              videoSrc={video.videoUrl}
              videoPoster={video.videoPoster}
            />
          );
        })}
      </div>
      <h2>Video card without video poster attribute</h2>
      <div className={classes.grid}>
        {props.videos.map((video: any, key: any) => {
          return (
            <VideoCardWithoutPoster
              key={video.id}
              videoSrc={video.videoUrl}
              videoPoster={video.videoPoster}
            />
          );
        })}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = [
    {
      id: 1,
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      videoPoster:
        "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
    {
      id: 2,
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      videoPoster:
        "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
    {
      id: 3,
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      videoPoster:
        "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
    {
      id: 4,
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      videoPoster:
        "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
  ];
  return {
    props: {
      videos: data,
    },
  };
};

export default index;
