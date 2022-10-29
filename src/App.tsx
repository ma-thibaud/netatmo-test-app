import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ContentImage from "./components/ContentImage";

export type Content = {
  title: string;
  paragraph: string;
  imageName: string;
  selected: boolean;
};

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function App() {
  const [contents, setContents] = useState<Content[]>([
    {
      title: "TITLE",
      paragraph: loremIpsum,
      imageName: "shop",
      selected: true,
    },
    {
      title: "TITLE",
      paragraph: loremIpsum,
      imageName: "iot",
      selected: false,
    },
    {
      title: "TITLE",
      paragraph: loremIpsum,
      imageName: "energy-renovation",
      selected: false,
    },
  ]);

  const onButtonClick = (position: number) => {
    setContents(
      contents.map((content, i) => {
        content.selected = position === i;
        return content;
      })
    );
  };

  const currentContent = contents.find((content) => content.selected);

  return (
    <div className="container mx-auto max-w-4xl mt-24">
      <div className="flex justify-center items-center">
        <div className="mr-6 w-3/4">
          {currentContent && (
            <ContentImage
              content={currentContent}
              textPosition={
                contents.indexOf(currentContent) % 2 ? "right" : "left"
              }
            />
          )}
        </div>
        <div className="grid gap-6 w-1/4 flex-none">
          {contents.map((content, i) => (
            <Button
              key={i}
              title={`Button ${i + 1}`}
              selected={content.selected}
              onClick={() => onButtonClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
