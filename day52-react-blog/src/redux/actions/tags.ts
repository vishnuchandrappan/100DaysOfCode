import { Action } from "redux";

const entity = "[TAG]";

export const Types = {
  GET_TAGS_REQUEST: `${entity} Get Request`,
  GET_TAGS_SUCCESS: `${entity} Get Success`
}

export const getTags = (): Action => ({
  type: Types.GET_TAGS_REQUEST
})