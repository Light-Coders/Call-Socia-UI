import React, { useState } from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, DotFilledIcon , ChevronDownIcon} from '@radix-ui/react-icons';
import '../styles/Navbar.css';
import { GoogleLogin } from '@react-oauth/google';


// This ignores the signature verification part as its verified in the backend
const parseToken = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}


const Navbar = () => {
  const [user, setUser] = useState(0);
  
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

      {user ?
      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">
            <img class="w-10 h-10 rounded-full" src={user.picture} alt="Rounded avatar"/>
        </Menubar.Trigger>
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

      :<Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">
          <GoogleLogin
            theme="filled_black"
            size = "large"
            onSuccess={credResponse => {
              let token = credResponse.credential;
              setUser(parseToken(token));
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          /> 
        </Menubar.Trigger>
      </Menubar.Menu>
      }
      </div>
    </Menubar.Root>
  );
};

export default Navbar;
