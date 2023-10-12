import { useState, useRef } from 'react'
import mentionOptions from './../data.json'
import './App.css'

function App() {

  //Reference variable
  const textRef = useRef<HTMLInputElement | null>(null); ;

  //State variables
  const [inputText, setInputText] = useState("")
  const [suggestedMentions, setSuggestedMentions] = useState([] as string[]);
  const [selectedMention, setSelectedMention] = useState("");
  //On text change in input field
  const onTextChange = (e: any) => {
    const text = e.target.value;
    setInputText(text)

    // Detect mentions starting with @ and return an array containing them
    const mentions = text.match(/@(\w+)/g);
   
    if (mentions) {
      //Getting the substring from the text excluding "@"
      const mentionUserInput = mentions.map((mention: any) => mention.substring(1));

      //Filter out the options to show in the dropdown based on character match
      const filteredMentions = mentionOptions.filter((mention) =>
        mention.first_name.toLowerCase().startsWith(mentionUserInput[mentionUserInput.length - 1].toLowerCase())
      );

      //Getting the list of all suggested names in array format
      const filterMentionNames = filteredMentions.map(mention => mention.first_name + " " + mention.last_name)
      console.log("filterMentionNames",filterMentionNames)

      //If selected mention already in filterMention names and it is the only element in it do not show it in mentions (edge case)
      if(filterMentionNames.includes(selectedMention) && filterMentionNames.length===1){
        setSuggestedMentions([]);
      }
      else{
        setSuggestedMentions(filterMentionNames);
      }
      
    } else {
      setSuggestedMentions([]);
    }
    // Clear the selected mention when the user types another '@'
   
  }

  //On mention select replace text with mentioned text
  const handleMentionSelect = (mention: string) => {
    const mentionText = `@${mention}`;
    setInputText((prevInputText) => {
      // Replace only the last mentioned user
      return prevInputText.replace(/@(\w+)(\s*)$/, mentionText);
    });
    setSuggestedMentions([]);
    setSelectedMention(mention);
    textRef.current?.focus();
  };

  //JSX
  return (
    <>
      <div className='container'>
        <input ref={textRef} className='textBox' placeholder='Mention' value={inputText} onChange={onTextChange} />
        <div>
          {(suggestedMentions.length > 0) && (
            <ul className='suggestionBox'>
              {suggestedMentions.map((mention, index) => (
                <li key={index} className='suggestion' onClick={() => handleMentionSelect(mention)}>
                  {mention}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default App
