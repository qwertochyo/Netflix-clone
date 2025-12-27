import { LazyMotion, domAnimation } from "motion/react"
import type { PropsWithChildren } from "react"

export default function Provider({ children }: PropsWithChildren<unknown>) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}