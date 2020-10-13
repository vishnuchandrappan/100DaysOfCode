import React, { ReactElement } from "react";
import BlogPost from "../../components/BlogPost/BlogPost";
import NewBlogPost from "../../components/BlogPost/NewBlogPost";
import MapData from "../../components/_shared/MapData";
import CommentBarContainer from '../../components/comment-bar/CommentBarContainer';

interface BlogPostProps {
  blogPosts: any[];
}

export const Home = ({ blogPosts }: BlogPostProps): ReactElement => {
  return (
    <>
      <NewBlogPost />
      <div className="container home">
        <MapData data={blogPosts} Component={BlogPost} />
        <CommentBarContainer />
      </div>
    </>
  );
};

export default Home;
