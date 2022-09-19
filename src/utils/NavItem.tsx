import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { GiHoneypot, GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { FaCcMastercard } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

export const navItem = [
  {
    name: "DashBoard",
    Icon: <AiOutlineHome />,
  },
  {
    name: "Mkolo",
    Icon: <GiHoneypot />,
  },
  {
    name: "EarlyPay",
    Icon: <GiReceiveMoney />,
  },
  {
    name: "Pay Bills",
    Icon: <GiPayMoney />,
  },
  {
    name: "Debit Cards",
    Icon: <FaCcMastercard />,
  },
  {
    name: "Profile",
    Icon: <BiUserCircle />,
  },
  {
    name: "Settings",
    Icon: <AiOutlineSetting />,
  },
];
