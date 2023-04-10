import { HTTP, HTTPS } from "../constants/api";


/**
 * Change url from http to https
 * @param {String} url - url for changing 
 * @returns {String} - url with https
 */
export const changeHTTP = url=>{
  // console.log(url);
  return url ? url.replace(HTTP, HTTPS) : url;
}

/**
 * Send Fetch req.
 * @param {String} url - url for req. 
 * @returns - Promise
 */
export const getApiResourse = async (url)=>{
  try{


    const res = await fetch(url);

    
    if(!res.ok){
      console.error('fetch: ' + res.status);
      return false;
    }

    return await res.json();
    


  }catch(error){
    console.error('fetch: ' + error.message);
    return false;
  }
  // return await(await fetch(url)).json();
}

export const makeConcurrentRequest = async url =>{
  const res = await Promise.all(url.map(res=>{
    return getApiResourse(res);
  }));

  return res;
}




// export const getApiResourse = async (url)=>{
//   try{


//     const res = await fetch(url);

    
//     if(!res.ok){
//       console.error('fetch: ' + res.status);
//       return false;
//     }

//     return res;
    


//   }catch(error){
//     console.error('fetch: ' + error.message);
//     return false;
//   }
// }