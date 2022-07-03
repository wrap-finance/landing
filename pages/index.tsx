import type { NextPage } from 'next';
import Footer from '../src/components/layout/Footer';
import AppUse from '../src/views/home/AppUse';
import Header from '../src/views/home/Header';
import Hero from '../src/views/home/Hero';
import JoinAdvice from '../src/views/home/JoinAdvice';
import JoinCommunity from '../src/views/home/JoinCommunity';
import MultiItemCard from '../src/views/home/MultiItemCard';

const Home: NextPage = () => {
  return (
    <div className="bg-dark overflow-hidden">
      <div className="bg-header-image p-5 md:p-10 pb-72 md:pb-56 bg-cover bg-no-repeat bg-top">
        <Header />
        <Hero />
      </div>
      <MultiItemCard />
      <JoinAdvice />
      <div className="relative">
        <AppUse />
        <div className="-mt-44 md:absolute left-0 right-0 mx-auto">
          <div className="mx-4">
            <JoinCommunity />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
