import React from "react";
import SendButton from "./SendButton";

export const SendMessage: React.FC<{}> = () =>
{
    const onSubmit = () =>
    {

    }

    return (
        <div style={styles.container}>
            <input style={styles.input} placeholder={"Message..."}/>
            <SendButton onPress={onSubmit}/>
        </div>
    )
}

const styles: {[key: string]: React.CSSProperties | {[key: string]: React.CSSProperties}} = {
    container: {
        display: "flex",
        alignItems: "center",
        marginTop: "auto",
        paddingRight: 5,
        paddingLeft: 5,
        backgroundColor: "white"
    },
    input: {
        flex: 1,
        padding: 10,
        border: 'none',
        borderWidth: 0,
        fontSize: 16,
        fontFamily: "system-ui",
        width: "100%",
    },
}