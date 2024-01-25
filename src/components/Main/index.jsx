import { Inter } from 'next/font/google'
import classes from './Main.module.css'
import { Headline } from '@/src/components/Headline'
import { Links } from '@/src/components/Links'

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
    <>
      <main className={`${classes.main} ${inter.className}`}>
        <Headline page={props.page}>
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
    </>
  )
}
