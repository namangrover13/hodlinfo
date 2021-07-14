import Header from './components/Header/Header';
import './App.css';
import Stats from './components/Stats/Stats';
import Ranking from './components/Ranking/Ranking';
import bitbns from './images/bitbns.png'
import coindcx from './images/coindcx.png'
import colodax from './images/colodax.png'
import giotus from './images/giotus.png'
import wazirx from './images/wazirx.png'
import zebpay from './images/zebpay.png'
import banner1 from './images/img1.png'
import banner2 from './images/img2.png'
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Wrapper from './components/Wrapper';
import {ThemeProvider} from './contexts/ThemeContext';

function App() {
  const ranks = {
    rows: [
      { id: 1, src: wazirx, platform: "WazirX", ltp: 2518434, bp: 2518434, sp: 2523784 },
      { id: 2, src: bitbns, platform: "Bitbns", ltp: 2663777, bp: 2663777, sp: 2661456 },
      { id: 3, src: giotus, platform: "Giotus", ltp: 2519000, bp: 2520200, sp: 2519000 },
      { id: 4, src: colodax, platform: "Colodax", ltp: 2513248, bp: 2524601, sp: 2535991 },
      { id: 5, src: zebpay, platform: "Zebpay", ltp: 2530700, bp: 2534700, sp: 2530042 },
      { id: 6, src: coindcx, platform: "CoinDCX", ltp: 2521661, bp: 2521661, sp: 2528100 }
    ]
  }
  document.title = `Hodlinfo | ₹ 25,40,061`;
  return (
    <div className="App">
      <ThemeProvider>
        <Wrapper>
          <Header />
          <Stats price={'25,40,601'} />
          <Banner imgUrl={banner1} name={"Join Us"} />
          <Ranking ranks={ranks} />
          <Banner imgUrl={banner2} name={"FTX"} />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
