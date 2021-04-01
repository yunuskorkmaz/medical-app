import React from "react";
import { DesktopOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";

const routes = [
	{ path: "/"},
	{ path: "/hospitals"},
];

export default routes;

export const menu = [
	{
		name: "Ana Sayfa",
		url: "/",
		icon: <DesktopOutlined />,
	},
	{
		name: "Tanımlamalar",
		icon: <UserOutlined />,
		items: [
            {
                name: 'Hastaneler',
                url: '/hospitals'
            }
		],
	}
];