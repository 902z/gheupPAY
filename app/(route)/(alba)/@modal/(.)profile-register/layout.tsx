import PageModal from "@/app/_components/page-modal";
export const metadata = {
  title: "공고 상세",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageModal title="프로필 등록">{children}</PageModal>;
}
