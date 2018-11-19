import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

const Message_Attchments = [
    { value: 'PLACENAME', label: 'PLACENAME' },
    { value: 'HOTEL', label: 'HOTEL' },
    { value: 'TRIP', label: 'TRIP' }
  ]
  
export class Control_Message extends Component {

    render() {
        return (



<div>


<div className="Control_Message_Panel">

<div className="Control_Message_Panel_left">

<span className="Control_Message_Panel_Left_UserName">OS</span>
<span className="Control_Message_Panel_Left_Time">19:37</span>
<span className="Control_Message_Panel_Left_Date">2019.11.01</span>
<div className="Show">
<a><i className="fas fa-caret-down Control_Message_Panel_Left_Icon"></i></a>
</div>
<div className="Hide">
<a><i className="fas fa-caret-up Control_Message_Panel_Left_Icon"></i></a>
</div></div>

<div className="Control_Message_Panel_Right">
<span className="Control_Message_Panel_Right_Message">Lorem ipsum dolor sit amet, ut eos animal nostrum eloquentiam. Modo salutandi pro eu. Ne usu quas expetenda, vide debitis pericula cum ea, eam ad tollit adversarium. Per ignota commodo te. Pericula scriptorem vis te. Ut amet solum erant vis, cu his laoreet scriptorem.</span>
<div className="Show" >
    <Select
    options={Message_Attchments}
    placeholder="ATTACHED ITEMS"

    isSearchable={false}
    isDisabled={false}
    isLoading={false}
    isClearable={true}
    closeMenuOnSelect={false}
    components={makeAnimated()}
    noOptionsMessage={() => ""}
    isMulti
    defaultValue={[Message_Attchments[0], Message_Attchments[1], Message_Attchments[2]]}
    theme={(theme) => ({
      ...theme,
        borderRadius: 3,
        
      colors: {
      ...theme.colors,
        text: '#666',
        primary25: '#F5F5F5',
        primary: '#0071bc',
      },
    })}
    />
    
    </div>

</div>

</div>





</div>



        );
    }
}