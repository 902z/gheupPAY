import PageModal from "@/app/_components/page-modal";

export const metadata = {
  title: "가게 정보 편집",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageModal title="가게 정보">{children}</PageModal>;
}
