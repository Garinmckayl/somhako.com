import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  UserCircleIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  PencilIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import howworksvg from "../public/img/how-work-svg.png";
import protocolsvg from "../public/img/somhako-protocol.png";

const benefitOne = {
  title: "All The Features You Will Ever Need",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "All The Features You Will Ever Need",
      desc: "Connect with an amazing tech community and build teams globally. Let candidates learn, refer, and get rewarded for every action they take. ",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Smart AI-based Matchmaking ",
      desc: "Get matched with the right candidates, without worrying about the authenticity of their details. Our AI analyzes the resumes and finds the ideal candidates for the role, saving you hours of time. ",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Trust The Blockchain",
      desc: "Every candidate's data is stored on our blockchain network. Access verified details and incentivize candidates directly—no intermediary, more control.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Share Data, On Demand",
      desc: "By revealing your profile identity, engaging, referring, and learning, users can earn reward. ",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Access Talents, Your Way",
      desc: "Integrate Somhako Protocol and import all our existing networks to your platform. Let us handle the growth hacking while you focus on the user experience.",
      icon: <ChevronDoubleRightIcon />,
    }
  ],
};

const howitworks = {
  title: "How Somhako Works",
  desc: "",
  image: howworksvg,
  bullets: [
    {
      title: "Register an account",
      desc: "Due to its widespread use as filler text for layouts, non-readability is of great importance.",
      icon: <UserCircleIcon />,
    },
    {
      title: "Earn credit tokens",
      desc: "There are many variations of passages of avaibookmark-label, but the majority alteration in some form.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Find curated jobs",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      icon: <BriefcaseIcon />,
    },
    {
      title: "Apply for job",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      icon: <PencilIcon />,
    },
  ],
};

const protocolsData = {
  image: protocolsvg,
  bullets: [
    {
      title: '',
      desc: "By using Somhako protocol, users can create digital résumés on the blockchain, and data on the blockchain can be aggregated and used by other applications.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: '',
      desc: "Developers can integrate Somhako Protocol to import somhako existing networks. Developers may concentrate on providing an outstanding user experience and leave growth hacking to the protocol!",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: '',
      desc: "Somhako protocol unlocks portability and composability across the industry.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: '',
      desc: "The Somhako Protocol unites entire HR industry. This protocol is designed to help HR professionals establish a one-stop shop for their enterprise-wide hiring process. It applies a more personal approach to recruitment and focuses on hiring individuals that are aligned with the organization's vision, culture, purpose and values.",
      icon: <ChevronDoubleRightIcon />,
    },
  ],
};

export { benefitOne, howitworks, protocolsData };
