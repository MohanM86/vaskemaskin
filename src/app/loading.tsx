export default function Loading() {
  return (
    <div className="container-site py-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-3 border-slate-200 border-t-aqua-600 animate-spin" />
        <p className="text-sm text-slate-400">Laster...</p>
      </div>
    </div>
  )
}
