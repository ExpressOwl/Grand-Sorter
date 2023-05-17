import axios from 'axios';

export default axios.create({
  baseURL: 'https://prices.runescape.wiki/api/v1/osrs/mapping',
  headers: {
    Accept: "application/json"
  },
  params: {
    page: 1,
  }
})