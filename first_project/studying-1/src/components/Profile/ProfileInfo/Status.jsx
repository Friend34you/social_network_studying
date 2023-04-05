import { useEffect, useState } from "react";


const Status = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const updateStatusText = (e) => {
        let newStatus = e.target.value;
        setStatus(newStatus);
    }

    const toggleEditMode = () => {
        if (props.authUserId === props.currentUserId) {
            if (editMode && props.status !== status) {
                props.setStatusThunk(status);
            }
            setEditMode(!editMode);
        }
    }

    useEffect(()=>{
        console.log(props.status)
        setStatus(props.status);
    }, [props.status])

    return (
        <div>
            {!editMode ?
                <div><span onClick={toggleEditMode} style={{ userSelect: "none", cursor: "pointer" }}>{props.status || 'none'}</span></div> :
                <div><input onChange={updateStatusText} value={status} autoFocus={true} onBlur={toggleEditMode} /></div>
            }
        </div>
    )
}

export default Status;