"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  console.log(path);
  return <>{path !== "/" && <NavLinks />}</>;
}

function NavLinks() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/margin">Margin Calc</Link>
      <Link href="/bella">Bella Calc</Link>
    </>
  );
}
