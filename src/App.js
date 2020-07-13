import React from 'react';

function Food ({name,picture}){
  return <div>
          <h2>I Like {name}</h2>
          <img src={picture} />
        </div>
}
const foodLike = [
  {
    id:1,
    name:"sky",
    image:"https://i.pinimg.com/originals/15/92/bc/1592bc16af84ca4e1888476132ea49a0.png"
  },
  {
    id:2,
    name:"mon",
    image:"https://post-phinf.pstatic.net/MjAxNzEyMjBfMTAy/MDAxNTEzNzUxODY3NDg3.yhuQ6AD6EM3Er4MvNmqbJ8GFGbJTO07kWpI7FpBjwwkg.4-YFyjnge1WkeQf_F6rKBw7wXoIiGQxamB0oxKjaDuMg.PNG/20171220_1537051.png?type=w1200"
  },
  {
    id:3,
    name:"orora",
    image:"https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F997A04495A60BAAC14EE36"
  }
];

// component --> HTML을 반환하는 함수
function App() {
  return (
        <div>
          {/* pros */}
          {foodLike.map(dish =>(
            <Food key={dish.id} name ={dish.name} picture={dish.image} />
          ))}
        </div>
        
  );
}

export default App;
