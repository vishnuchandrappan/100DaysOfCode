import React from "react";
import { Chip } from "@material-ui/core";
import { Action } from "../../../../redux/_interfaces";

interface TagValues {
  id: number;
  name: string;
}

interface SelectTagsProps {
  tags: TagValues[];
  selectedTags: number[];
  dispatchTag: React.Dispatch<Action>;
}

interface TagProps {
  tag: TagValues;
  selected: boolean;
  dispatch: React.Dispatch<Action>;
}

const Tag = ({ tag, dispatch, selected }: TagProps) => {
  return (
    <Chip
      className="tag"
      label={tag.name}
      color="secondary"
      variant={selected ? "default" : "outlined"}
      size="small"
      onClick={() => {
        selected
          ? dispatch({
              type: "REMOVE_TAG",
              payload: tag.id,
            })
          : dispatch({
              type: "APPEND_TAG",
              payload: tag.id,
            });
      }}
    />
  );
};

const SelectTags = ({ tags, selectedTags, dispatchTag }: SelectTagsProps) => {
  return (
    <div className="tags">
      {tags.map((tag: TagValues) => (
        <Tag
          tag={tag}
          dispatch={dispatchTag}
          selected={selectedTags.includes(tag.id)}
        />
      ))}
    </div>
  );
};

export default SelectTags;
