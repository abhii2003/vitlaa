import React from "react";
import RegistrationHead from './registrationHead';
import RegistrationBtn from './registrationBtn';
import DeadlineRegister from './registrationContent'

export default function RegistrationPage() {
    return (
        <>
            <RegistrationHead />
            <DeadlineRegister />
            <RegistrationBtn />
        </>
    )
}