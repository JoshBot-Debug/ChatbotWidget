import { motion } from "framer-motion";
import React from "react";
import { Icon } from "../Icons";

const SendButton: React.FC<{onPress: () => void}> = ({onPress}) => (
    <motion.div
        onClick={onPress}
        whileTap={{translateY: 5}}
        whileHover={{scale: 1.1}}
    >
        <Icon.SendSvg color="#37add3" style={styles.icon}/>
    </motion.div>
)

const styles: {[key: string]: React.CSSProperties | {[key: string]: React.CSSProperties}} = {
    icon: {
        width: 30,
        height: 30,
        marginLeft: "auto",
        padding: 10,
        cursor: "pointer"
    },
}
export default SendButton;