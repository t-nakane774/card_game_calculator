"use client"
import { useState } from "react"
import "../styles/utils.css"
import "./style/login.css"

export default () => {
  const [inputUsesId, setInputUserId] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <section className="dialog">
        <div className="move-center login-title">
          <h1>Card Game Calculator</h1>
        </div>
        <div className="margin-top">
          <div className="input-box-title">ユーザーID</div>
          <input
            type='text'
            id="scrap-sold"
            className="input-box w-full"
            onChange={(event) => setInputUserId(event.target.value)}
          />
        </div>
        <div className="margin-top">
          <div className="input-box-title">パスワード</div>
          <input
            type='password'
            id="scrap-sold"
            className="input-box w-full"
            onChange={(event) => setInputPassword(event.target.value)}
          />
        </div>
        <div className="move-center margin-top">
          <button className="submit-button submit-button-solid" >ログイン</button>
        </div>
      </section>
    </main>
  );

}