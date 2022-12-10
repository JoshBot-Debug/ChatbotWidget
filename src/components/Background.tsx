import React from "react"
import { BackgrounURI } from "./BackgroundPhoto";

const Background: React.FC<{}> = () => <div style={style}/>

const style: React.CSSProperties = {
    backgroundImage: `url(${BackgrounURI})`,
    backgroundColor: "#f2f2f2",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
}

export default Background;