import React from "react";
import "@/app/ptkl.css";
import { SignOutButton, InputPost, ListMessages, SignInButton } from "./index";

import CountDown from "./countdown";
import { auth } from "@/auth";

const StarSky = async () => {
  const session = await auth();
  return (
    <section className="py-10 bg-gradient-to-tr from-blue-500/40 to-green-500/40 overflow-y-scroll overflow-x-hidden">
      {session && <SignOutButton />}
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>
      <span id="star"></span>

      <div className=" flex items-center justify-center font-dancing">
        <div className=" rounded-lg max-w-2xl w-full mx-4">
          <CountDown />
          {!session ? (
            <SignInButton />
          ) : (
            <div className="p-1 md:p-5 space-y-5">
              <InputPost session={session} />
              <ListMessages session={session} />
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-10">
        @Copyright |{" "}
        <a
          className="text-blue-700 font-bold underline"
          href="https://khuyentv.tech"
        >
          Hoshikira
        </a>
      </div>
    </section>
  );
};

export default StarSky;
