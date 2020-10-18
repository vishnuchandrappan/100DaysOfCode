import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";
import Tag from "../../Tag";
// import { useSelector } from "react-redux";
// import { RootState } from "typesafe-actions";

import Chip from "@material-ui/core/Chip";

interface Tag {
  id: number;
  name: string;
}

const tags = [
  {
    id: 1,
    name: "omnis",
    created_at: null,
    updated_at: null,
  },
  {
    id: 2,
    name: "ea",
    created_at: null,
    updated_at: null,
  },
  {
    id: 3,
    name: "optio",
    created_at: null,
    updated_at: null,
  },
  {
    id: 4,
    name: "enim",
    created_at: null,
    updated_at: null,
  },
  {
    id: 5,
    name: "eveniet",
    created_at: null,
    updated_at: null,
  },
  {
    id: 6,
    name: "fugiat",
    created_at: null,
    updated_at: null,
  },
  {
    id: 7,
    name: "sit",
    created_at: null,
    updated_at: null,
  },
  {
    id: 8,
    name: "doloribus",
    created_at: null,
    updated_at: null,
  },
  {
    id: 9,
    name: "sed",
    created_at: null,
    updated_at: null,
  },
  {
    id: 10,
    name: "officia",
    created_at: null,
    updated_at: null,
  },
];

export default function SelectTags() {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  return (
    <div>
      <FormControl>
        <InputLabel>Tags</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div>
              {(selected as string[]).map((value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
          variant="outlined"
        >
          {tags.map((tag: Tag) => (
            <MenuItem key={tag.id} value={tag.id}>
              {tag.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
