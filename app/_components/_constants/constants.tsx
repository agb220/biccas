import {
  DescriptSvg,
  GrammarlySvg,
  IntercomSvg,
  NotionSvg,
  UnsplashSvg,
} from "../_icon";

export const menulist = [
  { item: "Home", href: "/" },
  {
    item: "Product",
    href: "/",
  },
  { item: "FAQ", href: "/" },
  { item: "Blog", href: "/" },
  { item: "About Us", href: "/" },
];

export const clients = [
  { icon: <UnsplashSvg />, label: "Unsplash" },
  { icon: <NotionSvg />, label: "Notion" },
  { icon: <IntercomSvg />, label: "INTERCOM" },
  { icon: <DescriptSvg />, label: "Descript" },
  { icon: <GrammarlySvg />, label: "Grammarly" },
];

export const raiting = [
  { raitin: "4.9", label: "Databricks" },
  { raitin: "4.4", label: "Chainalysis" },
];

export const supportItems = [
  {
    title: "Publishing",
    desc: "Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd",
    icon: "/images/support/activity.svg",
  },
  {
    title: "Analytics",
    desc: "Analyze your performance and create goegeous report",
    icon: "/images/support/pie-chart.svg",
  },
  {
    title: "Engagement",
    desc: "Quiuckly navigate you anda engage with your adience",
    icon: "/images/support/command.svg",
  },
];

export const features = [
  {
    imgSrc: "/images/feaures/colab.png",
    title: "Collboration Teams",
    desc: "Here you can handle projects together with team virtually",
  },
  {
    imgSrc: "/images/feaures/storage.png",
    title: "Cloud Storage",
    desc: "No nedd to worry about storage because we provide storage up to 2 TB",
  },
  {
    imgSrc: "/images/feaures/analitics.png",
    title: "Daily Analytics",
    desc: "We always provide useful informatin to make it easier for you every day",
  },
];

export const benefits = [
  { id: "1", item: "Free Consulting With Experet Saving Money" },
  { id: "2", item: "Online Banking" },
  { id: "3", item: "Investment Report Every Month" },
  { id: "4", item: "Saving Money For The Future" },
  { id: "5", item: "Online Transection" },
];

export const plans = [
  {
    id: "free",
    title: "Free",
    description: "Have a go and test your superpowers",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "2 Users",
      "2 Files",
      "Public Share & Comments",
      "Chat Support",
      "New income apps",
    ],
    buttonText: "Signup for free",
    isPopular: false,
  },
  {
    id: "pro",
    title: "Pro",
    description: "Experiment the power of infinite possibilities",
    monthlyPrice: 12,
    yearlyPrice: 8,
    features: [
      "4 Users",
      "All apps",
      "Unlimited editable exports",
      "Folders and collaboration",
      "All incoming apps",
    ],
    buttonText: "Go to pro",
    isPopular: true,
  },
  {
    id: "business",
    title: "Business",
    description: "Unveil new superpowers and join the Design League",
    monthlyPrice: 20,
    yearlyPrice: 16,
    features: [
      "All the features of pro plan",
      "Account success manager",
      "Single Sign-On (SSO)",
      "Co-conception program",
      "Collaboration-Soon",
    ],
    buttonText: "Go to Business",
    isPopular: false,
  },
];
