import React, { useEffect } from "react";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { initialBlogPostsRequest } from "../../redux/actions";
import { RootState } from "typesafe-actions";
import { BlogPostsResponse } from "../../redux/_interfaces/index";

export default function HomeContainer() {
  const dispatch = useDispatch();

  const blogPosts: BlogPostsResponse[] = useSelector(
    ({ blogPosts }: RootState) => blogPosts.blogPosts
  );

  const { isFetching } = useSelector(({ ui }: RootState) => ui);

  useEffect(() => {
    dispatch(initialBlogPostsRequest());
  }, [dispatch]);

  return <Home blogPosts={blogPosts || []} isFetching={isFetching} />;
}
