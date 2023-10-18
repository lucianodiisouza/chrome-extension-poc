import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="flex justify-between px-4">
        <h1 className="text-center text-lg font-bold">GPT.Ask</h1>
        <p>v1.0.4</p>
      </div>
      <div className="m-3 bg-zinc-200 rounded pt-1">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        'flex-col m-3 space-y-5 min-w-[400px] min-h-[400px]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

export const Container = forwardRef(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
