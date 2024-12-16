import React from "react";
import ClaimLink from "../components/claimLink";

export default function page() {
  return (
    <div>
      <div class="flex justify-center gap-8 h-screen p-4">
        <ClaimLink />
        <div className="w-1/2 lg:block hidden">
          <img class="xl:w-[70%] h-fit" src="../img/claimlink.png" />
        </div>
      </div>
    </div>
  );
}
