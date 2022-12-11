import { motion } from "framer-motion";
import React from "react";

const CloseButton: React.FC<{onClose: () => void}> = ({onClose}) =>
{
    return (
        <motion.button
            style={styles.button}
            onClick={onClose}
            whileTap={{translateY: 5}}
            whileHover={{scaleX: 1.25}}
            draggable={false}
        >
            <motion.span style={styles.line}/>
        </motion.button>
    )
}

const styles: {[key: string]: React.CSSProperties} = {
    button: {
        width: 42,
        height: 42,
        margin: 5,
        marginLeft: "auto",
        borderRadius: 21,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent",
        borderStyle: "none",
        backgroundColor: "transparent"
    },
    line: {
        height: 3,
        backgroundColor: "white",
        borderRadius: 5,
        width: 20,
    }
}

export default CloseButton;