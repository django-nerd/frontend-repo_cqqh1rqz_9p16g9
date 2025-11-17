import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useMemo, useState } from 'react'
import { Smartphone, Monitor, QrCode, X, Copy, ExternalLink } from 'lucide-react'

function isMobileUA(ua) {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
}

export default function DeviceModal() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const mobileUrl = useMemo(() => {
    const envUrl = import.meta.env.VITE_MOBILE_APP_URL
    if (envUrl && typeof envUrl === 'string' && envUrl.trim().length > 0) return envUrl
    // Fallback: current page URL (works for QR to open same app on phone)
    return window.location.href
  }, [])

  const isMobile = useMemo(() => isMobileUA(navigator.userAgent), [])

  const qrSrc = useMemo(() => {
    const encoded = encodeURIComponent(mobileUrl)
    // Free QR code image API
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encoded}`
  }, [mobileUrl])

  useEffect(() => {
    if (!open) setCopied(false)
  }, [open])

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(mobileUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // no-op
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/20 transition-colors">
          <Smartphone className="w-5 h-5" />
          Open options
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-xl rounded-2xl border border-blue-500/20 bg-slate-800/90 backdrop-blur-md p-6 shadow-2xl text-white focus:outline-none">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-xl font-semibold">Choose where to continue</Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label="Close" className="p-2 rounded-lg hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <p className="text-blue-200/80 mt-1 mb-5 text-sm">Pick the best way to keep going. You can open on your phone or stay on desktop.</p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="w-5 h-5 text-blue-300" />
                <h3 className="font-medium">Open on mobile</h3>
              </div>

              {isMobile ? (
                <div className="space-y-3">
                  <p className="text-sm text-blue-200/80">You’re on a mobile device. Tap below to open the app.</p>
                  <a href={mobileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Open app
                  </a>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-blue-200/80">Scan this QR code with your phone’s camera to open the app.</p>
                  <div className="flex items-center justify-center">
                    <img src={qrSrc} alt="QR code to open on mobile" className="rounded-lg bg-white p-2" />
                  </div>
                  <div className="flex gap-2">
                    <button onClick={copyLink} className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors w-full">
                      <Copy className="w-4 h-4" />
                      {copied ? 'Copied!' : 'Copy link'}
                    </button>
                    <a href={mobileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors w-full">
                      <ExternalLink className="w-4 h-4" />
                      Open link
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 mb-3">
                <Monitor className="w-5 h-5 text-blue-300" />
                <h3 className="font-medium">Continue on desktop</h3>
              </div>
              <p className="text-sm text-blue-200/80 mb-3">Keep using the app right here on your computer.</p>
              <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                Continue
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
