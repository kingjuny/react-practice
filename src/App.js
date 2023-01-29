
import './App.css';
import Customer from './components/customer';
import { render } from '@testing-library/react';
import { Component } from 'react';

const customers =[
  {
  id : "1",
  image : "http://placeimg.com/64/64/1",
  name : "홍길동",
  birthday : "000525",
  gender : "남자",
  job : "학생",
  },
  {
    id : "2",
    image : "http://placeimg.com/64/64/2",
    name : "이순신",
    birthday : "010525",
    gender : "남자",
    job : "개발자",
    },
    {
      id : "3",
      image : "http://placeimg.com/64/64/3",
      name : "이재용",
      birthday : "000215",
      gender : "남자",
      job : "백수",
      },
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=>{
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }
        
        
      </div>
    );
  }
}

export default App;
