import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react'
import "@aws-amplify/ui-react/styles.css"
import awsExports from "./aws-exports"
import { QRCodeSVG } from 'qrcode.react';


Amplify.configure(awsExports);

interface AppProps {
  signOut: () => void; // signOut は関数
  user: {
    username: string; // user オブジェクトの型を定義
  } | null; // user が null の場合も想定
}
function App({signOut,user}:AppProps) {
  return (
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
  );
}

export default withAuthenticator(App);
