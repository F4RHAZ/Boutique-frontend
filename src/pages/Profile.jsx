
import { useSelector } from "react-redux";
import styled from "styled-components";

import Navbar from '../components/Navbar';

const Profile = () => {
    const user = useSelector(state=>state.user.currentUser);


    return (
    <>
    <Navbar />
        <Container>
            <div style={{ textAlign: "center" }}>
            
            <h1>Under Construction</h1>
                <p>We're sorry for the inconvenience. This page is currently under construction.</p>
            </div>
            </Container>
        </>
    );
};

export default Profile;

const Container = styled.div`
  min-height: 80vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  h2 {
    margin-bottom: 1rem;
    color: #029e02;
  }
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://t4.ftcdn.net/jpg/02/95/29/65/360_F_295296567_uFcURdW5jfjOjtheiPKQ2OHEnrv0Z9qK.jpg")
    center;
    background-size: cover;
    height: 100vh;
`;
