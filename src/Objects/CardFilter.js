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

    this.filterTitleByList = function (titleList) {

        var filteredCards = [];


        this.cards.forEach((cardItem) => {
            titleList.forEach(
                (item) => {
                    if (cardItem.title.toLowerCase() == item.title.toLowerCase()) {
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
