import React, { PropsWithChildren } from "react"
import { animate, motion, useMotionValue } from "framer-motion"
import { Icon } from "./Icons";

export const Button: React.FC<PropsWithChildren<{onPress: () => void, visible: boolean}>> = ({onPress, visible, children}) =>
{
    const scale = useMotionValue(1);
    const onClick = () => animate(scale, [0.9, 1.2, 0], {bounce: 1, type: "spring", duration: 0.5, onComplete: onPress})
    return (
        <div style={styles.container}>
            <motion.button
                style={{...styles.button, scale}}
                onClick={onClick}
                whileTap={{scale: 0.9}}
                initial={{scale: 0}}
                animate={visible ? "open" : "close"}
                variants={{open: {scale: 1, transition: {duration: 0.3, delay: 0.15}}, close: {scale: 0, transition: {duration: 0.3}}}}
                drag
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
            >
                <Icon.ChatSvg color="white" style={{width: 30, height: 30}}/>
            </motion.button>
            {children}
        </div>
    )
}

const styles: {[key: string]: React.CSSProperties} = 
{
    container: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    button: {
        borderRadius: 100,
        borderWidth: 0,
        backgroundColor: "#37add3",
        borderStyle: "solid",
        padding: 5,
        cursor: "pointer",
        width: 60,
        height: 60,
        boxShadow: "#0000007d 2px 2px 5px 0px",
        
    },
}