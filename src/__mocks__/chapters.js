import mock from "../utilities/mock";
import wait from "../utilities/wait";

const chapters = [
  { 
    "id": 1,
    "title": "London Central",
    "image": "assets/images/image-1.png",
    "description": "تعلم الإنجليزية مع هذه الدراما التلفزيونية المسلية",
    "isFavorite":false
  },
  {
    "id": 2,
    "title": "أكمل دورة اللغة الإنجليزية",
    "image": "assets/images/image-2.png",
    "description": "دروس لمستوايات المبتدئ, والمتوسط, و المتقدم",
    "isFavorite":true
  },
  {
    "id": 3,
    "title": "نطق اللغة الإنكليزية",
    "image": "assets/images/image-3.png",
    "description":
      "طور مهاراتك و تحدث بمزيد من الثقة طور مهاراتك و تحدث بمزيد من الثقة  طور مهاراتك و تحدث بمزيد من الثقة ",
      "isFavorite":false
  },
  {
    "id": 4,
    "title": "العالم باللغة الإنكليزية",
    "image": "assets/images/image-4.png",
    "description": "تعلم اللغة الإنكليزية بفضل فيديوهات من The New York Times",
    "isFavorite":false
  },
  {
    "id": 5,
    "title": "أكمل دورة اللغة الإنجليزية",
    "image": "assets/images/image-5.png",
    "description": "تعلم اللغة الإنكليزية بفضل فيديوهات من The New York Times",
    "isFavorite":false
  },
  {
    "id": 6,
    "title": "اللغة الإنجليزية للأعمال التجارية",
    "image": "assets/images/image-6.png",
    "description": "أتقن أساسيات اللغة الخاصة بالعمل اللغة الإنجليزية",
    "isFavorite":true
  },
  {
    "id": 7,
    "title": "The Econimist",
    "image": "assets/images/image-7.png",
    "description": "بفضل صحيفة The Economist تعلم الإنكليزية",
    "isFavorite":false
  },
];

mock.onGet("/api/chapters").reply((config) => {
  try {
    console.log("GET Request: /api/chapters"); 
    return [
      200,
      {
        chapters,
      },
    ];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});
mock.onPut("/api/chapter").reply(async(config) => {
  try {
    const {id} = JSON.parse(config.data);
    console.log("PUT Request: /api/chapters");

    const index = chapters.findIndex(chapter => chapter.id === id);
    chapters[index] = {
      ...chapters[index], "isFavorite": !chapters[index].isFavorite
    };
    
    return [
      204,
      {
        chapters
      },
    ];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});
