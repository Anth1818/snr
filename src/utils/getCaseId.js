import { useState } from "react";

export function getCaseId (selectedCaseId) {
    const [idRegister, setIdRegister] = useState("")
    setIdRegister(selectedCaseId)
    return idRegister
}