"use client";
import HomePage from "@/components/HomePage";
import LoginForm from "@/components/LoginForm";
import ProfilePage from "@/components/ProfilePage";
import SelectPage from "@/components/SelectPage";
import { useState } from "react";


export default function Home() {
  const [step, setStep] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginStep0 = () => {
    setStep(1);
  }

  const handleLoginStep1 = () => {
    setStep(2);
  };

  const handleLoginStep2 = () => {
    setStep(3);
  };

  const handleLoginStep3 = () => {
    setLoggedIn(true);
  };
  return (
    <>
      <main className="h-screen w-full ">
        <div>
          {loggedIn ? (
            <HomePage />
          ) : (
            <>
              {step === 1 && <LoginForm handleLoginStep1={handleLoginStep1} />}
              {step === 2 && (
                <ProfilePage
                  handleLoginStep0={handleLoginStep0}
                  handleLoginStep2={handleLoginStep2}
                />
              )}
              {step === 3 && (
                <SelectPage
                  handleLoginStep1={handleLoginStep1}
                  handleLoginStep3={handleLoginStep3}
                />
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
