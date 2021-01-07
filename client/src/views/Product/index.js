import React from "react";
import {
  Grid,
  Message,
  Header,
  Image,
  Dimmer,
  Loader,
  Icon,
} from "semantic-ui-react";
import { API_CALL_STATUS } from "../../constants";

const Devices = ({ data = {}, status, message }) => {
  const {
    asset,
    details,
    value,
    isAvailableToShip,
    isAvailableAtNearByStores,
  } = data;

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
        ) : (
          status === API_CALL_STATUS.SUCCEEDED && (
            <>
              <Grid.Column width={6}>
                <Image src={asset} wrapped ui={false} />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h2">{value}</Header>
                <br />
                {details.overview}
                <br />
                <br />
                <b> Available to ship </b>{" "}
                <Icon
                  name={isAvailableToShip ? "checkmark" : "cancel"}
                  color={isAvailableToShip ? "green" : "red"}
                />
                <br />
                <b> Available at nearby stores </b>{" "}
                <Icon
                  name={isAvailableAtNearByStores ? "checkmark" : "cancel"}
                  color={isAvailableAtNearByStores ? "green" : "red"}
                />
              </Grid.Column>
            </>
          )
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Devices;
