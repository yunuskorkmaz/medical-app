import React from "react";
import { Layout, Menu, Drawer } from "antd";
import {} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { menu } from "../routes";

const MainSider = ({ collapse, isMobile, onCollapse }) => {
	const setCollapse = (val) => {
		onCollapse(val);
	};

	const logoSection = (
		<>
			{/* <img src={logo} /> */}
			<h1>Medical App</h1>
		</>
	);

	return (
		<>
			{isMobile ? (
				<Drawer
					closable={false}
					visible={!collapse}
					placement={"left"}
					width={200}
					className="ant-pro-sider-menu"
					onClose={() => setCollapse(true)}
					style={{ padding: 0, height: "100vh" }}
				>
					<Layout.Sider
						collapsed={isMobile ? false : collapse}
						breakpoint={"lg"}
						onCollapse={(val) => {
							if (!isMobile) {
								setCollapse(val);
							}
						}}
					>
						<div className="ant-pro-sider-menu-logo">{logoSection}</div>
						<MainMenu />
					</Layout.Sider>
				</Drawer>
			) : (
				<Layout.Sider
					collapsible
					collapsed={collapse}
					breakpoint={"lg"}
					onCollapse={(val) => {
						if (!isMobile) {
							setCollapse(val);
						}
					}}
				>
					<div className="ant-pro-sider-menu-logo">{logoSection}</div>
					<MainMenu />
				</Layout.Sider>
			)}
		</>
	);
};

function MainMenu() {
	return (
		<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
			{menu.map((item, index) => {
				if (item.items) {
					return (
						<Menu.SubMenu
							key={index}
							title={
								<span>
									{item.icon || null}
									<span>{item.name}</span>
								</span>
							}
						>
							{item.items.map((child, cindex) => {
								return (
									<Menu.Item key={index + "_" + cindex}>
										<NavLink to={child.url || "#"}>{child.name}</NavLink>
									</Menu.Item>
								);
							})}
						</Menu.SubMenu>
					);
				} else {
					return (
						<Menu.Item key={index}>
							<NavLink to={item.url || "#"}>
								{item.icon || null}
								<span>{item.name}</span>
							</NavLink>
						</Menu.Item>
					);
				}
			})}
		</Menu>
	);
}

export default MainSider;