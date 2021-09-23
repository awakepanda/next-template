import { useState } from 'react';

export const Tabmenu = () => {
  const [tabOpen, setTabOpen] = useState(1);

  return (
    <div className="relative py-48 max-w-1000 mx-auto">
      <ul className="flex pb-4">
        <li className="flex-auto text-center mr-4">
          <a
            className={
              'block py-3 rounded shadow-lg text-xs cursor-pointer font-bold transition-all duration-500 ' +
              (tabOpen === 1
                ? 'bg-pink-600 hover:bg-white hover:text-black text-white'
                : 'bg-white hover:bg-pink-600 hover:text-white')
            }
            onClick={(e) => {
              e.preventDefault();
              setTabOpen(1);
            }}
          >
            ボタン１
          </a>
        </li>
        <li className="flex-auto text-center mr-4">
          <a
            className={
              'block py-3 rounded shadow-lg text-xs cursor-pointer font-bold transition-all duration-500 ' +
              (tabOpen === 2
                ? 'bg-pink-600 hover:bg-white hover:text-black text-white'
                : 'bg-white hover:bg-pink-600 hover:text-white')
            }
            onClick={(e) => {
              e.preventDefault();
              setTabOpen(2);
            }}
          >
            ボタン２
          </a>
        </li>
        <li className="flex-auto text-center">
          <a
            className={
              'block py-3 rounded shadow-lg text-xs cursor-pointer font-bold transition-all duration-500 ' +
              (tabOpen === 3
                ? 'bg-pink-600 hover:bg-white hover:text-black text-white'
                : 'bg-white hover:bg-pink-600 hover:text-white')
            }
            onClick={(e) => {
              e.preventDefault();
              setTabOpen(3);
            }}
          >
            ボタン３
          </a>
        </li>
      </ul>
      <div className="px-12 py-8 shadow-lg rounded text-s leading-loose tracking-wide break-words text-justify">
        <div className="(tabOpen === 1 ? 'block' : 'hidden')">
          <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
        </div>
        <div className={tabOpen === 2 ? 'block' : 'hidden'}>
          <p>
            親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）
          </p>
        </div>
        <div className={tabOpen === 3 ? 'block' : 'hidden'}>
          <p>
            つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）
          </p>
        </div>
      </div>
    </div>
  );
};
