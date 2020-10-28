import * as React from 'react';
import { Frame } from 'framer';

export function Switch(props) {
  const [state, setState] = React.useState({
    isOn: false
  });

  const flipSwitch = () => {
    setState({
      isOn: !state.isOn
    });
  };

  return (
    <Frame
      height={50}
      width={80}
      center
      radius={25}
      onTap={flipSwitch}
      variants={{
        off: { background: '#BBBBBB' },
        on: { background: '#0070DF' }
      }}
      initial={props.isOn ? 'on' : 'off'}
      animate={state.isOn ? 'on' : 'off'}
      transition={{
        type: 'tween',
        duration: 0.2
      }}
    >
      <Frame
        size={46}
        top={2}
        left={2}
        radius={'100%'}
        background="#FFFFFF"
        variants={{
          off: { x: 0 },
          on: { x: 30 }
        }}
        transition={{
          type: 'tween',
          duration: 0.2
        }}
      />
    </Frame>
  );
}
export default Switch;
