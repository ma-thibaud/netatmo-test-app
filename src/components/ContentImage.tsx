import { Content } from "../App";

type ContentImageProps = {
  content: Content;
  textPosition: "left" | "right";
  className?: string;
};

function ContentImage({ content, textPosition, className }: ContentImageProps) {
  return (
    <div className={`relative ${className}`}>
      <img
        alt={content.title}
        src={require(`../assets/images/${content.imageName}.jpg`)}
      />
      <div
        className={`absolute bottom-0 ${
          textPosition === "left" ? "" : "right-0"
        } bg-gray-100 px-8 w-1/2 h-full flex flex-col justify-center items-center opacity-75`}
      >
        <div className="text-lg font-bold">{content.title}</div>
        <div className="mt-6 text-xs">{content.paragraph}</div>
      </div>
    </div>
  );
}

export default ContentImage;
