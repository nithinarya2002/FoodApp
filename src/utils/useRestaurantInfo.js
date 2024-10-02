import { MENU_URL } from "./constants";
import { useState,useEffect } from "react";

const useRestaurantInfo = (resId)=>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async ()=>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;

};

export default useRestaurantInfo;

