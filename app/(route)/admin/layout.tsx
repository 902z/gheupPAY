import Link from "next/link";

export default function Layout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {modal}
      <div id="modal-root" />
    </div>
  );
}
