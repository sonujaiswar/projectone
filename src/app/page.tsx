import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex p-4 justify-center flex-col items-center">
        <h3>Welcome to the simple calulator page</h3>
        <p>Use the below link to navigate different calulator features </p>
        <div className="flex justify-start items-start border w-full">
          <ul>
            <li>
              <Link href="/margin">Margin Calulator</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
