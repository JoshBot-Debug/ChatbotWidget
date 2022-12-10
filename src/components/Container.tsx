import React from "react";
import { motion } from "framer-motion"

export const Container: React.FC<React.PropsWithChildren & {visible: boolean}> = ({children, visible}) => (
    <motion.div
        initial={"closed"}
        animate={visible ? "open" : "closed"}
        style={{...styles.animated_container, padding: 10}}
        variants={{
            open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {type: "spring", bounce: 0, duration: 0.7},
            },
            closed: {
                clipPath: "inset(100% 0% 0% 100% round 10px)",
                transition: {type: "spring", bounce: 0, duration: 0.3},
            },
        }}
    >
        <div style={styles.container}>{children}</div>
        <p style={styles.powered_by}>Powered by <span style={{fontStyle: "italic"}}>ECPL</span></p>
    </motion.div>
)

const styles: {[key: string]: React.CSSProperties} = {
    animated_container: {
        position: "fixed",
        bottom: 10,
        right: 10,
        maxWidth: 350,
        maxHeight: 500,
        width: "calc(100% - 40px)",
        height: "100%",
        borderRadius: 10,
        padding: 10,
        display: "flex",
        flexDirection: "column",
    },
    container: {
        boxShadow: "#0000008a 0px 0px 5px",
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: 10,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        borderBottomRightRadius: 0,
    },
    powered_by: {
        margin: 0,
        alignSelf: "end",
        backgroundColor: "#37add3",
        color: "white",
        fontFamily: "system-ui",
        fontSize: 14,
        padding: 5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        boxShadow: "#0000008a 0px 0px 5px",
        zIndex: 1,
        clipPath: "inset(0px -5px -5px -5px)",
        userSelect: "none",
    }
}