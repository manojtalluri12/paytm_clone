import React,{useEffect,useState} from 'react'
import BusinessHeader from './business-header-component'

const BusinessHeaderContainer = () => {
  const [menuItem, setMenuItem] = useState([])
  useEffect(() => {
    fetch("./response/Business-navlinks.json")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setMenuItem(response.links);
      });
    console.log(menuItem);
  }, []);
  return (
    <div><BusinessHeader menuItem={menuItem} /></div>
  )
}

export default BusinessHeaderContainer