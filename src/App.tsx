import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator} from '@aws-amplify/ui-react'
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"
import awsExports from "./aws-exports"
import { QRCodeSVG } from 'qrcode.react';


Amplify.configure(awsExports);


function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
         <div className="App">
         <header className="App-header">
           <p>
                 こんにちは
           </p>
           {user?(
             <>
             <h3>私は権限を持っています：{user.username}</h3>
             <QRCodeSVG  value={user.username} />
             <button onClick={signOut}>サインアウト </button>
             </>
           ):<h3>私は権限を持っていません。</h3>}
         </header>
       </div>
      )}
    </Authenticator>
  );
   

}

export default withAuthenticator(App);
