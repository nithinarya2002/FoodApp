// import ResCard from "./ResCard"

const ResCardOpen = (ResCard)=>{
    return (props)=>{
        return (
            <div>
                <label>Open</label>
                <ResCard  {...props}/>
            </div>
        );
    }
}
// resData={props.resData}
export default ResCardOpen;