import React from "react"

const Background: React.FC<{}> = () => <div style={style}/>

const style: React.CSSProperties = {
    backgroundImage: `url(${require("../assets/background.png")})`,
    backgroundColor: "#f2f2f2",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
}

export default Background;