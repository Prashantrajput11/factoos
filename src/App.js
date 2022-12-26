import supabase from "./supabase";

import SolidCta from "./components/solidCta";
import Icon from "./components/Icon";
import CustomText from "./components/customText";
import Container from "./components/container";
import DropDown from "./components/dropDown";
import CustomInput from "./components/customInput";
import logo from "./asset/logo.png"
import './style.css'
import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Tag from "./components/tag";

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
  {value : "Technology", label :"random", type: "primary"},
  {value : "Health", label :"Health", type: "info"},
  {value : "Science", label :"Science", type: "warning"},
  {value : "Finance", label :"Finance",type: "danger" },
  {value : "Society", label :"Society", type: "primary"},
]
const tags_color = ['#16a34a', '#eab308', '#f97316']


function App() {

  // Initialise states
  const[show_form, set_show_form] = useState(false)
  const[fact, setFact] = useState([])
  const[is_loading, set_is_loading] = useState(false)
  const[is_error, set_is_error] = useState('')
  const[current_category, set_current_category] = useState('all')


  // fetch data frbom database
  useEffect(()=>{
    async function getfacts(){
      set_is_loading(true)
      // get data from supabase facts list  

      // get all facts from database
      let query = supabase.from('facts').select('*');

      // check if cuurent category is not all
      if(current_category !== 'all'){
        query = query.eq('category', current_category)
      }

      // destructure 
      let { data: facts,  error } = await query
        .order('text', {ascending: true})
        console.log('error',error);
        if(!error) setFact(facts) 
 
        set_is_loading(false)

    }
    // call 
    getfacts()
  }, [current_category])


  function renderFactForm(){
    if(show_form){
      return (
        <CustomInput
          placeholder = 'enter fact..'
          fact = {fact}
          setFact= {setFact}
          showForm = {show_form}
          setShowForm = {set_show_form}
        />
      )

    }
    else{
      return null;
    }

  }


  function renderFactList(){
    return fact.map(function(f){
      console.log('facts', f);
        return (
          <div style={{marginBottom: '20px'}}>
            <Container
              backgroundColor= '#44403c'
              // height= '92px'
              // width = "300px"
              borderRadius = '8px'
            >
              <div 
                style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '0 24px', 
                  // width: '344px'
                }}
              >
                <div style={{width: '100%'}}>
                  <CustomText
                  // f.category === 
                    text = {f.text}
                    textColor ={'#ffffff'}
                    fontWeight ={'regular'}
                    fontSize = {'20px'}
                    fontFamily = {'sono'}
                  />
                </div>

                <Tag
                  text = {f.category}
                  backgroundColor = {
                    f.color
                  }
                  // backgroundColor = {'red'}
                />
              </div>
            </Container>
          </div>
        )
    })
  }


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
          text = {'TODAY I LEARNED'}
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

      {renderFactForm()}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', flexDirection: 'column', height: '600px', alignItems: 'center'}}>

          {
            options.map(option => {
              return (
                <div style={{marginBottom: '50px', alignItems: 'center'}}>
                  <SolidCta
                    onClick = {()=>set_current_category(option.label)}
                    text = {option.label}
                    type= {option.type}
                    size={'medium'}
                  />
                </div>
              )
            })
          }
 
        </div>
      <div style={{display: 'flex', flexDirection: 'column', marginLeft: '24px'}}>

       { is_loading?  <Loader/> : renderFactList()}
        </div>
      </div>
    </div>

  );
}

export default App;
