import { signOut } from "@/auth";
import { LogOut } from "lucide-react";

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="z-20 p-3 rounded-md bg-white/40 fixed bottom-5 right-10"
    >
      <button
        type="submit"
        className="text-blue-600 font-semibold flex items-center justify-center space-x-3"
      >
        <LogOut />
      </button>
    </form>
  );
};

export default SignOutButton;
