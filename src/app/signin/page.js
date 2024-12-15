import React from "react";
import SignInForm from "../components/SignInForm";

export default function page() {
  return (
    <div>
      <div class="flex justify-center gap-8 h-screen p-4">
        <SignInForm />
        <div className="w-1/2 lg:block hidden">
          <img class="xl:w-[70%] h-fit" src="../img/signin.png" />
        </div>
      </div>
    </div>
  );
}
