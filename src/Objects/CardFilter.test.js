import CardFilter from "./CardFilter";
import { isObject } from "util";
const tripCards = [{ title: "trip1" }, { title: "trip2" }, { title: "trip3" }];
const placeCards = [
  { title: "place1" },
  { title: "place2" },
  { title: "place3" }
];
const hotelCharacter1 = {
  beachArea: true,
  cityCentre: true,
  coastal: true,
  modern: true
};
const hotelCharacter2 = {
  beachArea: true,
  cityCentre: true,
  coastal: false,
  modern: false
};
const hotelCharacter3 = {
  beachArea: true,
  cityCentre: false,
  coastal: false,
  modern: false
};

const hotelCards = [
  {
    title: "hotel1",
    subtitle: "place1",
    accommodationCharacteristics: hotelCharacter1
  },
  {
    title: "hotel2",
    subtitle: "place2",
    accommodationCharacteristics: hotelCharacter2
  },
  {
    title: "hotel3",
    subtitle: "place1",
    accommodationCharacteristics: hotelCharacter3
  }
];
const nextHops = [{ title: "place1" }, { title: "place2" }];
const onePlace = [{ title: "place1" }];
const state = {
  tripCards: tripCards,
  placeCards: placeCards,
  hotelCards: hotelCards
};

const hotelFilters1 = [
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "beachArea",
    value: true
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "cityCentre",
    value: true
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "coastal",
    value: true
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "modern",
    value: true
  }
];
const hotelFilters2 = [
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "beachArea",
    value: true
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "cityCentre",
    value: true
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "coastal",
    value: false
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "modern",
    value: false
  }
];
const hotelFilters3 = [
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "beachArea",
    value: true
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "cityCentre",
    value: false
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "coastal",
    value: false
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "modern",
    value: false
  }
];

const hotelFiltersTrue1 = [
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "beachArea",
    value: true
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "cityCentre",
    value: true
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "coastal",
    value: true
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "modern",
    value: true
  }
];
const hotelFiltersTrue2 = [
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "beachArea",
    value: true
  },
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "cityCentre",
    value: true
  }
];
const hotelFiltersTrue3 = [
  {
    firstFieldName: "accommodationCharacteristics",
    secondFieldName: "beachArea",
    value: true
  }
];

describe("CardFilter create object tests", () => {
  it("Should return a trip CardFilter ", () => {
    var cardFitler = new CardFilter("trip", state);
    expect(cardFitler.cards[0].title).toEqual("trip1");
  });
  it("Should return a place CardFilter ", () => {
    var cardFitler = new CardFilter("place", state);
    expect(cardFitler.cards[0].title).toEqual("place1");
  });
  it("Should return a hotel CardFilter ", () => {
    var cardFitler = new CardFilter("hotel", state);
    expect(cardFitler.cards[0].title).toEqual("hotel1");
  });
});

describe("CardFilter order by tests", () => {
  it("Should return last trip first ", () => {
    var cardFitler = new CardFilter("trip", state);
    cardFitler.filterByTitle("desc", "");
    expect(cardFitler.cards[0].title).toEqual("trip3");
  });
  it("Should return last place first ", () => {
    var cardFitler = new CardFilter("place", state);
    cardFitler.filterByTitle("desc", "");
    expect(cardFitler.cards[0].title).toEqual("place3");
  });
  it("Should return last hotel first ", () => {
    var cardFitler = new CardFilter("hotel", state);
    cardFitler.filterByTitle("desc", "");
    expect(cardFitler.cards[0].title).toEqual("hotel3");
  });
});

describe("CardFilter filter by title tests", () => {
  it("Should return filtered trip cards ", () => {
    var cardFitler = new CardFilter("trip", state);
    cardFitler.filterByTitle("desc", "trip2");
    expect(cardFitler.cards[0].title).toEqual("trip2");
  });
  it("Should return filtered place cards ", () => {
    var cardFitler = new CardFilter("place", state);
    cardFitler.filterByTitle("desc", "place2");
    expect(cardFitler.cards[0].title).toEqual("place2");
  });
  it("Should return filtered hotel cards ", () => {
    var cardFitler = new CardFilter("hotel", state);
    cardFitler.filterByTitle("desc", "hotel2");
    expect(cardFitler.cards[0].title).toEqual("hotel2");
  });
});

describe("CardFilter get places filtered by nexthop", () => {
  it("Should return filtered place cards ", () => {
    var cardFitler = new CardFilter("place", state);
    cardFitler.filterByList(nextHops, "title");
    expect(cardFitler.cards[0].title).toEqual("place1");
    expect(cardFitler.cards[1].title).toEqual("place2");
  });
});

describe("CardFilter get hotels filtered by place", () => {
  //test
  it("Should return filtered hotel cards ", () => {
    var cardFitler = new CardFilter("hotel", state);
    cardFitler.filterByListDiffFields(onePlace, "subtitle", "title");
    expect(cardFitler.cards[0].title).toEqual("hotel1");
    expect(cardFitler.cards[1].title).toEqual("hotel3");
  });
});

describe("CardFilter get hotels exact matched  by hotelFilters boolean array", () => {
  //test
  it("Should return filtered hotel cards from hotelFilter1 array ", () => {
    var cardFitler = new CardFilter("hotel", state);
    cardFitler.filterByListBoolArrayExact(hotelFilters1);
    expect(cardFitler.cards[0].title).toEqual("hotel1");
  });
  it("Should return filtered hotel cards from hotelFilter2 array ", () => {
    var cardFitler = new CardFilter("hotel", state);
    cardFitler.filterByListBoolArrayExact(hotelFilters2);
    expect(cardFitler.cards[0].title).toEqual("hotel2");
  });
  it("Should return filtered hotel cards from hotelFilter3 array ", () => {
    var cardFitler = new CardFilter("hotel", state);
    cardFitler.filterByListBoolArrayExact(hotelFilters3);
    expect(cardFitler.cards[0].title).toEqual("hotel3");
  });
});
  describe("CardFilter get hotels only true matched by hotelFilters boolean array", () => {
    //test
    it("Should return filtered hotel cards from hotelFilter1 array ", () => {
      var cardFitler = new CardFilter("hotel", state);
      cardFitler.filterByListBoolArray(hotelFiltersTrue1);
      expect(cardFitler.cards[0].title).toEqual("hotel1");
    });
    it("Should return filtered hotel cards from hotelFilter2 array ", () => {
      var cardFitler = new CardFilter("hotel", state);
      cardFitler.filterByListBoolArray(hotelFiltersTrue2);
      expect(cardFitler.cards[0].title).toEqual("hotel1");
      expect(cardFitler.cards[1].title).toEqual("hotel2");
    });
    it("Should return filtered hotel cards from hotelFilter3 array ", () => {
      var cardFitler = new CardFilter("hotel", state);
      cardFitler.filterByListBoolArray(hotelFiltersTrue3);
      expect(cardFitler.cards[0].title).toEqual("hotel1");
      expect(cardFitler.cards[1].title).toEqual("hotel2");
      expect(cardFitler.cards[2].title).toEqual("hotel3");
    });
});
