import { Chip } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

interface TagProps {
  value: string;
}

const Tag = ({ value }: TagProps) => {
  return (
    <Link to={`/tags/${value}`}>
      <Chip
        className="tag"
        label={value}
        color="secondary"
        variant="outlined"
        size="small"
      />
    </Link>
  );
};

export default Tag;
