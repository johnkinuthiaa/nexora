import {Fragment} from "react";

type ContentReaderProps ={
    content:string
}
const ContentReader =(content:ContentReaderProps)=>{
    return (
        <Fragment >
            <section dangerouslySetInnerHTML={{ __html: content.content}} />
        </Fragment>
    )
}
export default ContentReader