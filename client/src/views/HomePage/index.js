import React from "react";
import { Grid, Header, Message } from "semantic-ui-react";

// style
import "./style.css";

const HomePage = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <Header as="h2" textAlign="center" className="home-page-header">
          Welcome to the simple http server App!
        </Header>
        <br />
        <Message info size="huge">
          <Message.Content className="home-page-message-content">
            Please hit <b> Devices </b> to try breadcrumb functionality!
          </Message.Content>
        </Message>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomePage;
