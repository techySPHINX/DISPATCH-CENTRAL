export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Players",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Sujoy Mahan",
    email: "mahan45@gmail.com",
    grade: "4.000",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Sandeep Howaldar",
    email: "indiawala@gmail.com",
    grade: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Harkirat Singh",
    email: "singh_paji@gmail.com",
    grade: "3.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Suhana Chada",
    email: "chada@gmail.com",
    grade: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Johnson Auguste",
    email: "auguste_beda@gmail.com",
    grade: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Vikram Rathore",
    email: "senior_rathore@gmail.com",
    grade: "4.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Ama Mallick",
    email: "mallick@gmail.com",
    grade: "3.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Singh",
    firstName: "Raj",
    email: "raj@@gmail.com",
    phone: "91 1234567890",
    createdAt: "2023-01-01T00:00:00Z",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Kapoor",
    "firstname": "Priya",
    "email": "priya.kapoor@example.com",
    "phone": "+91 9876543210",
    "createdAt": "2023-02-02T00:00:00Z",
    "verified": false,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Desai",
    "firstname": "Rahul",
    "email": "rahul.desai@example.com",
    "phone": "+91 8901234567",
    "createdAt": "2023-03-03T00:00:00Z",
    "verified": true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Desai",
    "firstname": "Rahul",
    "email": "rahul.desai@example.com",
    "phone": "+91 8901234567",
    "createdAt": "2023-03-03T00:00:00Z",
    "verified": true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Malhotra",
    "firstname": "Vikas",
    "email": "vikas.malhotra@example.com",
    "phone": "+91 2109876543",
    "createdAt": "2023",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Joshi",
    "firstname": "Priyanka",
    "email": "priyanka.joshi@example.com",
    "phone": "+91 3210987654",
    "createdAt": "2023-08-08T00:00:00Z",
    "verified": false,
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Joshi",
    "firstname": "Priyanka",
    "email": "priyanka.joshi@example.com",
    "phone": "+91 3210987654",
    "createdAt": "2023-08-08T00:00:00Z",
    "verified": false,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Sharma",
    "firstname": "Aditi",
    "email": "aditi.sharma@example.com",
    "phone": "+91 5432109876",
    "createdAt": "2023-06-06T00:00:00Z",
    "verified": false,
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Sharma",
    "firstname": "Aditi",
    "email": "aditi.sharma@example.com",
    "phone": "+91 5432109876",
    "createdAt": "2023-06-06T00:00:00Z",
    "verified": false,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Sharma",
    "firstname": "Aditi",
    "email": "aditi.sharma@example.com",
    "phone": "+91 5432109876",
    "createdAt": "2023-06-06T00:00:00Z",
    "verified": false,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Desai",
    "firstname": "Rahul",
    "email": "rahul.desai@example.com",
    "phone": "+91 8901234567",
    "createdAt": "2023-03-03T00:00:00Z",
    "verified": true,
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Desai",
    "firstname": "Rahul",
    "email": "rahul.desai@example.com",
    "phone": "+91 8901234567",
    "createdAt": "2023-03-03T00:00:00Z",
    "verified": true,
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastname": "Mehta",
    "firstname": "Anjali",
    "email": "anjali.mehta@example.com",
    "phone": "+91 7654321098",
    "createdAt": "2023-04-04T00:00:00Z",
    "verified": false,
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "lastname": "Mehta",
    "firstname": "Anjali",
    "email": "anjali.mehta@example.com",
    "phone": "+91 7654321098",
    "createdAt": "2023-04-04T00:00:00Z",
    "verified": false,
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    "title": "Ballistic Shield",
    "color": "Black",
    "producer": "ACME Security Products",
    "createdAt": "2023-01-01T00:00:00Z",
    "inStock": "Yes"
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",

      "title": "Taser X26",
      "color": "Yellow",
      "producer": "Axon",
      "createdAt": "2023-02-02T00:00:00Z",
      "inStock": "Low"
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    "title": "Handcuffs",
    "color": "Silver",
    "producer": "Smith & Wesson",
    "createdAt": "2023-03-03T00:00:00Z",
    "inStock": "Yes"
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    "title": "Body Armor Vest",
    "color": "Olive Green",
    "producer": "Point Blank Body Armor",
    "createdAt": "2023-05-05T00:00:00Z",
    "inStock": "Yes"
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    "title": "Baton",
    "color": "Black",
    "producer": "ASP Baton",
    "createdAt": "2023-07-07T00:00:00Z",
    "inStock": "Low"
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    "title": "Drone",
    "color": "Black",
    "producer": "DJI",
    "createdAt": "2023-08-08T00:00:00Z",
    "inStock": "Yes"
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    "title": "Stun Gun",
    "color": "Black",
    "producer": "Taser International",
    "createdAt": "2023-09-09T00:00:00Z",
    "inStock": "Out of Stock"
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    "title": "Stun Gun",
    "color": "Black",
    "producer": "Taser International",
    "createdAt": "2023-09-09T00:00:00Z",
    "inStock": "Out of Stock"
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    "title": "Stun Gun",
    "color": "Black",
    "producer": "Taser International",
    "createdAt": "2023-09-09T00:00:00Z",
    "inStock": "Out of Stock"
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    "title": "Tear Gas Launcher",
    "color": "Black",
    "producer": "Combined Tactical Systems",
    "createdAt": "2023-10-10T00:00:00Z",
    "inStock": "Yes"
  },
];



export const singleUser = {
  id: 1,
  title: "Abhijeet Saxena",
  img: "https://images.pexels.com/photos/4891762/pexels-photo-4891762.jpeg",
  info: {
    username: "Jabhi99",
    fullname: "Abhijeet Saxena",
    email: "abhi@gmail.com",
    phone: "9546790432",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "Presence", color: "#82ca9d" },
      { name: "moves", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        Presence: 1000,
        moves: 2400,
      },
      {
        name: "Mon",
        Presence: 1200,
        moves: 1398,
      },
      {
        name: "Tue",
        Presence: 1300,
        moves: 3800,
      },
      {
        name: "Wed",
        Presence: 780,
        moves: 3908,
      },
      {
        name: "Thu",
        Presence: 890,
        moves: 4800,
      },
      {
        name: "Fri",
        Presence: 390,
        moves: 3800,
      },
      {
        name: "Sat",
        Presence: 490,
        moves: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Abhijeet PLayed well for two gunshots.",
      time: "3 day ago",
    },
    {
      text: "Abhijeet Played in mobile but that was awesome.",
      time: "1 week ago",
    },
    {
      text: "Abhi played well in counters-strike",
      time: "2 weeks ago",
    },
    {
      text: "Abhijeet spell was outgoing with crime records and their locations.",
      time: "1 month ago",
    },
    {
      text: "Abhi played in mountain arena with striking headshots.",
      time: "1 month ago",
    },
    {
      text: "Abhi had fun with encounters.",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
