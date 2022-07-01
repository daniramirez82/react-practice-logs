import React, {useState,useMemo, createContext} from "react";

const FlowContext = createContext();

const FlowWrapper = ({children})=>{

    const [pageFlow, setPageFlow] = useState(1);

    const value = useMemo(()=>( {pageFlow, setPageFlow}), [pageFlow]);

    return <FlowContext.Provider value={value}>
        {children}
    </FlowContext.Provider>
}

export {FlowContext, FlowWrapper};