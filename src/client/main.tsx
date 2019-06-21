import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, Input, Affix, Layout } from "antd";

const { Footer } = Layout;

class Main extends React.Component {
    render() {
        return (
            <Layout>
                <Footer style={{position: "fixed", bottom: "0px", width: "100%"}}>
                    <Input placeholder="Message"></Input>
                    <Button type="primary">Primary</Button>
                </Footer>
            </Layout>
        );
    }
}

const app = document.getElementById("app");

ReactDOM.render(<Main />, app);

