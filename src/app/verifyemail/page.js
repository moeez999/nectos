import React from "react";
import SignUpForm from "../components/SignUpForm";
import VerifyEmail from "../components/VerifyEmail";

export default function page() {
  return (
    <div>
      <div class="flex justify-center gap-8 h-screen p-4">
        <VerifyEmail />
        <div className="w-1/2 lg:block hidden">
          <img class="xl:w-[70%] h-fit" src="../img/verification.png" />
        </div>
      </div>
    </div>
  );
}
