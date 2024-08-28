import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. user박스와 computer박스 만들기
// 2. 가위 바위 보 버튼 만들기
// 3. 클릭한 버튼의 이미지 보이기
// 4. 컴퓨터는 랜덤하게 아이템 선택하기
// 5. 결과를 가지고 승패를 가리기
// 6. 승패 결과에 따라 테두리 및 배경 색상이 변경되기(이기면 Green / 지면 Red)

const choice = {
	rock : {
		name : "Rock",
		img : "https://cdn-icons-png.flaticon.com/512/10163/10163223.png"
	},
	scissors : {
		name : "Scissors",
		img : "https://cdn-icons-png.flaticon.com/512/4975/4975327.png"
	},
	paper : {
		name : "Paper",
		img : "https://cdn-icons-png.flaticon.com/512/2541/2541984.png"
	}
}
function App() {
	const [userSelect, setUserSelect] = useState(null)
	const [computerSelect, setComputerSelect] = useState(null)
	const [result, setResult] = useState("");

	const play = (userChoice) => {
		setUserSelect(choice[userChoice])
		let computerChoice = randomChoice();
		setComputerSelect(computerChoice);
		setResult(judgment(choice[userChoice],computerChoice));
	};

	const randomChoice = () => {
		let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 Array로 만들어주는 함수
		let randomItem = Math.floor(Math.random() * itemArray.length);
		let final = itemArray[randomItem];
		return choice[final];
	}

	const judgment = (user, computer) => {
		if (user.name === computer.name) {
			return "tie";
		} else if(user.name === "Rock") return computer.name === "Scissors"?"win":"lose";
		  else if(user.name === "Scissors") return computer.name === "Paper"?"win":"lose";
		  else if(user.name === "Paper") return computer.name === "Rock"?"win":"lose";
	}
  return (
    <div>
    	<div className="main">
			<Box title="you" item={userSelect} result={result} />
			<Box title="computer" item={computerSelect} result={result} />
		</div>
		<div className='main'>
			<button onClick={() => play("scissors")}>가위</button>
			<button onClick={() => play("rock")}>바위</button>
			<button onClick={() => play("paper")}>보</button>
		</div>
    </div>
  );
}

export default App;
