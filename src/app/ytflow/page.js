"use client";

import Image from "next/image";
import { Button } from "../../../components/common";
import { SuccessModal } from "../../../components/Blocks";
import { useState } from "react";

const ListItem = ({ text }) => (
  <li className="flex items-center gap-2">
    <Image
      src="/common/arrow-right.svg"
      alt="arrow-right"
      width={10}
      height={10}
    />
    <span>{text}</span>
  </li>
);

const ItemList = () => (
  <ul className="space-y-4">
    <ListItem text="Fetching Video content" />
    <ListItem text="Generating Relevant affiliate links" />
    <ListItem text="Inserting links into your video description" />
  </ul>
);

const TitleBlock = () => (
  <div className="flex flex-col items-center gap-10">
    <Image src="/oia-youtube.svg" alt="oia-youtube" width={200} height={200} />
    <h1 className="text-3xl text-center font-semibold leading-[3rem]">
      Connect your <br /> Youtube Account
    </h1>
  </div>
);

const InfoBlock = () => (
  <div className="flex flex-col gap-10">
    <p className="font-semibold">
      We prioritize your privacy and control over your youtube account,
      Here&#39;s what you can expect:
    </p>
    <ItemList />
  </div>
);

export default function YTflow() {
  const handleConnect = (e) => {
    e.preventDefault();
    setIsVisible(true);
    console.log("connect");
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className="flex flex-col items-center justify-evenly gap-5 py-10 p-4 h-[100dvh]">
      <Image src="/common/logo.svg" alt="logo" width={160} height={150} />
      <div className="flex flex-col items-center justify-evenly gap-5 h-full pt-10">
        <TitleBlock />
        <InfoBlock />
      </div>
      <Button
        title={"Connect Youtube"}
        className={"bg-primary text-white"}
        onClick={handleConnect}
        rounded="rounded-full"
      />
      <SuccessModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </section>
  );
}
