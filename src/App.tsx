import React, { useState } from 'react';
import { Button } from './components/Button';
import { Chat } from './components/Chat';

type WidgetID = string

function App({id} : {id: WidgetID | null})
{
  const [visible, setVisible] = useState(false);

  const onPress = () => setVisible(!visible)

  if(!id) return null;
  return (
    <Button onPress={onPress} visible={!visible}>
      <Chat visible={visible} onClose={() => setVisible(false)}/>
    </Button>
  );
}

export default App;
