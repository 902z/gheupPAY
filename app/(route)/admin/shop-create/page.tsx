import ShopCreateForm from "./shop-create-form";

function storeRegister() {
  return (
    <>
      <header className="h- flex w-full justify-between">
        <h2 className="font-bold text-l leading-[25px]">가게 등록</h2>
      </header>
      <ShopCreateForm />
    </>
  );
}

export default storeRegister;
