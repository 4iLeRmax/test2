import { 
  HTTP, HTTPS,SWAPI_ROOT, SWPAI__PEOPLE, 
  URL_IMG_PERSON, GUIDE_IMG_EXTENSION, SWAPI_PARAM_PAGE
} from "../constants/api";

export const getPeoplePageId = url =>{
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length)
  // console.log(id);
  return Number(id);
}

const CheckProtocol = url=>{
  if(url.search(HTTPS) !==-1){
    return HTTPS    
  }
  return HTTP
}

const getId = (url, category)=>{
  const protocol = CheckProtocol(url);

  const id = url
    .replace(protocol+SWAPI_ROOT+category, ' ')
    .replace(/\//g, '')
  return id;
}

export const getPeopleId = url=> getId(url, SWPAI__PEOPLE);

export const getPeopleImage = id=> URL_IMG_PERSON+'/'+id+GUIDE_IMG_EXTENSION;