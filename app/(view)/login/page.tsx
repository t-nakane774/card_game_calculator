"use client"
import "../styles/utils.css"

export default () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <section className="dialog">
        <div>
          <h1>ログイン</h1>
        </div>
        <div>
          <input
            type='text'
            id="scrap-sold"
            className="input-box"
            placeholder="Input Mail Address"
          />
        </div>
        <div>
          <input
            type='text'
            id="scrap-sold"
            className="input-box"
            placeholder="Input Password"
          />
        </div>
      </section>
    </main>
  );

}