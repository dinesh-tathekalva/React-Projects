import { useState } from "react"

const ContentTabs = ({contents}) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div>
            {contents.map((content, index) => (
                <button onClick={()=>setActiveTab(index)}>
                    {content?.title} 
                </button>
            ))}
            <div>
                <p>{contents[activeTab].contents}</p>
            </div>
        </div>
    )
}

export default ContentTabs
