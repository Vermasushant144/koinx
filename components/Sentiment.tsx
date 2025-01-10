import { TrendingUp, Info } from 'lucide-react'

export default function Sentiment() {
  return (
    <div className="bg-white rounded-lg p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-4">Sentiment</h2>
      
      <div className="mb-6">
        <div className="flex items-center gap-2 text-lg font-semibold text-[#44475B] mb-4">
          Key Events <Info className="h-5 w-5 text-[#7C7E8C]" />
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4">
          <div className="bg-[#E8F4FD] min-w-[456px] p-4 rounded-lg flex gap-4">
            <div className="bg-[#0082FF] rounded-full p-2 h-fit">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h4>
              <p className="text-sm text-[#3E424A]">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
              </p>
            </div>
          </div>
          
          <div className="bg-[#EBF9F4] min-w-[456px] p-4 rounded-lg flex gap-4">
            <div className="bg-[#0FBA83] rounded-full p-2 h-fit">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h4>
              <p className="text-sm text-[#3E424A]">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 text-lg font-semibold text-[#44475B] mb-4">
          Analyst Estimates <Info className="h-5 w-5 text-[#7C7E8C]" />
        </div>
        
        <div className="flex items-center gap-8">
          <div className="bg-[#EBF9F4] rounded-full h-[120px] w-[120px] flex items-center justify-center">
            <span className="text-[#0FBA83] text-4xl font-semibold">76%</span>
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-sm w-8">Buy</span>
              <div className="flex-1 h-2 bg-[#00B386] rounded-sm" />
              <span className="text-sm w-8">76%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm w-8">Hold</span>
              <div className="flex-1 h-2 bg-[#C7C8CE] rounded-sm w-[16%]" />
              <span className="text-sm w-8">8%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm w-8">Sell</span>
              <div className="flex-1 h-2 bg-[#F7324C] rounded-sm w-[32%]" />
              <span className="text-sm w-8">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

