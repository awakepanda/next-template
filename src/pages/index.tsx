import type { NextPage } from 'next';
import { Modal } from 'src/components/Modal';
import { Header } from 'src/components/Header';
import { Tabmenu } from 'src/components/Tabmenu';

const Home: NextPage = () => {
  return (
    <>
      {/* <div className="flex justify-center items-center h-screen">
        <Modal />
      </div> */}
      <Tabmenu />
      {/* <canvas className="fixed w-full h-full pointer-events-none opacity-30"></canvas> */}
      {/* <Header /> */}
    </>
  );
};

export default Home;
