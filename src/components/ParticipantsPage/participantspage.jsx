import { color } from "@mui/system";
import React from "react";
const participants = [
    { id: 1, name: "abc" },
    { id: 2, name: "def" },
    { id: 3, name: "ghi" },
    { id: 4, name: "jkl" }
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


