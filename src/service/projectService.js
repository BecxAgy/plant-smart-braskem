import { api, requestConfig } from "../utils/config"


 const getProjetos = async(token) =>{
    
    const config = requestConfig("GET", null, token);

   try{
      
      const res = await fetch(api + "/spreadsheet/projeto", config)
      .then((res) => res.json())
      .catch(err => err);

      return res.data;


   }catch(error){
         console.log(error);
   }
 }




 const projectService = {
   getProjetos, 
  
 }

 export default projectService;