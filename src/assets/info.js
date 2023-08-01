import { PeopleOutline, BorderColorOutlined } from "@mui/icons-material";
import { PieChartOutline, FavoriteBorder } from "@mui/icons-material";
import Education from "../images/education.png";
import Social from "../images/Social.png";
import Vocation from "../images/Vocation.png";
import Welfare from "../images/welfare.png";

const description =
  "Welcome to our official homepage, here are our core areas of attention";

const content =
  "The welfare team, led by the Chairman, Mr Soji, paid Ondo state Ophanage baby home Oba Ile Ondo state a courtesy and reach out visit on the 21st of June, 2019. Among the company was the chairman of SOJITADE foundation and board of trustees among other staffs. The management of the orphanage was happy to receive the team and the gifts, also made known some of their needs too.For more pictures kindly click on the link below";

const newsContent =
  "On the 21st of June, 2019, the compassionate welfare team of Sojitade Foundation, led by Mr. Adesoji Omotade the Chief Executive Director, embarked on a heartwarming visit to the Ondo State Orphanage Home in Oba Ile, Ondo State. The purpose of this visit was to spread love, joy, and support to the children residing in the orphanage. We are thrilled to share the details of our memorable visit, which left an indelible impact on the lives of these wonderful children.";

const newsItem = {
  title: "A heartwarming visit to Ondo State Ophanage Home",
  newsContent,
  id: null,
  date: "21 June, 2019",
};

export const about_us = [
  {
    title: "Education",
    description,
    image: Education,
    content,
    icon: BorderColorOutlined,
  },
  {
    title: "Social LifeStyle",
    description,
    image: Social,
    content,
    icon: PeopleOutline,
  },
  {
    title: "Vocational Skills",
    description,
    image: Vocation,
    content,
    icon: PieChartOutline,
  },
  {
    title: "Welfare",
    description,
    image: Welfare,
    content,
    icon: FavoriteBorder,
  },
];
export const actualContent = [
  {
    title: "A HEARTWARMING VISIT TO ONDO STATE ORPHANAGE HOME BY SOJITADE FOUNDATION",
    newsContent: `On the 21st of June, 2019, the compassionate welfare team of Sojitade Foundation, led by Mr. Adesoji Omotade the Chief Executive Director, embarked on a heartwarming visit to the Ondo State Orphanage Home in Oba Ile, Ondo State. The purpose of this visit was to spread love, joy, and support to the children residing in the orphanage. We are thrilled to share the details of our memorable visit, which left an indelible impact on the lives of these wonderful children.
    At Sojitade Foundation, we are dedicated to making a positive difference in the lives of vulnerable children in our society. Our mission revolves around providing essential supplies, care, and support to those who need it the most. This visit to the Ondo State Orphanage Home was a testament to our commitment to touching hearts and transforming lives.
    `,
    id: null,
    date: "21 June, 2019",
  },
  {
    title: "3RD TERM YEAR-END CELEBRATION SPONSORED AND FACILITATED BY SOJITADE FOUNDATION",
    newsContent: `Venue: St Finbarr’s RCM Nursary and Primary School
    The 3rd term end-of-year celebration took place on July 24, 2019, at St Finbarr's RCM Primary School, located at Oba-Adesida Road, Akure Ondo State. The program commenced promptly at 11:40 am and concluded at 4:10 pm, following the planned schedule.
    Event Purpose and Background:
    Sojitade Foundation (NGO) sponsored and organized the 3rd Term Year-End Celebration with the aim of celebrating and inspiring the pupils of St Finbarr's R.C.M Primary School, particularly the primary six pupils who were preparing to graduate and transition to high school. 
    Event Activities:
    `,
    id: null,
    date: "July 24, 2019",
  },
  {
    title:"THE PAD TOUR: DISPELLING THE STIGMA OF MENSTRUATION",
    newsContent: `Every woman and girl experiences menstruation, which is a normal biological process. Menstruation, however, may be a cause of shame and embarrassment for many young girls and women over the world. This is a result of the stigma associated with menstruation, which is frequently perceived as a filthy or taboo subject.
    The Pad Tour is a program that attempts to eliminate the stigma associated with menstruation and to give underprivileged girls and young women access to menstrual hygiene products and education. Sojitade Foundation, Kids & Teens Resource Centre, YALI Ondo Chapter, Mercy Speaks Initiatives, The Speaking Voice, and the Ondo State chapter of the Medical Women Association of Nigeria organized the event.
    `,
    id: null,
    date: "May 26, 2023",

  }
];
export const news = Array(13).fill(newsItem);
