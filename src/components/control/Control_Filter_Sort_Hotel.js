import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Slider, { Range } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import makeAnimated from 'react-select/lib/animated';
import PerfectScrollbar from 'react-perfect-scrollbar';
const marks = {
  20: {
    label: <i className="fas fa-star Control_Icon_Size_1"></i>,
  },
  40: {
    label: <i className="fas fa-star Control_Icon_Size_1"><i className="fas fa-star Control_Icon_Size_1"></i></i>,
  },
  60: {
    label: <i className="fas fa-star Control_Icon_Size_1"><i className="fas fa-star Control_Icon_Size_1"></i><i className="fas fa-star Control_Icon_Size_1"></i></i>,
  },
  80: {
    label: <i className="fas fa-star Control_Icon_Size_1"><i className="fas fa-star Control_Icon_Size_1"></i><i className="fas fa-star Control_Icon_Size_1"></i><i className="fas fa-star Control_Icon_Size_1"></i></i>,
  },
  100: {
    label: <i className="fas fa-star Control_Icon_Size_1"><i className="fas fa-star Control_Icon_Size_1"></i><i className="fas fa-star Control_Icon_Size_1"></i><i className="fas fa-star Control_Icon_Size_1"></i><i className="fas fa-star Control_Icon_Size_1"></i></i>,
  },
};

function log(value) {
  console.log(value); //eslint-disable-line
}
const Hotel_Sort = [
                { value: 'Hotel Name', label: 'Hotel Name' },
                { value: 'Hotel Rating', label: 'Hotel Rating' },
                { value: 'Hotel Location ', label: 'Hotel Location' }
              ]   

const Hotel_Filter_Type = [
  { value: 'Modern', label: 'Modern' },
  { value: 'Heratage', label: 'Heratage' },
  { value: 'All Inclusive ', label: 'All Inclusive' }
]


 const Hotel_Filter_Features = [
                { value: 'Bar', label: 'Bar' },
                { value: 'Pool', label: 'Pool' },
                { value: 'Gym', label: 'Gym' }
              ]

                          
              const groupStyles = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              };
              const groupBadgeStyles = {
                backgroundColor: '#F5F5F5',
                borderRadius: '2em',
                color: '#0071bc',
                display: 'inline-block',
                fontSize: 12,
                fontWeight: 'normal',
                lineHeight: '1',
                minWidth: 1,
                padding: '0.16666666666667em 0.5em',
                textAlign: 'center',
              };
              
              const formatGroupLabel = data => (
                <div style={groupStyles}>
                  <span>{data.label}</span>
                  <span style={groupBadgeStyles}>{data.options.length}</span>
                </div>
              );

           
export class Control_Filter_Sort_Hotel extends Component {

    render() {
        return (

<div>
    <div className="Control_Sort_Panel" > 

  <div className="Control_Sort_Item">
  
  <span className="Control_Sort_Item_Label">SORT HOTEL VIEW</span>
    <Select
    options={Hotel_Sort}
    placeholder="SORT VIEW"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    noOptionsMessage={() => "ALL FILTERS IN USE"}
    formatGroupLabel={formatGroupLabel}
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

                     
                            <span className="Control_Sort_Item_UpDown" >
                            <span className="Control_Sort_Item_Label">ascending or descending</span>
                                   <a ><i className="fas fa-caret-up Control_Icon_Layer_Sidebyside"></i>   </a>
                                   <a ><i className="fas fa-caret-down Control_Icon_Layer_Sidebyside"></i>   </a>
                            </span>
                          
                     
              
    </div>

</div>



 <div className="Control_Filter_Panel" > 

  <div className="Control_Filter_Item">
<span className="Control_Filter_Item_Label_Centre">3 - 4 HOTEL RATING</span>
<div className="Control_Filter_Item_Slider">
      <Slider.Range min={20} marks={marks} step={20} onChange={log} defaultValue={[40, 80]} allowCross={false} pushable={true}  railStyle={{ backgroundColor: '#d1d1d1' }} trackStyle={[{ backgroundColor: '#0071bc' }]} />
 
  </div> </div>

  <div className="Control_Filter_Item">
  <span className="Control_Filter_Item_Label">FILTER by HOTEL FEATURES</span>
    <Select
    options={Hotel_Filter_Type}
    placeholder="HOTEL FEATURES"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={true}
    closeMenuOnSelect={false}
    components={makeAnimated()}
    noOptionsMessage={() => "ALL FILTERS IN USE"}
    formatGroupLabel={formatGroupLabel}
    isMulti
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


  <div className="Control_Filter_Item">
  <span className="Control_Filter_Item_Label">FILTER by HOTEL TYPE</span>
    <Select
    options={Hotel_Filter_Features}
    placeholder="HOTEL TYPE"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={true}
    closeMenuOnSelect={false}
    components={makeAnimated()}
    noOptionsMessage={() => "ALL FILTERS IN USE"}
    formatGroupLabel={formatGroupLabel}
    isMulti
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

        );
    }
}