import React, { useContext } from "react";
import { FlowContext } from "../wrappers/FlowWrapper";
import Flow from "./Flow";

const FlowWrapperParent = () => {

    const { pageFlow } = useContext(FlowContext);

    return <>
        <Flow activeNumber={pageFlow} totalNumber={3} />
    </>
}

export default FlowWrapperParent;