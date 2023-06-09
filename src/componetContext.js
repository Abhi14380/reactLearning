import React, { useContext } from "react";
import { UserContext } from "./App";
function Component() {
    const user = useContext(UserContext)
    return (
        <div>
            {user}
        </div>
    )
}
export default Component;