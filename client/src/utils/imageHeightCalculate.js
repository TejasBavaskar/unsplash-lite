export default function getImageHeight(cardData) {
  const {height, width} =  cardData;
  let defaultHeight = 600;
  let defaultWidth = 375;
  let deviceWidth = window.innerWidth;

  defaultWidth = width / height * defaultHeight;

  if(defaultWidth >= deviceWidth) {
    defaultWidth = deviceWidth;
    defaultHeight = height / width * defaultWidth;
  }
  
  return defaultHeight;
}