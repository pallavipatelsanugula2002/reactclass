import Button1 from "./child"
const ParentComponent=()=>{
    return (
        <>
        <Button1 color="red">
            Submit
        </Button1>
        <Receiver>
            <h2>hello am a child</h2>
        </Receiver>
        </>
    )
}

export default ParentComponent

const Receiver=({children})=>{
    return (
        <>
        {children}
        </>
    )
}