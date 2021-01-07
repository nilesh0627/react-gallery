import React,{useState,useEffect} from 'react'
import './pagination.css'
function Pagination({pages,text,onSearchSubmit}){
    const [pageList,setPageList]=useState([])
    const [active,setActive]=useState(1)
    // const [firstPage,setFirstPage]=useState(1)
    // const [lastPage,setLastPage]=useState(6)
        useEffect(() => {
            // if(pages>7){
            //     setPageList([1,2,3,4,'...',pages])
            // }
            const arr1=[]
            for(let i=active;i<active+6;i++)
                arr1.push(i)
            setPageList(arr1)    
        }, [active])

        const handleClick=(page)=>{
            setActive(page)
            onSearchSubmit(text,active)
        }
        return (
            <div className="page__container">
            {
                pageList.map(page=>(
                    <button className="page__btn" onClick={()=>handleClick(page)}>{page}</button>
                ))
            }
        </div>
    )
}


export default Pagination