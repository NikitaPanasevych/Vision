import { motion } from "framer-motion";
import ProgressCircle from "../ProgressCircles";
import Link from 'next/link';

interface IGoalCard{
    goalTitle?: string,
    goalDescr?: string,
    index: string,
}

const GoalCard : React.FC<IGoalCard> = (props) => {

    const urlRoute = '/goals/' + props.index;

    return(

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.1,
              }}
        >
        <Link href={urlRoute}>
        <div className=" w-[36rem] cursor-pointer h-[36rem] m-auto mb-40 rounded-lg text-center bg-black">
              <h1 className=" text-white text-7xl">{props.goalTitle}</h1>
              <h2 className=" text-[#E4DCCF] text-4xl">{props.goalDescr}</h2>
        </div>
        </Link>
        </motion.div>
    )
}

export default GoalCard;