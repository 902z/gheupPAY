import PageModal from "@/app/_components/page-modal";
import ShopCreateForm from "../../shop-create/shop-create-form";

function storeRegister() {
  return (
    <PageModal title="가게 등록">
      <ShopCreateForm />
    </PageModal>
  );
}

export default storeRegister;
