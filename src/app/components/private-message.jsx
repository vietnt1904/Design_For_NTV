import React from "react";

const PrivateMessage = ({ data }) => {
  const date = new Date(data.created_at);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();

  return (
    <div className=" grid gap-2 grid-cols-12">
      <div className=" col-span-2 w-full md:col-span-1 rounded-full aspect-square overflow-hidden border-2 border-green-600">
        <img
          src={data.image}
          alt="user_image"
          className="w-full object-cover"
        />
      </div>
      <div className="col-span-10 md:col-span-11 text-lg px-2 space-y-2 border-b-2 border-black/30">
        <p className="text-xl font-bold">
          {data.name}

          <span className="text-sm pl-2">{y + "-" + m + "-" + d}</span>
        </p>
        <p className="text-lg">{data.message}</p>
      </div>
    </div>
  );
};

export default PrivateMessage;
