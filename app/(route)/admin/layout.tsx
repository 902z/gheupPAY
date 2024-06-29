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
      <div>{children}</div>
      <div>{modal}</div>
      <div id="modal-root" />
    </div>
  );
}
