const localhost = window.location.hostname.includes('localhost');
const qa = window.location.hostname.includes('qa');

const Uri = {
  MAX_ATTACHMENT_SIZE: 5000000,
  api_url: qa ? '<url_qa>' : localhost ? process.env.REACT_APP_BFF_URL : ''
};

export default Uri;
