import React from "react";
import { BASE_URL } from "../../constants/Api";
import { useState, useEffect } from "react";
import PageList from "../../components/PageList";
import Heading from "../../components/Heading";
import { StyledHomePage } from "./HomePage.Styled";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataFromWp = async () => {
      try {
        const url = BASE_URL + "wp/v2/pages";
        const res = await fetch(url);
        if (res.ok) {
          const json = await res.json();
          console.log(json);
          setData(json);
        } else {
          setError("Something went wrong, please try again later");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    getDataFromWp();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  }
  return (
    <StyledHomePage>
      <Heading title={`Wordpress Pages`} />
      <ul>
        {data.map((pages) => (
          <PageList key={pages.id} page={pages.slug} id={pages.id} />
        ))}
      </ul>
    </StyledHomePage>
  );
};

export default HomePage;
