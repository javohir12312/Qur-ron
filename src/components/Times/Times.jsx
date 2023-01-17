import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import style from "./Times.module.scss"
import Clock from 'react-live-clock';
import Loader from "../Loader/Loader"
const Times = () => { 

  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)

  const now = new Date().toLocaleTimeString();
  let [time, setTime] = React.useState(now);
  let count = 0;

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime); 
    count++;
  }

  setInterval(updateTime, 1000);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://islomapi.uz/api/present/day?region=Toshkent")
        setData(res.data.times)
        setLoad(false)
      } catch (error) {
        console.log('xato');
      }
    }

    getData()
  }, [])

  var date = "2017-03-13";
  var time1 = "18:00";

  var timeAndDate = moment(date).startOf(time1);


  return (
    <>
      {load ? <Loader /> : <div className={style.box}>
        <h1>Tashkent</h1>
        <Clock className={style.time} format={'HH:mm:ss'} ticking={true} timezone={'Uz/Pacific'} />
        <ul>
          <li>
            <img src="https://d31nhj1t453igc.cloudfront.net/cloudinary/2022/Apr/08/ATnNhkZ49ip3N3ZizIp3.jpg" alt="" />
            <h2>{data.quyosh}</h2>
            <h5>Bomdod | صلاة الفجر</h5>
          </li>
          <li>
            <img src="https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" />
            <h2>{data.peshin}</h2>
            <h5>Peshin | صلاة وقت الظهيرة</h5>
          </li>
          <li>
            <img src="data:image/jpeg;base64,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" alt="" />
            <h2>{data.asr}</h2>
            <h5>Asr | صلاة مئة عام</h5>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
            <h2>{data.shom_iftor}</h2>
            <h5>Shom | صلاة مساء</h5>
          </li>
          <li>
            <img src="data:image/jpeg;base64,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" alt="" />
            <h2>{data.hufton}</h2>
            <h5>Xufton | صلاة العشاء</h5>
          </li>





        </ul>
      </div>}
    </>
  );
}

export default Times