import React from "react";
import RegistrationHead from './registrationHead';
import RegistrationBtn from './registrationBtn';
import DeadlineRegister from './registrationContent'
import AccountInfo from "./accountinfo";
export default function RegistrationPage() {
    return (
        <>
            <section className="page" id="RegistrationPage">
                <RegistrationHead />
                <DeadlineRegister />
                <RegistrationBtn />

            </section>
            <section className="page" id="AccountInfo">
                <AccountInfo />
            </section>
        </>

    )
}