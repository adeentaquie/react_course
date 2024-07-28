import Input from "./Input"
import { isEmail,hasMinLength,isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
 const { value:emailValue,handleInputChange:handleEmailChnage,handleInputBlur:handleEmailBlur,hasError:emailhasError} = useInput("",(value)=> isEmail(value) && isNotEmpty(value))
 
 const {value:passwordValue,handleInputChange:handlePasswordChange,handleInputBlur:handlePAsswordBlur,hasError:passwordHAsError} = useInput("",(value)=>hasMinLength(value,6))
 
 



  function handleSubmit(event){
    event.preventDefault()
    if(emailhasError|| passwordHAsError){
      return
    }
    console.log( emailValue,passwordValue )
  }

  

  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
      <Input label="Email" id="email" type="email" name="email" onBlur={handleEmailBlur} onChange={handleEmailChnage} value={emailValue} error={emailhasError && "please enter valid email" }/>

      <Input label="Password" id="password" type="password" name="password" onChange={handlePasswordChange} onBlur={handlePAsswordBlur} value={passwordValue} error={passwordHAsError && "please enter valid password" }  />


        
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
