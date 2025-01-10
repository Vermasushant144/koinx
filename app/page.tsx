import Navbar from './../components/Navbar'
import CryptoDetails from './../components/CryptoDetails'
import TrendingSidebar from './../components/TrendingSidebar'
import AboutSection from './../components/AboutSection'
import Sentiment from './../components/Sentiment'
import TeamSection from './../components/TeamSection'
import Tokenomics from './../components/Tokenomics'
import YouMayAlsoLike from './../components/YouMayAlsoLike'
import TrendingCoins from './../components/TrendingCoins'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EFF2F5]">
      <Navbar />
      <main className="container mx-auto px-4 py-4 lg:px-20">
        <div className="text-sm text-[#3E424A] mb-4">
          Cryptocurrencies {'>>'} <span className="text-black">Bitcoin</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[calc(100%-384px)]">
            <CryptoDetails />
            <div className="flex gap-2.5 my-5">
              <button className="px-4 py-2 bg-[#EFF2F5] rounded-lg font-semibold">Overview</button>
              <button className="px-4 py-2 bg-[#EFF2F5] rounded-lg font-semibold">Fundamentals</button>
              <button className="px-4 py-2 bg-[#EFF2F5] rounded-lg font-semibold">News Insights</button>
              <button className="px-4 py-2 bg-[#EFF2F5] rounded-lg font-semibold">Sentiments</button>
              <button className="px-4 py-2 bg-[#EFF2F5] rounded-lg font-semibold">Team</button>
              <button className="px-4 py-2 bg-[#EFF2F5] rounded-lg font-semibold">Technicals</button>
              <button className="px-4 py-2 bg-[#EFF2F5] rounded-lg font-semibold">Tokenomics</button>
            </div>
            <Sentiment />
            <AboutSection />
            <Tokenomics />
            <TeamSection />
          </div>
          
          <div className="lg:w-[384px]">
            <TrendingSidebar />
          </div>
        </div>
        
        <YouMayAlsoLike />
        <TrendingCoins />
      </main>
    </div>
  )
}

