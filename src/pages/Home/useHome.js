import { createClient } from "contentful"
import { useEffect, useState, useCallback} from "react"


function handleCheckSection(request, id) {
    const array =  request?.items.filter((item)=>(
        item?.sys.contentType.sys.id==id ))
    if( array?.length > 0 ) {
        return array
    }
} 



function useHome() {
    const [home, setHome] = useState()
    const [accordionWithoutBackground, setAccordionWithoutBackground] = useState()
    const [accordionWithBackground, setAccordionWithBackground] = useState()
    const client = createClient({space: "z4tvzw9l0jvw", accessToken: "2rChwxyhsE9Psh-2iFm9swPqaQ7ClEO7U-6uSMBK5Zw" })

    // setAccordionWithBackground(handleCheckSection(home, 'fizjo'))
    // console.log(accordionWithBackground)

    const getAllElements = async () => {
        try {
            const entries = await client.getEntries().then((entries)=>{
                setHome(entries)
                // console.log(entries)
                // const array = entries.items.forEach((e)=>{
                //     return e.fields
                // })
                // console.log(array)
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getAllElements()
    }, [])

    return {
        home
    }
}
export { useHome, handleCheckSection }