import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export class Control_All extends Component {

    render() {
        return (



            <div>




                <div key="" className="flex-container">

                    <div  key="Control_Menu" className="Show" title="" >
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-bars Voyager_Control_Icon_Size_2"></i>
                        </a>
                    </div>
                    <div key="Control_Profile" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-user Voyager_Control_Icon_Size_2"></i>
                        </a>
                    </div>

                    <div key="Control_Filter" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-filter Voyager_Control_Icon_Size_2"></i>
                        </a>
                    </div>
                    <div key="Control_Sort" className="Show" title=""  >
                        <a className="Voyager_Control_Item_A">
                            <i className="fas fa-sort Voyager_Control_Icon_Size_2"></i>
                        </a>
                    </div>
                    <div key="Control_Search" className="Show" title=""  >
                        <span><input className="Voyager_Control_Search_Text" type="text" ></input>
                            <a className="Voyager_Control_Search_Item">
                                <i className="far fa-search Voyager_Control_Icon_Size_2" ></i>  </a>
                        </span>
                    </div>

                    <div key="Control_Detail_Level" className="Show" title="" >
                        <select key="Voyager_Control_Select_Detail_Level" className="Voyager_Control_Select_Detail_Level">
                            <option value="places" selected="selected">detail low</option>
                            <option value="place">detail medium</option>
                            <option value="hotel">detail high</option>
                        </select>
                    </div>

                </div>




                <div key="" className="flex-container" >

                    <div key="Control_Stage_All" className="Show" title="">
                        <a className="Voyager_Control_Item_A" title="">
                            <i className="fas fa-layer-group Voyager_Control_Icon_Size_1"></i>
                        </a>
                    </div>

                    <div key="Control_Map_StreetView" className="Show" title="">
                        <a className="Voyager_Control_Item_A" title=""">
                            <i className="fas fa-street-view Voyager_Control_Icon_Size_1"></i>
                        </a>
                    </div>

                    <div key="Control_Map" className="Show" title="">
                        <a className="Voyager_Control_Item_A" title=">
                            <i className="fas fa-map Voyager_Control_Icon_Size_1"></i>
                        </a>
                    </div>
                    <div key="Control_Image" className="Show" title="">
                        <a className="Voyager_Control_Item_A" title="">
                            <i className="fas fa-image Voyager_Control_Icon_Size_1"></i>
                        </a>
                    </div>
                    <div key="Control_Expand" className="Show" title="">
                        <a className="Voyager_Control_Item_A" title="">
                            <i className="fas fa-expand-arrows-alt Voyager_Control_Icon_Size_1"></i>
                        </a>
                    </div>


                </div>





                <div key="Control_Trip_Places" className="Show">
                    <span className="Voyager_Control_Text_Size_2" >Havana - Cienfuegos - Santa Clara - Santa Lucia - Cayo Santa Maria - Santiago - Baracoa</span>
                </div>





                <div key="" className="flex-container">

                    <div key="Control_Trip_Stage_Count" className="Show" title="">
                        <a className="Voyager_Control_Item_A">
                            <span className="Voyager_Control_Icon_Layer_Stack_Inline_Label_Text" >9</span>
                            <i className="fas fa-map-marker-plus Voyager_Control_Icon_Layer_Stack_Small"></i>
                            <i className="show far fa-sync-alt Voyager_Control_Icon_Layer_Stack_Large" title="add new place"></i>

                        </a>
                    </div>




                    <div className="Show">
                        <span key="Control_Trip_Price" className="Voyager_Control_Text_Size_3" >£1242</span>
                        <span className="Voyager_Control_Date" >august 2019</span>
                    </div>


                    <div className="" title="">
                        <a key="Control_Trip_Stage_Info" className="Voyager_Control_Item_A" title="">
                            <i className="fas fa-book-open Voyager_Control_Icon_Size_2"></i>
                        </a>
                    </div>

                    <div key="Control_Trip_Stage_Place" className="" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-map-marker Voyager_Control_Icon_Size_2"></i>
                        </a>
                    </div>

                    <div key="Control_Trip_Stage_Hotel" className="" title="">
                        <a className="Voyager_Control_Item_A">
                            <i className="fas fa-home Voyager_Control_Icon_Size_2"></i>
                        </a>
                    </div>


                    <div key="Control_Trip_Night_Count" className="Show" title="">
                        <a className="Voyager_Control_Item_A">
                            <i className="fas fa-moon Voyager_Control_Icon_Layer_Stack_Small"></i>
                            <i className="show far fa-sync-alt Voyager_Control_Icon_Layer_Stack_Large" title="modify duration"></i>
                            <span className="Voyager_Control_Icon_Layer_Stack_Inline_Label_Text" >14</span>
                        </a>
                    </div>






                </div>







                <div key="" className="flex-container">


                    <div className="Show">
                        <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
                            <span className="Voyager_Control_Stage_Number_Text" >1</span>
                        </a>
                    </div>

                    <div className="Show">
                        <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
                            <span className="Voyager_Control_Stage_Number_Text" >2</span>
                        </a>
                    </div>

                    <div className="Show">
                        <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
                            <span className="Voyager_Control_Stage_Number_Text" >3</span>
                        </a>
                    </div>

                    <div className="Show">
                        <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
                            <span className="Voyager_Control_Stage_Number_Text" >4</span>
                        </a>
                    </div>

                    <div className="Show">
                        <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
                            <span className="Voyager_Control_Stage_Number_Text" >5</span>
                        </a>
                    </div>

                    <div className="Show">
                        <a key="Control_Trip_Stage" className="Voyager_Control_Item_A">
                            <span className="Voyager_Control_Stage_Number_Text" >6</span>
                        </a>
                    </div>

                    <div className="Show">
                        <a key="Control_Trip_Stage" className="Voyager_Control_Item_A">
                            <span className="Voyager_Control_Stage_Number_Text" >7</span>
                        </a>
                    </div>

                    <div className="Show">
                        <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
                            <span className="Voyager_Control_Stage_Number_Text" >8</span>

                        </a>
                    </div>

                    <div className="Show">
                        <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
                            <span className="Voyager_Control_Stage_Number_Text" >9</span>
                        </a>
                    </div>




                    <div key="Control_Trip_Stage_Add_Stage" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-map-marker-plus Voyager_Control_Icon_Size_2"></i>
                            
                        </a>
                    </div>


                </div>



                <div key="" className="Show">

                    <span key="" className="Voyager_Control_Text_Size_4" >TRIP NAME TRIP NAME TRIP NAME</span>

                </div>







                <div key="" className="flex-container">


                    <div className="Show" title="">
                        <a key="Control_Country" className="Voyager_Control_Item_A" ">
                            <i className="fas fa-globe-americas Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >cuba</span>
                        </a>
                    </div>

                    <div key="Control_Profile" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-user Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >profile</span>
                        </a>
                    </div>

                    <div key="Control_Trips" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-map-marked Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >trips</span>
                        </a>
                    </div>

                    <div key="Control_Trip" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-map-marked Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >trip</span>
                        </a>
                    </div>

                    <div key="Control_Stages" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-layer-group Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >stages</span>
                        </a>
                    </div>

                    <div key="Control_Places" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-map-marker Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >places</span>
                        </a>
                    </div>

                    <div key="Control_Hotels" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-home Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >hotels</span>
                        </a>
                    </div>

                    <div key="Control_Info" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-book-open Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >info</span>
                        </a>
                    </div>

                    <div key="Control_Share" className="show" title="" >
                        <a className="Voyager_Control_Item_A">
                            <i className="fas fa-share-alt Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >share</span>
                        </a>
                    </div>

                    <div key="Control_Save" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-heart Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >save</span>
                        </a>
                    </div>

                    <div key="Control_Date" className="show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-calendar-alt Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >date</span>
                        </a>
                    </div>

                    <div key="Control_Flight" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-plane Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >flight</span>
                        </a>
                    </div>

                    <div key="Control_Trip_Stage_Add" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-map-marker-plus Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >add</span>
                        </a>
                    </div>

                    <div key="Control_Trip_Stage_Remove" className="show" title="" >
                        <a className="Voyager_Control_Item_A">
                            <i className="fas fa-map-marker-minus Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >remove</span>
                        </a>
                    </div>

                    <div key="Control_Trip_Stage_Hotel" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-home Voyager_Control_Icon_Layer_Stack_Small"></i>
                            <i className="far fa-sync-alt Voyager_Control_Icon_Layer_Stack_Large"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >hotels</span>
                        </a>
                    </div>


                    <div key="Control_Trip_Stage_Night" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <span className="Voyager_Control_Icon_Layer_Stack_Small_Text">8</span>
                            <i className="far fa-sync-alt Voyager_Control_Icon_Layer_Stack_Large"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >nights</span>
                        </a>
                    </div>


                    <div key="Control_Trip_Stage_Transport" className="show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <span>
                                <i className="fas fa-car Voyager_Control_Icon_Layer_Sidebyside"></i>
                                <i className="fas fa-bus Voyager_Control_Icon_Layer_Sidebyside"></i>
                            </span>
                            <span className="Voyager_Control_Text_Size_1_Link" >transport</span>
                        </a>
                    </div>



                </div>






                <div key="" className="flex-container">



                    <div key="Control_Saved_Trip" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-map-marked Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-heart Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >trips</span>
                        </a>
                    </div>




                    <div key="Control_Saved_Place" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-map-marker Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-heart Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >places</span>
                        </a>
                    </div>


                    <div key="Control_Saved_Hotel" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-home Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-heart Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >hotels</span>
                        </a>
                    </div>

                    <div key="Control_Saved_Info" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-book-open Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-heart Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >info</span>
                        </a>
                    </div>


                    <div key="Control_Saved_Profile" className="Show" title="">
                        <a className="Voyager_Control_Item_A"  >
                            <i className="fas fa-users Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-heart Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >profiles</span>
                        </a>
                    </div>







                    <div key="Control_Settings_Trip" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-map-marked Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-cog Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >trips</span>
                        </a>
                    </div>




                    <div key="Control_Settings_Place" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-map-marker Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-cog Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >places</span>
                        </a>
                    </div>


                    <div key="Control_Settings_Hotel" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-home Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-cog Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >hotels</span>
                        </a>
                    </div>

                    <div key="Control_Settings_Info" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-book-open Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-cog Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >info</span>
                        </a>
                    </div>


                    <div key="Control_Settings_Profile" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-users Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-cog Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >profiles</span>
                        </a>
                    </div>

                </div>









                <div key="" className="flex-container">


                    <div key="Control_Profile" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-user Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >profile</span>
                        </a>
                    </div>



                    <div key="Control_Profile_Date" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-user Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-calendar-alt Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >date</span>
                        </a>
                    </div>




                    <div key="Control_Profile_Saved" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fas fa-user Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-heart Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >saved</span>
                        </a>
                    </div>


                    <div key="Control_Profile_Settings" className="Show" title="">
                        <a className="Voyager_Control_Item_A">
                            <i className="fas fa-user Voyager_Control_Icon_Layer_Side_Large"></i>
                            <i className="fas fa-cog Voyager_Control_Icon_Layer_Side_Small"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >settings</span>
                        </a>
                    </div>




                </div>












                <div key="" className="flex-container">


                    <div className="Show" title="">
                        <a key="Control_Social_Facebook" className="Voyager_Control_Item_A" >
                            <i className="fab fa-facebook-f Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >facebook</span>
                        </a>
                    </div>

                    <div key="Control_Social_Twitter" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fab fa-twitter Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >twitter</span>
                        </a>
                    </div>

                    <div key="Control_Social_Google" className="Show" title="">
                        <a className="Voyager_Control_Item_A">
                            <i className="fab fa-google Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >google+</span>
                        </a>
                    </div>

                    <div key="Control_Social_Instagram" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fab fa-instagram Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >instagram</span>
                        </a>
                    </div>

                    <div key="Control_Social_Pinterest" className="Show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <i className="fab fa-pinterest-p Voyager_Control_Icon_Size_2"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >pinterest</span>
                        </a>
                    </div>





                </div>



            </div>




        );
    }
}