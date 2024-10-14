import React from "react";

const EmailTemplate = ({ data }) => {
  const value = JSON.parse(data);
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "5px",
      }}
    >
      <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
        <tr>
          <td style={{ textAlign: "center", padding: "20px 0" }}>
            <img
              src={value.image}
              alt=""
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            />
          </td>
        </tr>
        <tr>
          <td
            style={{
              textAlign: "center",
              padding: "10px 0",
              fontSize: "18px",
              color: "#333",
            }}
          >
            {value.name} đã gửi cho bạn một tin nhắn mới!
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: "center", padding: "20px 0" }}>
            <a
              href={"tranvankhuyen.id.vn"}
              target="_blank"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Kiểm tra ngay
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default EmailTemplate;
