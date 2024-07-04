import PageModal from "@/app/_components/page-modal";
import CreateProfileForm from "../../profile-register/_components/form";

export default function CreateProfilePage() {
  return (
    <>
      <PageModal title="내 프로필">
        <CreateProfileForm />
      </PageModal>
    </>
  );
}
