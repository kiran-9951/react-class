import { Component } from "react";
import { DNA } from "react-loader-spinner";
class DNAspinner extends Component{
    render(){
        return(
            <>
<DNA
  visible={true}
  height="150"
  width="100"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />      
            </>
        )
    }
}
export default DNAspinner




