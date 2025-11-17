import DeviceModal from './DeviceModal'

export default function Header() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center mb-6">
        <img
          src="/flame-icon.svg"
          alt="Flames"
          className="w-24 h-24 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
        />
      </div>

      <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
        Flames Blue
      </h1>

      <p className="text-xl text-blue-200 mb-6">
        Build applications through conversation
      </p>

      <div className="flex items-center justify-center">
        <DeviceModal />
      </div>
    </div>
  )
}
