import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

type TabsContextValue = {
  value: string
  setValue: (v: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

export function Tabs({
  value,
  defaultValue,
  onValueChange,
  children,
  className,
}: {
  value?: string
  defaultValue?: string
  onValueChange?: (v: string) => void
  children: ReactNode
  className?: string
}) {
  const [internal, setInternal] = useState(defaultValue ?? '')
  const current = value ?? internal

  const ctx = useMemo<TabsContextValue>(
    () => ({
      value: current,
      setValue: (v: string) => {
        setInternal(v)
        onValueChange?.(v)
      },
    }),
    [current, onValueChange],
  )

  return (
    <TabsContext.Provider value={ctx}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1', className)}>
      {children}
    </div>
  )
}

export function TabsTrigger({ value, children }: { value: string; children: ReactNode }) {
  const ctx = useContext(TabsContext)
  if (!ctx) return null
  const active = ctx.value === value
  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      className={cn(
        'rounded-full px-4 py-2 text-sm font-semibold transition-all',
        active ? 'bg-white text-slate-900 shadow-lg' : 'text-white/80 hover:text-white',
      )}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children }: { value: string; children: ReactNode }) {
  const ctx = useContext(TabsContext)
  if (!ctx || ctx.value !== value) return null
  return <div className="mt-4">{children}</div>
}
