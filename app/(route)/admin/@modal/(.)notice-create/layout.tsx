import PageModal from "@/app/_components/page-modal";

export const metadata = {
  title: "공고 등록",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageModal title="공고 등록">{children}</PageModal>;
}
