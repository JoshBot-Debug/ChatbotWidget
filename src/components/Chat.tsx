import React from "react";
import Background from "./Background";
import { Header } from "./Header";
import { Container } from "./Container";
import { SendMessage } from "./SendMessage/SendMessage";

export const Chat: React.FC<{visible: boolean; onClose: () => void}> = ({visible, onClose}) =>
{

    return (
        <Container visible={visible}>
            <Background/>
            <Header onClose={onClose}/>
            <SendMessage/>
        </Container>
    );
}