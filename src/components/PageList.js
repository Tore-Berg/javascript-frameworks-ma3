import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { StyledPageList } from "./Pagelist.Styled";

const PageList = ({ page, id }) => {
  return (
    <StyledPageList>
      <Link to={`page/${id}`}>{page}</Link>
    </StyledPageList>
  );
};

PageList.propTypes = {
  id: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
};

export default PageList;
