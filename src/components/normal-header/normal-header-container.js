import React,{useEffect,useState} from 'react'
import NormalHeader from './normalHeader-component'

const NormalHeaderContainer = () => {
  const [menuItem, setMenuItem] = useState([])
  useEffect(() => {
    fetch("./response/navlinks.json")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setMenuItem(response.links);
      });
    console.log(menuItem);
  }, []);
  return (
    <div><NormalHeader menuItem={menuItem}/></div>
  )
}

export default NormalHeaderContainer