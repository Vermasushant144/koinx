export default function Tokenomics() {
  return (
    <div className="bg-white rounded-lg p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
      
      <div>
        <h3 className="font-bold mb-4">Initial Distribution</h3>
        
        <div className="flex items-center gap-8 mb-6">
          <div className="relative w-[179px] h-[179px]">
            <div className="absolute inset-0 rounded-full border-[32px] border-[#0082FF]" style={{ clipPath: 'inset(0 50% 0 0)' }} />
            <div className="absolute inset-0 rounded-full border-[32px] border-[#FAA002]" style={{ clipPath: 'inset(0 0 0 50%)' }} />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0082FF]" />
              <span>Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FAA002]" />
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>
        
        <p className="text-[#3E424A] text-sm">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  )
}

