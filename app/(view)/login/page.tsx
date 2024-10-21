"use client"
import { useMemo, useState } from "react"
import "@view/style/utils.css"
import "@view/login/style/login.css"
import { login } from "@view/login/api/loginApi"

const callLogin = async (userId: string, password: string) => {
  const response = await login({ userId: userId, password: password });

  //TODO ここはtokenが切れたページを再表示かログイン後topページのどちかにする
  if (response.success) {
    //TODO useRouterを用いるように変更
    window.location.href = '/chart';
  } else {
    alert('ログイン失敗');
  }
}

export default function Login() {
  const [inputUserId, setInputUserId] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const isInputValid = useMemo(() => {
    return !inputUserId || !inputPassword ? true : false;
  }, [inputUserId, inputPassword])

  const handleLogin = async () => {
    if (!inputUserId) return;
    if (!inputPassword) return;

    setIsProcessing(true);
    await callLogin(inputUserId, inputPassword);
    setIsProcessing(false);

    console.log(isProcessing);
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
            className="submit-button disabled-button submit-button-solid"
            onClick={handleLogin}
            disabled={isInputValid}>ログイン</button>
        </div>
      </section>
    </main>
  );
}