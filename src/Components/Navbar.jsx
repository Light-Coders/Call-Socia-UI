import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, DotFilledIcon , ChevronDownIcon} from '@radix-ui/react-icons';
import '../styles/Navbar.css';

const Navbar = () => {

  return (
    <Menubar.Root className="MenubarRoot">

      <div className="left">
      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger"><a href="/">Call Socia</a></Menubar.Trigger>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger"><a href="#">About Us</a></Menubar.Trigger>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger"><a href="#">Features</a></Menubar.Trigger>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger"><a href="#">Pricing</a></Menubar.Trigger>
      </Menubar.Menu>
      </div>


      <div className="right">
      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">Profile <ChevronDownIcon/></Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
            <Menubar.Item className="MenubarItem">
              <a href="/account">Accounts and Privacy</a> <div className="RightSlot">&gt;</div>
            </Menubar.Item>
            <Menubar.Item className="MenubarItem">
              <a href="#">Logout</a>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger"><a href="#"  className='text-white border-1 rounded-lg p-2 bg-blue-500' >Github</a></Menubar.Trigger>
      </Menubar.Menu>
      </div>
    </Menubar.Root>
  );
};

export default Navbar;
