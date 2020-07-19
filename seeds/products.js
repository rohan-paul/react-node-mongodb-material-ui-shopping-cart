const mongoose = require('mongoose');
const Product = require('../models/Product');

const products = [
  {
    info: {
      name: 'Apple MacBook Pro 2020',
      dimensions: '158.4 x 78.1 x 7.5 mm',
      weight: '1202 g',
      displayType: 'LED-backlit IPS LCD, capacitive touchscreen, 16M colors',
      displaySize: '13.5"',
      displayResolution: '1080 x 1920 pixels',
      os: 'ios',
      cpu: 'Hexa-core (2x Monsoon + 4x Mistral)',
      internalMemory: '256 GB',
      ram: '8 GB',
      camera: 'Dual: 12 MP (f/1.8, 28mm, OIS) + 12 MP (f/2.8, 57mm)',
      batery: 'Non-removable Li-Ion 2691 mAh battery (10.28 Wh)',
      color: 'White',
      price: 1345,
      photo: '/img/macbook-pro-1.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'apple',
      color: 'white',
      os: 'ios',
      internalMemory: '256',
      ram: '3',
      displaySize: '5.5',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'hexa_core'
    }
  },
  {
    info: {
      name: 'Apple MacBook Pro 2019',
      dimensions: '1143.6 x 700.9 x 5.7 mm',
      weight: '1874 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1125 x 2436 pixels',
      os: 'ios',
      cpu: 'Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',
      internalMemory: '256 GB',
      ram: '8 GB',
      camera: 'Dual: 12 MP (f/1.8, 28mm) + 12 MP (f/2.4, 52mm)',
      batery: 'Non-removable Li-Ion 2716 mAh battery (10.35 Wh)',
      color: 'Black',
      price: 1950,
      photo: '/img/apple_macbook-2.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'apple',
      color: 'black',
      os: 'ios',
      internalMemory: '256',
      ram: '3',
      displaySize: '5.8',
      displayResolution: '1125x2436',
      camera: '12',
      cpu: 'hexa_core'
    }
  },
  {
    info: {
      name: 'Macbook Pro 17inch',
      dimensions: '153.9 x 75.9 x 7.9 mm',
      weight: '169 g',
      displayType: 'Super LCD5 capacitive touchscreen, 16M colors',
      displaySize: '5.5"',
      displayResolution: '1440 x 2560 pixels',
      os: 'Android 7.1 (Nougat)',
      cpu: 'Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)',
      internalMemory: '128 GB',
      ram: '6 GB',
      camera: '12 MP (f/1.7, 1.4 µm, Dual Pixel PDAF, 5-axis OIS)',
      batery: 'Non-removable Li-Ion 3000 mAh battery',
      color: 'Ice White',
      price: 450,
      photo: '/img/macbook-pro-3.jpg'
    },
    tags: {
      priceRange: '250-500',
      brand: 'htc',
      color: 'white',
      os: 'ios',
      internalMemory: '128',
      ram: '6',
      displaySize: '5.5',
      displayResolution: '1440x2560',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'MacBook Pro 15.5inch',
      dimensions: '154.2 x 74.5 x 7.9 mm',
      weight: '178 g',
      displayType: 'AMOLED capacitive touchscreen, 16M colors',
      displaySize: '6.0"',
      displayResolution: '1080 x 1920 pixels',
      os: 'Android 8.0 (Oreo)',
      cpu: 'Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)',
      internalMemory: '128 GB',
      ram: '6 GB',
      camera: 'Dual: 12 MP (f/1.6, 27mm, OIS) +20 MP (f/1.6, 27mm)',
      batery: 'Non-removable Li-Po 4000 mAh battery',
      color: 'Titanium Gray',
      price: 800,
      photo: '/img/macbook-pro-4.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'huawei',
      color: 'grey',
      os: 'ios',
      internalMemory: '128',
      ram: '6',
      displaySize: '6.0',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Dell 16GB',
      dimensions: '145.3 x 69.3 x 7 mm',
      weight: '145 g',
      displayType: 'IPS-NEO LCD capacitive touchscreen, 16M colors',
      displaySize: '5.1"',
      displayResolution: '1080 x 1920 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: 'Dual: 12 MP (f/2.2, PDAF, OIS) + 20 MP',
      batery: 'Non-removable Li-Ion 3200 mAh battery',
      color: 'Mystic Silver',
      price: 680,
      photo: '/img/dell-1.png'
    },
    tags: {
      priceRange: '500-750',
      brand: 'huawei',
      color: 'grey',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '5.1',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Dell i5',
      dimensions: '148.9 x 71.9 x 7.9 mm',
      weight: '163 g',
      displayType: 'IPS LCD capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1440 x 2880 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Quad-core (2x2.35 GHz Kryo & 2x1.6 GHz Kryo)',
      internalMemory: '128 GB',
      ram: '4 GB',
      camera: 'Dual: 13 MP (f/1.8, 1/3", 1.12 µm, 3-axis OIS, PDAF) + 13 MP (f/2.4, no AF)',
      batery: 'Non-removable Li-Po 3300 mAh battery',
      color: 'Ice Platinum',
      price: 800,
      photo: '/img/dell-2.png'
    },
    tags: {
      priceRange: '750>',
      brand: 'lg',
      color: 'grey',
      os: 'android',
      internalMemory: '128',
      ram: '4',
      displaySize: '5.8',
      displayResolution: '1440x2880',
      camera: '13',
      cpu: 'quad_core'
    }
  },
  {
    info: {
      name: 'Dell i7 16GB',
      dimensions: '151.7 x 75.4 x 7.3 mm',
      weight: '158 g',
      displayType: 'P-OLED capacitive touchscreen, 16M colors',
      displaySize: '6.0"',
      displayResolution: '1440 x 2880 pixels',
      os: 'Android 7.1.2 (Nougat)',
      cpu: 'Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: 'Dual: 16 MP (f/1.6, 1 µm, 3-axis OIS, PDAF) + 13 MP (f/1.9, no AF)',
      batery: 'Non-removable Li-Po 3300 mAh battery',
      color: 'Aurora Black',
      price: 800,
      photo: '/img/dell-3.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'lg',
      color: 'black',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '6.0',
      displayResolution: '1440x2880',
      camera: '16',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Dell 17inch',
      dimensions: '130.1 x 65.5 x 6.9 mm',
      weight: '110.3 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '4.5"',
      displayResolution: '540 x 960 pixels',
      os: 'Android 4.4.4 (KitKat)',
      cpu: 'Quad-core 1.2 GHz Cortex-A53',
      internalMemory: '16 GB',
      ram: '1 GB',
      camera: '8 MP (f/2.4, 31mm), autofocus, LED flash',
      batery: 'Non-removable Li-Ion 1900 mAh battery',
      color: 'Silver',
      price: 150,
      photo: '/img/dell-4.png'
    },
    tags: {
      priceRange: '<250',
      brand: 'samsung',
      color: 'grey',
      os: 'android',
      internalMemory: '16',
      ram: '1',
      displaySize: '4.5',
      displayResolution: '540x960',
      camera: '8',
      cpu: 'quad_core'
    }
  },
  {
    info: {
      name: 'Dell Touchscreen',
      dimensions: '162.5 x 74.8 x 8.6 mm',
      weight: '195.3 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '6.3"',
      displayResolution: '1440 x 2960 pixels',
      os: 'Android 7.1.1 (Nougat)',
      cpu: 'Octa-core (4x2.3 GHz & 4x1.7 GHz) - EMEA',
      internalMemory: '256 GB',
      ram: '6 GB',
      camera: 'Dual: 12 MP (f/1.7, 26mm, 1/2.5", 1.4 µm) + 12MP (f/2.4, 52mm, 1/3.6", 1 µm)',
      batery: 'Non-removable Li-Ion 3300 mAh battery',
      color: 'Midnight Black',
      price: 800,
      photo: '/img/dell-5.png'
    },
    tags: {
      priceRange: '750>',
      brand: 'samsung',
      color: 'black',
      os: 'android',
      internalMemory: '256',
      ram: '6',
      displaySize: '6.3',
      displayResolution: '1440x2960',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Dell Inspiron ',
      dimensions: '148.9 x 68.1 x 8 mm',
      weight: '155 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1440 x 2960 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Octa-core (4x2.3 GHz & 4x1.7 GHz) - EMEA',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: '12 MP (f/1.7, 26mm, 1/2.5", 1.4 µm, Dual Pixel PDAF), phase detection autofocus, OIS',
      batery: 'Non-removable Li-Ion 3000 mAh battery',
      color: 'Midnight Black',
      price: 720,
      photo: '/img/Dell-6.png'
    },
    tags: {
      priceRange: '500-750',
      brand: 'samsung',
      color: 'black',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '5.8',
      displayResolution: '1440x2960',
      camera: '12',
      cpu: 'octa_core'
    }
  }
];

const seedProducts = () => {
  Product.remove({}, (err) => {
    if(err) {
      console.log(err);
    }
    console.log('PRODUCTS REMOVED');
    products.forEach((product) => {
      Product.create(product, (err, createdProduct) => {
        if(err) {
          console.log(err);
        } else {
          console.log('PRODUCT CREATED');
          createdProduct.save();
        }
      })
    })
  })
}

module.exports = seedProducts;