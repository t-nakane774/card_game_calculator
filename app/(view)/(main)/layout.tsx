import { Header } from "./components/Header";
import { MainUseEffectWrapper } from "./components/MainUseEffectWrapper";


//TODO layoutの位置を変更して、ログインしていない時に遷移した際にHeaderがうつらないようにする
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header></Header>
      <MainUseEffectWrapper>{children}</MainUseEffectWrapper>
    </>
  );
}