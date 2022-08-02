import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

export default function Home() {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <Image alt="example" width={300} height={183} src="/product.jpg" />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Link href="/details">
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Link>
    </Card>
  );
}
