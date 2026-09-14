// Task-7

//Task-1

let api1='https://fakestoreapi.com/products';

fetch(api1).then((data)=>{

    return data.json()

})

.then((jsData)=>{
    
  jsData.forEach((c,i,t) => {
    console.log(c.title);
    console.log(c.price);
    console.log(c.category)
    
  })

  let arr=jsData.map((c,i,t)=>{
    
      return c.title
      
    
   
    

  })
     console.log(arr)
   
    let arr1=jsData.map((c,i,t)=>{
    
      return c.price
      
    
   
    

  })
     console.log(arr1)

     let fil=jsData.filter((c,i,t)=>{
    
      return c.price>100
      
    
   
    

  }) 

  console.log(fil);



    let find=jsData.filter((c,i,t)=>{
    
      return c.category==="electronics";
      
    
   
    

  }) 

  console.log(find);

  let totalprice=jsData.reduce((acc,c,i,t)=>{
  
      return acc+c.price;

  },0)


  console.log(totalprice);


  let sort1=jsData.sort((a,b)=>{

    return b.price-a.price;

  })

    console.log(sort1);




})

.catch((error)=>{

    console.log(error.message);
    
})

.finally(()=>{
    console.log("api run successfully")
})


//The Output is 

/*
Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
109.95
men's clothing
Mens Casual Premium Slim Fit T-Shirts 
22.99
men's clothing
Mens Cotton Jacket
55.99
men's clothing
Mens Casual Slim Fit
22.3
men's clothing
John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
695
jewelery
Solid Gold Petite Micropave 
168
jewelery
White Gold Plated Princess
9.99
jewelery
Pierced Owl Rose Gold Plated Stainless Steel Double
10.99
jewelery
WD 2TB Elements Portable External Hard Drive - USB 3.0 
64
electronics
SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
109
electronics
Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
109
electronics
WD 4TB Gaming Drive Portable External Hard Drive Compatible with Playstation 4
114
electronics
Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
599
electronics
Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED
999.99
electronics
BIYLACRESSE Women's 3-in-1 Snowboard Jacket Winter Coats
29.95
women's clothing
Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
39.99
women's clothing
Rain Jacket Women Windbreaker Striped Climb Raincoats
39.99
women's clothing
MBJ Women's Solid Short Sleeve Boat Neck V 
9.85
women's clothing
Opna Women's Short Sleeve Moisture
7.95
women's clothing
DANVOUY Womens T Shirt Casual Cotton Short
12.99
women's clothing

[
  'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  'Mens Casual Premium Slim Fit T-Shirts ',
  'Mens Cotton Jacket',
  'Mens Casual Slim Fit',
  "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  'Solid Gold Petite Micropave ',
  'White Gold Plated Princess',
  'Pierced Owl Rose Gold Plated Stainless Steel Double',
  'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
  'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
  'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
  'WD 4TB Gaming Drive Portable External Hard Drive Compatible with Playstation 4',
  'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
  'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
  "BIYLACRESSE Women's 3-in-1 Snowboard Jacket Winter Coats",
  "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  'Rain Jacket Women Windbreaker Striped Climb Raincoats',
  "MBJ Women's Solid Short Sleeve Boat Neck V ",
  "Opna Women's Short Sleeve Moisture",
  'DANVOUY Womens T Shirt Casual Cotton Short'
]

[
  109.95,  22.99,  55.99,   22.3,
     695,    168,   9.99,  10.99,
      64,    109,    109,    114,
     599, 999.99,  29.95,  39.99,
   39.99,   9.85,   7.95,  12.99
]

[
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: '[https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg](https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)',
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: '[https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg](https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg)',
    rating: { rate: 4.6, count: 400 }
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: '[https://fakestoreapi.com/img/61sbMiAs0GL._AC_UL640_QL65_ML3_.jpg](https://fakestoreapi.com/img/61sbMiAs0GL._AC_UL640_QL65_ML3_.jpg)',
    rating: { rate: 3.9, count: 70 }
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive. Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; performance may vary depending upon drive capacity, host device, OS and application.)',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg](https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg)',
    rating: { rate: 2.9, count: 470 }
  },
  {
    id: 11,
    title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg](https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg)',
    rating: { rate: 4.8, count: 319 }
  },
  {
    id: 12,
    title: 'WD 4TB Gaming Drive Portable External Hard Drive Compatible with Playstation 4',
    price: 114,
    description: 'Expand your PS4 gaming experience, Play anywhere Fast and easy setup Sleek design with high capacity, 3-year manufacturer\'s limited warranty',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/61mtL6utBRe._AC_LX679_.jpg](https://fakestoreapi.com/img/61mtL6utBRe._AC_LX679_.jpg)',
    rating: { rate: 4.8, count: 400 }
  },
  {
    id: 13,
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
    description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg](https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg)',
    rating: { rate: 2.9, count: 250 }
  },
  {
    id: 14,
    title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
    price: 999.99,
    description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides incredibly realistic and accurate color and contrast 144Hz HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg](https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg)',
    rating: { rate: 2.2, count: 140 }
  }
]

[
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 64,
    description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg](https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg)',
    rating: { rate: 3.3, count: 203 }
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive. Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; performance may vary depending upon drive capacity, host device, OS and application.)',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg](https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg)',
    rating: { rate: 2.9, count: 470 }
  },
  {
    id: 11,
    title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg](https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg)',
    rating: { rate: 4.8, count: 319 }
  },
  {
    id: 12,
    title: 'WD 4TB Gaming Drive Portable External Hard Drive Compatible with Playstation 4',
    price: 114,
    description: 'Expand your PS4 gaming experience, Play anywhere Fast and easy setup Sleek design with high capacity, 3-year manufacturer\'s limited warranty',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/61mtL6utBRe._AC_LX679_.jpg](https://fakestoreapi.com/img/61mtL6utBRe._AC_LX679_.jpg)',
    rating: { rate: 4.8, count: 400 }
  },
  {
    id: 13,
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
    description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg](https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg)',
    rating: { rate: 2.9, count: 250 }
  },
  {
    id: 14,
    title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
    price: 999.99,
    description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides incredibly realistic and accurate color and contrast 144Hz HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg](https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg)',
    rating: { rate: 2.2, count: 140 }
  }
]

3241.72

[
  {
    id: 14,
    title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
    price: 999.99,
    description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides incredibly realistic and accurate color and contrast 144Hz HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg](https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg)',
    rating: { rate: 2.2, count: 140 }
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: '[https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg](https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg)',
    rating: { rate: 4.6, count: 400 }
  },
  {
    id: 13,
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
    description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg](https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg)',
    rating: { rate: 2.9, count: 250 }
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: '[https://fakestoreapi.com/img/61sbMiAs0GL._AC_UL640_QL65_ML3_.jpg](https://fakestoreapi.com/img/61sbMiAs0GL._AC_UL640_QL65_ML3_.jpg)',
    rating: { rate: 3.9, count: 70 }
  },
  {
    id: 12,
    title: 'WD 4TB Gaming Drive Portable External Hard Drive Compatible with Playstation 4',
    price: 114,
    description: 'Expand your PS4 gaming experience, Play anywhere Fast and easy setup Sleek design with high capacity, 3-year manufacturer\'s limited warranty',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/61mtL6utBRe._AC_LX679_.jpg](https://fakestoreapi.com/img/61mtL6utBRe._AC_LX679_.jpg)',
    rating: { rate: 4.8, count: 400 }
  },
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: '[https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg](https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)',
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive. Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; performance may vary depending upon drive capacity, host device, OS and application.)',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg](https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg)',
    rating: { rate: 2.9, count: 470 }
  },
  {
    id: 11,
    title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg](https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg)',
    rating: { rate: 4.8, count: 319 }
  },
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 64,
    description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
    category: 'electronics',
    image: '[https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg](https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg)',
    rating: { rate: 3.3, count: 203 }
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: '[https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg](https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg)',
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 39.99,
    description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
    category: "women's clothing",
    image: '[https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg](https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg)',
    rating: { rate: 2.9, count: 340 }
  },
  {
    id: 17,
    title: 'Rain Jacket Women Windbreaker Striped Climb Raincoats',
    price: 39.99,
    description: 'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstrings waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.',
    category: "women's clothing",
    image: '[https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg](https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg)',
    rating: { rate: 3.8, count: 679 }
  },
  {
    id: 15,
    title: "BIYLACRESSE Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 29.95,
    description: 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
    category: "women's clothing",
    image: '[https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg](https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg)',
    rating: { rate: 2.6, count: 235 }
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.99,
    description: 'Slim-fit style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image: '[https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg](https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg)',
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 22.3,
    description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: '[https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg](https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg)',
    rating: { rate: 2.1, count: 430 }
  },
  {
    id: 20,
    title: 'DANVOUY Womens T Shirt Casual Cotton Short',
    price: 12.99,
    description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch. Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
    category: "women's clothing",
    image: '[https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg](https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg)',
    rating: { rate: 3.6, count: 145 }
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category: 'jewelery',
    image: '[https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg](https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg)',
    rating: { rate: 1.9, count: 100 }
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: 'jewelery',
    image: '[https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg](https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg)',
    rating: { rate: 3, count: 400 }
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
    category: "women's clothing",
    image: '[https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg](https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg)',
    rating: { rate: 4.7, count: 130 }
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Lightweight, roomy and highly breathable with moisture wicking fabric which helps keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
    category: "women's clothing",
    image: '[https://fakestoreapi.com/img/51eg5UqWCA1._AC_UX679_.jpg](https://fakestoreapi.com/img/51eg5UqWCA1._AC_UX679_.jpg)',
    rating: { rate: 4.5, count: 146 }
  }
]

api run successfully
*/

//Task 2 — Product Category Dashboard

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    const totalProducts = products.length;

    const electronics = products.filter(p => p.category === 'electronics').length;
    const jewelery = products.filter(p => p.category === 'jewelery').length;
    const mensClothing = products.filter(p => p.category === "men's clothing").length;
    const womensClothing = products.filter(p => p.category === "women's clothing").length;

    const prices = products.map(p => p.price);

    const sortedPrices = prices.sort((a, b) => a - b);
    const lowestPrice = sortedPrices[0];
    const highestPrice = sortedPrices[sortedPrices.length - 1];

    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    const averagePrice = totalPrice / totalProducts;

    console.log(`===== PRODUCT DASHBOARD =====

Total Products: ${totalProducts}

Electronics: ${electronics}
Jewelery: ${jewelery}
Men's Clothing: ${mensClothing}
Women's Clothing: ${womensClothing}

Highest Price: $${highestPrice.toFixed(2)}
Lowest Price: $${lowestPrice.toFixed(2)}
Average Price: $${averagePrice.toFixed(2)}`);
  })
  .catch(err => console.error(err));


  ///The Output is
  /*
===== PRODUCT DASHBOARD =====

Total Products: 20

Electronics: 6
Jewelery: 4
Men's Clothing: 4
Women's Clothing: 6

Highest Price: $999.99
Lowest Price: $7.95
Average Price: $162.09
*/


  //Task 3 — User & Post API

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    users.forEach(user => console.log(user.name));

    users.forEach(user => console.log(`${user.name} - ${user.email}`));

    const user5 = users.find(user => user.id === 5);
    console.log(user5);

    const cityUsers = users.filter(user => user.address.city === 'Gwenborough');
    console.log(cityUsers);
  });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    const user1Posts = posts.filter(post => post.userId === 1);
    console.log(user1Posts);

    console.log(user1Posts.length);

    const longTitlePost = posts.find(post => post.title.length > 50);
    console.log(longTitlePost);
  })

  //The output is 
     /*
Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
Chelsey Dietrich
Mrs. Dennis Schulist
Kurtis Weissnat
Nicholas Runolfsdottir V
Glenna Reichert
Clementina DuBuque

Leanne Graham - Sincere@april.biz
Ervin Howell - Shanna@melissa.tv
Clementine Bauch - Nathan@yesenia.net
Patricia Lebsack - Julianne.OConner@kory.org
Chelsey Dietrich - Lucio_Hettinger@annie.ca
Mrs. Dennis Schulist - Karley_Dach@jasper.info
Kurtis Weissnat - Telly.Hoeger@billy.biz
Nicholas Runolfsdottir V - Sherwood@rosamond.me
Glenna Reichert - Chaim_Dermott@dana.io
Clementina DuBuque - Rey.Padberg@karina.biz

{
  id: 5,
  name: 'Chelsey Dietrich',
  username: 'Kamren',
  email: 'Lucio_Hettinger@annie.ca',
  address: {
    street: 'Skiles Walks',
    suite: 'Suite 351',
    city: 'Roscoeview',
    zipcode: '33263',
    geo: { lat: '-31.8129', lng: '62.5342' }
  },
  phone: '(254)954-1289',
  website: 'demarco.info',
  company: {
    name: 'Keebler LLC',
    catchPhrase: 'User-centric fault-tolerant solution',
    bs: 'revolutionize end-to-end systems'
  }
}

[
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }
]

[
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligeni aut ad\nvoluptatem doloribus vel accusantium quis pariatu\nmolestiae porro eius odio et labore et velit aut'
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos quam expedita',
    body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut'
  },
  {
    userId: 1,
    id: 7,
    title: 'magnam facilere autem',
    body: 'dolores vel ut aut ie reiciendis\nampersand ipsa reiciendis distinctio ducimus\nipsam repudiandae'
  },
  {
    userId: 1,
    id: 8,
    title: 'dolorem dolore est ipsam',
    body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut'
  },
  {
    userId: 1,
    id: 9,
    title: 'nesciunt iure omnis reprehendi tempora et accusantium',
    body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut ut\nassumenda voluptatibus quia ut t'
  },
  {
    userId: 1,
    id: 10,
    title: 'optio molestias id quia eum',
    body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
  }
]

10

{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}
*/

// Task 4 — API + Search

function filterProducts() {
  const userCategory = prompt("Enter product category:");
  const maxPrice = Number(prompt("Enter maximum price:"));

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
      const filteredProducts = products.filter(product => 
        product.category.toLowerCase() === userCategory.toLowerCase() && product.price <= maxPrice
      );

      console.log(filteredProducts);
    })
    .catch(err => console.error(err));
}

filterProducts();

//The Output is

/*
[
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 }
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 }
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 }
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive Portable External Hard Drive Compatible with Playstation 4",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy setup...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL6utBRe._AC_LX679_.jpg",
    rating: { rate: 4.8, count: 400 }
  },
  {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    price: 499.99,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 }
  }
]
*/


// Task 6 — FakeStore Product Report


fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    console.log('========== PRODUCT REPORT ==========\n');

    console.log(`Total Products: ${products.length}\n`);

    console.log('Product Names:');
    products.forEach(p => console.log(`- ${p.title}`));

    const productNames = products.map(p => p.title);

    const expensiveProducts = products.filter(p => p.price > 100);
    console.log('\nProducts Above $100:');
    expensiveProducts.forEach(p => console.log(`- ${p.title} ($${p.price})`));

    const electronics = products.find(p => p.category === 'electronics');
    console.log('\nElectronics Product:');
    console.log(`- ${electronics.title} ($${electronics.price})`);

    const totalValue = products.reduce((sum, p) => sum + p.price, 0);
    console.log(`\nTotal Product Value:\n$${totalValue.toFixed(2)}`);

    const hasAbove500 = products.some(p => p.price > 500);
    console.log(`\nAny Product Above $500:\n${hasAbove500}`);

    const allAbove1 = products.every(p => p.price > 1);
    console.log(`\nAll Products Above $1:\n${allAbove1}`);

    const sortedProducts = products.sort((a, b) => b.price - a.price);
    console.log('\nHighest → Lowest:');
    sortedProducts.forEach(p => console.log(`- $${p.price} : ${p.title}`));
  })
  .catch(err => console.error('Error fetching data:', err))
  .finally(() => console.log('\nReport completed.'));

  //The Output is
  /*
========== PRODUCT REPORT ==========

Total Products: 20

Product Names:
- Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
- Mens Casual Premium Slim Fit T-Shirts 
- Mens Cotton Jacket
- Mens Casual Slim Fit
- John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
- Solid Gold Petite Micropave 
- White Gold Plated Princess
- Pierced Owl Rose Gold Plated Stainless Steel Double
- WD 2TB Elements Portable External Hard Drive - USB 3.0 
- SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
- Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
- WD 4TB Gaming Drive Portable External Hard Drive Compatible with Playstation 4
- Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
- Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED
- BIYLACRESSE Women's 3-in-1 Snowboard Jacket Winter Coats
- Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
- Rain Jacket Women Windbreaker Striped Climb Raincoats
- MBJ Women's Solid Short Sleeve Boat Neck V 
- Opna Women's Short Sleeve Moisture
- DANVOUY Womens T Shirt Casual Cotton Short

Products Above $100:
- Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops ($109.95)
- SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s ($109)
- Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5 ($109)
- WD 4TB Gaming Drive Portable External Hard Drive Compatible with Playstation 4 ($114)
- Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin ($599)
- Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ($999.99)
- John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet ($695)
- Solid Gold Petite Micropave  ($168)

Electronics Product:
- WD 2TB Elements Portable External Hard Drive - USB 3.0  ($64)

Total Product Value:
$3241.72

Any Product Above $500:
true

All Products Above $1:
true

Highest → Lowest:
- $999.99 : Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED
- $695 : John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
- $599 : Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
- $168 : Solid Gold Petite Micropave 
- $114 : WD 4TB Gaming Drive Portable External Hard Drive Compatible with Playstation 4
- $109.95 : Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
- $109 : SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
- $109 : Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
- $64 : WD 2TB Elements Portable External Hard Drive - USB 3.0 
- $55.99 : Mens Cotton Jacket
- $39.99 : Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
- $39.99 : Rain Jacket Women Windbreaker Striped Climb Raincoats
- $29.95 : BIYLACRESSE Women's 3-in-1 Snowboard Jacket Winter Coats
- $22.3 : Mens Casual Slim Fit
- $22.99 : Mens Casual Premium Slim Fit T-Shirts 
- $12.99 : DANVOUY Womens T Shirt Casual Cotton Short
- $10.99 : Pierced Owl Rose Gold Plated Stainless Steel Double
- $9.99 : White Gold Plated Princess
- $9.85 : MBJ Women's Solid Short Sleeve Boat Neck V 
- $7.95 : Opna Women's Short Sleeve Moisture

Report completed.
*/