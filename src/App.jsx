import Header from './components/Header'
import Steps from './components/Steps'
import FooterNote from './components/FooterNote'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          <Header />
          <Steps />
          <FooterNote />
        </div>
      </div>
    </div>
  )
}

export default App
