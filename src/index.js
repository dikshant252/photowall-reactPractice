import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';



const posts = [{

			id: "0",
			description: "beautiful landscape",
			imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
					"3919321_1443393332_n.jpg"
		},
		{
			id: "1",
			description: "Aliens???",
			imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
		},
		{
			id: "2",
			description: "On a vacation!",
			imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
		}]

// for REACT 18 and above
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);





// url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), 
// url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), 
// url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), 
// url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg');







// const element = React.createElement('h1',null,"Hello World?");

// const element = React.createElement('ol',null,
//                   React.createElement('li',null,'take out trash'),
//                   React.createElement('li',null,'shovel'),
//                   React.createElement('li',null,'walk the dog')
//                   );



// const tasks = ['take out trash','shovel','walk the dog'];

// const element= React.createElement('ol',null,
//               tasks.map((task,index) => React.createElement('li',{key:index}, task))
//               );


//=============JSX================

// const element = <ol>
//                     <li>{tasks[0]}</li>
//                     <li>{tasks[1]}</li>
//                     <li>{tasks[2]}</li>
//                   </ol>

// const element = <ol>
//     {tasks.map((task)=><li>{task}</li>)}
// </ol>

// const element = <ol>
//     {tasks.map((task,index)=><li key={index}>{task}</li>)}
// </ol>


// const element =
// <div>
// 	<h1>Tasks</h1>
// 	<ol>
// 	    {tasks.map((task,index)=><li key={index}>{task}</li>)}
// 	</ol>
// </div>
// ReactDOM.render(element,document.getElementById('root'));



//<<<<<<<<<<<<<<<<<<<<<  COMPONENTS   >>>>>>>>>>>>>>>>

// class List extends Component{
// 	render(){
// 		return (
// 			<ol>
// 				{tasks.map((task,index) => <li key={index}>{task}</li>)}
// 			</ol>
// 		)
// 	}
// }

// class Title extends Component{
// 	render(){
// 		return(
// 			<h1>Tasks</h1>
// 		)
// 	}
// }

// class Main extends Component{
// 	render()
// 	{
// 		return(
// 			<div>
// 				<Title/>
// 				<List/>
// 				<List/>
// 			</div>
			
// 		)
// 	}
// }

// ReactDOM.render(<Main/> , document.getElementById('root'));



//========  COMPONENTS WITH PROPS ==============


// class List extends Component{
// 	render(){
// 		return (
// 			<ol>
// 				{this.props.tasks.map((task,index) => <li key={index}>{task}</li>)}
// 			</ol>
// 		)
// 	}
// }

// class Title extends Component{
// 	render(){
// 		return(
// 			<h1>{this.props.title}</h1>
// 		)
// 	}
// }

// class Main extends Component{
// 	render()
// 	{
// 		return(
// 			<div>
// 				<Title title={'toDos'}/>
// 				<List tasks={['mow lawn','walk dog']}/>
// 				<List tasks={['hose driveway','finish laundry']}/>
// 			</div>
			
// 		)
// 	}
// }

// for <=REACT 17 
// ReactDOM.render(<Main/> , document.getElementById('root'));