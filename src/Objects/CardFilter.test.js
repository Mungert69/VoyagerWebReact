import CardFilter from './CardFilter';
import { isObject } from 'util';
const tripCards = [{title : 'trip1'},{title : 'trip2'},{title : 'trip3'}];
const placeCards= [{title : 'place1'},{title : 'place2'},{title : 'place3'}];
const hotelCards=[{title : 'hotel1', subtitle : 'place1'},{title : 'hotel2', subtitle : 'place2'},{title : 'hotel3',subtitle : 'place1'}];
const nextHops=[{title : 'place1'},{title : 'place2'}];
const onePlace=[{title : 'place1'}];
const state ={tripCards : tripCards, placeCards : placeCards , hotelCards : hotelCards };

describe('CardFilter create object tests', () => {
    it('Should return a trip CardFilter ', () => {
       var cardFitler=new CardFilter('trip',state);
      expect(cardFitler.cards[0].title).toEqual('trip1');
    })
    it('Should return a place CardFilter ', () => {
        var cardFitler=new CardFilter('place',state);
       expect(cardFitler.cards[0].title).toEqual('place1');
     })
     it('Should return a hotel CardFilter ', () => {
        var cardFitler=new CardFilter('hotel',state);
       expect(cardFitler.cards[0].title).toEqual('hotel1');
     })
  })

  describe('CardFilter order by tests', () => {
    it('Should return last trip first ', () => {
       var cardFitler=new CardFilter('trip',state);
       cardFitler.filterByTitle('desc','');
      expect(cardFitler.cards[0].title).toEqual('trip3');
    })
    it('Should return last place first ', () => {
        var cardFitler=new CardFilter('place',state);
        cardFitler.filterByTitle('desc','');
       expect(cardFitler.cards[0].title).toEqual('place3');
     })
     it('Should return last hotel first ', () => {
        var cardFitler=new CardFilter('hotel',state);
        cardFitler.filterByTitle('desc','');
       expect(cardFitler.cards[0].title).toEqual('hotel3');
     })
  })

  describe('CardFilter filter by title tests', () => {
    it('Should return filtered trip cards ', () => {
       var cardFitler=new CardFilter('trip',state);
       cardFitler.filterByTitle('desc','trip2');
      expect(cardFitler.cards[0].title).toEqual('trip2');
    })
    it('Should return filtered place cards ', () => {
        var cardFitler=new CardFilter('place',state);
        cardFitler.filterByTitle('desc','place2');
       expect(cardFitler.cards[0].title).toEqual('place2');
     })
     it('Should return filtered hotel cards ', () => {
        var cardFitler=new CardFilter('hotel',state);
        cardFitler.filterByTitle('desc','hotel2');
       expect(cardFitler.cards[0].title).toEqual('hotel2');
     })
  })

  describe('CardFilter get places filtered by nexthop', () => {
   
    it('Should return filtered place cards ', () => {
        var cardFitler=new CardFilter('place',state);
        cardFitler.filterByList(nextHops,'title');
       expect(cardFitler.cards[0].title).toEqual('place1');
       expect(cardFitler.cards[1].title).toEqual('place2');
     })
    
  })

  describe('CardFilter get hotels filtered by place', () => {
  //test
    it('Should return filtered hotel cards ', () => {
        var cardFitler=new CardFilter('hotel',state);
        cardFitler.filterByListDiffFields(onePlace,'subtitle','title');
       expect(cardFitler.cards[0].title).toEqual('hotel1');
       expect(cardFitler.cards[1].title).toEqual('hotel3');
     })
    
  })

