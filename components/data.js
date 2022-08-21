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
  title: "Highlight your benefits",
  desc: "ventore veritatis et quasi architecventore veritatis et quasi architecventore veritatis et quasi architecventore veritatis et quasi architecventore veritatis et quasi architec",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
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
