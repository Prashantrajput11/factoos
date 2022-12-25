import SolidCta from "./components/solidCta";
import Icon from "./components/Icon";
import CustomText from "./components/customText";
import Container from "./components/container";
import DropDown from "./components/dropDown";
import CustomInput from "./components/customInput";
import logo from "./asset/logo.png"
import './style.css'
import { useState } from "react";

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const options = [
  {value : "Technology", label :"Technology"},
  {value : "Health", label :"Health"},
  {value : "Science", label :"Science"},
  {value : "Finance", label :"Finance"},
  {value : "Society", label :"Society"},
]


function App() {

  const[show_form, set_show_form] = useState(false)
  return (
    <div className="factsContainer">
      <div className="factsHeader">
 
      <div className="factsHeaderLeftContent">
        <div style={{marginRight: '16px'}}>
        <Icon
          source = {logo}
          height = {68}
          width = {68}
        />
        </div>

        <CustomText
          text = 
          {'TODAY I LEARNED'}


          textColor ={'#ffffff'}
          fontWeight ={'bold'}
          fontSize = {'42px'}
          fontFamily = {'coiny'}
        />
      </div>

        <SolidCta
          onClick = {()=>set_show_form(!show_form)}
          text = {show_form ? 'close' : 'share a fact'}
          type="warning"
          size="small"
          leftIcon = {logo}
        />

      </div>


      {/* <DropDown
        placeholder = "Select..."
        options = {options}
      /> */}

      {
        show_form ? 
          <div className="form-container">
          <div className="input-container"> 
            <CustomInput
              placeholder = 'enter fact..'
            />
          </div>

        <SolidCta
          text = "POST"
          type="primary"
          size="small"
          // leftIcon = {logo}
        />
        </div> :
        null
      }



      {
        initialFacts.map(function(fact){
          return (
            <div style={{marginBottom: '20px'}}>
              <Container
                backgroundColor= '#44403c'
                height= '92px'
                // width = "300px"
                borderRadius = '8px'
              >
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px'}}>
                  <CustomText
                    text = {fact.text}
                    textColor ={'#ffffff'}
                    fontWeight ={'regular'}
                    fontSize = {'20px'}
                    fontFamily = {'sono'}
                  />
                </div>
              </Container>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
