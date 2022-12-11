import { motion } from "framer-motion";
import React from "react";
import { Icon } from "../Icons";

const SendButton: React.FC<{onPress: () => void}> = ({onPress}) => (
    <motion.button
        onClick={onPress}
        whileTap={{translateY: 5}}
        whileHover={{scale: 1.1}}
        style={styles.button}
    >
        <Icon.SendSvg color="#37add3" style={styles.icon}/>
    </motion.button>
)

const styles: {[key: string]: React.CSSProperties | {[key: string]: React.CSSProperties}} = {
    icon: {
        width: 30,
        height: 30,
        marginLeft: "auto",
        padding: 10,
        cursor: "pointer"
    },
    button: {
        borderStyle: "none",
        backgroundColor: "transparent",
        WebkitTapHighlightColor: "transparent",
    }
}
export default SendButton;