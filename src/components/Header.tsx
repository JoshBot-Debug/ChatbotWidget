import React from "react";
import CloseButton from "./CloseButton";
import { Photo } from "./Photo";

export const Header: React.FC<{onClose: () => void}> = ({onClose}) =>
{
    return (
        <div style={styles.header} draggable={false} onDragStartCapture={(e) => e.preventDefault()}>
            <Photo/>
            <p style={styles.name}>EMMA</p>
            <CloseButton onClose={onClose}/>
        </div>
    )
}

const styles: {[key: string]: React.CSSProperties} = {
    header: {
        backgroundColor: "#37add3",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxShadow: "#0000008a 0px 1px 5px",
    },
    name: {
        fontSize: 19,
        margin: 0,
        userSelect: "none",
        color: "white",
        fontWeight: "bold",
        fontFamily: "system-ui"
    }
}