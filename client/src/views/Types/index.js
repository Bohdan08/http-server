import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Grid, Message, Card, Image, Dimmer, Loader } from "semantic-ui-react";
import { API_CALL_STATUS } from "../../constants";

// style
// import "./style.css";

const Types = ({ data = [], status, message }) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Grid className="component-grid" stackable>
      <Grid.Row>
        {status === API_CALL_STATUS.LOADING ? (
          <Dimmer active className="dimmer-loader">
            <Loader inverted size="massive">
              Loading
            </Loader>
          </Dimmer>
        ) : status === API_CALL_STATUS.ERROR ? (
          <Message
            error
            size="massive"
            className="margin-auto text-align-center"
          >
            <Message.Header> Oops! Something went wrong!</Message.Header>
            <Message.Content>{message}</Message.Content>
          </Message>
        ) : status === API_CALL_STATUS.SUCCEEDED && data.length > 0 ? (
          data.map(({ key, asset, value }) => {
            return (
              <Card
                key={key}
                className="custom-card"
                onClick={() => {
                  history.push(`${location.pathname}/${key}`);
                }}
              >
                <Image src={asset} wrapped ui={false} />
                <Card.Header
                  className="capitalize custom-card-header"
                  textAlign="center"
                  as="h2"
                >
                  {value}
                </Card.Header>
              </Card>
            );
          })
        ) : (
          <Message
            info
            size="massive"
            className="margin-auto text-align-center"
          >
            <Message.Header>No Data Found!</Message.Header>
          </Message>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Types;
