import React from "react";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Typography, Card, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const contacts = [
  { img: "/3.png", content: "Monday Feb 16, 11:00 AM - 2:00 PM(2hrs)" },
  { img: "/2.png", content: "Project" },
  { img: "/1.png", content: "Location" },
];

export default function Home() {
  return (
    <div className="flex justify-center items-center my-auto h-[100vh] bg-black">
      <div className="border-solid rounded-md w-[700px] border-l-4 border-l-blue-800 p-4 bg-white">
        <div className="flex justify-between items-center pb-2">
          <Typography className="font-bold text-[14px]">
            Meeting Title
          </Typography>
          <Link href="/details">
            <div className="rounded-full bg-orange-200 text-orange-500 px-2">
              Scheduled
            </div>
          </Link>
        </div>
        {contacts.map((item) => (
          <div key={item.content} className="flex  items-center">
            <div className="w-[15px]  mr-1">
              <Image alt="example" width={15} height={15} src={item.img} />
            </div>
            {item.content === "Location" ? (
              <div className="flex justify-between items-center w-full ">
                <Typography className=" text-[12px] pb-1">
                  {item.content}
                </Typography>
                <div className="flex items-end">
                  <div className="rounded-lg text-[14px] font-semibold border-[1px] h-[31px] px-2 py-0 flex justify-center items-center">
                    <div className="w-[25px]  mr-1 mt-1">
                      <Image
                        alt="example"
                        width={25}
                        height={25}
                        src="/4.png"
                      />
                    </div>
                    Join Call
                  </div>
                  <Avatar.Group
                    maxCount={4}
                    size="default"
                    maxStyle={{
                      color: "black",
                      backgroundColor: "grey",
                    }}
                  >
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <Avatar
                      style={{
                        backgroundColor: "#f56a00",
                      }}
                    >
                      K
                    </Avatar>
                    <Tooltip title="Ant User" placement="top">
                      <Avatar
                        style={{
                          backgroundColor: "#87d068",
                        }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                    <Avatar
                      style={{
                        backgroundColor: "#1890ff",
                      }}
                      icon={<AntDesignOutlined />}
                    />
                  </Avatar.Group>
                </div>
              </div>
            ) : (
              <Typography className=" text-[12px] pb-1">
                {item.content}
              </Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
