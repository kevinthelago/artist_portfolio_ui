const Admin = (props) => {
    function uploadImages(event) {
        console.log(event)
    }

    return(
        <div className='page admin'>
            <div className='albums'>
                <button onClick={(event) => {
                    uploadImages(event)
                }}>upload</button>
            </div>
        </div>
    )
}

export default Admin;
