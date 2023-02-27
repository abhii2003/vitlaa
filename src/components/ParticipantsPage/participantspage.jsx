import { color } from "@mui/system";
import React from "react";
const participants = [
    { id: 1, name: "Bharat Pratap Chauhan" },
    { id: 2, name: "Najiya V K" },
    { id: 3, name: "MUNIYASAMY M" },
    { id: 4, name: "Amit Kumar" },
    { id: 5, name: "ANJITHA ASHOKAN" },
    { id: 6, name: "Aaisha Be" },
    { id: 7, name: "G SHANMUGA SUNDARI" },
    { id: 8, name: "Varadha Raj M" },
    { id: 9, name: "Manish" },
    { id: 10, name: "POORNIMA N" },
    { id: 11, name: "FEBINA P" },
    { id: 12, name: "Melvin Varghese" },
    { id: 13, name: "Neha Susan George" },
    { id: 14, name: "JAFAR DULKIFLI A B" },
    { id: 15, name: "SUBBULAKSHMI MURUGAN" },
    { id: 16, name: "Sampath Kumar s" },
    { id: 17, name: "Josephine" },
    { id: 18, name: "NIDHIN MR" },
    { id: 19, name: "Dr. M Venkatachalapathy" },
    { id: 20, name: "Dr. S. Ganesamurthy" },
    { id: 21, name: "Dr. B Parvathalu" },
    { id: 22, name: "Dr R. Srimathi" },
    { id: 23, name: "Dr. Ashoka K" },
    { id: 24, name: "Anitha N" },
    { id: 25, name: "Sunitha Reddy" },
    { id: 26, name: "Meghna Parikh" },
    { id: 27, name: "Thasunnisha" },
    { id: 28, name: "Dhweta Khemu Sawant" },
    { id: 29, name: "Shivani Narayan Naik" },
    { id: 30, name: "Sukanya Naik" },
    { id: 31, name: "Anandakrishnan N" },
    { id: 32, name: "Vaishak Kumar" },
    { id: 33, name: "Karthik C" },
    { id: 34, name: "VISHAL VIGNESH S" },
    { id: 35, name: "MARISHA SINGH" },
    { id: 36, name: "Dharmendra Singh" },
    { id: 37, name: "sriram" },
    { id: 38, name: "kukku youseff" },
    { id: 39, name: "KAVIN R" }
];




export default function ParticipantsPage() {
    return (
        <section id="ParticipantPage">
            <div>
                <h1 className="page-head paricipant-head" >
                    Participant <span id="color">DETAILS</span>
                </h1>
            </div>

            {participants.map(({ id, name }) => {
                return (
                    <div key={`participant-${id}`} className="participants-content" >
                        <p>{name}</p>
                    </div>
                );
            })}

        </section>

    );
}


