import React,{useEffect,useState} from 'react'
import NormalHeader from './normalHeader-component'

const NormalHeaderContainer = () => {
  const [menuItem, setMenuItem] = useState([])
  const [showModal,setShowModal]=useState(false)
  useEffect(() => {
    fetch("./response/navlinks.json")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setMenuItem(response.links);
      });
    console.log(menuItem);
  }, []);
  const signInClickHandler=()=>{
    console.log("hello ");
    setShowModal(!showModal)
  }
  const closeModalHandler=()=>{
    setShowModal(false)
  }

  return (
    <div><NormalHeader menuItem={menuItem} signInClickHandler={signInClickHandler}
    showModal={showModal} closeModalHandler={closeModalHandler}/></div>
  )
}

export default NormalHeaderContainer