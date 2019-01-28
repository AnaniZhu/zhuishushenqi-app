import React from "react";
import { Link } from "react-router-dom";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";

import { NavBar, Icon, TabBar, Button } from "antd-mobile";

import config from "routes/config";
import About from "pages/About";
import Home from "pages/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      selectedTab: "blueTab"
    };
  }

  componentDidMount() {}
  /*eslint react/prop-types: off */
  render() {
    return (
      <Router>
        <div>
          <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            className="color:"
            onLeftClick={() => window.history.back()}
            rightContent={[
              <Link key="1" to="/home">
                <Icon key="0" type="search" style={{ marginRight: "16px" }} />
              </Link>,
              <Link key="2" to="/about">
                <Icon key="1" type="ellipsis" />
              </Link>
            ]}
          >
            NavBar
          </NavBar>
          {/* <Redirect from="/" to="/home" />
          {renderRoutes([
            {
              path: "/home",
              component: Home
            },
            {
              path: "/about",
              component: About
            }
          ])} */}
          {/* <Route path="/about" component={About} /> */}
          <Button type="primary">主要按钮</Button>
          <div
            style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}
          >
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#a60011"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="书架"
                key="书架"
                icon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                selected={this.state.selectedTab === "blueTab"}
                onPress={() => {
                  this.props.history.push("/home");
                  this.setState({
                    selectedTab: "blueTab"
                  });
                }}
                data-seed="logId"
              >
                书架
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                title="书城"
                key="书城"
                selected={this.state.selectedTab === "redTab"}
                onPress={() => {
                  this.props.history.push("/about");
                  this.setState({
                    selectedTab: "redTab"
                  });
                }}
                data-seed="logId1"
              >
                书城
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                title="排行榜"
                key="排行榜"
                selected={this.state.selectedTab === "greenTab"}
                onPress={() => {
                  this.setState({
                    selectedTab: "greenTab"
                  });
                }}
              >
                排行榜
              </TabBar.Item>
            </TabBar>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
