const ConditionalRender=()=>{
    let Marks=90
    return(
        
            <div>
             {
              Marks < 75 ? <h2>ugot b grade</h2>:  Marks <50 ? <h2>ugot c grade</h2>: Marks > 80? <h2>ugot A++grade</h2>:<h2>ugot a grade</h2>
             }
            </div>

    )
}
export default ConditionalRender






