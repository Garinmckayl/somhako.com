import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Join our Discord Community ",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Build awesome teams ",
      desc: "Connect with your network through our community and build teams, reward, learn and refer. A platform beyond just hiring. ",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Reward for all ",
      desc: "By revealing your profile identity, engaging, referring, and learning, users can earn reward. ",
      icon: <ChartSquareBarIcon />,
    }
  ],
};

const benefitTwo = {
  title: "ventore veritatis et quasi architec",
  desc: "cusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "ventore veritatis et quasi architec",
      desc: "lorem23.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "ventore veritatis et quasi architec",
      desc: "cusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "ventore veritatis et quasi architec",
      desc: "cusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo into beatae vitae dicta sunt explicabo.. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
