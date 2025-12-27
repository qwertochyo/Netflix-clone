import { LazyMotion, domAnimation } from "motion/react"
import type { PropsWithChildren } from "react"

function App({ children }: PropsWithChildren<unknown>) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}

export default App
