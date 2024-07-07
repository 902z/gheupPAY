import PageModal from "@/app/_components/page-modal";
export const metadata = {
  title: "프로필 수정",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageModal title="프로필 수정">{children}</PageModal>;
}
