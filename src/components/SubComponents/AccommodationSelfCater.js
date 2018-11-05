import React, { Component } from 'react';
export class AccommodationSelfCater extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
            <div className="Hotel_Feature_Panel" >
         
         <span className="Hotel_Feature_Title">self catering</span>
            {this.props.card.accommodationSelfCater.shower ? <span className="Hotel_Feature_Item_Title">shower</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.showerNote}</span>
            {this.props.card.accommodationSelfCater.linenSupplied ? <span className="Hotel_Feature_Item_Title">linen Supplied</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.linenSuppliedNote}</span>
            {this.props.card.accommodationSelfCater.bathRoom ? <span className="Hotel_Feature_Item_Title">Bath Room</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.bathRoomNote}</span>
            {this.props.card.accommodationSelfCater.laundry ? <span className="Hotel_Feature_Item_Title">laundry</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.laundryNote}</span>
            {this.props.card.accommodationSelfCater.heating ? <span className="Hotel_Feature_Item_Title">heating</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.heatingNote}</span>
            {this.props.card.accommodationSelfCater.parking ? <span className="Hotel_Feature_Item_Title">parking</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.parkingNote}</span>
            {this.props.card.accommodationSelfCater.shopping ? <span className="Hotel_Feature_Item_Title">shopping</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.shoppingNote}</span>
            {this.props.card.accommodationSelfCater.noSmoking ? <span className="Hotel_Feature_Item_Title">no Smoking</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.noSmokingNote}</span>
            {this.props.card.accommodationSelfCater.entertainment ? <span className="Hotel_Feature_Item_Title">entertainment</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.entertainmentNote}</span>
            {this.props.card.accommodationSelfCater.internet ? <span className="Hotel_Feature_Item_Title">internet</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.internetNote}</span>
            {this.props.card.accommodationSelfCater.telephone ? <span className="Hotel_Feature_Item_Title">telephone</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.telephoneNote}</span>
            {this.props.card.accommodationSelfCater.bbq ? <span className="Hotel_Feature_Item_Title">bbq</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.bbqNote}</span>
            {this.props.card.accommodationSelfCater.kitchen ? <span className="Hotel_Feature_Item_Title">kitchen</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.kitchenNote}</span>
            {this.props.card.accommodationSelfCater.miniBar ? <span className="Hotel_Feature_Item_Title">mini Bar</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.miniBarNote}</span>
            {this.props.card.accommodationSelfCater.playArea ? <span className="Hotel_Feature_Item_Title">play Area</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.playAreaNote}</span>
            {this.props.card.accommodationSelfCater.spaSauna ? <span className="Hotel_Feature_Item_Title">spa Sauna</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationSelfCater.spaSaunaNote}</span>
            

       </div>
        );

    }


    render() {
        let contents = (this.props.card.accommodationSelfCater === undefined || this.props.card.accommodationSelfCater === null )
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}