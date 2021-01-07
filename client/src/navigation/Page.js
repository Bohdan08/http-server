import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CustomMenu from "./CustomMenu";
import Breadcrumbs from "./Breadcrumbs";
import { API_CALL_STATUS } from "../constants";

const Page = ({ route }) => {
  const [response, setResponse] = useState([]);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  const history = useHistory();

  useEffect(() => {
    setStatus(API_CALL_STATUS.LOADING);

    axios
      .get(`/api/v1/${history.location.pathname}`)
      .then((res) => {
        setResponse(res.data);
        setStatus(API_CALL_STATUS.SUCCEEDED);
      })
      .catch((error) => {
        setResponse([]);
        setStatus(API_CALL_STATUS.ERROR);
        setMessage(error.message);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const PageBody = route.component;

  return (
    <>
      <CustomMenu />
      {route.parent && <Breadcrumbs route={route} />}
      <PageBody data={response} status={status} message={message} />
    </>
  );
};

export default Page;
