import React,{useState,useEffect} from 'react'
import './pagination.css'
function Pagination({pages,text,onSearchSubmit}){
    const [pageList,setPageList]=useState([])
    const [active,setActive]=useState(null)
    const [firstPage,setFirstPage]=useState(1)
    const [lastPage,setLastPage]=useState(6)
        useEffect(()=>{
            const arr1=['Previous']
            for(let i=firstPage;i<=lastPage;i++){
                arr1.push(i)
            }
            arr1.push('Next')
            setPageList(arr1)
        },[firstPage,lastPage])

        const handleClick=(page)=>{
            console.log('page clicked',page)
            if(page==='Previous'){
                setActive(page-1)
            }

            else if(page==='Next'){
                setActive(page+1)
            }
            else if(page===lastPage)
            {
                setFirstPage(lastPage+1)
                setLastPage(lastPage+6)
                setActive(page)
            }

            else{
                setActive(page)
                console.log('Active Page',active)
            }
            //why lagging between Active page and clicked page by 1
            //temporarily removed the bug by directly sending the clicked page number
            onSearchSubmit(text,page)
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