import Modal from "./_components/modals";

export default function Home() {
  return (
    <>
      <Modal type="confirm">confirm</Modal>
      <Modal type="warning">warning</Modal>
      <Modal yesType="yes">select</Modal>
    </>
  );
}
