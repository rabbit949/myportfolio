import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={() => props.video && setIsVideo(true)}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        {!isVideo && <img src={props.image} alt={props.alt} />}

        {isVideo && props.video && (
          <video
            src={props.video}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;

