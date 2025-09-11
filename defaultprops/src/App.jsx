import './App.css'
import Defaultprops from './component/Defaultprops'
import Wrapper from './component/Wrapper/Wrapper'

function App() {
 

  return (
    <>
      <h1>React JS 19 Tutorial in Hindi #19 Pass JSX with Props | Default props</h1>
      <Defaultprops name = "ABDUL RAFAY" />
      <Defaultprops name = "ALI" />
      <Defaultprops name = "AHMAD" />
      <Defaultprops name = "HARRY"/>
      <Defaultprops  />
      <Defaultprops name = "ROBIN" />
      <Defaultprops  />
      <Defaultprops name = "JACK"/>
      <Wrapper color="white">
        <h1>Hello Everyone</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hello Ali</h1>
      </Wrapper>

    </>
  )
}

export default App
