class Auth{
    constructor(){
      this.email="ini";
    }

    giveuser(){
        console.log(this.email);
    return this.email;
    }
    setEmail(email){
      console.log(this.email);
      this.email=email;
      console.log(this.email);
       
        
    }

}
export default new Auth()