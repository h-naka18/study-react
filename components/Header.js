import Link from "next/link";
import classes from "@/components/Header.module.css"

export function Header() {
  return (
    <>
      <header className={classes.header}>
        <Link href="/">
          <p className={classes.anchor}>Index</p>
        </Link>
        <Link href="/about">
          <p className={classes.anchor}>About</p>
        </Link>
      </header>
    </>
  )
}
