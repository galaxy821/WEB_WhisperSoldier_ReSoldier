import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// 추후에 편집, 삭제 구현 시 authService.currentUser.uid === contentObj.creator_id 비교 목적
import { authService } from "../lib/FAuth";
import { dbService } from "../lib/FStore";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { PostInfo } from "../store/PostStore";
import useForm from "../modules/useForm.js";
import PostContentContainer from "../components/postContent/PostContentContainer";

const PostPage = () => {
  const [postInfo, setPostInfo] = useRecoilState(PostInfo);
  // console.log(postInfo); 전역 상태 관리 테스트
  const [state, onChange] = useForm({editContent : postInfo.postContent, comment : ""});

  const navigate = useNavigate();
  //const { id } = useParams();
  //const [content, setContent] = useState({});
  //const [isContentError, setIsContentError] = useState(false);
  //const [newWorryText, setNewWorryText] = useState("");
  const [editing, setEditing] = useState(false);


 

 

  const onDeleteClick = async (e) => {
    const check = window.confirm("정말로 삭제 하시겠습니까?");
    if (check) {
      console.log(`deleting ${postInfo.id}`);
      await deleteDoc(doc(dbService, "WorryPost", postInfo.id))
        .then(alert("삭제 되었습니다."))
        .then(navigate("/"));
    }
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // 추후 댓글 구현 예정
    const {
      target: { name },
    } = e;
    console.log();
    if (name === "submitComment") {
      // 댓글 전송하기
    } else if (name === "submitEdit") {
      const check = window.confirm("정말로 수정하시겠습니까?");
      if (check) {
        await updateDoc(doc(dbService, "WorryPost", postInfo.id), {
          text: state.editContent,
        })
          .then(
            setPostInfo((prev)=>({...prev, postContent : state.editContent}))).then(alert("수정되었습니다."))
          .then(setEditing(false));
          
      }
    }
  };

  return (
    <PostContentContainer postInfo={postInfo} state={state} onChange={onChange} editing={editing} onSubmit={onSubmit} onDeleteClick={onDeleteClick} toggleEditing={toggleEditing}></PostContentContainer>
  );
};

export default PostPage;
