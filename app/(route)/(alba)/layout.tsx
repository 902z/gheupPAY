import Link from "next/link";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
      <Link href="/profile-register">아니</Link>
    </>
  );
}
