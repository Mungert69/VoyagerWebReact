import _ from 'lodash';

function CardFilter(cardType, state) {

    if (cardType === 'trip') {
        this.cards = state.tripCards;
    }
    if (cardType === 'hotel') {
        this.cards = state.hotelCards;
    }
    if (cardType === 'place') {
        this.cards = state.placeCards;
    }

    this.filterByTitle = function (orderBy, queryTxt) {
        var orderDir = orderBy ? 'desc' : 'asc';

        var filteredCards = [];
        this.cards = _.orderBy(this.cards, ['title'], [orderDir]);


        this.cards.forEach((item) => {
            if (item.title.toLowerCase().indexOf(queryTxt.toLowerCase()) !== -1) {
                filteredCards.push(item);
            }
        }//function
        );//forEach

        this.cards = filteredCards;

    }

    this.filterByList = function (list,fieldName) {

        var filteredCards = [];

        this.cards.forEach((cardItem) => {
            list.forEach(
                (item) => {
                    if (cardItem[fieldName].toLowerCase() == item[fieldName].toLowerCase()) {
                        filteredCards.push(cardItem);
                    }
                }
            );

        }//function
        );//forEach

        this.cards = filteredCards;
    };


    this.filterByListDiffFields = function (list,fieldNameCard,fieldNameFilter) {

        var filteredCards = [];

        this.cards.forEach((cardItem) => {
            list.forEach(
                (item) => {
                    if (cardItem[fieldNameCard].toLowerCase() == item[fieldNameFilter].toLowerCase()) {
                        filteredCards.push(cardItem);
                    }
                }
            );

        }//function
        );//forEach

        this.cards = filteredCards;
    };
};



export default CardFilter;
