import React, { useEffect, useState } from "react";
import styles from "./Authentication.module.css";
//@ts-ignore
import faceIO from "@faceio/fiojs";
import { useRouter } from "next/navigation";
function Authentication() {
  const [faceio, setFaceio] = useState<any>("");
  const router = useRouter();
  useEffect(() => {
    setFaceio(new faceIO("fioafe12"));
  }, []);
  const handleSignIn = async () => {
    try {
      let response = await faceio?.enroll({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });
      console.log(response);
      if (response.facialId === "19f6aaee40f441909427db17da49c719fioafe12") {
        router.push("/privacy-policy");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteAccount = async () => {
    const res = await fetch("/api/delete-account");
    const data = await res.json();
    if (data?.data?.status === 200) {
      alert("Account Deleted Successfully");
    }
  };
  return (
    <div className={styles.formGroupBtn}>
      <button type="button" onClick={handleSignIn}>
        Signup
      </button>
      <button type="button" onClick={handleLogIn}>
        Login
      </button>
      {/* <button type="button" onClick={handleDeleteAccount}>
        Delete Account
      </button> */}
    </div>
  );
}

export default Authentication;
