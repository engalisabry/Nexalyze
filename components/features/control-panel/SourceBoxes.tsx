import { FC } from "react";
import { useControlPanelStyles } from "@/styles/components/control-panel";
import {
  IconBooks,
  IconAddressBook,
  IconLuggageOff,
  IconMap2,
  IconWorld,
} from "@tabler/icons-react";
import { iconsStuff } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { panelActions } from "@/store/slices";

const SourceBoxes: FC = () => {
  const dispatch = useAppDispatch();
  const { classes } = useControlPanelStyles();
  const { sourceBoxData } = panelActions;
  const TargetBoxLabel = useAppSelector((state) => state.panel.sourceBoxData);

  const resourcesData: iconsStuff = [
    {
      label: "books",
      icon: IconBooks,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "courses",
      icon: IconAddressBook,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "tools",
      icon: IconLuggageOff,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "roadmap",
      icon: IconMap2,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "jobs",
      icon: IconWorld,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "tools2",
      icon: IconLuggageOff,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "jobs2",
      icon: IconWorld,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "books2",
      icon: IconBooks,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "courses2",
      icon: IconAddressBook,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "tools3",
      icon: IconLuggageOff,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "roadmap2",
      icon: IconMap2,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "jobs3",
      icon: IconWorld,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "tools4",
      icon: IconLuggageOff,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
    {
      label: "jobs4",
      icon: IconWorld,
      fetchUrl: "https://jsonplaceholder.typocode.com/posts/1",
    },
  ];

  return (
    <div className={classes.wrapper}>
      {resourcesData.map((item) => (
        <div
          className={TargetBoxLabel.label === item.label ? "active" : ""}
          onClick={() => dispatch(sourceBoxData({ label: item.label }))}
          key={item.label}
        >
          <span>
            <item.icon />
          </span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SourceBoxes;
