import { useLocation } from "react-router"

export const useQueryParams = (param)=>{
  // return new URLSearchParams(useLocation().search);
  return useLocation().search.replace(`?${param}=`, '');
}