"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect } from "react";
import CustomToastContainer, { showToast } from "@/components/common/toast/customToast";

export default function Home() {
  const router = useRouter();

  useEffect(() => { 
    showToast();
    const timer = setTimeout(() => {
      router.push("/admin");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);


  return (
    <main className={styles.main}>
      <div>
        <CustomToastContainer />
      </div>
    </main>
  );
}
