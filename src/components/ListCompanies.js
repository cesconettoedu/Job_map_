import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { Company } from '../components'

function ListCompanies(props) {

  const [list, setList] = useState([])
  const [stage, setStage] = useState([])
  const [strstage, setStrstage] = useState([])
  const [color, setColor] = useState([])


  //const x = 0   //change the parameter depends how is configurate on Landing Page  props

  // case 0 = AllCompanies
  // case 1 = Offers
  // case 2 = Tech interviews
  // case 3 = Hr Interviews
  // case 4 = resume sent
  const getList = async (stage) => {
    try {
      switch (stage) {
        case 0:
          const all = await axios.get("http://localhost:8080/api/companies/")
          console.log(all.data);
          setList(all.data);
          setStage(0)
          setStrstage('  All Companies')
          setColor('purple')
          break;

        case 1:
          const offers = await axios.get("http://localhost:8080/api/applications/job_offers")
          console.log(offers.data);
          setList(offers.data);
          setStage(1)
          setStrstage('  Job Offers')
          setColor('green')
          break;

        case 2:
          const tech = await axios.get("http://localhost:8080/api/applications/tech_interviews")
          console.log(tech.data);
          setList(tech.data);
          setStage(2)
          setStrstage('  Tech Interviews')
          setColor('blue')
          break;

        case 3:
          const hr = await axios.get("http://localhost:8080/api/applications/hr_interviews")
          console.log(hr.data);
          setList(hr.data);
          setStage(3)
          setStrstage('  HR Interviews')
          setColor('orange')
          break;

        case 4:
          const resumesent = await axios.get("http://localhost:8080/api/applications/resumes")
          console.log(resumesent.data);
          setList(resumesent.data);
          setStage(4)
          setStrstage('  Resumes Sent')
          setColor('red')
          break;

        default:

          break;
      }

    } catch (err) {
      console.error(err.message);
    }
  }


  useEffect(() => {
    getList(props.levelClicked || 0)
  }, [props.levelClicked]);


  const navigate = useNavigate();
  //pass the id 
  const btnSingleCompanie = (id) => {
    console.log(stage);
    if (stage == 0) {
      navigate(`/companies/${id}`)
    } else {
      navigate(`/application/${id}`)
    }
  }

  return (
    <Wrapper>
      <div className={`${color} childa`}>
        <span className="quantity">{list.length}</span>   {strstage}
      </div>
      <div className='container'>
        <div className='childb'>
          Company Name
        </div>
        {/* <div className='childb'> Resume Submission Date base on the request </div> */}
      </div>
      {list.map((info) =>
        <div className='container' key={info.id}>
          <button className={`${color} child `} onClick={() => btnSingleCompanie(info.id)}>
            {info.name} {info.stack}
          </button>
        </div>
      )}
    </Wrapper>
  )
}

export default ListCompanies

const Wrapper = styled.section`
.childa {
  flex-basis: calc(100% - 40px);
  height: 8vw;
  border-radius: 0.5rem;
  background-color: rgb(238, 160, 70);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4% 30% 4% 30%;
  font-size: 2vw;
  white-space:pre;
 }

 .childa .quantity{
  font-size:5vw
 }

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: space-between;
  font-size: 1.5vw;
}

.container .childb {
  background-color: gray;
  flex-basis: calc(50% - 40px);
  height: 3vw;
  border-radius: 0.5rem;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vw;
}

.child {
  flex-basis: calc(50% - 40px);
  height: 2.5vw;
  border-radius: 0.5rem;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5vw;
  font-size: 1.5vw;
}

.purple {
  background-color: purple;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.orange {
  background-color: orange;
}

.red {
  background-color: red;
}

.container .b {
  background-color: rgb(189,183,107);
}

button {
  cursor: pointer;
}
`