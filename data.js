const response = {
  type: "devices",
  devices: {
    children: true,
    list: [
      {
        key: "cameras",
        value: "Cameras",
        asset:
          "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltff769e2ada93c2db/5fa9e4b44e40cf53001f5252/di-evergreen-category-icon-cameras-drones.jpg?width=250&quality=80",
      },
    ],
    cameras: {
      children: true,
      list: [
        {
          key: "mirrorlessCameras",
          value: "Mirrorless Cameras",
          asset:
            "https://multimedia.bbycastatic.ca/multimedia/products/250x250/123/12383/12383793.jpg",
        },
      ],

      mirrorlessCameras: {
        children: true,
        list: [
          {
            key: "sonyAlphaA7RIV",
            value: "Sony Alpha a7R IV",
            asset:
              "https://multimedia.bbycastatic.ca/multimedia/products/250x250/123/12383/12383793.jpg",
          },
        ],
        sonyAlphaA7RIV: {
          children: false,
          key: "sonyAlphaA7RIV",
          value: "Sony Alpha a7R IV",
          asset:
            "https://multimedia.bbycastatic.ca/multimedia/products/250x250/138/13801/13801697.jpg",
          isAvailableToShip: true,
          isAvailableAtNearByStores: true,
          details: {
            overview:
              "Unleash your creative vision with the Sony Full-frame Alpha 7R IV (ILCE7RM4/B) mirrorless camera. Boasting a new range of full-frame mirrorless performance, this camera delivers extraordinary resolution and image quality, with nuanced gradations that capture as much detail as possible, bringing your subjects to life.",
          },
        },
        casalessCameras: {
          children: true,
          list: [
            {
              key: "sonyAlphaA7RIV",
              value: "Sony Alpha a7R IV",
              asset:
                "https://multimedia.bbycastatic.ca/multimedia/products/250x250/123/12383/12383793.jpg",
            },
          ],
          sonyAlphaA7RIV: {
            children: false,
            key: "sonyAlphaA7RIV",
            value: "Sony Alpha a7R IV",
            asset:
              "https://multimedia.bbycastatic.ca/multimedia/products/250x250/138/13801/13801697.jpg",
            isAvailableToShip: true,
            isAvailableAtNearByStores: true,
            details: {
              overview:
                "Unleash your creative vision with the Sony Full-frame Alpha 7R IV (ILCE7RM4/B) mirrorless camera. Boasting a new range of full-frame mirrorless performance, this camera delivers extraordinary resolution and image quality, with nuanced gradations that capture as much detail as possible, bringing your subjects to life.",
            },
          },
        },
      },
    },
  },
};

module.exports.response = response;
