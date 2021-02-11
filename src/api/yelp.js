import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer RNn84DMyzj_SzEn1PLr_ffg_AVpJHJD6xgPeX8HI9KZmxaj-rRYeWfYQ5kaKelhOFnqgrAi-ytVUo0_c1sa6fT0QoF6_3IcexeYPULh226TywCMH2bTCIVeL10ciYHYx'
  }
});