function HeadingStyle1({name,tinyText,space,sizeLead,size,mobileSize,mobileSizeLead,mobileSpace,mb='mb-[1.5rem]'}) {
    return (
       
        
            <div className={`h-0 w-[70%] lg:w-full ${mobileSpace}  lg:${space} ${mb} relative lg:sticky lg:top-[34px]`}>
        <ul className="absolute top-0 left-[19px] list-disc marker:text-[#3798A6]">
            <li className="font-normal text-base leading-[18px] text-[#1C1D2080]">{tinyText}</li>
        </ul>
        <h3 className={`font-normal leading-[38px] ${mobileSizeLead} lg:${sizeLead} ${mobileSize} lg:${size} w-full`}>{name}</h3>

        

       

    </div>
   
       
    )
}


export default HeadingStyle1;