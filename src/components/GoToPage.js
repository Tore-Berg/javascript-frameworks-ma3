import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/Api";
import dateFormat from "dateformat";
import Heading from "./Heading";
import { StyledGoToPage } from "./GoToPage.Styled";

const GoToPage = () => {
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();
  const dateYear = dateFormat(page.date_gmt, "dd mmmm yyyy");

  if (!id) {
    history.push("/");
  }

  const url = BASE_URL + "wp/v2/pages/" + id;

  useEffect(() => {
    const getPage = async () => {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setPage(json);
        } else {
          setError("Trouble loading the page. please try again later");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    getPage();
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return (
    <StyledGoToPage key={page.id}>
      <Heading title={`Page details`} />
      <p>{page.title.rendered}</p>
      <p>{dateYear}</p>
      <div dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }} />
    </StyledGoToPage>
  );
};

export default GoToPage;
