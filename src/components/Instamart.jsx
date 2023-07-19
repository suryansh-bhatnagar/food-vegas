import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible ,hide}) => {
    console.log("Is visible", isVisible);
    // const [isVisible,setIsVisible] = useState(false);
    return <div className="border  border-black p-2 m-2">
        <span className="text-xl font-bold mr-10">{title}</span>
        <button className="border p-1 rounded-md bg-red-400" onClick={() =>isVisible ? hide():  setIsVisible()}> {isVisible ? "Hide" : "Show"}</button>
        {isVisible && <div>
            {description}
        </div>}
    </div>
}


const Instamart = () => {

    // const [sectionConfig, setSectionConfig] = useState({
    //     showAbout: false,
    //     showPolicies: false,
    //     showCareers: false,
    // })
    const [visibleSection, setVisibleSection] = useState(null)

    return <div className="p-2 m-2">
        <h1>this is Instamart with 1000s of components</h1>
        <Section
            title={"About"}
            description={" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}
            isVisible={visibleSection==="about"}
            setIsVisible={() => setVisibleSection("about")}
            hide ={()=> setVisibleSection(null)}
        />
        <Section
            title={"Policies"}
            description={" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}
            isVisible={visibleSection==="policies"}
            setIsVisible={() => setVisibleSection("policies")}
            hide ={()=> setVisibleSection(null)}

        />
        <Section
            title={"Careers"}
            description={" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}
            isVisible={visibleSection==="careers"}
            setIsVisible={() => setVisibleSection("careers")}
            hide ={()=> setVisibleSection(null)}

        />

    </div>
}

export default Instamart;