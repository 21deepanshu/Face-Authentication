"use client";
import { useRouter } from "next/navigation";
import styles from "../../src/Modules/AuthModule/Authentication.module.css";
export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 className={styles.logged}>Logged In</h1>
        <h2 className={styles.heading2}>You are logged In Succesfully....</h2>
      </div>
      <div className={styles.formGroupBtn}>
        <button type="button" onClick={() => router.push("/")}>
          Logout
        </button>
      </div>
    </>
  );
}
