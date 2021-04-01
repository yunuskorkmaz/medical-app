import React, { useState } from "react";
import useMedia from "react-media-hook2";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainSider from "./MainSider";
import IndexPage from "../pages/Index";
import HospitalsPage from "../pages/Hospitals/HospitalsPage";
import { HospitalContextProvider } from "../components/ContextProvider";

const { Content } = Layout;

const MainLayout = (props) => {
	const [collapse, setCollapse] = useState(true);

	const isMobile = useMedia({
		onChange: (val) => {
			setCollapse(true);
		},
		query: "(max-width:599px)",
	})[0];
	return (
		<Layout style={{ height: "100vh" }}>
			<MainSider
				collapse={collapse}
				onCollapse={(val) => setCollapse(val)}
				isMobile={isMobile}
			/>
			<Layout>
				<MainHeader
					collapsed={collapse}
					onCollapse={() => setCollapse(!collapse)}
				/>
				<Content>
                    <HospitalContextProvider>
                        <Switch>
                                <Route path="/" exact component={IndexPage}  />
                                <Route path="/hospitals" exact component={HospitalsPage}  />
                        </Switch>
                    </HospitalContextProvider>
				</Content>
			</Layout>
		</Layout>
	);
};

export default MainLayout;