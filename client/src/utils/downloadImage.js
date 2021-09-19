import axios from 'axios';
export default async function downloadImage(imageData) {
  await axios({
    url: imageData?.urls?.full,
    method: 'get',
    responseType: 'blob',
  })
  .then(response => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const anchorLink = document.createElement('a');
    anchorLink.href = url;
    anchorLink.setAttribute('download', 'image.jpg');
    document.body.appendChild(anchorLink);
    anchorLink.click();
  })
}