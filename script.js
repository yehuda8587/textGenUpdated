 // status of spa selected
 let spaNameStatus = document.getElementById("chooseSpa");
 let addOnsStatus = document.getElementById("chooseAddons");

 // Location NAME variables in text
 let locationNameArray = document.getElementsByClassName("varLocationName");
 let upDatedSpaName = "SELECT SPA"
 // Location ADDRESS variables in text
 let locationAddressArray = document.getElementsByClassName("varLocationAddress");
 let upDatedSpaAddress = "SELECT SPA FOR LOCATION "
 // Location LINK variables in text
 let locationALinkArray = document.getElementsByClassName("varLocationFormLink");
 let upDatedSpaLINK = "SELECT SPA FOR FORM LINK" 
 // NNN Location PHONE variables in text
 let locationPhoneArray = document.getElementsByClassName("varLocationPhone");
 let upDatedSpaPhone = "SELECT SPA FOR Location Phone" 

// Actual Location PHONE variables in text
let acutalLocationPhoneArray = document.getElementsByClassName("varLocationActualPhone");
let upDatedActualSpaPhone = "SELECT SPA FOR Location Phone" 

 // Location WEB LINK variables in text
 let locationWebLinkArray = document.getElementsByClassName("varWebLink");
 let upDatedSpaWebLINK = "SELECT SPA FOR FORM WEB LINK" 

  // Duration Total variables in text
 let DurationTotalArray = document.getElementsByClassName("varDurationTotal");
 let upDatedDurationTotal    = "Please select spa"

 // Duration One variables in text
 let DurationOneArray = document.getElementsByClassName("varDurationOne");
 let upDatedDurationOne    = " "

 // Duration Two variables in text
 let DurationTwoArray = document.getElementsByClassName("varDurationTwo");
 let upDatedDurationTwo    = " "

 // Addons variables in text
 let addOnsArray = document.getElementsByClassName("varAddons");
 let upDatedAddons = "No Addons Selected"
 


 function updateForm(){
     //LOCATION NAME FORLOOP
     for (let i = 0; i < locationNameArray.length; i++) {
             locationNameArray[0].innerHTML = upDatedSpaName;
             locationNameArray[i].innerHTML = upDatedSpaName;      
             }
 
     //LOCATION ADDRESS FORLOOP
     for (let i = 0; i < locationAddressArray.length; i++) {
             locationAddressArray[0].innerHTML = upDatedSpaAddress;
             locationAddressArray[i].innerHTML = upDatedSpaAddress;      
             }

     //LOCATION LINK FORLOOP
     for (let i = 0; i < locationALinkArray.length; i++) {
         locationALinkArray[0].innerHTML = upDatedSpaLINK;
         locationALinkArray[i].innerHTML = upDatedSpaLINK; 
             }

             //LOCATION Phone FORLOOP
     for (let i = 0; i < locationPhoneArray.length; i++) {
        locationPhoneArray[0].innerHTML = upDatedSpaPhone;
        locationPhoneArray[i].innerHTML = upDatedSpaPhone; 
            }

             //LOCATION Actual Phone FORLOOP
     for (let i = 0; i < acutalLocationPhoneArray.length; i++) {
        acutalLocationPhoneArray[0].innerHTML = upDatedActualSpaPhone;
        acutalLocationPhoneArray[i].innerHTML = upDatedActualSpaPhone; 
            }


     //LOCATION WEB LINK FORLOOP
     for (let i = 0; i < locationWebLinkArray.length; i++) {
        locationWebLinkArray[0].innerHTML = upDatedSpaWebLINK;
        locationWebLinkArray[i].innerHTML = upDatedSpaWebLINK; 
            }

        
     //Duration Total FORLOOP
     for (let i = 0; i < DurationTotalArray.length; i++) {
        DurationTotalArray[0].innerHTML = upDatedDurationTotal;
        DurationTotalArray[i].innerHTML = upDatedDurationTotal; 
            }

             //Duration One FORLOOP
     for (let i = 0; i < DurationOneArray.length; i++) {
        DurationOneArray[0].innerHTML = upDatedDurationOne;
        DurationOneArray[i].innerHTML = upDatedDurationOne; 
            }

            //Duration Two FORLOOP
     for (let i = 0; i < DurationTwoArray.length; i++) {
        DurationTwoArray[0].innerHTML = upDatedDurationTwo;
        DurationTwoArray[i].innerHTML = upDatedDurationTwo;
     }
            

     //Addons FORLOOP
     for (let i = 0; i < addOnsArray.length; i++) {
         addOnsArray[0].innerHTML = upDatedAddons;
         addOnsArray[i].innerHTML = upDatedAddons; 
             }
             upDatedAddons = addOnsStatus.value;


     // SWITCH FOR LOCATIONS INFORMATION
     switch (spaNameStatus.value) {
        case "Select Spa":
            upDatedSpaName = "Please Select Spa Spa";
            upDatedSpaAddress = "No Spa Selected";
            upDatedSpaLINK = "No Spa Selected";
            upDatedSpaWebLINK = "No Spa Selected";
            upDatedSpaPhone = "No Spa Selected";
            upDatedDurationTotal = "No Spa Selected";
            upDatedDurationOne = "No Spa Selected";
            upDatedDurationTwo = "No Spa Selected";
            promoPrice = "No Spa Selected";
            treatmentSelected = "No Spa Selected";
            break;

         case "Skin Analytics":
             upDatedSpaName = "Skin Analytics Spa";
             upDatedSpaAddress = "6910 Fayetteville Rd, Durham, NC 27713" +"<br>"+"(Southpoint Mall, ground floor next to Macy's across from Forever 21)";
             upDatedSpaLINK = "https://forms.gle/1he49LWJJgKBtHQD8";
             upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/skinanalytics-spa-led-promo"
             upDatedSpaPhone = "(919) 321-1008";
             upDatedDurationTotal = "60 Minutes";
             upDatedDurationOne = "- 15 Minutes Deep Skin Cleaning";
             upDatedDurationTwo = "- 30 Minutes LED Light Session & a 15 minutes Consultation"+"<br><br>"+"Dont Forget! You are eligible for a 25% off your next purchase at our spa :)";
             promoPrice = "79.95"
             upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 405-2586";
             treatmentSelected = "LED Treatment";
             break;

         case "Esthetix NC":
             upDatedSpaName = "Esthetix Spa";
             upDatedSpaAddress = "4325 Glenwood Ave, Suit 2106, Raleigh NC 27612" +"<br>"+"(Crabtree Valley Mall, 2nd floor, next to Johnston & Murphy)";
             upDatedSpaLINK = "https://forms.gle/WHjM6Js3yYA6w6Y59";
             upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-nc-promo";
             upDatedSpaPhone = "(984) 205-6033";
             upDatedDurationTotal = "60 Minutes";
             upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
             upDatedDurationTwo = "- 30 Minutes LED Light Session & Consultation"+"<br><br>"+"Dont Forget! You are eligeble for a 25% off your next purchase at our spa :)";
             promoPrice = "79.95"
             upDatedActualSpaPhone = "Can't find our spa? Give us a call at (919) 900-8271";
             treatmentSelected = "LED Treatment";
             break;

             case "The Bay Aesthetics Tampa":
             upDatedSpaName = "The Bay Aesthetics Tampa";
             upDatedSpaAddress = "1413 south howard avenue, Tampa, Florida 33606" +"<br>"+"(Soho building next to Clayton Gray Home)";
             upDatedSpaLINK = "";
             upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/the-bay-aesthetics";
             upDatedSpaPhone = "(813)798-6023";
             upDatedDurationTotal = "60 Minutes";
             upDatedDurationOne = "";
             upDatedDurationTwo = "";
             upDatedActualSpaPhone = "Can't find our spa? Give us a call at";
             treatmentSelected = "LED Treatment";
             break;

             case "Lionesse VA":
             upDatedSpaName = "Lionesse Spa";
             upDatedSpaAddress = "MacArthur Center, 300 Monticello Ave Suite 291 Norfolk VA 23510 " +"<br>"+"(2nd floor, across from Sephora next to Lush)";
             upDatedSpaLINK = "https://forms.gle/L2FSxu4CbnvSGm8s5";
             upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lionesse-led-promo-page";
             upDatedSpaPhone = "(757)678-8660";
             upDatedDurationTotal = "60 Minutes";
             upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
             upDatedDurationTwo = "- 30 Minutes LED Light Session & Consultation";
             promoPrice = "79.95"
             upDatedActualSpaPhone = "Can't find our spa? Give us a call at (757) 271-8031";
             treatmentSelected = "LED Treatment";
             break; 
             
             case "Earth Sarasota":
             upDatedSpaName = "Earth Spa";
             upDatedSpaAddress = "380B saint Armands circle, Sarasota FL 34236" +"<br>"+"(Next to Ben & Jerrys)";
             upDatedSpaLINK = "ask admin to add link";
             upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/sarasota-promo" ;
             upDatedSpaPhone = "(941)789-8086";
             upDatedDurationTotal = "90 Minutes";
             upDatedDurationOne = "- 45 Minutes Anti-Aging Collagen Facial & LED Light";
             upDatedDurationTwo = "- 45 Minutes LED Light Benefit Consultation";
             promoPrice = "79.95"
             upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 302-5495";
             treatmentSelected = "LED Treatment";
             break; 
             
             case "Forever Flawless Sarasota":
             upDatedSpaName = "Forever Flawless Spa";
             upDatedSpaAddress = "140 University Town Center Dr, Sarasota, FL 34243" +"<br>"+ "(The Mall at University Town Center, second floor next to Macy's)";
             upDatedSpaLINK = "ask admin to add link";
             upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/flawless-sar-promo";
             upDatedSpaPhone = "(941)977-4893";
             upDatedDurationTotal = "90 Minutes";
             upDatedDurationOne = "- 45 Minutes Anti-Aging Collagen Facial & LED Light";
             upDatedDurationTwo = "- 45 Minutes LED Light Benefit Consultation";
             promoPrice = "79.95"
             upDatedActualSpaPhone = "Can't find our spa? Give us a call at ";
             treatmentSelected = "LED Treatment";
             break;

             case "Esthetix Sarasota":
                upDatedSpaName = "Esthetix Spa";
                upDatedSpaAddress = "140 University Town Center Dr, Sarasota, FL 34243" +"<br>"+ "(The Mall at University Town Center, second floor next to Macy's)";
                upDatedSpaLINK = "https://forms.gle/oXDozKmQBfd5ewfQA";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/esthetix-sarasota-promo";
                upDatedSpaPhone = "(941) 867-8627";
                upDatedDurationTotal = "90 Minutes";
                upDatedDurationOne = "- 45 Minutes Anti-Aging Collagen Facial & LED Light";
                upDatedDurationTwo = "- 45 Minutes LED Light Benefit Consultation";
                promoPrice = "89.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (941) 302-5495";
                treatmentSelected = "LED Treatment";
                break;
       
             case "Voupre MD":
             upDatedSpaName = "Voupre Spa";
             upDatedSpaAddress = "211 Main St, Annapolis, MD 21401";
             upDatedSpaLINK = "https://forms.gle/ZqMTRgNFz48hfLU48";
             upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/voupre-spa-md" ;
             upDatedSpaPhone = "(443) 545-3555";
             upDatedDurationTotal = "90 Minutes";
             upDatedDurationOne = "- 45 Minutes Deep Skin Cleaning";
             upDatedDurationTwo = "- 45 Minutes LED Light Session & Consultation";
             promoPrice = "79.95"
             upDatedActualSpaPhone = "Can't find our spa? Give us a call at (301) 775-3494";
             treatmentSelected = "LED Treatment";
             break; 

             case "Beauty Frizz MD":
             upDatedSpaName = "BeautyFrizz Spa";
             upDatedSpaAddress = "7101 Democracy Blvd, Bethesda, MD 20817" +"<br>"+"(Montgomery Mall, 1st floor across from 'LEGO Store')";
             upDatedSpaLINK = "https://forms.gle/srNaY1uJefDZFANW8";
             upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beautyfrizz-led-promo";
             upDatedSpaPhone = "(301) 291-7543";
             upDatedDurationTotal = "90 Minutes";
             upDatedDurationOne = "- 45 Minutes Deep Skin Cleaning";
             upDatedDurationTwo = "- 45 Minutes LED Light Session & Consultation";
             promoPrice = "99.95"
             upDatedActualSpaPhone = "Can't find our spa? Give us a call at (301) 775-3494";
             treatmentSelected = "LED Treatment";
             break; 

             case "Beauty Frizz MD Body Sculpting":
                upDatedSpaName = "BeautyFrizz Spa";
                upDatedSpaAddress = "7101 Democracy Blvd, Bethesda, MD 20817" +"<br>"+"(Montgomery Mall, 1st floor across from 'LEGO Store')";
                upDatedSpaLINK = "https://forms.gle/srNaY1uJefDZFANW8";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/beautyfrizz-bodysculpting-promo";
                upDatedSpaPhone = "(301) 291-7543";
                upDatedDurationTotal = "90 Minutes";
                upDatedDurationOne = "- 60 Body Sculpting";
                upDatedDurationTwo = "- Consultation";
                promoPrice = "120"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (301) 775-3494";
                treatmentSelected = "Body Sculpting";
                break; 

             case "Lionesse Exc CA":
                upDatedSpaName = "Lionesse Exclusive Spa";
                upDatedSpaAddress = "14006 Riverside Dr #213a, Sherman Oaks, CA 91423" +"<br>"+"(Second floor near Express Clothing in front Cotton On Clothing)";
                upDatedSpaLINK = "https://forms.gle/KZ9C1f4gNPuLVKLEA";
                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lionesse-ca-led-promo" ;
                upDatedSpaPhone = "(301)887-5495";
                upDatedDurationTotal = "60 Minutes";
                upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                promoPrice = "79.95"
                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (747) 247-2204";
                treatmentSelected = "LED Treatment";
                break; 

                    case "Kristals Burlington":
                        upDatedSpaName = "Kristals Burlington Spa";
                        upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"Please enter through entrance #3 and you'll see us right after 'Marks')"; 
                        upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-burlington-led-promo-page" ;
                        upDatedSpaPhone = "(289) 293-9711";
                        upDatedDurationTotal = "60 Minutes";
                        upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                        upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                        promoPrice = "79.95"
                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                        treatmentSelected = "LED Treatment";
                        break; 

                        case "Kristals Burlington AquaPure":
                            upDatedSpaName = "Kristals Burlington Spa";
                            upDatedSpaAddress = "Burlington Mall,"+"<br>"+"777 Guelph Line, Burlington,ON L7R 3N2" + "<br>"+"Please enter through entrance #3 and you'll see us right after 'Marks')"; 
                            upDatedSpaLINK = "https://forms.gle/JQoAioVQEG9gZH197";
                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-burlington-quapure-promo" ;
                            upDatedSpaPhone = "(289) 293-9711";
                            upDatedDurationTotal = "60 Minutes";
                            upDatedDurationOne = " 60 Minutes Aquapure Treatment & Consultation";
                            upDatedDurationTwo = " ";
                            promoPrice = "99.95"
                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                            treatmentSelected = "AquaPure";
                            break; 

                        case "Kristals Barrie":
                            upDatedSpaName = "Kristals Barrie Spa";
                            upDatedSpaAddress = "Georgian Mall,"+"<br>"+"500 Bayfield St, Barrie, ON L4M 4Z8" +"<br>"+"(Main entrance lower level, next to Victoria's Secret)";
                            upDatedSpaLINK = "https://forms.gle/WyFD3HQApwUDL7hH6";
                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-barrie-spa-led-promo-page" ;
                            upDatedSpaPhone = "(705) 408-2681";
                            upDatedDurationTotal = "60 Minutes";
                            upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                            upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                            promoPrice = "79.95"
                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 787-7105";
                            treatmentSelected = "LED Treatment";
                            break; 

                            case "Adore Cookstown":
                                upDatedSpaName = "Adore spa";
                                upDatedSpaAddress = "Tanger Outlet,"+"<br>"+"3311 County Road 89, Cookstown, ON L0L 1L0" +"<br>"+"(Entrance #3, next to Sketchers)";
                                upDatedSpaLINK = "https://forms.gle/wQhsDWzjTS6GM9ko7";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adorecookstown-ledpromo" ;
                                upDatedSpaPhone = "(705) 408-0758";
                                upDatedDurationTotal = "60 Minutes";
                                upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                promoPrice = "79.95"
                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 377-7753";
                                treatmentSelected = "LED Treatment";
                                break; 

                                case "Kristals Erin Mills":
                                upDatedSpaName = "Kristals Erin Mills spa";
                                upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(1st floor, between Erin Mills Photo & Bluenotes)";
                                upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erinmills-spa-led-promo-page" ;
                                upDatedSpaPhone = "(437) 253-8259";
                                upDatedDurationTotal = "60 Minutes";
                                upDatedDurationOne = "- 15 Minutes Deep Skin Cleaning";
                                upDatedDurationTwo = "- 45 Minutes LED Light Experience & Consultation";
                                promoPrice = "79.95"
                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                                treatmentSelected = "LED Treatment";
                                break;       
                                
                                case "Kristals Erin Mills AquaPure":
                                upDatedSpaName = "Kristals Erin Mills spa";
                                upDatedSpaAddress = "Erin Mills Centre,"+"<br>"+"5100 Erin Mills Pkwy, Mississauga, ON L5M 4Z5" +"<br>"+"(1st floor, between Erin Mills Photo & Bluenotes)";
                                upDatedSpaLINK = "https://forms.gle/WYLHZFb4fk3s3J4e9";
                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/kristals-erin-mills-anti-aging-aquapure-experience-promo-page" ;
                                upDatedSpaPhone = "(437) 253-8259";
                                upDatedDurationTotal = "60 Minutes";
                                upDatedDurationOne = "- 60 Minutes AquaPure Experience & Consultation";
                                upDatedDurationTwo = " ";
                                promoPrice = "99.95"
                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 293-1112";
                                treatmentSelected = "AquaPure";
                                break;       

                                case "D'or 24K Galleria":
                                    upDatedSpaName = "D'or 24K Spa";
                                    upDatedSpaAddress = "Galleria Mall,"+"<br>"+"2414 E Sunrise Blvd, Fort Lauderdale, FL 33304" +"<br>"+"(Second floor, next to Mayors)";
                                    upDatedSpaLINK = "https://forms.gle/89wfPJjzVhc2Kefu5";
                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/dor-24k-galleria-spa-led-promo-page" ;
                                    upDatedSpaPhone = "(754) 900-3905";
                                    upDatedDurationTotal = "60 Minutes";
                                    upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                                    upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                                    promoPrice = "79.95"
                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (954) 396-4914";
                                    treatmentSelected = "LED Treatment";
                                    break;                  
    
                                    case "Greenbiotics Sherway Gardens":
                                        upDatedSpaName = "Greenbioctics Spa";
                                        upDatedSpaAddress = "CF Sherway Gardens,"+"<br>"+"25 The West Mall, Etobicoke, ON M9C 1B8" +"<br>"+"(First floor, next to Sephora)";
                                        upDatedSpaLINK = "https://forms.gle/Lu4idBaYGDGdLYwt6";
                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/greenbiotics-sherwaygardens-led-promo" ;
                                        upDatedSpaPhone = "(647) 259-6810";
                                        upDatedDurationTotal = "60 Minutes";
                                        upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                        upDatedDurationTwo = "- 40 Minutes LED Experience & Consultation";
                                        promoPrice = "79.95"
                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (647) 370-8733";
                                        treatmentSelected = "LED Treatment";
                                        break;   


                                        case "Resveralife Biltmore":
                                            upDatedSpaName = "Resveralife Spa";
                                            upDatedSpaAddress = "Biltmore Fashion Park,"+"<br>"+"2502 E Camelback Rd, Phoenix, AZ 85016" +"<br>"+"(Between Macy’s and Pottery Barn)";
                                            upDatedSpaLINK = "https://forms.gle/879qAaoL8ukq535s7";
                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/resveralife-spa-biltmore-led-promo-page" ;
                                            upDatedSpaPhone = "(602) 899-5156";
                                            upDatedDurationTotal = "60 Minutes";
                                            upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                            upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                            promoPrice = "79.95"
                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 935-5655";
                                            treatmentSelected = "LED Treatment";
                                            break;   

                                            case "Resveralife San Tan":
                                                upDatedSpaName = "Resveralife Spa";
                                                upDatedSpaAddress = "San Tan Village,"+"<br>"+"2212 E Williams Field Rd, Gilbert, AZ 85297" +"<br>"+"(Next to Bath And Body Works)";
                                                upDatedSpaLINK = "https://forms.gle/LTa4ixVfvU7phg4g9";
                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/resveralife-spa-san-tan-village-led-promo-page" ;
                                                upDatedSpaPhone = "(480) 788-3036";
                                                upDatedDurationTotal = "60 Minutes";
                                                upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                                upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                                promoPrice = "79.95"
                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 935-5655";
                                                treatmentSelected = "LED Treatment";
                                                break;   

                                                case "Royal Bee Arrowhead":
                                                    upDatedSpaName = "Royal Bee Spa";
                                                    upDatedSpaAddress = "Arrowhead Towne Center,"+"<br>"+"7700 W Arrowhead Towne Center, Glendale, AZ 85308" +"<br>"+"(Between Lane Bryant & T-Mobile)";
                                                    upDatedSpaLINK = "https://forms.gle/hRvmsEUnKHFBaApb8";
                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/royal-bee-arrowhead-az-led-promo-page" ;
                                                    upDatedSpaPhone = "(480) 788-3036";
                                                    upDatedDurationTotal = "60 Minutes";
                                                    upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                                                    upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                                                    promoPrice = "79.95"
                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (602) 935-5655";
                                                    treatmentSelected = "LED Treatment";
                                                    break;

                                               

                                                case "Rachel’s Beauty Spa Scottsdale":
                                                    upDatedSpaName = "Rachel’s Beauty Spa";
                                                    upDatedSpaAddress = "Scottsdale Quarter,"+"<br>"+"15147 N Scottsdale Rd, Scottsdale, AZ 85254, STE 130"+"<br>"+"(Next to 'Breakfast Kitchen Bar')";
                                                    upDatedSpaLINK = "https://forms.gle/QTfEEaaG3Y6RXNzV6";
                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/rachel-beauty-scottsdale-spa-led-promo-page" ;
                                                    upDatedSpaPhone = "(480) 847-1841";
                                                    upDatedDurationTotal = "60 Minutes";
                                                    upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                                                    upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                                                    promoPrice = "59.95"
                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at 480-808-9400";
                                                    treatmentSelected = "LED Treatment";
                                                    break;   
                                             

                                                            case "Earth Overland Park":
                                                            upDatedSpaName = "Earth Spa";
                                                            upDatedSpaAddress = "Oak Park Mall," + "<br>" + "11149 W 95th St, Overland Park, KS 66214"+"<br>"+"(First floor, next to 'Foot Locker')";
                                                            upDatedSpaLINK = "https://forms.gle/nPQogBaw6ts1r1Bq7";
                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-overland-led-promo-page" ;
                                                            upDatedSpaPhone = "(913) 353-6495";
                                                            upDatedDurationTotal = "75 Minutes";
                                                            upDatedDurationOne = "- 50 Minutes LED Light Experience";
                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                            promoPrice = "59.95"
                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (913) 232-8994";
                                                            treatmentSelected = "LED Treatment";
                                                            break;

                                                            case "Earth Overland Park Skin Tightening":
                                                            upDatedSpaName = "Earth Spa";
                                                            upDatedSpaAddress = "Oak Park Mall," + "<br>" + "11149 W 95th St, Overland Park, KS 66214"+"<br>"+"(First floor, next to 'Foot Locker')";
                                                            upDatedSpaLINK = "https://forms.gle/nPQogBaw6ts1r1Bq7";
                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-spa-overland-park-skin-tightening-promo-page" ;
                                                            upDatedSpaPhone = "(913) 353-6495";
                                                            upDatedDurationTotal = "75 Minutes";
                                                            upDatedDurationOne = "- 50 Minutes Skin Tightening Experience";
                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                            promoPrice = "59.95"
                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (913) 232-8994";
                                                            treatmentSelected = "Skin Tightening";
                                                            break;


                                                            case "Earth Overland Park RF":
                                                            upDatedSpaName = "Earth Spa";
                                                            upDatedSpaAddress = "Oak Park Mall," + "<br>" + "11149 W 95th St, Overland Park, KS 66214"+"<br>" + "(First floor, next to 'Foot Locker')" + "<br>" + "For your convenience, use Barnes & Noble's entrance ";
                                                            upDatedSpaLINK = "https://forms.gle/nPQogBaw6ts1r1Bq7";
                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-spa-overland-park-radio-frequency-promo-page";
                                                            upDatedSpaPhone = "(913) 353-6495";
                                                            upDatedDurationTotal = "75 Minutes";
                                                            upDatedDurationOne = "- 50 Minutes RF Experience";
                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                            promoPrice = "59.95"
                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (913) 232-8994";
                                                            treatmentSelected = "RF Tightening & Brightening";
                                                            break;

                                                            case "Earth Overland Park Neck":
                                                                upDatedSpaName = "Earth Spa";
                                                                upDatedSpaAddress = "Oak Park Mall," + "<br>" + "11149 W 95th St, Overland Park, KS 66214"+"<br>" + "(First floor, next to 'Foot Locker')" + "<br>" + "For your convenience, use Barnes & Noble's entrance ";
                                                                upDatedSpaLINK = "https://forms.gle/nPQogBaw6ts1r1Bq7";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-overland-park-spa-led-neck-lift-promo-page";
                                                                upDatedSpaPhone = "(913) 353-6495";
                                                                upDatedDurationTotal = "75 Minutes";
                                                                upDatedDurationOne = "- 50 Minutes Neck Lifting Experience";
                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                promoPrice = "59.95"
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (913) 232-8994";
                                                                treatmentSelected = "Neck Tightening";
                                                                break;

                                                                case "Earth Overland LED Experience $79.95":
                                                                    upDatedSpaName = "Earth Spa";
                                                                    upDatedSpaAddress = "Oak Park Mall," + "<br>" + "11149 W 95th St, Overland Park, KS 66214"+"<br>" + "(First floor, next to 'Foot Locker')" + "<br>" + "For your convenience, use Barnes & Noble's entrance ";
                                                                    upDatedSpaLINK = "https://forms.gle/nPQogBaw6ts1r1Bq7";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/etop-spa-led-promo";
                                                                    upDatedSpaPhone = "(913) 353-6495";
                                                                    upDatedDurationTotal = "75 Minutes";
                                                                    upDatedDurationOne = "- 50 Minutes Anti-aging LED Experience";
                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                    promoPrice = "79.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (913) 232-8994";
                                                                    treatmentSelected = "LED Treatment";
                                                                    break;

                                                                case "Earth Overland Park Collagen":
                                                                    upDatedSpaName = "Earth Spa";
                                                                    upDatedSpaAddress = "Oak Park Mall," + "<br>" + "11149 W 95th St, Overland Park, KS 66214"+"<br>" + "(First floor, next to 'Foot Locker')" + "<br>" + "For your convenience, use Barnes & Noble's entrance ";
                                                                    upDatedSpaLINK = "https://forms.gle/nPQogBaw6ts1r1Bq7";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-overland-park-spa-collagen-lifting-facial-promo-page";
                                                                    upDatedSpaPhone = "(913) 353-6495";
                                                                    upDatedDurationTotal = "75 Minutes";
                                                                    upDatedDurationOne = "- 50 Minutes Collagen Lifting Experience";
                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                    promoPrice = "59.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (913) 232-8994";
                                                                    treatmentSelected = "Collagen Treatment";
                                                                    break;

                                                                    case "Earth Overland Park Non-surgical lifting":
                                                                    upDatedSpaName = "Earth Spa";
                                                                    upDatedSpaAddress = "Oak Park Mall," + "<br>" + "11149 W 95th St, Overland Park, KS 66214"+"<br>" + "(First floor, next to 'Foot Locker')" + "<br>" + "For your convenience, use Barnes & Noble's entrance ";
                                                                    upDatedSpaLINK = "https://forms.gle/nPQogBaw6ts1r1Bq7";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-overland-park-spa-non-surgical-lifting-facial-promo-page";
                                                                    upDatedSpaPhone = "(913) 353-6495";
                                                                    upDatedDurationTotal = "75 Minutes";
                                                                    upDatedDurationOne = "- 50 Minutes Non-surgical Lifting Experience";
                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                    promoPrice = "59.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (913) 232-8994";
                                                                    treatmentSelected = "Non-surgical Lifting";
                                                                    break;

                                                                    case "Earth Lakeline Neck Tightening":
                                                                        upDatedSpaName = "Earth Spa";
                                                                        upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                        upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-neck-tightening-promo";
                                                                        upDatedSpaPhone = "(512) 957-0399";
                                                                        upDatedDurationTotal = "75 Minutes";
                                                                        upDatedDurationOne = "- 50 Minutes Neck Tightening Experience";
                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                        promoPrice = "59.95"
                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                        treatmentSelected = "Neck Tightening";
                                                                        break;

                                                                        case "Earth Lakeline Non-Surgical Face Lift":
                                                                            upDatedSpaName = "Earth Spa";
                                                                            upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                            upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-non-surgical-fl-promo";
                                                                            upDatedSpaPhone = "(512) 957-0399";
                                                                            upDatedDurationTotal = "75 Minutes";
                                                                            upDatedDurationOne = "- 50 Minutes Non-Surgical Face Lift Experience";
                                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                            promoPrice = "59.95"
                                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                            treatmentSelected = "Non-surgical Face Lift";
                                                                            break;

                                                                            case "Earth Lakeline Rewind Facial Treatment":
                                                                                upDatedSpaName = "Earth Spa";
                                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-rewind-promo";
                                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                                upDatedDurationTotal = "75 Minutes";
                                                                                upDatedDurationOne = "- 50 Minutes Rewind Facial Treatment";
                                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                promoPrice = "59.95"
                                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                treatmentSelected = "Rewind Facial Treatment";
                                                                                break;

                                                                                case "Earth Lakeline LED Tightening":
                                                                                upDatedSpaName = "Earth Spa";
                                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-led-tightening-promo";
                                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                                upDatedDurationTotal = "75 Minutes";
                                                                                upDatedDurationOne = "- 50 Minutes LED Tightening Treatment";
                                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                promoPrice = "59.95"
                                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                treatmentSelected = "LED Tightening";
                                                                                break;

                                                                                case "Earth Lakeline Age Reverse":
                                                                                upDatedSpaName = "Earth Spa";
                                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-age-reverse-promo";
                                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                                upDatedDurationTotal = "75 Minutes";
                                                                                upDatedDurationOne = "- 50 Minutes Age Reverse Treatment";
                                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                promoPrice = "59.95"
                                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                treatmentSelected = "Age Reverse";
                                                                                break;

                                                                                case "Earth Lakeline Collagen Lifting Facial":
                                                                                    upDatedSpaName = "Earth Spa";
                                                                                    upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                    upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-collagen-lifting-promo";
                                                                                    upDatedSpaPhone = "(512) 957-0399";
                                                                                    upDatedDurationTotal = "75 Minutes";
                                                                                    upDatedDurationOne = "- 50 Minutes Collagen Lifting Facial";
                                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                    promoPrice = "59.95"
                                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                    treatmentSelected = "Collagen Lifting Facial";
                                                                                    break;

                                                                                    case "Earth Lakeline Elastin Tightening 70":
                                                                                        upDatedSpaName = "Earth Spa";
                                                                                        upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                        upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-spa-elastin-tightening-promo";
                                                                                        upDatedSpaPhone = "(512) 957-0399";
                                                                                        upDatedDurationTotal = "75 Minutes";
                                                                                        upDatedDurationOne = "- 50 Minutes Elastin Tightening Facial";
                                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                        promoPrice = "70"
                                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                        treatmentSelected = "Elastin Tightening";
                                                                                        break;
                                                        
                                                                                        case "Earth Lakeline Collagen Enhancing 70":
                                                                                            upDatedSpaName = "Earth Spa";
                                                                                            upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                            upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-collagen-enhancing-promo";
                                                                                            upDatedSpaPhone = "(512) 957-0399";
                                                                                            upDatedDurationTotal = "75 Minutes";
                                                                                            upDatedDurationOne = "- 50 Minutes Collagen Enhancing Treatment";
                                                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                            promoPrice = "70"
                                                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                            treatmentSelected = "Collagen Enhancing";
                                                                                            break;

                                                                                            case "Earth Round Rock LED Firming Facial (Face&Neck)":
                                                                                            upDatedSpaName = "Earth Spa";
                                                                                            upDatedSpaAddress = "3021 S Frontage Rd"+"<br>" + "(Inside Salons by JC, suite #4)";
                                                                                            upDatedSpaLINK = "FORM";
                                                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-roundrock-led-firming-face-neck-promo";
                                                                                            upDatedSpaPhone = "(512) 887-1733";
                                                                                            upDatedDurationTotal = "75 Minutes";
                                                                                            upDatedDurationOne = "- 50 LED Firming Facial (Face&Neck)";
                                                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                            promoPrice = "70"
                                                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                            treatmentSelected = "LED Firming Facial Face & Neck";
                                                                                            break;

                                                                                            case "Earth Round Rock RF Tightening & Brightening":
                                                                                            upDatedSpaName = "Earth Spa";
                                                                                            upDatedSpaAddress = "3021 S Frontage Rd"+"<br>" + "(Inside Salons by JC, suite #4)";
                                                                                            upDatedSpaLINK = "FORM";
                                                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthtech-roundrock-rftightbright-promo";
                                                                                            upDatedSpaPhone = "(512) 887-1733";
                                                                                            upDatedDurationTotal = "75 Minutes";
                                                                                            upDatedDurationOne = "- 50 RF Tightening & Brightening Treatment";
                                                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                            promoPrice = "70"
                                                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (737) 294-3297";
                                                                                            treatmentSelected = "RF Tightening & Brightening";

                                                                                            break;

                                                                                            

                                                        case "Earth Lakeline HydroDermabrasion":
                                                             upDatedSpaName = "Earth Spa";
                                                             upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                             upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                             upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthtech-lakeline-hydrodermabrasion-promo";
                                                             upDatedSpaPhone = "(512) 957-0399";
                                                             upDatedDurationTotal = "60 Minutes";
                                                             upDatedDurationOne = "- 15 Minutes Cleansing";
                                                             upDatedDurationTwo = "- 45 Minutes HydroDermabrasion & Consultation";
                                                             promoPrice = "70"
                                                             upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                             treatmentSelected = "HydroDermabrasion";
                                                             break;

                                                             case "Earth Lakeline Chin RF":
                                                             upDatedSpaName = "Earth Spa";
                                                             upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                             upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                             upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthtech-lakeline-rf-chin-promo";
                                                             upDatedSpaPhone = "(512) 957-0399";
                                                             upDatedDurationTotal = "75 Minutes";
                                                             upDatedDurationOne = "- 50 Minutes RadioFrequency Chin";
                                                             upDatedDurationTwo = "- 25 Minutes Consultation";
                                                             promoPrice = "70"
                                                             upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                             treatmentSelected = "Chin RF";
                                                             break;

                                                         case "Earth Lakeline Age Defying":
                                                            upDatedSpaName = "Earth Spa";
                                                            upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                            upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthlakeline-spa-ad-promo";
                                                            upDatedSpaPhone = "(512) 957-0399";
                                                            upDatedDurationTotal = "75 Minutes";
                                                            upDatedDurationOne = "- 50 Minutes LED Age Defying";
                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                            promoPrice = "70"
                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                            treatmentSelected = "Age Defying";
                                                            break;

                                                            case "Earth Lakeline Body Sculpting":
                                                                upDatedSpaName = "Earth Spa";
                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-lakeline-body-sculpting-body-sculpting-promo-page";
                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                upDatedDurationTotal = "85 Minutes";
                                                                upDatedDurationOne = "- 60 Minutes Body Sculpting";
                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                promoPrice = "79.95"
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                treatmentSelected = "Body Sculpting";
                                                                break;

                                                                case "Earth Lakeline RF Tightening & Brightening":
                                                                upDatedSpaName = "Earth Spa";
                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthtech-lakeline-rf-tightening-brightening-promo";
                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                upDatedDurationTotal = "85 Minutes";
                                                                upDatedDurationOne = "- 60 Minutes RF Tightening & Brightening";
                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                promoPrice = "79.95"
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                treatmentSelected = "RF Tightening & Brightening";
                                                                break;

                                                                case "Earth Lakeline Perfect Skin Complexion Facial":
                                                                    upDatedSpaName = "Earth Spa";
                                                                    upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                    upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-akeline-perfectskincomplexion-promo";
                                                                    upDatedSpaPhone = "(512) 957-0399";
                                                                    upDatedDurationTotal = "85 Minutes";
                                                                    upDatedDurationOne = "- 60 Minutes Perfect Skin Complexion Facial";
                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                    promoPrice = "70"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                    treatmentSelected = "Perfect Skin Complexion Facial";
                                                                    break;

                                                                    case "Earth Lakeline Non-Surgical Lifting Facial":
                                                                        upDatedSpaName = "Earth Spa";
                                                                        upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                        upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-spa-non-surgical-lifting-facial-promo";
                                                                        upDatedSpaPhone = "(512) 957-0399";
                                                                        upDatedDurationTotal = "85 Minutes";
                                                                        upDatedDurationOne = "- 60 Minutes Non-Surgical Lifting Facial";
                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                        promoPrice = "70"
                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                        treatmentSelected = "Non-surgical Lifting Facial";
                                                                        break;

                                                                        case "Earth Lakeline LED Firming Facial (Face&Neck)":
                                                                        upDatedSpaName = "Earth Spa";
                                                                        upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                        upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                        upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-spa-led-firming-facial-face-amp-neck-promo";
                                                                        upDatedSpaPhone = "(512) 957-0399";
                                                                        upDatedDurationTotal = "85 Minutes";
                                                                        upDatedDurationOne = "- 60 Minutes Non-Surgical Lifting Facial";
                                                                        upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                        promoPrice = "70"
                                                                        upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                        treatmentSelected = "LED Firming Facial Face & Neck";
                                                                        break;

                                                                        case "Earth Lakeline LED Firming Facial (Face&Neck)":
                                                                            upDatedSpaName = "Earth Spa";
                                                                            upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                            upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-spa-led-firming-facial-face-amp-neck-promo";
                                                                            upDatedSpaPhone = "(512) 957-0399";
                                                                            upDatedDurationTotal = "85 Minutes";
                                                                            upDatedDurationOne = "- 60 Minutes LED Firming Facial (Face&Neck";
                                                                            upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                            promoPrice = "70"
                                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                            treatmentSelected = "LED Firming Facial";
                                                                            break;

                                                                            case "Earth Lakeline Elastin Facial (Face&Neck)":
                                                                                upDatedSpaName = "Earth Spa";
                                                                                upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-spa-elastin-facial-face-amp-neck-promo";
                                                                                upDatedSpaPhone = "(512) 957-0399";
                                                                                upDatedDurationTotal = "85 Minutes";
                                                                                upDatedDurationOne = "- 60 Minutes Elastin Facial (Face&Neck)";
                                                                                upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                promoPrice = "70"
                                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                treatmentSelected = "Elastin Faciel Face & Neck";
                                                                                break;
    
                                                                                case "Earth Lakeline Skin Tightening Facial (Face & Neck) + Free Scalp Massage":
                                                                                    upDatedSpaName = "Earth Spa";
                                                                                    upDatedSpaAddress = "Lakeline Mall," + "<br>" + "11200 Lakeline Mall Dr, Cedar Park, TX 78613"+"<br>" + "(First floor, between Macy's & Plusbeauxatour)";
                                                                                    upDatedSpaLINK = "https://forms.gle/pPPf7Sy3TMNsuCmT7";
                                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-lakeline-skin-tightening-facial-face-amp-neck-fsm-promo";
                                                                                    upDatedSpaPhone = "(512) 957-0399";
                                                                                    upDatedDurationTotal = "85 Minutes";
                                                                                    upDatedDurationOne = "- 60 Minutes Skin Tightening Facial (Face & Neck) + Free Scalp Massage";
                                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                                    promoPrice = "70"
                                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 551-9944";
                                                                                    treatmentSelected = "Skin Tightening Face & Neck";
                                                                                    break;

                                                                                
                                                                                
                                                    
                                                         case "Earth Barton Creek Body Sculpting":
                                                            upDatedSpaName = "Earth Tech Spa";
                                                            upDatedSpaAddress = "Barton Creek Square," + "<br>" + "2901 S Capital of Texas Hwy, Austin, TX 78746"+"<br>" + "(2nd floor, in front of Forever 21 between Express and Dillard's)";
                                                            upDatedSpaLINK = "https://forms.gle/qqJDfZr9QmL1cJye6";
                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-barton-creek-body-sculpting-body-sculpting-promo-page";
                                                            upDatedSpaPhone = "(512) 356-9260";
                                                            upDatedDurationTotal = "60 Minutes";
                                                            upDatedDurationOne = "- 60 Minutes Body Sculpting & Consultation";
                                                            upDatedDurationTwo = " ";
                                                               promoPrice = "79.95"
                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                            treatmentSelected = "Body Sculpting";
                                                            break;

                                                            case "Earth Barton Creek Neck Tightening":
                                                            upDatedSpaName = "Earth Tech Spa";
                                                            upDatedSpaAddress = "Barton Creek Square," + "<br>" + "2901 S Capital of Texas Hwy, Austin, TX 78746"+"<br>" + "(2nd floor, in front of Forever 21 between Express and Dillard's)";
                                                            upDatedSpaLINK = "https://forms.gle/qqJDfZr9QmL1cJye6";
                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-barton-creek-spa-led-neck-lift-promo-page";
                                                            upDatedSpaPhone = "(512) 356-9260";
                                                            upDatedDurationTotal = "60 Minutes";
                                                            upDatedDurationOne = "- 60 Minutes Neck Lifting & Consultation";
                                                            upDatedDurationTwo = " ";
                                                               promoPrice = "59.95"
                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                            treatmentSelected = "Neck Tightening";
                                                            break;

                                                            case "Earth Barton Creek Collagen Lifting":
                                                            upDatedSpaName = "Earth Tech Spa";
                                                            upDatedSpaAddress = "Barton Creek Square," + "<br>" + "2901 S Capital of Texas Hwy, Austin, TX 78746"+"<br>" + "(2nd floor, in front of Forever 21 between Express and Dillard's)";
                                                            upDatedSpaLINK = "https://forms.gle/qqJDfZr9QmL1cJye6";
                                                            upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-tech-barton-creek-spa-non-surgical-collagen-lift-promo-page";
                                                            upDatedSpaPhone = "(512) 356-9260";
                                                            upDatedDurationTotal = "60 Minutes";
                                                            upDatedDurationOne = "- 60 Minutes Collagen Lifting & Consultation";
                                                            upDatedDurationTwo = " ";
                                                               promoPrice = "59.95"
                                                            upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                            treatmentSelected = "Collagne Lifting";
                                                            break;

                                                            case "Earth Barton Creek Chin Tightening":
                                                                upDatedSpaName = "Earth Tech Spa";
                                                                upDatedSpaAddress = "Barton Creek Square," + "<br>" + "2901 S Capital of Texas Hwy, Austin, TX 78746"+"<br>" + "(2nd floor, in front of Forever 21 between Express and Dillard's)";
                                                                upDatedSpaLINK = "https://forms.gle/qqJDfZr9QmL1cJye6";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earthtech-bartoncreek-chin-promo";
                                                                upDatedSpaPhone = "(512) 356-9260";
                                                                upDatedDurationTotal = "60 Minutes";
                                                                upDatedDurationOne = "- 60 Minutes Chin Tightening & Consultation";
                                                                upDatedDurationTwo = " ";
                                                                   promoPrice = "70"
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                                treatmentSelected = "Chin Tightening";
                                                                break;

                                                                case "Earth Aventura LED Anti-aging":
                                                                    upDatedSpaName = "Earth Tech Spa";
                                                                    upDatedSpaAddress = "Promenade Shops," + "<br>" + "20335 Biscayne Blvd Suite #10 Miami, FL 33180"+"<br>" + "(Between Chuck E. Cheese and Olympia Gym)";
                                                                    upDatedSpaLINK = "https://forms.gle/tsbzwRoFssaCfHnN8";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-aventura-led-promo";
                                                                    upDatedSpaPhone = "(786) 539-3034";
                                                                    upDatedDurationTotal = "75 Minutes";
                                                                    upDatedDurationOne = "- 50 Minutes LED Anti-aging Experience";
                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                       promoPrice = "59.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                                    treatmentSelected = "LED Anti-aging";
                                                                    break;

                                                                    case "Earth Aventura LED Skin Tightening":
                                                                    upDatedSpaName = "Earth Tech Spa";
                                                                    upDatedSpaAddress = "Promenade Shops," + "<br>" + "20335 Biscayne Blvd Suite #10 Miami, FL 33180"+"<br>" + "(Between Chuck E. Cheese and Olympia Gym)";
                                                                    upDatedSpaLINK = "https://forms.gle/tsbzwRoFssaCfHnN8";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-aventura-led-skin-tightening-promo";
                                                                    upDatedSpaPhone = "(786) 539-3034";
                                                                    upDatedDurationTotal = "75 Minutes";
                                                                    upDatedDurationOne = "- 50 Minutes LED Skin Tightening Experience";
                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                       promoPrice = "59.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                                    treatmentSelected = "LED Skin Tightening";
                                                                    break;

                                                                    case "Earth Aventura Non-surgical Facelift":
                                                                    upDatedSpaName = "Earth Tech Spa";
                                                                    upDatedSpaAddress = "Promenade Shops," + "<br>" + "20335 Biscayne Blvd Suite #10 Miami, FL 33180"+"<br>" + "(Between Chuck E. Cheese and Olympia Gym)";
                                                                    upDatedSpaLINK = "https://forms.gle/tsbzwRoFssaCfHnN8";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-aventura-nonsurgicalfacelift-promo";
                                                                    upDatedSpaPhone = "(786) 539-3034";
                                                                    upDatedDurationTotal = "75 Minutes";
                                                                    upDatedDurationOne = "- 50 Minutes LED Skin Tightening Experience";
                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                    promoPrice = "59.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                                    treatmentSelected = "Non-surgical Face Lift.";
                                                                    break;      
                                                                    
                                                                    case "Earth Aventura LED Light Facial":
                                                                    upDatedSpaName = "Earth Tech Spa";
                                                                    upDatedSpaAddress = "Promenade Shops," + "<br>" + "20335 Biscayne Blvd Suite #10 Miami, FL 33180"+"<br>" + "(Between Chuck E. Cheese and Olympia Gym)";
                                                                    upDatedSpaLINK = "https://forms.gle/tsbzwRoFssaCfHnN8";
                                                                    upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/earth-aventura-nonsurgicalfacelift-promo";
                                                                    upDatedSpaPhone = "(786) 539-3034";
                                                                    upDatedDurationTotal = "75 Minutes";
                                                                    upDatedDurationOne = "- 50 Minutes LED Skin Light Facial";
                                                                    upDatedDurationTwo = "- 25 Minutes Consultation";
                                                                    promoPrice = "59.95"
                                                                    upDatedActualSpaPhone = "Can't find our spa? Give us a call at (512) 992-0050";
                                                                    treatmentSelected = "LED Skin Light Facial";
                                                                    break;            

                                                            case "Lola Soap Mesa":
                                                                upDatedSpaName = "Lola Soap Spa";
                                                                upDatedSpaAddress = "Superstition Mall" + "<br>" + "6555 E Southern Ave Mesa, AZ 85206"+"<br>"+"(First floor, Next to Cinnabon)";
                                                                upDatedSpaLINK = "https://forms.gle/peiS9dvWHZdg9aE26";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lola-soap-mesa-led-promo-page" ;
                                                                upDatedSpaPhone = "(480) 847-2949";
                                                                upDatedDurationTotal = "60 Minutes";
                                                                upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                                                                upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                                                                promoPrice = "79.95"
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (480) 742-6682";
                                                                treatmentSelected = "LED Treatment";
                                                                break;  
                                                                
                                                            case "Supreme Brea":
                                                                upDatedSpaName = "Supreme Spa";
                                                                upDatedSpaAddress = "910 E birch st. suite #200, Brea, CA 92821"+"<br>"+"[Embassy court near embassy hotel Ground floor (#2 in the elevator)] Please use underground parking of the Embassy Hotel";
                                                                upDatedSpaLINK = "https://forms.gle/4x1BvF7zdW75rkCg8";
                                                                upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/supreme-spa-brea-led-promo-page" ;
                                                                upDatedSpaPhone = "(714) 592-0373";
                                                                upDatedDurationTotal = "60 Minutes";
                                                                upDatedDurationOne = "- 45 Minutes Deep Skin Cleaning";
                                                                upDatedDurationTwo = "- 45 Minutes LED Light Experience & Consultation";
                                                                promoPrice = "79.95"
                                                                upDatedActualSpaPhone = "Can't find our spa? Give us a call at (714) 784-6884";
                                                                treatmentSelected = "LED Treatment";
                                                                break;  

                                   case "Predire Freehold":
                                       upDatedSpaName = "Predire Paris Spa";
                                       upDatedSpaAddress = "Freehold Raceway Mall" + "<br>" + "3710 US 9, Freehold, NJ 07728"+"<br>"+"(First floor on the right side of Aveda and across from Victoria's Secret)";
                                       upDatedSpaLINK = "https://forms.gle/LXf2Ch9m3ifPSY1t9";
                                       upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/predire-paris-spa-freehold-led-promo-page" ;
                                       upDatedSpaPhone = "(732) 724-9960";
                                      upDatedDurationTotal = "75 Minutes";
                                       upDatedDurationOne = "- 40 Minutes Deep Skin Cleaning & Hydration";
                                      upDatedDurationTwo = "- 35 Minutes LED Light Experience & Consultation";
                                      promoPrice = "79.95"
                                      upDatedActualSpaPhone = "Can't find our spa? Give us a call at (313) 358-6266";
                                      treatmentSelected = "LED Treatment";
                                      break;  

                             case "Hermetise Fort Myers":
                                  upDatedSpaName = "Hermetise Spa";
                                 upDatedSpaAddress = "Edison Mall" + "<br>" + "4125 Cleveland Ave, Fort Myers, FL 33901"+"<br>"+"(Next to 'Vans')";
                                 upDatedSpaLINK = "https://forms.gle/Zr8gwTBjnsGZpWBt5";
                                 upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/hermetise-fort-myers-spa-led-promo-page" ;
                                 upDatedSpaPhone = "(239) 766-8767";
                                 upDatedDurationTotal = "60 Minutes";
                                 upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                                 upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                                 promoPrice = "79.95"
                                 upDatedActualSpaPhone = "Can't find our spa? Give us a call at 239-375-6352";
                                 treatmentSelected = "LED Treatment";
                                 break;  

                                 case "Tresor Rare Las Olas":
                                    upDatedSpaName = "Tresor Rare Spa";
                                   upDatedSpaAddress = "617 east las Olas Blvd, Fort Lauderdale, FL 333011"+"<br>"+"(Next to 'Vans')";
                                   upDatedSpaLINK = "https://forms.gle/ojW56idhkRSLmsCa9";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/tresor-rare-las-olas-spa-led-promo-page" ;
                                   upDatedSpaPhone = "(754) 778-6615";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                   upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (754) 701-0937";
                                   treatmentSelected = "LED Treatment";
                                   break;  

                                   case "Lola Beauty Tanger":
                                    upDatedSpaName = "Lola Beauty spa";
                                   upDatedSpaAddress = "Tanger Outlets," + "<br>" + "4840 Tanger outlet Blvd , North Charleston SC 29418"+"<br>"+"(In front of 'The North Face')";
                                   upDatedSpaLINK = "https://forms.gle/5EoAxgvLh111YhVcA";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lola-beauty-spa-tanger-led-promo-page" ;
                                   upDatedSpaPhone = "(843) 277-9518";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                   upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (843) 818-4617";
                                   treatmentSelected = "LED Treatment";
                                   break;  

                                   case "Lavelier Orange Park":
                                    upDatedSpaName = "Lavelier spa";
                                   upDatedSpaAddress = "Orange Park Mall," + "<br>" + "1910 Wells Rd, Orange Park, FL 32073"+"<br>"+"(Next to 'Helzberg Diamonds')";
                                   upDatedSpaLINK = "https://forms.gle/kWcQs5a8tgAPpaqe6";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/lavelier-orange-park-spa-led-promo-page" ;
                                   upDatedSpaPhone = "(904) 458-7896";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                                   upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (904) 592-7266";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Oasis Boutique":
                                    upDatedSpaName = "Oasis Boutique spa";
                                   upDatedSpaAddress = "Downtown Winter Park," + "<br>" + "236 N. Park Ave, Winter Park, FL 32789"+"<br>"+"(Downtown Winter Park, next to 'Wright & Company')";
                                   upDatedSpaLINK = "FORMM";
                                   upDatedSpaWebLINK = "LP" ;
                                   upDatedSpaPhone = "(843) 277-9518";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 30 Minutes Deep Skin Cleaning";
                                   upDatedDurationTwo = "- 30 Minutes LED Light Experience & Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (843) 818-4617";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Center Stage VA":
                                    upDatedSpaName = "Center Stage spa";
                                   upDatedSpaAddress = "1100 South Hayes Street, Arlington, VA 22202"+"<br>"+"(Infront of 'Victoria's Secret')";
                                   upDatedSpaLINK = "https://forms.gle/k98pFeHz9vrD8P3F7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/center-stage-spa-led-promo-page" ;
                                   upDatedSpaPhone = "(703) 349-4804";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                   upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 244-4420";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Center Stage VA 119":
                                    upDatedSpaName = "Center Stage spa";
                                   upDatedSpaAddress = "1100 South Hayes Street, Arlington, VA 22202"+"<br>"+"(Infront of 'Victoria's Secret')";
                                   upDatedSpaLINK = "https://forms.gle/k98pFeHz9vrD8P3F7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/center-stage-spa-new-led-promo-page" ;
                                   upDatedSpaPhone = "(703) 349-4804";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 20 Minutes Deep Skin Cleaning";
                                   upDatedDurationTwo = "- 40 Minutes LED Light Experience & Consultation";
                                   promoPrice = "119.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (844) 244-4420";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Elevatione Spa & Beauty Skin Tightening":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                   upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                   upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-beauty-skin-tightening-promo-page" ;
                                   upDatedSpaPhone = "(561) 337-1669";
                                   upDatedDurationTotal = "70 Minutes";
                                   upDatedDurationOne = "45 Minutes Skin Tightening";
                                   upDatedDurationTwo = "25 Minutes Consultation";
                                   promoPrice = "59.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                   treatmentSelected = "Skin Tightening";
                                   break; 

                                   case "Elevatione Spa & Beauty Collagen Lifting":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                   upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                   upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-collagen-lifting-experience-promo-page";
                                   upDatedSpaPhone = "(561) 337-1669";
                                   upDatedDurationTotal = "70 Minutes";
                                   upDatedDurationOne = "45 Minutes Collagen Lifting ";
                                   upDatedDurationTwo = "25 Minutes Consultation";
                                   promoPrice = "59.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                   treatmentSelected = "Collagen Lifting";
                                   break; 

                                   case "Elevatione Spa & Beauty Non-surgical Face Lift":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                   upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                   upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-non-surgical-face-lift-experience-promo-page";
                                   upDatedSpaPhone = "(561) 337-1669";
                                   upDatedDurationTotal = "70 Minutes";
                                   upDatedDurationOne = "45 Minutes Non-surgical Facelift";
                                   upDatedDurationTwo = "25 Minutes Consultation";
                                   promoPrice = "59.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                   treatmentSelected = "Non-surgical Face Lift";
                                   break; 

                                   case "Elevatione Spa & Beauty LED":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                   upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                   upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-beauty-anti-aging-led-promo-page";
                                   upDatedSpaPhone = "(561) 337-1669";
                                   upDatedDurationTotal = "70 Minutes";
                                   upDatedDurationOne = "45 Minutes LED Experience";
                                   upDatedDurationTwo = "25 Minutes Consultation";
                                   promoPrice = "59.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Elevatione Spa & Beauty Collagen Enhancing 79.95":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                   upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                   upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-collagen-enhancing-promo";
                                   upDatedSpaPhone = "(561) 337-1669";
                                   upDatedDurationTotal = "70 Minutes";
                                   upDatedDurationOne = "45 Minutes Collagen Enhancing";
                                   upDatedDurationTwo = "25 Minutes Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                   treatmentSelected = "Collagen Enhancing";
                                   break; 

                                   case "Elevatione Spa & Beauty Body Sculpting 99.95":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                   upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                   upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevetione-bodysculpting-promo";
                                   upDatedSpaPhone = "(561) 337-1669";
                                   upDatedDurationTotal = "70 Minutes";
                                   upDatedDurationOne = "45 Minutes Body Sculpting";
                                   upDatedDurationTwo = "25 Minutes Consultation";
                                   promoPrice = "99.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                   treatmentSelected = "Body Sculpting";
                                   break; 

                                   case "Elevatione Spa & Beauty Non-surgical Face Lift & Microdermabrasion":
                                    upDatedSpaName = "Elevatione Spa & Beauty";
                                   upDatedSpaAddress = "Flagler Waterview building,"+"<br>"+"1515 North Flagler Drive, West Palm Beach, FL 33401"+"<br>"+"(First Floor, STE 100)";
                                   upDatedSpaLINK = "https://forms.gle/TcPjSkWja3QxSPWb7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/elevatione-spa-amp-non-surgical-face-lift-experience-promo-page";
                                   upDatedSpaPhone = "(561) 337-1669";
                                   upDatedDurationTotal = "70 Minutes";
                                   upDatedDurationOne = "45 Minutes Body Sculpting";
                                   upDatedDurationTwo = "25 Minutes Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (561) 469-6135 ";
                                   treatmentSelected = "Non-surgical Face Lift & Microdermabrasion";
                                   break; 
                                  


                                   case "Lionesse Greenville":
                                    upDatedSpaName = "Lionesse Beauty Bar";
                                   upDatedSpaAddress = "Haywood Mall,"+"<br>"+"700 Haywood rd Greenville SC 29607"+"<br>"+"(Lower level next to Palmetto Moon)";
                                   upDatedSpaLINK = "https://forms.gle/f2VcSs8B75gv6t7F7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/liong-led-promo";
                                   upDatedSpaPhone = "(864) 252-0487";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 20 Minutes Deep Cleansing & Facial Massage ";
                                   upDatedDurationTwo = "- 40 Minutes LED Anti-aging Treatment and Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (443) 449-4761 ";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Adore Estero":
                                    upDatedSpaName = "Adore Spa";
                                   upDatedSpaAddress = "Miromar Outlets,"+"<br>"+"10801 Corkscrew Rd Estero, FL 33928"+"<br>"+"(Between Ford's Garage & Aerie)";
                                   upDatedSpaLINK = "https://forms.gle/T5G7xCnCV49ryBV68";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/adore-estero-ledpromo";
                                   upDatedSpaPhone = "(239) 444-8790";
                                   upDatedDurationTotal = "45 Minutes";
                                   upDatedDurationOne = "- 10 Minutes Deep Cleansing & Steam ";
                                   upDatedDurationTwo = "- 35 Minutes LED Tightening Treatment and Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (239) 301-4943";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Flawless Wayne":
                                    upDatedSpaName = "Flawless Beauty";
                                   upDatedSpaAddress = "Willowbrook Mall,"+"<br>"+"1355 Willowbrook Mall, Wayne NJ 07470"+"<br>"+"(Outside Willowbrook Mall, Near LensCrafters)";
                                   upDatedSpaLINK = "https://forms.gle/YoeMzRUD9YLtpxjs9";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/flawlessbeauty-wayne-led-promo";
                                   upDatedSpaPhone = "(973) 200-3530 ";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 25 Minutes Deep Cleansing ";
                                   upDatedDurationTwo = "- 35 Minutes LED Treatment" + "<br>" + "25 Minutes of Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (973) 406-6160";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Flawless Wayne $99.95 PROMO":
                                    upDatedSpaName = "Flawless Beauty";
                                   upDatedSpaAddress = "Willowbrook Mall,"+"<br>"+"1355 Willowbrook Mall, Wayne NJ 07470"+"<br>"+"(Outside Willowbrook Mall, Near LensCrafters)";
                                   upDatedSpaLINK = "https://forms.gle/YoeMzRUD9YLtpxjs9";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/flawless-beauty-wayne-spa-led-promo-99";
                                   upDatedSpaPhone = "(973) 200-3530 ";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 25 Minutes Deep Cleansing ";
                                   upDatedDurationTwo = "- 35 Minutes LED Treatment" + "<br>" + "25 Minutes of Consultation";
                                   promoPrice = "99.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (973) 406-6160";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Be Pretty Spa":
                                    upDatedSpaName = "Be Pretty";
                                   upDatedSpaAddress = "309 S Main Street Breckenridge, Colorado 80424"+"<br>"+"(Next to the Crepes Cart)";
                                   upDatedSpaLINK = "https://forms.gle/GMzxAcKuDiCsdVue8";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/be-pretty-led-promo";
                                   upDatedSpaPhone = "(970) 236-1162";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 25 Minutes Deep Cleansing";
                                   upDatedDurationTwo = "- 35 Minutes LED Treatment and Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (970) 423-6268";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Predire St. Petersburg":
                                    upDatedSpaName = "Predire Paris Spa";
                                   upDatedSpaAddress = "6901 22nd Ave N St. Petersburg, FL 33710"+"<br>"+"(Tyrone Mall next to Shalimar Jewelry, please enter via Macy's)";
                                   upDatedSpaLINK = "https://forms.gle/K3YLkvdsaQTvWMRL8";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/predire-st-pete-led-promo";
                                   upDatedSpaPhone = "(727) 350-1087";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 5-10 Minutes Deep Cleansing";
                                   upDatedDurationTwo = "- 50-55 Minutes LED Treatment and Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (727) 341-0110";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "AVOLOGI Eneo Victoria":
                                    upDatedSpaName = "Avologi Eneo Spa";
                                   upDatedSpaAddress = "3147 Douglas Street Victoria, BC V8Z 6E3"+"<br>"+"(Mayfair Shopping Centre next to Zoomies)";
                                   upDatedSpaLINK = "https://forms.gle/VN9LgHRNeDcctfkg9";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologi-victoria-led-promo";
                                   upDatedSpaPhone = "(250) 410-3324";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 20 Minutes Cleansing and Facial Massage";
                                   upDatedDurationTwo = "- 40 Minutes LED Treatment and Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (778) 265-5141";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "AVOLOGI Eneo Woodgrove":
                                    upDatedSpaName = "Avologi Eneo Spa";
                                   upDatedSpaAddress = "6631 Island Hwy, Nanaimo, BC V9T 4T7"+"<br>"+"(Woodgrove Centre, across the hall from The Shoe Company)";
                                   upDatedSpaLINK = "https://forms.gle/VN9LgHRNeDcctfkg9";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/avologieneo-woodgrove-nonsurgical-face-neck-lift-promo";
                                   upDatedSpaPhone = "(250) 384-2980";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 20 Minutes Cleansing and Facial Massage";
                                   upDatedDurationTwo = "- 40 Minutes LED Treatment and Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (587) 589-4007";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "ICE 21":
                                    upDatedSpaName = "ICE 21 Spa";
                                   upDatedSpaAddress = "563 Lakeshore Rd E Mississauga ON L5G 0A8"+"<br>"+"(Unit 4 Next to Denture Clinic)";
                                   upDatedSpaLINK = "https://forms.gle/L5JT9kcHLZXWke417";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/ice-21-spa-led-promo";
                                   upDatedSpaPhone = "(647) 255-6989";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 20 minutes Cleansing and Collagen Mask";
                                   upDatedDurationTwo = "- 40 minutes LED Anti-aging treatment & Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at 1-888-4242321";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Introstem Redding":
                                    upDatedSpaName = "Introstem Spa";
                                   upDatedSpaAddress = "900 Dana Dr Redding, CA 96003"+"<br>"+"(Mt. Shasta Mall, next to Auntie Anne's)";
                                   upDatedSpaLINK = "https://forms.gle/Eqg9xCBYDHTLCcz16";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-redding-led-promo";
                                   upDatedSpaPhone = "(279) 972-0008";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 5 minutes Cleansing";
                                   upDatedDurationTwo = "- 55 minutes LED Anti-aging treatment & Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (530) 768-1056";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Introstem Medford":
                                    upDatedSpaName = "Introstem Spa";
                                   upDatedSpaAddress = "1600 N Riverside Ave , Medford, OR , 97501"+"<br>"+"(Rogue Valley Mall, 1st floor, in front of American Eagle)";
                                   upDatedSpaLINK = "https://forms.gle/iNEoopF9HxSicZFE9";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/introstem-medford-led-promo";
                                   upDatedSpaPhone = "(541) 549-1196";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 30 minutes Cleansing";
                                   upDatedDurationTwo = "- 30 minutes LED Anti-aging treatment & Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (541) 816-4404";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "INGLOT Charlotte":
                                    upDatedSpaName = "INGLOT Spa";
                                   upDatedSpaAddress = "SouthPark Mall," + "<br>" + "4400 Sharon rd. Charlotte, NC 28211"+"<br>"+"(Cheesecake Factory entrance, Between Pandora & Rolex)";
                                   upDatedSpaLINK = "https://forms.gle/XKED2xx9G3cF8SP87";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/inglot-charlotte-spa-led-promo";
                                   upDatedSpaPhone = "(980) 306-4655";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 20 minutes Cleansing";
                                   upDatedDurationTwo = "- 40 minutes LED Anti-aging treatment & Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (443) 449-4761";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Pearl De Flore Augusta":
                                    upDatedSpaName = "Pearl De Flore Spa";
                                   upDatedSpaAddress = "Augusta Mall," + "<br>" + "3450 Wrightsboro Rd, Augusta, GA 30909"+"<br>"+"(2nd floor next to the Edge store in front of the elevator)";
                                   upDatedSpaLINK = "https://forms.gle/ea7Mes4ARmJjo9fy7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/pearldeflore-augusta-led-promo";
                                   upDatedSpaPhone = "(706) 434-8750";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 15 minutes Cleansing";
                                   upDatedDurationTwo = "- 30 minutes LED Anti-aging treatment" + "<br>" + "- 15 minutes of Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (706) 901-8979";
                                   treatmentSelected = "LED Treatment";
                                   break; 

                                   case "Luminous Skin-Tech":
                                    upDatedSpaName = "Luminous Skin-Tech Spa";
                                   upDatedSpaAddress = "La Palmera Mall," + "<br>" + "5488 S Padre island, Corpus Christi, TX 78411"+"<br>"+"(Second floor, next to H&M)";
                                   upDatedSpaLINK = "https://forms.gle/Yaa4AmATGwwPAAVW7";
                                   upDatedSpaWebLINK = "https://www.noneedleneeded.com/pages/luminous-ledpromo";
                                   upDatedSpaPhone = "(361) 356-1025";
                                   upDatedDurationTotal = "60 Minutes";
                                   upDatedDurationOne = "- 15 minutes Cleansing";
                                   upDatedDurationTwo = "- 30 minutes LED Non-Surgical Face & Neck Lift" + "<br>" + "- 15 minutes of Consultation";
                                   promoPrice = "79.95"
                                   upDatedActualSpaPhone = "Can't find our spa? Give us a call at (361) 462-4319";
                                   treatmentSelected = "LED Treatment";
                                   break; 


         default:
             break;
     }


     if (spaNameStatus.value.includes("Elevatione")) {
        let hideOne = document.getElementById("hideOne");
        let hideTwo = document.getElementById("hideTwo");
        let hideThree = document.getElementById("hideThree");
        let hideFour = document.getElementById("hideFour");
        // let hideFive = document.getElementById("hideFive");


        hideOne.classList.add("hide");
        hideTwo.classList.add("hide");
        hideThree.classList.add("hide");
        hideFour.classList.add("hide");
        // hideFive.classList.add("hide");


     } else {
        hideOne.classList.remove("hide");
        hideTwo.classList.remove("hide");
        hideThree.classList.remove("hide");
        hideFour.classList.remove("hide");
        // hideFive.classList.remove("hide");


     }

     // Variables in text
     let custNameArray = document.getElementsByClassName("varCustName");
     let repNameArray = document.getElementsByClassName("varRepName");
     let promoPriceArray = document.getElementsByClassName("varPromoPrice");
     let aptDateDayArray = document.getElementsByClassName("varAptDateDay");
     let aptDateMonthArray = document.getElementsByClassName("varAptDateMonth");
     let aptTimeArray = document.getElementsByClassName("varAptTime");
     let aptTimeAmPmArray = document.getElementsByClassName("varAptTimeAmPm");
     let aptTimeMinutesArray = document.getElementsByClassName("varMinutesOfTime");
     let treatmentSelectedArray = document.getElementsByClassName("varTreatmentSelected");

     // USER DATA ENTRY
     let customerName = document.getElementById("custName").value;
     let repName = document.getElementById("empName").value;
    //  let promoPrice = document.getElementById("promoPrice").value;
     let aptDateDay = document.getElementById("aptDateDay").value;
     let aptDateMonth = document.getElementById("aptDateMonth").value;
     let aptMinutesTime = document.getElementById("minutesOfTime").value;
     let aptTime = document.getElementById("aptTime").value;
     let aptTimeAmPm = document.getElementById("aptTimeAmPm").value;
    //  let treatmentSelected = document.getElementById("chooseTreatment").value;

     // CUSTOMER NAME LOOP
     for(var i = 0; i < custNameArray.length; i++){
     custNameArray[0].innerHTML = customerName;
     custNameArray[i].innerHTML = customerName;
  }
    // REP NAME LOOP
    for(var i = 0; i < repNameArray.length; i++){
     repNameArray[0].innerHTML = repName;
     repNameArray[i].innerHTML = repName;
  }
     // PROMO PRICE LOOP
     for(var i = 0; i < promoPriceArray.length; i++){
     promoPriceArray[0].innerHTML = promoPrice;
     promoPriceArray[i].innerHTML = promoPrice;
  }
      // APT DATE Day LOOP
      for(var i = 0; i < aptDateDayArray.length; i++){
         aptDateDayArray[0].innerHTML = aptDateDay;
         aptDateDayArray[i].innerHTML = aptDateDay;
  }
   // APT DATE Month LOOP
    for(var i = 0; i < aptDateMonthArray.length; i++){
    aptDateMonthArray[0].innerHTML = aptDateMonth;
    aptDateMonthArray[i].innerHTML = aptDateMonth;
}
      // APT TIME LOOP
      for(var i = 0; i < aptTimeArray.length; i++){
         aptTimeArray[0].innerHTML = aptTime;
         aptTimeArray[i].innerHTML = aptTime;
  }

  // APT TIME AMPM LOOP
  for(var i = 0; i < aptTimeAmPmArray.length; i++){
    aptTimeAmPmArray[0].innerHTML = aptTimeAmPm;
    aptTimeAmPmArray[i].innerHTML = aptTimeAmPm;
}

      // APT TIME Minutes LOOP
      for(var i = 0; i < aptTimeMinutesArray.length; i++){
        aptTimeMinutesArray[0].innerHTML = aptMinutesTime;
        aptTimeMinutesArray[i].innerHTML = aptMinutesTime;
 }



  // Selected Treatment LOOP
  for(var i = 0; i < treatmentSelectedArray.length; i++){
    treatmentSelectedArray[0].innerHTML = treatmentSelected;
    treatmentSelectedArray[i].innerHTML = treatmentSelected;
}

let newLink = document.getElementById("newSpaLink");
newLink.setAttribute('href', upDatedSpaWebLINK);


}

//  COPY BOTTON
function copyEvent(id)
{
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
}
