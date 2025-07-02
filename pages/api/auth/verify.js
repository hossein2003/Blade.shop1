import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

const UserInfoForm = dynamic(() => import("@/components/UserInfoForm"), { ssr: false });

export default function VerifyPage() {
  const { data: session } = useSession();
  if (!session) return <p>ابتدا وارد شوید.</p>;

  return <main className="p-8"><UserInfoForm email={session.user.email} /></main>;
}
