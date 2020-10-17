import React, { ReactElement } from "react";
import BlogPost from "../../components/BlogPost/BlogPost";
import MapData from "../../components/_shared/MapData";
import CommentBarContainer from "../../components/comment-bar/CommentBarContainer";
import { BlogPostsResponse } from "../../redux/_interfaces";
import NewBlogPostContainer from '../../components/BlogPost/NewBlogPost/NewBlogPostContainer';

interface BlogPostProps {
  blogPosts: BlogPostsResponse[] | string[];
}

export const Home = ({ blogPosts }: BlogPostProps): ReactElement => {
  return (
    <>
      <NewBlogPostContainer />
      <div className="container home">
        <MapData data={blogPosts} Component={BlogPost} />
        <CommentBarContainer />
      </div>
    </>
  );
};

export default Home;
