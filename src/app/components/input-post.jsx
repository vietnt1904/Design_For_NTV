"use client";
import React, { useEffect, useState } from "react";
import { postMessage } from "../actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const InputPost = ({ session }) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [type, setType] = useState("public");

  useEffect(() => {
    setMessage(message);
  }, [message]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    toast.promise(
      postMessage({
        name: session.user.name,
        image: session.user.image,
        message: message,
        message_type: type,
      }),
      {
        pending: "Đang gửi...",
        success: "Đã gửi thành công!",
        error: "Đã có lỗi xảy ra!",
      }
    );
    router.refresh();
    setMessage("");
    setType("public");
    sendEmail({
      name: session.user.name,
      image: session.user.image,
    });
  };

  const sendEmail = async (value) => {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
  };

  return (
    <div className="bg-white p-5 rounded-3xl space-y-1 md:space-y-3 sticky -top-7 border shadow z-20">
      <div className="text-2xl font-semibold">
        Xin chào, <span className="text-green-500">{session.user.name}</span>
      </div>
      <form method="POST" className="grid gap-2 grid-cols-12">
        <div className="mt-1 col-span-2 w-full md:col-span-1 rounded-full aspect-square overflow-hidden border-2 border-green-600">
          <img
            src={session.user.image}
            alt="user_image"
            className="w-full object-cover"
          />
        </div>
        <div className="col-span-10 md:col-span-11 text-lg space-y-2">
          <textarea
            required
            name="message"
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Hãy viết điều gì đấy cho tôi nhé!"
            className="outline-none border-2 rounded-2xl w-full p-3"
          ></textarea>
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-2">
            <p>Bạn muốn: </p>
            <select
              name="send-options"
              id="send-options"
              value={type}
              className="border-2 rounded-md p-1"
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="public">Tất cả mọi người đều xem được</option>
              <option value="private">Chỉ mình PTKL xem được</option>
            </select>
          </div>
          <button
            onClick={handleSendMessage}
            type="submit"
            className="px-3 py-1 md:py-2 bg-green-600 text-white rounded-md"
          >
            Gửi ở đây nè
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputPost;
