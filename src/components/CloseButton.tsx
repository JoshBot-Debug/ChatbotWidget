import { animate, motion, useMotionValue } from "framer-motion";
import React from "react";

const CloseButton: React.FC<{onClose: () => void}> = ({onClose}) =>
{
    const lineY = useMotionValue(0);
    const lineWidth = useMotionValue(20);

    const onHoverStart = () => animate(lineWidth, 23)
    const onHoverEnd = () => animate(lineWidth, 20)
    const onTouchStart = () => animate(lineY, 5)
    const onTouchEnd = () => animate(lineY, 0)

    return (
        <motion.span
            style={styles.button}
            onClick={onClose}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            onMouseDown={onTouchStart}
            onMouseLeave={onTouchEnd}
            onMouseUp={onTouchEnd}
            draggable={false}
        >
            <motion.span style={{...styles.line, width: lineWidth, translateY: lineY}}/>
        </motion.span>
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
        cursor: "pointer"
    },
    line: {
        height: 3,
        backgroundColor: "white",
        borderRadius: 5,
    }
}

export default CloseButton;