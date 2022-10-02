import { RiUser3Line } from "react-icons/ri";
import styled from "styled-components";

const PostContentBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 0px 20px;
  height: 42px;
  width: 45vw;
  background-color: #fbfbfb;
  border-radius: 5px;
  border: 1px solid rgb(189, 189, 189);
`;

const PostContentTiltleText = styled.div`
  margin-left: 10px;
  font-size: 14px;
  text-align: left;
  letter-spacing: -0.34px;
  color: #000000;
  font-weight: 600;
`;

const UserProfileIcon = styled(RiUser3Line)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 20px;
  width: 20px;
  padding: 5px;
  font-weight: 100;
  color: #000000;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    color: #ffffff;
  }
`;

const UserProfileIconShape = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  transition: all 0.5s;
  border: 1px solid #000000;
  &:hover {
    background: #0d552c;
  }
`;

const UserProfileImg = () => {
  return (
    <UserProfileIconShape>
      <UserProfileIcon></UserProfileIcon>
    </UserProfileIconShape>
  );
};

const PostContentTitle = () => {
  return (
    <PostContentBox>
      <UserProfileImg></UserProfileImg>
      <PostContentTiltleText>익명</PostContentTiltleText>
    </PostContentBox>
  );
};

export default PostContentTitle;
