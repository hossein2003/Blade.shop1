import dynamic from "next/dynamic";

const UserInfoForm = dynamic(() => import("@/components/UserInfoForm"), { ssr: false });

export default function VerifyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <UserInfoForm />
    </main>
  );
}
