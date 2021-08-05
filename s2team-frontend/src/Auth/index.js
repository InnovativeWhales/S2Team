module.exports={
    VerifyUser:()=>{
        try{
            if(JSON.parse(localStorage.getItem("Auth")).Role !== "Admin" && JSON.parse(localStorage.getItem("Auth")).Role !== "SubAdmin")
            {
                alert(JSON.parse(localStorage.getItem("Auth").Role)); 
                return false;
            }
            return true;
        }
        catch(e){ return false; }
    },
    VerifyAuthurization:()=>{
        return JSON.stringify(localStorage.getItem("Auth")).Role
    }
}