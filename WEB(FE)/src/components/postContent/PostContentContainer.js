import styled from "styled-components";
import { authService } from "../../lib/FAuth";
import { FindPasswordButton } from "../common/Buttons";
import SideButtonBox from "../common/SideButtonBox";
import RecommandTagContainer from "../container/RecommandTagContainer";
import InputTagContainer from "./InputTageContainer";
import PostCommentContainer from "./PostCommentContainer";
import PostCommentForm from "./PostCommentForm";
import PostContentBody from "./PostContentBody";
import PostContentTitle from "./PostContentTiltle";
import {
  OtherUserButtonContainer,
  WriteUserButtonContainer,
} from "./SideButtonContainer";

const PostContentContainerBox = styled.div`
  padding: 0px 10vw;
  display: flex;
  flex-direction: row;
`;

const SideButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostContentBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideOptionContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const PostContentContainer = ({
  postInfo,
  state,
  onChange,
  editing,
  onClick,
  onSubmit,
  onDeleteClick,
  toggleEditing,
}) => {
  console.log(authService.currentUser.uid, postInfo.creator_id);
  console.log(postInfo);
  return (
    <PostContentContainerBox>
      <SideButtonContainer>
        <SideButtonBox>
          <FindPasswordButton toLink="/">뒤로가기</FindPasswordButton>
        </SideButtonBox>
        <SideButtonBox isNotTop={true}>
          {authService.currentUser.uid === postInfo.creator_id ? (
            <WriteUserButtonContainer
              editing={editing}
              onDeleteClick={onDeleteClick}
              toggleEditing={toggleEditing}
            ></WriteUserButtonContainer>
          ) : (
            <OtherUserButtonContainer></OtherUserButtonContainer>
          )}
        </SideButtonBox>
      </SideButtonContainer>
      <PostContentBodyContainer>
        <PostContentTitle postInfo={postInfo}></PostContentTitle>
        <PostContentBody
          postInfo={postInfo}
          state={state}
          onChange={onChange}
          editing={editing}
          onClick={onClick}
        ></PostContentBody>
        {!editing && (
          <>
            <PostCommentForm
              state={state}
              onChange={onChange}
              onSubmit={onSubmit}
            ></PostCommentForm>
            <PostCommentContainer></PostCommentContainer>
          </>
        )}
      </PostContentBodyContainer>
      <SideOptionContainer>
        <InputTagContainer></InputTagContainer>
        <RecommandTagContainer></RecommandTagContainer>
      </SideOptionContainer>
    </PostContentContainerBox>
  );
};

export default PostContentContainer;