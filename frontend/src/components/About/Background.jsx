import { AnimatePresence } from "framer-motion";

import Image from "./Background/Image";
import Frontend from "./Background/Frontend";
import Backend from "./Background/Backend";
import DevOps from "./Background/DevOps";
import Mobile from "./Background/Mobile";
import Security from "./Background/Security";

const Background = ({ value }) => {
  return (
    <AnimatePresence mode="wait">
      {value === "Image" && <Image key="image" />}
      {value === "Frontend" && <Frontend key="frontend" />}
      {value === "Backend" && <Backend key="backend" />}
      {value === "DevOps & Systems" && <DevOps key="devops" />}
      {value === "Mobile & Future Focus" && <Mobile key="mobile" />}
      {value === "Security & Exploration" && <Security key="security" />}
    </AnimatePresence>
  );
};

export default Background;
