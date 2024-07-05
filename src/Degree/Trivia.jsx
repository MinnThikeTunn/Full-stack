import '../Styles/Degree.css';
import { useSelector } from 'react-redux';

const textsEn = [
  {
    head: "Program Highlight",
    body: ["concentrates on creating links between theory and practice.","covers a wide variety of software and hardware technologies and their applications.","is designed to equip students with the fundamental understanding and practical skills needed by the future leaders of computing and related professions."],
    type: "list"
  
  },
  {
    head: "Program Highlight",
    body: ["A post graduate diploma aims to provide a qualification typically awarded after a bachelor’s degree. The program is 42 weeks intensive sessions, including a required paid internship. It consists of a vocational course after an academic program. Any university graduates are"],
    type: "para"
  
  },
  {
    head: "Program Highlight",
    body: ["concentrates on creating links between theory and practice.","covers a wide variety of software and hardware technologies and their applications.","is designed to equip students with the fundamental understanding and practical skills needed by the future leaders of computing and related professions."],
    type: "list"
  
  }
 
]



const textsMyn = [
  {
    head: "အစီအစဉ် အသားပေး",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  },
  {
    head: "အသက်မွေးဝမ်းကြောင်း",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  },
  {
    head: "အသက်မွေးဝမ်းကြောင်း",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  },
  {
    head: "အသက်မွေးဝမ်းကြောင်း",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  }
]

function Trivia() {
  const language = useSelector((state) => state.language.value);

  return (
    <div className="h-fit  lg:pb-[72px] py-4 mx-auto triviaMain bg-[#f0f8ff] text-[#000] w-[90%]">
        <div className=" w-[112%] grid lg:grid-cols-3 lg:gap-x-8">
            
              {(language === "EN") ? textsEn.map((item,index) => (
                <div key={index}>
                <div className=" w-full">
                <div className="flex flex-row w-full md:w-[100%] items-center lg:pt-8 lg:pb-5 pb-[25.33px]">
                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:me-[7.25px] me-[12px]">
<rect y="0.143066" width="38" height="38.6513" rx="12" fill="#3798A6"/>
<path d="M23.5581 12.1432C23.0154 12.1412 22.4877 12.3207 22.0587 12.6532C21.6297 12.9856 21.3242 13.4519 21.1907 13.9779C21.0572 14.5039 21.1033 15.0595 21.3218 15.5562C21.5403 16.053 21.9185 16.4625 22.3965 16.7196C22.1187 17.2941 21.6849 17.7788 21.1446 18.1183C20.6043 18.4578 19.9793 18.6383 19.3412 18.6392H19.3256L17.0921 18.6301C16.2861 18.6359 15.5127 18.9494 14.9302 19.5066V16.9774C15.5231 16.8564 16.05 16.5196 16.4086 16.0322C16.7673 15.5448 16.9322 14.9416 16.8714 14.3395C16.8105 13.7374 16.5283 13.1794 16.0795 12.7736C15.6306 12.3678 15.047 12.1431 14.4419 12.1431C13.8367 12.1431 13.2532 12.3678 12.8043 12.7736C12.3554 13.1794 12.0732 13.7374 12.0124 14.3395C11.9515 14.9416 12.1164 15.5448 12.4751 16.0322C12.8337 16.5196 13.3606 16.8564 13.9535 16.9774V21.0967C13.9535 21.2262 14.0049 21.3504 14.0965 21.442C14.1881 21.5336 14.3123 21.5851 14.4419 21.5851C14.4536 21.5851 14.4627 21.5792 14.4744 21.5786C14.4914 21.5817 14.5086 21.5839 14.5259 21.5851C14.634 21.585 14.739 21.5491 14.8245 21.4828C14.9099 21.4166 14.971 21.3238 14.998 21.2191C15.1171 20.7572 15.3865 20.3481 15.7637 20.0562C16.141 19.7643 16.6047 19.6062 17.0817 19.6068H17.0901L19.3236 19.616H19.3419C20.1889 19.6141 21.0171 19.3663 21.726 18.9027C22.4348 18.439 22.9937 17.7795 23.3348 17.0041C23.409 17.0113 23.4813 17.0269 23.5581 17.0269C24.2058 17.0269 24.8269 16.7697 25.2848 16.3117C25.7427 15.8538 26 15.2327 26 14.5851C26 13.9375 25.7427 13.3164 25.2848 12.8584C24.8269 12.4005 24.2058 12.1432 23.5581 12.1432ZM12.9767 14.5851C12.9767 14.2953 13.0627 14.012 13.2237 13.7711C13.3847 13.5302 13.6135 13.3424 13.8812 13.2315C14.1489 13.1206 14.4435 13.0916 14.7277 13.1481C15.0119 13.2046 15.273 13.3442 15.4779 13.5491C15.6828 13.754 15.8223 14.015 15.8788 14.2992C15.9354 14.5835 15.9063 14.878 15.7955 15.1458C15.6846 15.4135 15.4968 15.6423 15.2558 15.8033C15.0149 15.9643 14.7316 16.0502 14.4419 16.0502C14.0534 16.0498 13.6809 15.8954 13.4063 15.6207C13.1316 15.346 12.9771 14.9735 12.9767 14.5851ZM23.5581 16.0502C23.2684 16.0502 22.9851 15.9643 22.7442 15.8033C22.5032 15.6423 22.3154 15.4135 22.2045 15.1458C22.0937 14.878 22.0646 14.5835 22.1212 14.2992C22.1777 14.015 22.3172 13.754 22.5221 13.5491C22.727 13.3442 22.9881 13.2046 23.2723 13.1481C23.5565 13.0916 23.8511 13.1206 24.1188 13.2315C24.3865 13.3424 24.6153 13.5302 24.7763 13.7711C24.9373 14.012 25.0233 14.2953 25.0233 14.5851C25.0229 14.9735 24.8684 15.346 24.5938 15.6207C24.3191 15.8954 23.9466 16.0498 23.5581 16.0502Z" fill="white"/>
<path d="M14.6047 21.5851C14.0895 21.5851 13.5859 21.7378 13.1576 22.024C12.7293 22.3102 12.3954 22.717 12.1983 23.193C12.0011 23.6689 11.9495 24.1926 12.05 24.6979C12.1505 25.2031 12.3986 25.6672 12.7629 26.0315C13.1272 26.3958 13.5913 26.6438 14.0965 26.7443C14.6018 26.8448 15.1255 26.7932 15.6014 26.5961C16.0773 26.399 16.4841 26.0651 16.7703 25.6368C17.0565 25.2085 17.2093 24.7049 17.2093 24.1897C17.2093 23.4989 16.9349 22.8364 16.4464 22.348C15.958 21.8595 15.2954 21.5851 14.6047 21.5851ZM14.6047 25.8176C14.2827 25.8176 13.9679 25.7222 13.7002 25.5433C13.4325 25.3644 13.2239 25.1102 13.1007 24.8127C12.9774 24.5152 12.9452 24.1879 13.008 23.8721C13.0708 23.5564 13.2259 23.2663 13.4535 23.0386C13.6812 22.811 13.9713 22.6559 14.2871 22.5931C14.6028 22.5303 14.9302 22.5625 15.2276 22.6857C15.5251 22.8089 15.7793 23.0176 15.9582 23.2853C16.1371 23.553 16.2326 23.8678 16.2326 24.1897C16.2326 24.6215 16.061 25.0355 15.7558 25.3408C15.4505 25.6461 15.0364 25.8176 14.6047 25.8176Z" fill="white"/>
</svg>
                  <h1 className="font-normal leading-7 lg:text-[32px] text-2xl lg:leading-9 triviaHead ">{item.head}</h1>
                </div>
                  <p className="lg:min-h-[324px] pb-7 lg:pb-0 mb-7 lg:mb-0 border-b border-[#000]">
                  { 
                  (item.type !== "para") && item.body.map((item,index) => 
            <div key={index} className="flex flex-row w-full md:w-[100%] mb-[8px]">
                <svg width="22" height="22" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-[6px] lg:me-[10px] text-[16px] flex-none lg:w-[22px] lg:h-[22px] w-[18px] h-[20px]">
<path d="M11 3.92883C8.82441 3.92883 6.69767 4.57397 4.88873 5.78267C3.07979 6.99136 1.66989 8.70933 0.83733 10.7193C0.00476612 12.7293 -0.213071 14.941 0.211367 17.0748C0.635804 19.2086 1.68345 21.1686 3.22183 22.707C4.76021 24.2454 6.72022 25.293 8.85401 25.7175C10.9878 26.1419 13.1995 25.9241 15.2095 25.0915C17.2195 24.2589 18.9375 22.849 20.1462 21.0401C21.3549 19.2312 22 17.1044 22 14.9288C22 13.4843 21.7155 12.0539 21.1627 10.7193C20.6099 9.38473 19.7996 8.1721 18.7782 7.15066C17.7567 6.12921 16.5441 5.31896 15.2095 4.76616C13.8749 4.21336 12.4445 3.92883 11 3.92883ZM15.73 12.2998L10.703 18.8998C10.6005 19.0329 10.4689 19.1408 10.3183 19.2152C10.1677 19.2896 10.002 19.3284 9.834 19.3288C9.66692 19.3297 9.50183 19.2926 9.35126 19.2201C9.20069 19.1477 9.06859 19.0419 8.965 18.9108L6.281 15.4898C6.19216 15.3757 6.12667 15.2452 6.08827 15.1058C6.04986 14.9664 6.03929 14.8207 6.05717 14.6772C6.07505 14.5337 6.12101 14.3951 6.19245 14.2694C6.26388 14.1436 6.35939 14.0332 6.4735 13.9443C6.70398 13.7649 6.99628 13.6844 7.28612 13.7205C7.42963 13.7384 7.56822 13.7843 7.69397 13.8558C7.81972 13.9272 7.93016 14.0227 8.019 14.1368L9.812 16.4248L13.97 10.9248C14.0581 10.8093 14.1681 10.7122 14.2938 10.6391C14.4194 10.5661 14.5582 10.5185 14.7022 10.4991C14.8462 10.4797 14.9927 10.4889 15.1332 10.526C15.2737 10.5632 15.4054 10.6277 15.521 10.7158C15.6366 10.8039 15.7336 10.914 15.8067 11.0396C15.8797 11.1652 15.9273 11.304 15.9467 11.448C15.9661 11.5921 15.957 11.7385 15.9198 11.879C15.8826 12.0195 15.8181 12.1513 15.73 12.2668V12.2998Z" fill="#3798A6"/>
</svg>

                <p className="lg:text-lg text-sm font-[350] lg:leading-7 leading-[20px]  normal-case  lg:mt-[-2px] mt-[1px]">{item}</p>

            </div>)}
            {
                  (item.type === "para") && item.body.map((item,index) => 
            <div key={index} className="flex flex-row w-full md:w-[100%] mb-[12px]">

                <p className="lg:leading-7 leading-[20px] text-sm font-[350] lg:text-lg">{item}</p>

            </div>)}
                </p>
                </div>
                </div>
                
                
              )) :  textsMyn.map((item,index) => (
                <>
                <div key={index} className="lg:w-1/2 w-full  mb-6">
                  <h1 className="font-medium lg:text-[32px] sm:text-2xl lg:leading-9 triviaHead  py-8  ">{item.head}</h1>
                  <p className="text-sm sm:text-base font-normal leading-8 sm:leading-10 w-full sm:w-5/6 opacity-80 tracking-wide">
                  {item.body.map((ab,index) => <span key={index} className="block">{ab}</span>)}
                </p>
                </div>
                </>
                
                
              )) }
            
            </div>
        
            
            
       
    </div>
  );
}


export default Trivia;


//styleName: p - mobile;
// font-family: Oldschool Grotesk;
// font-size: 14px;
// font-weight: 350;
// line-height: 20px;
// text-align: left;






