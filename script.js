const { StrictMode,Component } = React;
const { createRoot } = ReactDOM;

const reactDomRoot = createRoot(document.getElementById('root'));

function d(props){

}
class Accordion extends Component{
  state = {
    data: [
      {
        id: 'accordion-a',
        handle: '넷플릭스란 무엇인가요?',
        panel: `
          <p>넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.</p>
          <p>저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.</p>
        `,
      },
      {
        id: 'accordion-b',
        handle: '아이들이 넷플릭스를 봐도 좋을까요?',
        panel: `
          <p>멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.</p>
          <p>키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.</p>
        `,
      },
    ],
    firstClick: {
      onClick : false,
    }, 
    secondClick : {
      onClick : false,
    }
  };
// 훅 쓰면 안해도 됨
  constructor(props){
    super(props);

  }
  
  clickEvent = () => {
    const { firstClick,secondClick } = this.state; 

    this.setState({
      firstClick: {
        onClick: !firstClick.onClick? firstClick.onClick = true : firstClick.onClick = false
      },
      secondClick : {
        onClick: false
      }
     
   })
    }

  clickEvent2 = () => {
    const { firstClick,secondClick } = this.state; 

    this.setState({
      secondClick: {
        onClick: !secondClick.onClick? secondClick.onClick = true : secondClick.onClick = false
        
      },
      firstClick : {
        onClick: false
      }
      
    })
    }
  
  render(){
    return (<div data-component='Accordion'>
              <div data-component='AccordionItem'>
                <div data-component='AccordionHandle'>
                  <button onClick={this.clickEvent}>
                    {this.state.data[0].handle}
                    {!this.state.firstClick.onClick? (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      width="25px"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                      />
                    </svg>
                  ) : (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      width="25px"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      />
                    </svg>
                  )}    
                                        
                  </button>
                  {this.state.firstClick.onClick? this.state.data[0].panel : null}                 
                </div>
              </div>
              <div data-component='AccordionItem'>
              <div data-component='AccordionHandle'>
                  <button onClick={this.clickEvent2}>
                    {this.state.data[1].handle}
                    {!this.state.secondClick.onClick? (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      width="25px"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                      />
                    </svg>
                  ) : (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      width="25px"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      />
                    </svg>
                  )}    
                                        
                  </button>
                  {this.state.secondClick.onClick? this.state.data[1].panel : null}                 
                </div>
              </div>
            </div>);
  }
}

class App extends Component{

  render(){

    return (
      <div className="App">
        <h2>자주 묻는 질문</h2>
        <Accordion/>
      </div>
      
    );

  }
}

reactDomRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
