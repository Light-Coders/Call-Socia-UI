import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import '../styles/ToggleSwitch.css'

const ToggleSwitch = (props) => (
  <form>
    <div style={{ display: 'flex', alignItems: 'center' }} className='flex justify-between'>
      <label className="Label w-2/5" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
        {props.text}
      </label>
      <Switch.Root className="SwitchRoot mr-4" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </div>
  </form>
);

export default ToggleSwitch;