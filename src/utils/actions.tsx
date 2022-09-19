import { BiSend } from "react-icons/bi";
import { AiFillFund, AiOutlineGift } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

export const actions = [
  {
    title: "Send Money",
    icon: <BiSend />,
  },
  {
    title: "Fund Account",
    icon: <AiFillFund />,
  },
  {
    title: "Buy Airtime",
    icon: <FaMobileAlt />,
  },
  {
    title: "Pay Bills",
    icon: <MdPayment />,
  },
  {
    title: "Save Money",
    icon: <GiMoneyStack />,
  },
  {
    title: "Cashback",
    icon: <AiOutlineGift />,
  },
];
