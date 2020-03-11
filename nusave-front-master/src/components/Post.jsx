import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import LikeIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';

const PostContainer = styled.div`
  margin: 0 6% 24px 6%;
`;

const PostTextContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 3px 0;
  padding: 8px;
  margin-bottom: 2px;
`;

const StyledLikeIcon = styled(LikeIcon)`
  margin: 2px;
`;

const StyledCommentIcon = styled(CommentIcon)`
  margin: 2px;
`;

export default () => {

  return (
    <PostContainer>
      <PostTextContainer>exemplo de post</PostTextContainer>
      <StyledLikeIcon />
      <StyledCommentIcon />
    </PostContainer>
  );
};