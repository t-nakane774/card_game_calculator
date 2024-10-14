"use client"
import { useState } from "react"
import "../styles/utils.css"
import "./style/login.css"
import { LoginRequest, login } from "./api/loginApi"
import { useRouter } from "next/router"

const callLogin = async (userId: string, password: string) => {
  const request: LoginRequest = {
    userId: userId,
    password: password
  }

  const response = await login(request);

  //TODO ここはtokenが切れたページを再表示かログイン後topページのどちかにする
  if (response) {
    //TODO useRouterを用いるように変更
    window.location.href = '../chart';
  }
}

export default () => {
  const [inputUserId, setInputUserId] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleLogin = async () => {
    if (!inputUserId) return;
    if (!inputPassword) return;

    setIsProcessing(true);

    await callLogin(inputUserId, inputPassword);

    setIsProcessing(false);
  }

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
            id="userId"
            className="input-box w-full"
            onChange={(event) => setInputUserId(event.target.value)}
          />
        </div>
        <div className="margin-top">
          <div className="input-box-title">パスワード</div>
          <input
            type='password'
            id="password"
            className="input-box w-full"
            onChange={(event) => setInputPassword(event.target.value)}
          />
        </div>
        <div className="move-center margin-top">
          <button
            className="submit-button submit-button-solid"
            onClick={handleLogin}
            disabled={isProcessing}>ログイン</button>
        </div>
      </section>
    </main>
  );

}