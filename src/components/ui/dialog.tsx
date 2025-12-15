import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

type DialogContextValue = {
  open: boolean
  setOpen: (v: boolean) => void
}

const DialogContext = createContext<DialogContextValue | null>(null)

export function Dialog({
  open,
  defaultOpen,
  onOpenChange,
  children,
}: {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (v: boolean) => void
  children: ReactNode
}) {
  const [internal, setInternal] = useState<boolean>(!!defaultOpen)
  const current = open ?? internal
  const ctx = useMemo(
    () => ({
      open: current,
      setOpen: (v: boolean) => {
        setInternal(v)
        onOpenChange?.(v)
      },
    }),
    [current, onOpenChange],
  )
  return <DialogContext.Provider value={ctx}>{children}</DialogContext.Provider>
}

export function DialogTrigger({ children }: { children: ReactNode }) {
  const ctx = useContext(DialogContext)
  if (!ctx) return null
  return (
    <button type="button" onClick={() => ctx.setOpen(true)}>
      {children}
    </button>
  )
}

export function DialogContent({ children, className }: { children: ReactNode; className?: string }) {
  const ctx = useContext(DialogContext)
  if (!ctx || !ctx.open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur" onClick={() => ctx.setOpen(false)} />
      <div
        className={cn(
          'relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 p-6 text-white shadow-2xl backdrop-blur-xl',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function DialogHeader({ children }: { children: ReactNode }) {
  return <div className="space-y-1">{children}</div>
}

export function DialogTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold leading-tight">{children}</h3>
}

export function DialogDescription({ children }: { children: ReactNode }) {
  return <p className="text-sm text-slate-200/80">{children}</p>
}

export function DialogFooter({ children }: { children: ReactNode }) {
  return <div className="mt-4 flex items-center justify-end gap-3">{children}</div>
}
