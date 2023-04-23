import { useRef, useState } from "react";
import classes from "./videoCard.module.scss";

type Props = {
  videoSrc: string;
  videoPoster: string;
};

const VideoCard = ({ videoSrc, videoPoster }: Props) => {
  const [isMouseOver, setMouseOver] = useState(false);
  const playVideo = (event: any) => event.target.play();
  const stopVideo = (event: any) => {
    event.target.pause();
    event.target.currentTime = 0;
    event.target.load();
  };

  const showThumbnail = (event: any) => setMouseOver(true);
  const hideThumbnail = (event: any) => setMouseOver(false);

  return (
    <div className={classes.container}>
      <div className={classes.thumbnail}>
        <a href="#" onMouseOver={showThumbnail} onMouseOut={hideThumbnail}>
          <video
            width="320"
            height="240"
            poster={videoPoster}
            onMouseOver={playVideo}
            onMouseOut={stopVideo}
            muted
          >
            <source src={videoSrc} />
          </video>
        </a>
      </div>
      <div className={classes.details}>placeholder for other details/info/menu</div>
    </div>
  );
};

export default VideoCard;
