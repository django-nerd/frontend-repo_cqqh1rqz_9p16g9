export default function Steps() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 shadow-xl mb-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">1</div>
        <div>
          <h3 className="font-semibold text-white mb-1">Describe your idea</h3>
          <p className="text-blue-200/80 text-sm">Use the chat panel on the left to tell the AI what you want to build</p>
        </div>
      </div>

      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">2</div>
        <div>
          <h3 className="font-semibold text-white mb-1">Watch it build</h3>
          <p className="text-blue-200/80 text-sm">Your app will appear in this preview as the AI generates the code</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">3</div>
        <div>
          <h3 className="font-semibold text-white mb-1">Refine and iterate</h3>
          <p className="text-blue-200/80 text-sm">Continue the conversation to add features and make changes</p>
        </div>
      </div>
    </div>
  )
}
