import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, Input, Affix, Layout } from "antd";

const { Footer } = Layout;

class Main extends React.Component {
    render() {
        return (
            <Layout>
                <Footer style={{position: "fixed", bottom: "0px", width: "100%"}}>
                    <Input.Search placeholder="Message" enterButton={<Button type="primary">Send</Button>}></Input.Search>
                </Footer>
            </Layout>
        );
    }
}

const app = document.getElementById("app");

ReactDOM.render(<Main />, app);

